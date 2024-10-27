import { Box } from "@mui/material";

export const FormMessage = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        border: "2px solid red",
        padding: "20px",
        borderRadius: "4px",
        width: "400px",
        marginBottom: "20px",
        "@media (max-width: 750px)": {
          width: "300px",
        },
        "@media (max-width: 540px)": {
          width: "250px",
        },
        "@media (max-width: 430px)": {
          width: "230px",
          padding: "10px",
        },
      }}
    >
      <Box
        sx={{
          fontSize: "15px",
          lineHeight: "1.8",
          "@media (max-width: 750px)": {
            fontSize: "12px",
          },
          "@media (max-width: 540px)": {
            fontSize: "10px",
          },
        }}
      >
        あなたの借金が減額される可能性があり
        <br />
        <Box
          sx={{
            color: "green",
            fontWeight: "bold",
            fontSize: "16px",
            "@media (max-width: 750px)": {
              fontSize: "12px",
            },
          }}
        >
          完済に向けた具体的な目処を立てることができます。
        </Box>
        詳細なご案内のためフォームをご入力ください。
      </Box>
    </Box>
  );
};
