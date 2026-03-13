import { z } from "zod";

export const ClientSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required").max(255),

    email: z
      .string()
      .min(1, "Email is required")
      .refine(
        (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        "Valid email required",
      ),

    contactNumber: z.string().optional().or(z.literal("")),
    password: z.string().min(8, "Password must be at least 8 characters"),
    password2: z.string(),
  })
  .refine((data) => data.password === data.password2, {
    message: "Passwords do not match",
    path: ["password2"],
  });

export type ClientData = z.infer<typeof ClientSchema>;

export const defaultClientValues: ClientData = {
  fullName: "",
  email: "",
  contactNumber: "",
  password: "",
  password2: "",
};
