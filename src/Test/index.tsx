import { TestText } from "./components/TestText";
import "./style.css";

export const Test = () => {
  return (
    <>
      <div className="testForm">
        <div>test</div>
        <form>
          <TestText placeholder="名前" name="name" />
          <TestText placeholder="郵便" name="post" />
          <TestText placeholder="住所" name="address" />
          <TestText placeholder="電話" name="tel" />

          <div className="form-group">
            <button type="submit">送信</button>
          </div>
        </form>
      </div>
    </>
  );
};
