import { z } from "zod";

// Define the product form schema
export const productFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name cannot be longer than 50 characters" }),
  price: z.string().min(1, { message: "Price must be greater than 0" }),
  stock: z.string().min(1, { message: "Stock must be greater than 0" }),
});
