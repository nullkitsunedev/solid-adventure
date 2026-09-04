import Link from "next/link";
import { BsCalendar2 } from "react-icons/bs";
import { getNotices } from "@/sanity/lib/cms";
import { formatDate, truncateWords } from "@/lib/format";

export const dynamic = "force-dynamic";

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
