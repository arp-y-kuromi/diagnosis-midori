import { FirstQuestion } from "./Page/FirstQuestion";
import { SecondQuestion } from "./Page/SecondQuestion";
import { ThirdQuestion } from "./Page/ThirdQuestion";
import { Box, Card } from "@mui/material";
import { formPosition, pagePosition } from "./Page/Question/style";
import img_midori_FV from "./Image/img_midori_FV.png";
import { useState } from "react";

export const MainPage = () => {
  // 質問の状態を管理
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [repayment, setRepayment] = useState("");

  const [open, setOpen] = useState(true);
  const [secondOpen, setSecondOpen] = useState(false);
  const [thirdOpen, setThirdOpen] = useState(false);

  return (
    <>
      <Box sx={pagePosition}>
        <img src={img_midori_FV} alt="質問" style={{ marginTop: "80px" }} />
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
    </>
  );
};
