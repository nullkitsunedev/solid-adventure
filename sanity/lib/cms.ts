import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { events as fallbackEvents, galleryImages as fallbackGalleryImages, notices as fallbackNotices } from "@/lib/site-data";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

const imageBuilder = projectId ? imageUrlBuilder({ projectId, dataset }) : null;

export function hasSanityConfig() {
  return Boolean(client && imageBuilder);
}

export function resolveImageSource(source: unknown) {
  if (!source) {
    return null;
  }

  if (typeof source === "string") {
    return source;
  }

  if (!imageBuilder) {
    return null;
  }

  return imageBuilder.image(source as never).url();
}

type SanityNotice = {
  title: string;
  slug: string;
  content: string;
  priority: "urgent" | "high" | "medium" | "low";
  targetAudience: string;
  publishDate: string;
  expiryDate?: string | null;
};

type SanityEvent = {
  title: string;
  slug: string;
  description: string;
  eventType: string;
  startDate: string;
  endDate: string;
  location?: string | null;
  image?: unknown;
};

type SanityGalleryImage = {
  title: string;
  slug: string;
  caption?: string | null;
  image: unknown;
  event?: string | null;
};

const noticesQuery = `*[_type == "notice"] | order(publishDate desc) { title, "slug": slug.current, content, priority, targetAudience, publishDate, expiryDate }`;
const noticeBySlugQuery = `*[_type == "notice" && slug.current == $slug][0] { title, "slug": slug.current, content, priority, targetAudience, publishDate, expiryDate }`;
const eventsQuery = `*[_type == "event"] | order(startDate desc) { title, "slug": slug.current, description, eventType, startDate, endDate, location, image }`;
const galleryQuery = `*[_type == "galleryImage"] | order(_createdAt desc) { title, "slug": slug.current, caption, image, event }`;

export async function getNotices() {
  if (!client) {
    return fallbackNotices;
  }

  try {
    return await client.fetch<SanityNotice[]>(noticesQuery);
  } catch {
    return fallbackNotices;
  }
}

export async function getNoticeBySlug(slug: string) {
  if (!client) {
    return fallbackNotices.find((item) => item.slug === slug) ?? null;
  }

  try {
    return (await client.fetch<SanityNotice | null>(noticeBySlugQuery, { slug })) ?? null;
  } catch {
    return fallbackNotices.find((item) => item.slug === slug) ?? null;
  }
}

export async function getEvents() {
  if (!client) {
    return fallbackEvents;
  }

  try {
    return await client.fetch<SanityEvent[]>(eventsQuery);
  } catch {
    return fallbackEvents;
  }
}

export async function getGalleryImages() {
  if (!client) {
    return fallbackGalleryImages;
  }

  try {
    return await client.fetch<SanityGalleryImage[]>(galleryQuery);
  } catch {
    return fallbackGalleryImages;
  }
}
