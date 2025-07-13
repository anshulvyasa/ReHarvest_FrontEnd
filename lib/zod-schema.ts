import { z } from "zod";

export const signup_schema = z
  .object({
    name: z.string().min(2, "Name too Short").max(50, "Name Too Long"),
    email: z.string().email("Invalid Email"),
    password: z
      .string()
      .min(6, "Password must be of atleast 6 character")
      .regex(/[a-z]/, "Need 1 lowercase")
      .regex(/[A-Z]/, "Need 1 uppercase")
      .regex(/[0-9]/, "Need 1 number")
      .regex(/[^A-Za-z0-9]/, "Need 1 symbol"),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password Don't Match",
    path: ["confirmPassword"],
  });

// export const ai_analysis_data = z.object({
//   condition_score: z.number(),
//   green_points: z.number(),
//   output: z.number(),
// });
