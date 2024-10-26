import { useState } from "react";

// 返済期間や、返済状況などのボタン
type Props = {
  name: string;
  onClick?: () => void;
  btnNumber?: string;
};

export const Btn = ({ name, onClick, btnNumber }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const btnStyle: Record<string, any> = {
    border: "1px solid #3b82f6",
    backgroundColor: "#3b82f6",
    color: "white",
    transition: "background-color 300ms, color 300ms",
    padding: "1rem 2rem",
    fontSize: "1.5rem",
    borderRadius: "0.25rem",
    whiteSpace: "nowrap",
    width: "100%",
    boxShadow: isHovered ? "none" : "0 4px 0 #0000BB",
    transform: isHovered ? "translateY(4px)" : "none",
    "@media (maxWidth: 500px)": {
      padding: "0.25rem 0.5rem", // モバイル用にさらに小さく
      fontSize: "0.8rem",
    },
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
