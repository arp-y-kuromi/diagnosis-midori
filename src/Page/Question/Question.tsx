import { QuestionContent } from "./components/QuestiuonContent";

type QuestionPropsType = {
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

export const Question = ({
  question,
  firstBtn,
  secondBtn,
  thirdBtn,
  fourthBtn,
  onClickFirst,
  onClickSecond,
  onClickThird,
  onClickFourth,
  data,
}: QuestionPropsType) => {
  return (
    <>
      <QuestionContent
        question={question}
        firstBtn={firstBtn}
        secondBtn={secondBtn}
        thirdBtn={thirdBtn}
        fourthBtn={fourthBtn}
        onClickFirst={onClickFirst}
        onClickSecond={onClickSecond}
        onClickThird={onClickThird}
        onClickFourth={onClickFourth}
        data={data}
      />
    </>
  );
};
