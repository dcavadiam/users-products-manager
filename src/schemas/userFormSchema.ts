import { z } from "zod";

export const userFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name cannot be longer than 50 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  role: z
    .string()
    .min(1, { message: "Role is required" })
    .max(50, { message: "Role cannot be longer than 50 characters" }),
});
