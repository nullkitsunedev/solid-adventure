import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
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
    defineField({ name: "description", title: "Description", type: "text", rows: 5, validation: (Rule) => Rule.required() }),
    defineField({ name: "eventType", title: "Event Type", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "startDate", title: "Start Date", type: "datetime", validation: (Rule) => Rule.required() }),
    defineField({ name: "endDate", title: "End Date", type: "datetime", validation: (Rule) => Rule.required() }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
  ],
});
