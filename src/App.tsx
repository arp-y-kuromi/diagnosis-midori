import { TopPage } from "./Page/TopPage/TopPage";
import { Header } from "./Header/Header";

export const App = () => {
  const handleClick = () => {};
  return (
    <>
      <Header headerTitle="qqqq司法書士法人みどり法務事務所" />
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
