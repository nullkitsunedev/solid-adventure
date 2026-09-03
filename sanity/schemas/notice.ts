import { defineField, defineType } from "sanity";

export const noticeType = defineType({
  name: "notice",
  title: "Notice",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "content", title: "Content", type: "text", rows: 5, validation: (Rule) => Rule.required() }),
    defineField({
      name: "priority",
      title: "Priority",
      type: "string",
      options: { list: ["urgent", "high", "medium", "low"] },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "targetAudience",
      title: "Target Audience",
      type: "string",
      options: { list: ["all", "students", "parents", "teachers"] },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "publishDate", title: "Publish Date", type: "datetime", validation: (Rule) => Rule.required() }),
    defineField({ name: "expiryDate", title: "Expiry Date", type: "datetime" }),
  ],
});
