import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  _type?: string;
};

function getSecret() {
  return process.env.SANITY_REVALIDATE_SECRET ?? process.env.SANITY_WEBHOOK_SECRET ?? "";
}

export async function POST(request: NextRequest) {
  const secret = getSecret();

  if (!secret) {
    return NextResponse.json({ revalidated: false, message: "Missing webhook secret" }, { status: 500 });
  }

  const { isValidSignature, body } = await parseBody<WebhookPayload>(request, secret, true);

  if (!isValidSignature) {
    return NextResponse.json({ revalidated: false, message: "Invalid signature" }, { status: 401 });
  }

  revalidatePath("/notices");
  revalidatePath("/events");
  revalidatePath("/gallery");

  return NextResponse.json({
    revalidated: true,
    type: body?._type ?? null,
    timestamp: Date.now(),
  });
}
