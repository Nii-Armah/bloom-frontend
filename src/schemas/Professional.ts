import { z } from "zod";

const SPECIALTIES = [
  "hair_styling",
  "hair_coloring",
  "makeup_artistry",
  "skincare",
  "lash_services",
  "nail_services",
] as const;

export const ProfessionalSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required").max(255),

    email: z
      .string()
      .min(1, "Email is required")
      .refine(
        (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        "Valid email required",
      ),

    bio: z.string().max(1000, "Bio too long").optional().or(z.literal("")),
    specialty: z.enum(SPECIALTIES, { message: "Invalid specialty" }),
    password: z.string().min(8, "Password must be at least 8 characters"),
    password2: z.string(),
  })
  .refine((data) => data.password === data.password2, {
    message: "Passwords do not match",
    path: ["password2"],
  });

export type ProfessionalData = z.infer<typeof ProfessionalSchema>;

export const defaultProfessionalValues: ProfessionalData = {
  fullName: "",
  email: "",
  bio: "",
  specialty: SPECIALTIES[0],
  password: "",
  password2: "",
};
