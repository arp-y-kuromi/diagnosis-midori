import { Box, Card } from "@mui/material";
import {
  formPosition,
  pagePosition,
  questionBtn,
  questionTitle,
} from "./style";
import { Btn } from "../const";

type TopPageProps = {
  firstQuestion: string;
  a:string
  b:string
  c:string
  d:string
};
// test
export const TopPage = ({ firstQuestion,a,b,c,d }: TopPageProps) => {
  const test = () => {
console.log("kohei");
 }  
 return (
    <>
      <Box sx={pagePosition}>
        <Card sx={formPosition}>
          <div style={questionTitle}>{firstQuestion}</div>
          <div style={questionBtn}>
            <Btn name={a} onClick={test} /> <Btn name={b} />
            <Btn name={c} /> <Btn name={d} />
          </div>
        </Card>
      </Box>
    </>
  );
};
