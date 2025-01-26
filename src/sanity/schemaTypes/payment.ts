import { Rule } from "@sanity/types";

export default {
  name: "payment",
  title: "Payment",
  type: "document",
  fields: [
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Name is required"),
    },
    {
      name: "accountNumber",
      title: "Account Number",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.required()
          .regex(/^\d+$/, {
            name: "numeric", // Error message for invalid input
            invert: false,
          })
          .min(10)
          .max(16)
          .error("A valid account number (10-16 digits) is required"),
    },
    {
      name: "customerEmail",
      title: "Customer Email",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.required().email().error("A valid email address is required"),
    },
    {
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
      options: {
        list: [
          { title: "JazzCash", value: "jazzcash" },
          { title: "EasyPaisa", value: "easypaisa" },
          { title: "Bank Account", value: "bank_account" },
        ],
        layout: "radio",
      },
      validation: (Rule: Rule) =>
        Rule.required().error("Payment method is required"),
    },
    {
      name: "status",
      title: "Payment Status",
      type: "string",
      options: {
        list: [
          { title: "Paid", value: "paid" },
          { title: "Pending", value: "pending" },
          { title: "Failed", value: "failed" },
        ],
        layout: "dropdown",
      },
      validation: (Rule: Rule) =>
        Rule.required().error("Payment status is required"),
    },
    {
      name: "orderTime",
      title: "Time of Order",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.required().error("Time of order is required"),
    },
    {
      name: "orderDate",
      title: "Date of Order",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
      validation: (Rule: Rule) =>
        Rule.required().error("Date of order is required"),
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
