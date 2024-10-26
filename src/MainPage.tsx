import { FirstQuestion } from "./Page/FirstQuestion";
import { SecondQuestion } from "./Page/SecondQuestion";
import { ThirdQuestion } from "./Page/ThirdQuestion";
import { Box, Card } from "@mui/material";
import { formPosition, pagePosition } from "./Page/Question/style";
import img_midori_FV from "./Image/img_midori_FV.png";
import { useState } from "react";
import { useAtom } from "jotai";
import { loanAmountAtom, loanPeriodAtom, repaymentAtom } from "./Atom/Atom";

export const MainPage = () => {
  // 質問の状態を管理
  const [loanAmount, setLoanAmount] = useAtom(loanAmountAtom);
  const [loanPeriod, setLoanPeriod] = useAtom(loanPeriodAtom);
  const [repayment, setRepayment] = useAtom(repaymentAtom);

  const [open, setOpen] = useState(true);
  const [secondOpen, setSecondOpen] = useState(false);
  const [thirdOpen, setThirdOpen] = useState(false);

  return (
    <>
      <Box sx={pagePosition}>
        <img src={img_midori_FV} alt="質問" style={{ marginTop: "80px" }} />
        <Card
          sx={{
            ...formPosition,
            "@media (max-width: 750px)": {
              width: "400px",
            },
            "@media (max-width: 500px)": {
              width: "300px",
            },
            "@media (max-width: 430px)": {
              width: "200px",
            },
          }}
        >
          {open && (
            <FirstQuestion
              loanAmount={loanAmount}
              setLoanAmount={setLoanAmount}
              setOpen={setOpen}
              setSecondOpen={setSecondOpen}
            />
          )}
          {secondOpen && (
            <SecondQuestion
              loanPeriod={loanPeriod}
              setLoanPeriod={setLoanPeriod}
              setSecondOpen={setSecondOpen}
              setThirdOpen={setThirdOpen}
            />
          )}
          {thirdOpen && (
            <ThirdQuestion repayment={repayment} setRepayment={setRepayment} />
          )}
        </Card>
      </Box>
    </>
  );
};
