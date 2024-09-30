import { Box, Card } from "@mui/material";
import { formPosition, pagePosition } from "../Page/Question/style";
import img_midori_FV from "../Image/img_midori_FV.png";
import { FormTextField } from "./components/FormTextField";
import { FormMessage } from "./components/FormMessage";
import { SentBtn } from "./components/SentBtn";
import { useForm } from "react-hook-form";
import { FormSchema, FormType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const FORM_TEXT_FIELD_SX = {
  width: "500px",
  mt: "30px",
};

const DEFAULT_VALUES: FormType = {
  name: "",
  email: "",
  telephoneNumber: "",
};

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    mode: "onBlur",
    defaultValues: DEFAULT_VALUES,
  });

  const [message, setMessage] = useState("");

  const onSubmit = async (data: FormType) => {
    try {
      console.log(data);
      setMessage("送信しました。事務所からお電話のご連絡をお待ちください。");
      reset(DEFAULT_VALUES);
    } catch (error) {
      console.error("送信に失敗しました:", error);
    }
  };
  return (
    <>
      <Box sx={pagePosition}>
        <img src={img_midori_FV} alt="質問" />
        <Card sx={formPosition}>
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              border: "3px solid black",
              padding: "20px",
              borderRadius: "8px",
              alignItems: "center",
            }}
          >
            <FormMessage />
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormTextField
                label="名前"
                name="name"
                placeholder="名前を入力してください"
                sx={FORM_TEXT_FIELD_SX}
                control={control}
              />
              <FormTextField
                label="電話番号(半角ハイフンなし)"
                name="telephoneNumber"
                placeholder="電話番号(半角ハイフンなし)を入力してください"
                sx={FORM_TEXT_FIELD_SX}
                control={control}
              />
              <FormTextField
                label="メールアドレス"
                name="email"
                placeholder="メールアドレスを入力してください"
                sx={FORM_TEXT_FIELD_SX}
                control={control}
              />
              <SentBtn name="送信する" type="submit" disabled={!isValid} />
            </form>
            {message && (
              <Box sx={{ mt: "20px", color: "green" }}>{message}</Box>
            )}
          </Box>
        </Card>
      </Box>
    </>
  );
};
