import { Box, Card } from "@mui/material";
import { formPosition, pagePosition } from "../Page/Question/style";
import img_midori_FV from "../Image/img_midori_FV.png";
import { FormTextField } from "./components/FormTextField";
import { FormMessage } from "./components/FormMessage";
import { SentBtn } from "./components/SentBtn";
import { useForm } from "react-hook-form";
import { FormSchema, FormType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

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

  const navigte = useNavigate();

  const onSubmit = async (data: FormType) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicId = import.meta.env.VITE_EMAILJS_PUBLIC_ID as string;

    try {
      await emailjs.send(serviceId, templateId, data, publicId);
      reset(DEFAULT_VALUES);
      navigte("/diagnosis-midori/success");
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
          </Box>
        </Card>
      </Box>
    </>
  );
};
