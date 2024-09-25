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
      }}
    >
      <div
        style={{
          fontSize: "15px",
          lineHeight: "1.8",
        }}
      >
        あなたの借金が減額される可能性があり
        <br />
        <span
          style={{
            color: "green",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "1.8",
          }}
        >
          完済に向けた具体的な目処を立てることができます。
        </span>
        <br />
        詳細なご案内のため、以下のフォームをご入力ください。
      </div>
    </Box>
  );
};
