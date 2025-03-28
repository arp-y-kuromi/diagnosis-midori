import { questionBtn, questionTitle } from "../style";
import { Btn } from "../../const";
import { Box } from "@mui/material";

type QuestionContentPropsType = {
  question: string;
  firstBtn: string;
  secondBtn: string;
  thirdBtn: string;
  fourthBtn: string;
  onClickFirst?: () => void;
  onClickSecond?: () => void;
  onClickThird?: () => void;
  onClickFourth?: () => void;
  data: string;
};

export const QuestionContent = ({
  question,
  firstBtn,
  secondBtn,
  thirdBtn,
  fourthBtn,
  onClickFirst,
  onClickSecond,
  onClickThird,
  onClickFourth,
}: QuestionContentPropsType) => {
  return (
    <>
      <Box sx={questionTitle}>{question}</Box>
      <div style={questionBtn}>
        <Btn name={firstBtn} onClick={onClickFirst} />
        <Btn name={secondBtn} onClick={onClickSecond} />
        <Btn name={thirdBtn} onClick={onClickThird} />
        <Btn name={fourthBtn} onClick={onClickFourth} />
      </div>
    </>
  );
};
