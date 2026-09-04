import Image from "next/image";
import { BsCalendar2, BsClock, BsGeoAlt } from "react-icons/bs";
import { getEvents, resolveImageSource } from "@/sanity/lib/cms";
import { formatDate, formatTime, truncateWords } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="site-container py-16">
      <div className="text-center">
        <span className="eyebrow">Events</span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-school-ink">Upcoming Events</h1>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {events.map((event) => {
          const imageSrc = resolveImageSource(event.image);

          return (
            <article key={event.slug} className="list-card h-full overflow-hidden">
              {imageSrc ? (
                <Image src={imageSrc} alt={event.title} width={1200} height={800} className="h-52 w-full object-cover" />
              ) : null}
              <div className="p-6">
                <span className="inline-flex rounded-full bg-school-red px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  {event.eventType}
                </span>
                <h2 className="mt-4 font-heading text-2xl font-bold text-school-ink">{event.title}</h2>
                <p className="mt-3">{truncateWords(event.description, 30)}</p>
                <div className="mt-4 space-y-2 text-sm text-school-muted">
                  <p className="flex items-center gap-2">
                    <BsCalendar2 />
                    {formatDate(event.startDate)}
                  </p>
                  <p className="flex items-center gap-2">
                    <BsClock />
                    {formatTime(event.startDate)} - {formatTime(event.endDate)}
                  </p>
                  {event.location ? (
                    <p className="flex items-center gap-2">
                      <BsGeoAlt />
                      {event.location}
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
