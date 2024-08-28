import { Header } from "./Header/Header";
import { TopPage } from "./Page/TopPage/TopPage";
import img_FV from "./Image/img_FV.png";

function App() {
  return (
    <>
      <img src={img_FV} alt="説明文" />
      <Header headerTitle="グリーン司法書士法人" />
      <TopPage firstQuestion="Q1.現在の借入金額を教えてください" a="10万" b="30万" c="50万" d="100万" />
      <TopPage firstQuestion="Q2.現在の借入期間を教えてください"  a="1年未満" b="10年" c="50年" d="100年" />
    </>
  );
}

export default App;
