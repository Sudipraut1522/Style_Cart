import * as z from "zod";

export const registerSchema = z
  .object({
    username: z
      .string({ message: "please enter ypur name" })
      .min(5, { message: "Username must be min 5 latter" }),

    email: z
      .string()
      .email({ message: "Please enter a valid email address" })
      .min(1, { message: "Email is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[a-zA-Z]/, { message: "Password must contain letters" })
      .regex(/[0-9]/, { message: "Password must contain numbers" }),

    cpassword: z
      .string()
      .min(8, {
        message: "Password confirmation must be at least 8 characters",
      })
      .regex(/[a-zA-Z]/, {
        message: "Password confirmation must contain letters",
      })
      .regex(/[0-9]/, {
        message: "Password confirmation must contain numbers",
      }),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Passwords do not match",
    path: ["cpassword"],
  });
export type RegisterFormData = z.infer<typeof registerSchema>;
