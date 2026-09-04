"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsBellFill } from "react-icons/bs";
import { notices } from "@/lib/site-data";

const latestNotices = [...notices]
  .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
  .slice(0, 5);

export function LatestNoticeStrip() {
  if (latestNotices.length === 0) {
    return null;
  }

  const tickerItems = [...latestNotices, ...latestNotices];

  return (
    <section className="border-b border-school-border bg-school-ink text-white">
      <div className="site-container flex items-center gap-3 py-2">
        <div className="flex shrink-0 items-center gap-2 rounded-full bg-[rgba(176,16,48,0.14)] px-3 py-1.5 text-school-red">
          <BsBellFill className="text-sm" aria-hidden="true" />
          <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-white sm:text-[0.76rem]">
            Latest Notice
          </span>
        </div>

        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="notice-ticker-track flex w-max items-center gap-4 pr-4">
            {tickerItems.map((notice, index) => (
              <Link
                key={`${notice.slug}-${index}`}
                href={`/notices/${notice.slug}`}
                className="group inline-flex min-w-max items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                aria-label={`Open notice: ${notice.title}`}
              >
                <span className="whitespace-nowrap">{notice.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/notices"
          className="hidden shrink-0 rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:inline-flex"
        >
          All notices
        </Link>
      </div>
    </section>
  );
}
