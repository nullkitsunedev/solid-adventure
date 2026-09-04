import Link from "next/link";
import { BsCalendar2 } from "react-icons/bs";
import { getNotices } from "@/sanity/lib/cms";
import { formatDate, truncateWords } from "@/lib/format";

export const dynamic = "force-dynamic";

const badgeClasses: Record<string, string> = {
  urgent: "bg-red-600 text-white",
  high: "bg-amber-400 text-black",
  medium: "bg-sky-500 text-white",
  low: "bg-emerald-500 text-white",
};

export default async function NoticesPage() {
  const notices = await getNotices();

  return (
    <div className="site-container py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-heading text-4xl font-extrabold text-school-ink">Notices & Announcements</h1>
      </div>

      <div className="mx-auto mt-10 max-w-4xl space-y-4">
        {notices.map((notice) => (
          <article key={notice.slug} className="list-card p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h2 className="font-heading text-2xl font-bold text-school-ink">{notice.title}</h2>
                <p className="mt-3">{truncateWords(notice.content, 50)}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-school-muted">
                  <span className="inline-flex items-center gap-2">
                    <BsCalendar2 />
                    {formatDate(notice.publishDate)}
                  </span>
                </div>
              </div>
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${badgeClasses[notice.priority]}`}>
                {notice.priority}
              </span>
            </div>
            <div className="mt-4">
              <Link href={`/notices/${notice.slug}`} className="inline-flex rounded-xl bg-school-red px-4 py-2.5 text-sm font-bold text-white">
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
