import { Box, Typography } from "@mui/material";

const FOOTER_SX = {
  width: "100%",
  backgroundColor: "primary.main",
  textAlign: "center",
  py: 1,
  mt: "auto",
  position: "fixed",
  bottom: 0,
  left: 0,
};

const FOOTER_TYPOGRAPHY_SX = {
  color: "white",
  fontSize: "0.875rem",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
  cursor: "pointer",
};

export const Footer = () => {
  return (
    <Box component="footer" sx={FOOTER_SX}>
      <Typography
        variant="body2"
        component="a"
        href="https://www.o-shihoushoshi.com/privacypolicy"
        target="_blank"
        sx={{ ...FOOTER_TYPOGRAPHY_SX, mr: "15px" }}
      >
        プライバシーポリシー
      </Typography>
      <Typography
        variant="body2"
        component="a"
        href="https://www.o-shihoushoshi.com/access"
        target="_blank"
        sx={FOOTER_TYPOGRAPHY_SX}
      >
        事務所概要
      </Typography>
      <Typography
        variant="caption"
        sx={{
          display: "block",
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: "0.75rem",
          mt: 0.5,
        }}
      >
        Copyright©司法書士法人 みどり法務事務所 All rights reserved.
      </Typography>
    </Box>
  );
};
