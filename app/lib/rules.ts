import { z } from "zod";

export const EmailSchema = z.object({
   from_email: z.string().email().min(1),
   from_name: z.string().min(2).max(100).nullable(),
   message: z.string().min(3).max(501),
});
