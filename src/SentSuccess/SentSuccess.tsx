import { Box, Card, Typography } from "@mui/material";
import { pagePosition, formPosition } from "../Page/Question/style";
import img_midori_FV from "../Image/img_midori_FV.png";

export const SentSuccess = () => {
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
            <Typography
              sx={{
                color: "green",
              }}
            >
              送信されました。事務所からのお電話をお待ちください。
            </Typography>
          </Box>
        </Card>
      </Box>
    </>
  );
};
