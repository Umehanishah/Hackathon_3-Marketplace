import { Rule } from "@sanity/types";

export default {
  name: "contactForm",
  title: "Contact Form",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Name is required"),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.required().email().error("A valid email address is required"),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      name: "time",
      title: "Time",
      type: "string",
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule: Rule) =>
        Rule.optional()
          .min(10)
          .max(1000)
          .error("Message must be between 10 and 1000 characters"),
    },
  ],
};