// 返済期間や、返済状況などのボタン
type Props = {
  name: string;
  onClick?: () => void;
};

const btnStyle = {
  border: "1px solid #3b82f6",
  backgroundColor: "#3b82f6",
  color: "white",
  transition: "background-color 300ms, color 300ms",
  padding: "1rem 2rem",
  fontSize: "1.5rem",
  borderRadius: "0.25rem",
};

export const Btn = ({ name, onClick }: Props) => {
  return (
    <>
      <button style={btnStyle} onClick={onClick}>
        {name}
      </button>
    </>
  );
};
