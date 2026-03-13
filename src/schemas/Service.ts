import { z } from "zod";

export const ServiceSchema = z.object({
  name: z.string().min(1, "Service name is required").max(200),
  description: z.string().optional().or(z.literal("")),
  duration: z
    .number()
    .int("Duration must be whole minutes")
    .positive("Duration must be greater than 0"),
  price: z
    .number()
    .positive("Price must be greater than 0")
    .multipleOf(0.01, "Price must have max 2 decimal places"),
});

export type ServiceData = z.infer<typeof ServiceSchema>;

export const defaultServiceValues: ServiceData = {
  name: "",
  description: "",
  duration: 45,
  price: 50,
};
