import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

function getExpectedSecret() {
  return process.env.SANITY_WEBHOOK_SECRET ?? "";
}

async function handleRevalidate(request: NextRequest) {
  const payload = (await request.clone().json().catch(() => null)) as
    | { secret?: string; slug?: string; noticeSlug?: string }
    | null;

  const expectedSecret = getExpectedSecret();
  const receivedSecret =
    request.nextUrl.searchParams.get("secret") ??
    request.headers.get("x-sanity-secret") ??
    request.headers.get("x-webhook-secret") ??
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ??
    payload?.secret ??
    "";

  if (expectedSecret && receivedSecret !== expectedSecret) {
    return NextResponse.json({ revalidated: false, message: "Invalid secret" }, { status: 401 });
  }

  const slug = payload?.slug ?? payload?.noticeSlug ?? request.nextUrl.searchParams.get("slug") ?? "";

  revalidatePath("/notices");
  revalidatePath("/events");
  revalidatePath("/gallery");

  if (slug) {
    revalidatePath(`/notices/${slug}`);
  }

  return NextResponse.json({
    revalidated: true,
    paths: ["/notices", "/events", "/gallery", slug ? `/notices/${slug}` : null].filter(Boolean),
    timestamp: Date.now(),
  });
}

export async function POST(request: NextRequest) {
  return handleRevalidate(request);
}

export async function GET(request: NextRequest) {
  return handleRevalidate(request);
}
