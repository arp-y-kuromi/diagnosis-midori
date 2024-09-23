import { Box, Card } from "@mui/material";
import {
  formPosition,
  pagePosition,
  questionBtn,
  questionTitle,
} from "./style";
import { Btn } from "../const";
import img_midori_FV from "../../Image/img_midori_FV.png";
import { useNavigate } from 'react-router-dom';


type TopPageProps = {
  question: string;
  firstBtn: string;
  secondBtn: string;
  thirdBtn: string;
  fourthBtn: string;
};

export const TopPage: React.FC<TopPageProps> = ({
  question,
  firstBtn,
  secondBtn,
  thirdBtn,
  fourthBtn,
}) => {
  const navigate = useNavigate();

  // ボタンがクリックされたときに呼ばれる関数
  const handleClick = (buttonText: string) => {
    // ボタンに対応するパラメータを指定して遷移
    navigate(`/twoPage?param=${encodeURIComponent(buttonText)}`);
  };

  return (
    <Box sx={pagePosition}>
      <img src={img_midori_FV} alt="質問" style={{ marginTop: '80px' }} />
      <Card sx={formPosition}>
        <div style={questionTitle}>{question}</div>
        <div style={questionBtn}>
          <Btn name={firstBtn} onClick={() => handleClick(firstBtn)} />
          <Btn name={secondBtn} onClick={() => handleClick(secondBtn)} />
          <Btn name={thirdBtn} onClick={() => handleClick(thirdBtn)} />
          <Btn name={fourthBtn} onClick={() => handleClick(fourthBtn)} />
        </div>
      </Card>
    </Box>
  );
};
