import { z } from "zod";

const ERR_MSG_REQUIRED = "必須入力項目です";

export const FormSchema = z.object({
  name: z.string().min(1, { message: ERR_MSG_REQUIRED }),
  telephoneNumber: z
    .string()
    .min(1, { message: ERR_MSG_REQUIRED })
    .refine((value) => /^(090|080|070)\d{8}$/.test(value), {
      message: "正しい電話番号(11桁半角ハイフンなし)で入力してください",
    }),
  email: z
    .string()
    .min(1, { message: ERR_MSG_REQUIRED })
    .email({ message: "正しいメールアドレスの形式で入力してください" }),
});

export type FormType = z.infer<typeof FormSchema>;
