import "./style.css";
type TestTextType = {
  placeholder: string;
  name: string;
};
export const TestText = ({ placeholder, name }: TestTextType) => {
  return (
    <>
      <div className="form-group">
        <input type="text" name={name} placeholder={placeholder} />
      </div>
    </>
  );
};
