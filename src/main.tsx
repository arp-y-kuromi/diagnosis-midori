import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./MainPage";
import { Form } from "./Form/Form";
import { SentSuccess } from "./SentSuccess/SentSuccess";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/diagnosis-midori/" element={<MainPage />} />
      <Route path="/diagnosis-midori/form" element={<Form />} />
      <Route path="/diagnosis-midori/success" element={<SentSuccess />} />
    </Routes>
  </Router>
);
