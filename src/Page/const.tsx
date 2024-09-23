import { useState } from "react";

// 返済期間や、返済状況などのボタン
type Props = {
  name: string;
  onClick?: () => void;
  btnNumber?: string;
};

export const Btn = ({ name, onClick, btnNumber }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const btnStyle = {
    border: "1px solid #3b82f6",
    backgroundColor: "#3b82f6",
    color: "white",
    transition: "background-color 300ms, color 300ms",
    padding: "1rem 2rem",
    fontSize: "1.5rem",
    borderRadius: "0.25rem",
    boxShadow: isHovered ? "none" : "0 4px 0 #0000BB",
    transform: isHovered ? "translateY(4px)" : "none",
  };

  return (
    <button
      style={btnStyle}
      onClick={onClick}
      id={btnNumber}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
    </button>
  );
};
