import Link from "next/link";
import { notFound } from "next/navigation";
import { BsCalendar2 } from "react-icons/bs";
import { getNoticeBySlug, getNotices } from "@/sanity/lib/cms";
import { formatDate } from "@/lib/format";

const badgeClasses: Record<string, string> = {
  urgent: "bg-red-600 text-white",
  high: "bg-amber-400 text-black",
  medium: "bg-sky-500 text-white",
  low: "bg-emerald-500 text-white",
};

export async function generateStaticParams() {
  const notices = await getNotices();
  return notices.map((notice) => ({ slug: notice.slug }));
}

export default async function NoticeDetailPage({ params }: { params: { slug: string } }) {
  const notice = await getNoticeBySlug(params.slug);

  if (!notice) {
    notFound();
  }

  return (
    <div className="site-container py-16">
      <div className="mx-auto max-w-4xl">
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${badgeClasses[notice.priority]}`}>
          {notice.priority}
        </span>
        <h1 className="mt-4 font-heading text-4xl font-extrabold text-school-ink">{notice.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-school-muted">
          <span className="inline-flex items-center gap-2">
            <BsCalendar2 />
            {formatDate(notice.publishDate)}
          </span>
          <span className="rounded-full bg-[rgba(176,16,48,0.08)] px-3 py-1 font-semibold text-school-red">
            {notice.targetAudience}
          </span>
        </div>
      </div>

      <div className="detail-card mx-auto mt-10 max-w-4xl">
        <div className="p-6 lg:p-8">
          <p>{notice.content}</p>
          {notice.expiryDate ? <p className="mt-4 text-sm text-school-muted">Expires: {formatDate(notice.expiryDate)}</p> : null}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-4xl">
        <Link href="/notices" className="inline-flex rounded-xl border border-school-border bg-white px-4 py-2.5 text-sm font-bold text-school-ink">
          Back to Notices
        </Link>
      </div>
    </div>
  );
}