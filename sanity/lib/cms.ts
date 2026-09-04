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
      useCdn: false,
    })
  : null;

const imageBuilder = projectId ? imageUrlBuilder({ projectId, dataset }) : null;
const useFallbackContent = process.env.NODE_ENV !== "production" && !client;

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

const noticesQuery = `*[_type == "notice"] | order(publishDate desc) { title, "slug": slug.current, content, targetAudience, publishDate, expiryDate }`;
const noticeBySlugQuery = `*[_type == "notice" && slug.current == $slug][0] { title, "slug": slug.current, content, targetAudience, publishDate, expiryDate }`;
const eventsQuery = `*[_type == "event"] | order(startDate desc) { title, "slug": slug.current, description, eventType, startDate, endDate, location, image }`;
const galleryQuery = `*[_type == "galleryImage"] | order(_createdAt desc) { title, "slug": slug.current, caption, image, event }`;

export async function getNotices() {
  if (!client && useFallbackContent) {
    return fallbackNotices;
  }

  try {
    return client ? await client.fetch<SanityNotice[]>(noticesQuery) : [];
  } catch {
    return useFallbackContent ? fallbackNotices : [];
  }
}

export async function getNoticeBySlug(slug: string) {
  if (!client && useFallbackContent) {
    return fallbackNotices.find((item) => item.slug === slug) ?? null;
  }

  try {
    return client ? (await client.fetch<SanityNotice | null>(noticeBySlugQuery, { slug })) ?? null : null;
  } catch {
    return useFallbackContent ? fallbackNotices.find((item) => item.slug === slug) ?? null : null;
  }
}

export async function getEvents() {
  if (!client && useFallbackContent) {
    return fallbackEvents;
  }

  try {
    return client ? await client.fetch<SanityEvent[]>(eventsQuery) : [];
  } catch {
    return useFallbackContent ? fallbackEvents : [];
  }
}

export async function getGalleryImages() {
  if (!client && useFallbackContent) {
    return fallbackGalleryImages;
  }

  try {
    return client ? await client.fetch<SanityGalleryImage[]>(galleryQuery) : [];
  } catch {
    return useFallbackContent ? fallbackGalleryImages : [];
  }
}
