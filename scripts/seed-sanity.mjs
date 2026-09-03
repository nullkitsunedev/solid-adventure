const notices = [
  {
    _type: "notice",
    title: "Annual Exam Schedule 2026",
    slug: { _type: "slug", current: "annual-exam-schedule-2026" },
    content:
      "The annual examination schedule for all classes has been published. Students are advised to prepare accordingly and review the subject-wise timetable carefully.",
    priority: "urgent",
    targetAudience: "all",
    publishDate: "2026-09-01T08:00:00+06:00",
  },
  {
    _type: "notice",
    title: "Science Project Fair",
    slug: { _type: "slug", current: "science-project-fair" },
    content:
      "A science project fair will be held in the school auditorium next week. Students from classes 6 through 10 are encouraged to participate.",
    priority: "high",
    targetAudience: "students",
    publishDate: "2026-08-28T10:00:00+06:00",
  },
  {
    _type: "notice",
    title: "Holiday Notice",
    slug: { _type: "slug", current: "holiday-notice" },
    content:
      "The school will remain closed on the upcoming public holiday. Regular classes will resume on the next working day.",
    priority: "medium",
    targetAudience: "all",
    publishDate: "2026-08-25T10:00:00+06:00",
  },
];

const events = [
  {
    _type: "event",
    title: "Annual Sports Day 2026",
    slug: { _type: "slug", current: "annual-sports-day-2026" },
    description:
      "Students, teachers, and parents will gather for the annual sports day with competitions and cultural presentations.",
    eventType: "Sports",
    startDate: "2026-09-12T09:00:00+06:00",
    endDate: "2026-09-12T15:00:00+06:00",
    location: "School Ground",
    imagePath: "public/images/students.jpeg",
  },
  {
    _type: "event",
    title: "Science Fair 2026",
    slug: { _type: "slug", current: "science-fair-2026" },
    description:
      "A showcase of student innovation with class projects, demonstrations, and interactive exhibits.",
    eventType: "Academic",
    startDate: "2026-09-18T10:00:00+06:00",
    endDate: "2026-09-18T13:00:00+06:00",
    location: "Auditorium",
    imagePath: "public/images/schoolimage.jpeg",
  },
  {
    _type: "event",
    title: "Cultural Program",
    slug: { _type: "slug", current: "cultural-program" },
    description:
      "A celebration of music, recitation, and student performances to mark the annual cultural week.",
    eventType: "Cultural",
    startDate: "2026-09-25T17:00:00+06:00",
    endDate: "2026-09-25T19:30:00+06:00",
    location: "Main Hall",
    imagePath: "public/images/anik-ahmed-emon.jpeg",
  },
];

const galleryImages = [
  {
    _type: "galleryImage",
    title: "School Campus",
    slug: { _type: "slug", current: "school-campus" },
    caption: "A calm and structured environment for learning.",
    event: "Campus",
    imagePath: "public/images/schoolimage.jpeg",
  },
  {
    _type: "galleryImage",
    title: "Students Group",
    slug: { _type: "slug", current: "students-group" },
    caption: "Students gathered during a school activity.",
    event: "Activity",
    imagePath: "public/images/students.jpeg",
  },
  {
    _type: "galleryImage",
    title: "Principal Portrait",
    slug: { _type: "slug", current: "principal-portrait" },
    caption: "Anik Ahmed Emon, Principal of Newaz Ali Ideal School.",
    event: "Portrait",
    imagePath: "public/images/anik-ahmed-emon.jpeg",
  },
];

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_AUTH_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

if (!projectId) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID.");
  process.exit(1);
}

if (!token) {
  console.error("Missing SANITY_AUTH_TOKEN. A write token is required to seed the dataset.");
  process.exit(1);
}

const apiBase = `https://${projectId}.api.sanity.io/v${apiVersion}`;
const authHeaders = {
  Authorization: `Bearer ${token}`,
};

async function uploadImage(imagePath) {
  const fs = await import("node:fs/promises");
  const path = await import("node:path");

  const buffer = await fs.readFile(imagePath);
  const ext = path.extname(imagePath).toLowerCase();
  const mimeType = ext === ".png" ? "image/png" : ext === ".webp" ? "image/webp" : "image/jpeg";
  const form = new FormData();
  form.append("file", new Blob([buffer], { type: mimeType }), path.basename(imagePath));

  const response = await fetch(`${apiBase}/assets/images/${dataset}`, {
    method: "POST",
    headers: authHeaders,
    body: form,
  });

  if (!response.ok) {
    throw new Error(`Failed to upload ${imagePath}: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: data.document._id,
    },
  };
}

async function mutate(documents) {
  const response = await fetch(`${apiBase}/data/mutate/${dataset}?returnIds=true`, {
    method: "POST",
    headers: {
      ...authHeaders,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mutations: documents.map((doc) => ({ createOrReplace: doc })) }),
  });

  if (!response.ok) {
    throw new Error(`Mutation failed: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

async function main() {
  const uploads = new Map();
  for (const item of [...events, ...galleryImages]) {
    uploads.set(item.imagePath, await uploadImage(item.imagePath));
  }

  const eventDocs = events.map(({ imagePath, ...doc }) => ({
    ...doc,
    image: uploads.get(imagePath),
  }));

  const galleryDocs = galleryImages.map(({ imagePath, ...doc }) => ({
    ...doc,
    image: uploads.get(imagePath),
  }));

  const result = await mutate([...notices, ...eventDocs, ...galleryDocs]);
  console.log(`Seeded ${result.results.length} documents into ${dataset}.`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});

