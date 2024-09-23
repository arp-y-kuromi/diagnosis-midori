import { Dispatch, SetStateAction, useEffect } from "react";
import { Question } from "./Question/Question";

type ThirdQuestionProps = {
  repayment: string;
  setRepayment: Dispatch<SetStateAction<string>>;
  setThirdOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThirdQuestion = ({
  repayment,
  setRepayment,
  setThirdOpen,
}: ThirdQuestionProps) => {
  const handleClick = (loan: string) => {
    setRepayment(loan);
    setThirdOpen(false);
  };

  useEffect(() => {
    console.log(repayment);
  }, [repayment]);

  return (
    <>
      <Question
        question="Q3.返済について教えてください"
        firstBtn="支払うことができる"
        secondBtn="できれば減らしたい"
        thirdBtn="支払いができない"
        fourthBtn="一旦相談したい"
        onClickFirst={() => handleClick("支払うことができる")}
        onClickSecond={() => handleClick("できれば減らしたい")}
        onClickThird={() => handleClick("支払いができない")}
        onClickFourth={() => handleClick("一旦相談したい")}
        data={repayment}
      />
    </>
  );
};
