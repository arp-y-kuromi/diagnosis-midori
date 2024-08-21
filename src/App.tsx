import { Header } from "./Header/Header";
import { TopPage } from "./Page/TopPage/TopPage";

function App() {
  // こうへいちゃん
  return (
    <>
      <Header headerTitle="司法書士法人みどり法務事務所" />
      <TopPage firstQuestion="Q1.現在の借入金額を教えてください" />
    </>
  );
}

export default App;
