import { Box } from "@mui/material";
import { headerPosition } from "./style";

type Header = {
  headerTitle: string;
};

export const Header = ({ headerTitle }: Header) => {
  return (
    <Box sx={headerPosition}>
      <header>{headerTitle}</header>
    </Box>
  );
};
