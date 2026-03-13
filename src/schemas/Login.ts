import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .refine(
      (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      "Valid email required",
    ),

  password: z.string().min(1, "Password is required"),
});

export type LoginData = z.infer<typeof LoginSchema>;

export const defaultLoginValues: LoginData = {
  email: "",
  password: "",
};
