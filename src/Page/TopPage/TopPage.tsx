import { Box, Card } from "@mui/material";
import {
  formPosition,
  pagePosition,
  questionBtn,
  questionTitle,
} from "./style";
import { Btn } from "../const";
import img_midori_FV from "../../Image/img_midori_FV.png";

type TopPageProps = {
  question: string;
  firstBtn: string;
  secondBtn: string;
  thirdBtn: string;
  fourthBtn: string;
  onClick?: () => void;
};

export const TopPage = ({
  question,
  firstBtn,
  secondBtn,
  thirdBtn,
  fourthBtn,
  onClick,
}: TopPageProps) => {
  return (
    <>
      <Box sx={pagePosition}>
        <img src={img_midori_FV} alt="質問" style={{ marginTop: "80px" }} />
        <Card sx={formPosition}>
          <div style={questionTitle}>{question}</div>
          <div style={questionBtn}>
            <Btn name={firstBtn} onClick={onClick} />
            <Btn name={secondBtn} onClick={onClick} />
            <Btn name={thirdBtn} onClick={onClick} />
            <Btn name={fourthBtn} onClick={onClick} />
          </div>
        </Card>
      </Box>
    </>
  );
};
