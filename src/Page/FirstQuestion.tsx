import { Question } from "./Question/Question";
import { Dispatch, SetStateAction } from "react";

type FirstQuestionProps = {
  loanAmount: string;
  setLoanAmount: Dispatch<SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSecondOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FirstQuestion = ({
  loanAmount,
  setLoanAmount,
  setOpen,
  setSecondOpen,
}: FirstQuestionProps) => {
  const handleClick = (loan: string) => {
    setLoanAmount(loan);
    setOpen(false);
    setSecondOpen(true);
  };

  return (
    <>
      <Question
        question="Q1.現在の借入金額を教えてください"
        firstBtn="0~49万円"
        secondBtn="50~99万円"
        thirdBtn="100~199万円"
        fourthBtn="200万円以上"
        onClickFirst={() => handleClick("0~49万円")}
        onClickSecond={() => handleClick("50~99万円")}
        onClickThird={() => handleClick("100~199万円")}
        onClickFourth={() => handleClick("200万円以上")}
        data={loanAmount}
      />
    </>
  );
};
