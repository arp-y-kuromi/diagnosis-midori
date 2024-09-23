import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TopPage } from './Page/TopPage/TopPage';
import TwoPage from './Page/TopPage/Twopage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage
          question="Q1.現在の借入金額を教えてください"
          firstBtn="0~49万円"
          secondBtn="50~99万円"
          thirdBtn="100~199万円"
          fourthBtn="200万円以上"
        />} />
      </Routes>
    </Router>
  );
};

export default App;
