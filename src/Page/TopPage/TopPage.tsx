import { Box, Card } from "@mui/material";
import {
  formPosition,
  pagePosition,
  questionBtn,
  questionTitle,
} from "./style";
import { Btn } from "../const";
type TopPageProps = {
  firstQuestion: string;
};

export const TopPage = ({ firstQuestion }: TopPageProps) => {
  return (
    <>
      <Box sx={pagePosition}>
        <Card sx={formPosition}>
          <div style={questionTitle}>{firstQuestion}</div>
          <div style={questionBtn}>
            <Btn name="0~49万円" /> <Btn name="50~99万円" />
            <Btn name="100~199万円" /> <Btn name="200万円以上" />
          </div>
        </Card>
      </Box>
    </>
  );
};
