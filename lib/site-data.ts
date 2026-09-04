export type Notice = {
  slug: string;
  title: string;
  content: string;
  targetAudience: string;
  attachmentUrl?: string;
  publishDate: string;
  expiryDate?: string;
};

export type Post = {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  status: "draft" | "published" | "archived";
  authorName: string;
  category: string;
  tags: string[];
  views: number;
  publishedAt?: string;
};

export type Event = {
  slug: string;
  title: string;
  description: string;
  eventType: string;
  startDate: string;
  endDate: string;
  location?: string;
  image?: string;
};

export type GalleryImage = {
  slug: string;
  title: string;
  caption?: string;
  image: string;
  event?: string;
};

export type Material = {
  slug: string;
  title: string;
  description: string;
  materialType: "pdf" | "video" | "audio" | "document" | "link";
  fileUrl?: string;
  externalUrl?: string;
  subjectName: string;
  className: string;
  uploadedBy: string;
  createdAt: string;
};

export const notices: Notice[] = [
  {
    slug: "annual-exam-schedule-2026",
    title: "Annual Exam Schedule 2026",
    content:
      "The annual examination schedule for all classes has been published. Students are advised to prepare accordingly and review the subject-wise timetable carefully.",
    targetAudience: "all",
    publishDate: "2026-09-01T08:00:00+06:00",
  },
  {
    slug: "science-project-fair",
    title: "Science Project Fair",
    content:
      "A science project fair will be held in the school auditorium next week. Students from classes 6 through 10 are encouraged to participate.",
    targetAudience: "students",
    publishDate: "2026-08-28T10:00:00+06:00",
  },
  {
    slug: "holiday-notice",
    title: "Holiday Notice",
    content:
      "The school will remain closed on the upcoming public holiday. Regular classes will resume on the next working day.",
    targetAudience: "all",
    publishDate: "2026-08-25T10:00:00+06:00",
  },
];

export const posts: Post[] = [
  {
    slug: "building-character-through-discipline",
    title: "Building Character Through Discipline",
    content:
      "A disciplined learning environment helps students develop responsibility, focus, and consistency. These values support academic progress and personal growth in every stage of schooling.",
    excerpt:
      "A disciplined learning environment helps students develop responsibility, focus, and consistency.",
    featuredImage: "/images/students.jpeg",
    status: "published",
    authorName: "Admin",
    category: "School Life",
    tags: ["discipline", "students", "learning"],
    views: 128,
    publishedAt: "2026-08-30T09:00:00+06:00",
  },
  {
    slug: "parent-school-partnership",
    title: "Parent-School Partnership Matters",
    content:
      "The strongest outcomes happen when families and schools work together. Open communication creates a more supportive environment for every learner.",
    excerpt:
      "The strongest outcomes happen when families and schools work together.",
    featuredImage: "/images/schoolimage.jpeg",
    status: "published",
    authorName: "Admin",
    category: "Community",
    tags: ["parents", "community"],
    views: 84,
    publishedAt: "2026-08-22T11:30:00+06:00",
  },
  {
    slug: "co-curricular-activities",
    title: "Why Co-curricular Activities Matter",
    content:
      "Sports, clubs, and school events support creativity, teamwork, and confidence. They are an essential part of a balanced education.",
    excerpt:
      "Sports, clubs, and school events support creativity, teamwork, and confidence.",
    status: "published",
    authorName: "Admin",
    category: "Activities",
    tags: ["sports", "activities"],
    views: 63,
    publishedAt: "2026-08-18T14:15:00+06:00",
  },
];

export const events: Event[] = [
  {
    slug: "annual-sports-day-2026",
    title: "Annual Sports Day 2026",
    description:
      "Students, teachers, and parents will gather for the annual sports day with competitions and cultural presentations.",
    eventType: "Sports",
    startDate: "2026-09-12T09:00:00+06:00",
    endDate: "2026-09-12T15:00:00+06:00",
    location: "School ???",
    image: "/images/students.jpeg",
  },
  {
    slug: "science-fair-2026",
    title: "Science Fair 2026",
    description:
      "A showcase of student innovation with class projects, demonstrations, and interactive exhibits.",
    eventType: "Academic",
    startDate: "2026-09-18T10:00:00+06:00",
    endDate: "2026-09-18T13:00:00+06:00",
    location: "Auditorium",
    image: "/images/schoolimage.jpeg",
  },
  {
    slug: "cultural-program",
    title: "Cultural Program",
    description:
      "A celebration of music, recitation, and student performances to mark the annual cultural week.",
    eventType: "Cultural",
    startDate: "2026-09-25T17:00:00+06:00",
    endDate: "2026-09-25T19:30:00+06:00",
    location: "Main Hall",
    image: "/images/anik-ahmed-emon.jpeg",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    slug: "school-campus",
    title: "School Campus",
    caption: "A calm and structured environment for learning.",
    image: "/images/schoolimage.jpeg",
  },
  {
    slug: "students-group",
    title: "Students Group",
    caption: "Students gathered during a school activity.",
    image: "/images/students.jpeg",
  },
  {
    slug: "principal-portrait",
    title: "Principal Portrait",
    caption: "Anik Ahmed Emon, Principal of Newaz Ali Ideal School.",
    image: "/images/anik-ahmed-emon.jpeg",
  },
];

export const materials: Material[] = [
  {
    slug: "science-notes-class-8",
    title: "Science Notes - Class 8",
    description:
      "A concise set of science notes covering the current chapter sequence with short review points.",
    materialType: "pdf",
    fileUrl: "/sample-materials/science-notes-class-8.pdf",
    subjectName: "Science",
    className: "Class 8",
    uploadedBy: "Teacher",
    createdAt: "2026-08-29T09:45:00+06:00",
  },
  {
    slug: "english-lesson-video",
    title: "English Lesson Video",
    description:
      "A recorded lesson for pronunciation practice and vocabulary review.",
    materialType: "video",
    externalUrl: "https://example.com",
    subjectName: "English",
    className: "Class 7",
    uploadedBy: "Teacher",
    createdAt: "2026-08-27T14:00:00+06:00",
  },
  {
    slug: "math-practice-sheet",
    title: "Math Practice Sheet",
    description:
      "Practice questions for chapter revision and in-class preparation.",
    materialType: "document",
    subjectName: "Mathematics",
    className: "Class 9",
    uploadedBy: "Teacher",
    createdAt: "2026-08-24T12:20:00+06:00",
  },
];

export function getYearSinceEstablishment(currentYear = new Date().getFullYear()) {
  return Math.max(currentYear - 2007, 0);
}
