import { FirstQuestion } from "./Page/FirstQuestion";
import { SecondQuestion } from "./Page/SecondQuestion";
import { ThirdQuestion } from "./Page/ThirdQuestion";
import { Box, Card } from "@mui/material";
import { formPosition, pagePosition } from "./Page/Question/style";
import { useState } from "react";
import { useAtom } from "jotai";
import { loanAmountAtom, loanPeriodAtom, repaymentAtom } from "./Atom/Atom";
import img_midori_FV from "./Image/img_midori_FV.png";
import { Footer } from "./Footer/Footer";

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
        <Box
          sx={{
            backgroundImage: `url(${img_midori_FV})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            width: "100%",
            height: "160px",
            "@media (max-width: 650px)": {
              width: "90%",
              height: "120px",
            },
            "@media (max-width: 480px)": {
              height: "80px",
            },
          }}
        />
        <Card sx={formPosition}>
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
      <Footer />
    </>
  );
};
