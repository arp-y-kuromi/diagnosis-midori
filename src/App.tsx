import { Header } from "./Header/Header";
import { TopPage } from "./Page/TopPage/TopPage";
import img_FV from "./Image/img_FV.png";

function App() {
  // こうへいちゃん
  return (
    <>
      <img src={img_FV} alt="説明文" />
      <Header headerTitle="司法書士法人みどり法務事務所" />
      <TopPage firstQuestion="Q1.現在の借入金額を教えてください" />
    </>
  );
}

export default App;
