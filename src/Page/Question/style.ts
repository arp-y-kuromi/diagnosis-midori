import img_midori from "../../Image/img_midori-bg.png";

export const pagePosition = {
  backgroundImage: `url(${img_midori})`,
  backgroundSize: "100% 90%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
};

export const formPosition: Record<string, any> = {
  width: "600px",
  height: "auto",
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  padding: "50px",
  gap: "1rem",
};

export const questionTitle = {
  padding: "10px",
  fontSize: "18px",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
};

export const questionBtn: Record<string, any> = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "1rem",
  "@media (maxWidth: 500px)": {
    gridTemplateColumns: "repeat(1, minmax(0, 0,5fr))",
  },
};
