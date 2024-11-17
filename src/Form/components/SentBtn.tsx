import { Theme } from "@emotion/react";
import { Box, Button, SxProps } from "@mui/material";

type SentBtnType = {
  name: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  sx?: SxProps<Theme>;
  disabled?: boolean;
};

export const SentBtn = ({
  name,
  onClick,
  type = "button",
  sx,
  disabled = false,
}: SentBtnType) => {
  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Button
          variant="contained"
          onClick={onClick}
          type={type}
          sx={sx}
          disabled={disabled}
        >
          {name}
        </Button>
      </Box>
    </>
  );
};
