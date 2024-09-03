import { Box } from "@mui/material";
import { Header } from "./Header/Header";
import { TopPage } from "./Page/TopPage/TopPage";

export const App = () => {
  const handleClick = () => {};
  return (
    <>
      <Header headerTitle="司法書士法人みどり法務事務所" />
      <TopPage
        question="Q1.現在の借入金額を教えてください"
        firstBtn="0~49万円"
        secondBtn="50~99万円"
        thirdBtn="100~199万円"
        fourthBtn="200万円以上"
      />
    </>
  );
};
