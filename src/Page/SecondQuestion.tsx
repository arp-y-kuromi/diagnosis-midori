import { Dispatch, SetStateAction, useEffect } from "react";
import { Question } from "./Question/Question";

type SecondQuestionProps = {
  loanPeriod: string;
  setLoanPeriod: Dispatch<SetStateAction<string>>;
  setSecondOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setThirdOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SecondQuestion = ({
  loanPeriod,
  setLoanPeriod,
  setSecondOpen,
  setThirdOpen,
}: SecondQuestionProps) => {
  const handleClick = (loan: string) => {
    setLoanPeriod(loan);
    setSecondOpen(false);
    setThirdOpen(true);
  };

  useEffect(() => {
    console.log(loanPeriod);
  }, [loanPeriod]);

  return (
    <>
      <Question
        question="Q2.借入期間を教えてください"
        firstBtn="0~3ヶ月未満"
        secondBtn="3ヶ月~1年未満"
        thirdBtn="1年未満~6未満"
        fourthBtn="6年以上"
        onClickFirst={() => handleClick("0~3ヶ月未満")}
        onClickSecond={() => handleClick("3ヶ月~1年未満")}
        onClickThird={() => handleClick("1年未満~6未満")}
        onClickFourth={() => handleClick("6年以上")}
        data={loanPeriod}
      />
    </>
  );
};
