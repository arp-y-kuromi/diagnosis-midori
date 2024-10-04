import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./MainPage";
import { Form } from "./Form/Form";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/diagnosis-midori/" element={<MainPage />} />
      <Route path="/diagnosis-midori/form" element={<Form />} />
    </Routes>
  </Router>
);
