import { Box, Card, Typography } from "@mui/material";
import { pagePosition, formPosition } from "../Page/Question/style";
import img_midori_FV from "../Image/img_midori_FV.png";
import { useEffect } from "react";
import { trackSentSuccess } from "./const";
import { Footer } from "../Footer/Footer";

export const SentSuccess = () => {
  useEffect(() => {
    trackSentSuccess();
  }, []);
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
            <Typography
              sx={{
                color: "green",
              }}
            >
              お問い合せが完了しました。
              <br />
              みどり法務事務所からのお電話をお待ちください。
              <br />
              フリーダイヤル
              <Box
                component="span"
                sx={{
                  fontSize: "1.2rem",
                  color: "red",
                  fontWeight: "bold",
                  ml: 1,
                }}
              >
                0120-50-60-70
              </Box>
              からご連絡させて頂きます。
            </Typography>
          </Box>
        </Card>
      </Box>
      <Footer />
    </>
  );
};
