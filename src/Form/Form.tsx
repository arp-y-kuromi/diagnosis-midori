import { Box, Card } from "@mui/material";
import { formPosition, pagePosition } from "../Page/Question/style";
import img_midori_FV from "../Image/img_midori_FV.png";
import { FormTextField } from "./components/FormTextField";
import { FormMessage } from "./components/FormMessage";
import { SentBtn } from "./components/SentBtn";

const FORM_TEXT_FIELD_SX = {
  width: "500px",
  mt: "15px",
  mb: "15px",
};

export const Form = () => {
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
            <form>
              <FormTextField
                label="名前"
                name="name"
                placeholder="名前を入力してください"
                sx={FORM_TEXT_FIELD_SX}
              />
              <FormTextField
                label="電話番号(ハイフンなし)"
                name="tell"
                placeholder="電話番号(ハイフンなし)を入力してください"
                sx={FORM_TEXT_FIELD_SX}
              />
              <FormTextField
                label="メールアドレス"
                name="email"
                placeholder="メールアドレスを入力してください"
                sx={FORM_TEXT_FIELD_SX}
              />
            </form>
            <SentBtn />
          </Box>
        </Card>
      </Box>
    </>
  );
};
