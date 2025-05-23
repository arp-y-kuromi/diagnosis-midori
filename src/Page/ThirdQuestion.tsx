import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { Question } from "./Question/Question";

type ThirdQuestionProps = {
  repayment: string;
  setRepayment: Dispatch<SetStateAction<string>>;
};

export const ThirdQuestion = ({
  repayment,
  setRepayment,
}: ThirdQuestionProps) => {
  const navigate = useNavigate();

  const handleClick = (loan: string) => {
    setRepayment(loan);
    navigate("/diagnosis-midori/form");
  };

  return (
    <>
      <Question
        question="Q3.返済について教えてください"
        firstBtn="支払いができる"
        secondBtn="できれば減らしたい"
        thirdBtn="支払いができない"
        fourthBtn="一旦相談したい"
        onClickFirst={() => handleClick("支払いができる")}
        onClickSecond={() => handleClick("できれば減らしたい")}
        onClickThird={() => handleClick("支払いができない")}
        onClickFourth={() => handleClick("一旦相談したい")}
        data={repayment}
      />
    </>
  );
};
