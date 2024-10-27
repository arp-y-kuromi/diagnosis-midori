import img_midori from "../../Image/img_midori-bg.png";

export const pagePosition = {
  backgroundImage: `url(${img_midori})`,
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
};

export const formPosition = {
  width: "600px",
  height: "auto",
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  padding: "50px",
  gap: "1rem",
  "@media (max-width: 750px)": {
    width: "400px",
  },
  "@media (max-width: 540px)": {
    width: "330px",
    padding: "20px",
  },
  "@media (max-width: 430px)": {
    width: "300px",
    padding: "10px",
  },
};

export const questionTitle = {
  padding: "10px",
  fontSize: "18px",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  "@media (max-width: 540px)": {
    fontSize: "14px",
  },
};

export const questionBtn = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "1rem",
};
