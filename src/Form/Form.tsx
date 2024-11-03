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
import { loanAmountAtom, loanPeriodAtom, repaymentAtom } from "../Atom/Atom";
import { useAtom } from "jotai";
import { Footer } from "../Footer/Footer";

const FORM_TEXT_FIELD_SX = {
  width: "500px",
  mt: "30px",
};

const DEFAULT_VALUES: FormType = {
  name: "",
  email: "",
  telephoneNumber: "",
};

type SendDataType = {
  loanAmount: string;
  loanPeriod: string;
  repayment: string;
} & FormType;

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
  const [loanAmount] = useAtom(loanAmountAtom);
  const [loanPeriod] = useAtom(loanPeriodAtom);
  const [repayment] = useAtom(repaymentAtom);

  const onSubmit = async (data: FormType) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId_Incube = import.meta.env
      .VITE_EMAILJS_TEMPLATE_ID as string;
    const templateId_Midori = import.meta.env
      .VITE_EMAILJS_TEMPLATE_ID_2 as string;
    const publicId = import.meta.env.VITE_EMAILJS_PUBLIC_ID as string;
    const sendData: SendDataType = {
      ...data,
      loanAmount,
      loanPeriod,
      repayment,
    };

    try {
      await emailjs.send(serviceId, templateId_Incube, sendData, publicId);
      // みどり法務事務所宛に送信
      await emailjs.send(serviceId, templateId_Midori, sendData, publicId);
      reset(DEFAULT_VALUES);
      navigte("/diagnosis-midori/success");
    } catch (error) {
      console.error("送信に失敗しました:");
    }
  };
  return (
    <>
      <Box sx={pagePosition}>
        <Box
          sx={{
            backgroundImage: `url(${img_midori_FV})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            width: "100%",
            height: "160px",
            "@media (max-width: 650px)": {
              width: "90%",
              height: "120px",
            },
            "@media (max-width: 480px)": {
              height: "80px",
            },
          }}
        />
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
      <Footer />
    </>
  );
};
