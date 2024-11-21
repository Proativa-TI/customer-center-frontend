import { SxProps, Theme } from "@mui/material";

export const loginStyles: Record<string, SxProps<Theme>> = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  box: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
  },
  formBox: {
    width: 400,
    textAlign: "center",
    backgroundColor: "#F1F1F1",
    padding: 3,
    borderRadius: 2,
    marginBottom: 15,
  },
  textField: {
    backgroundColor: "#FFFFFF",
    width: 300,
  },
  button: {
    marginBottom: 2,
    width: 150,
    backgroundColor: "#F26130",
    padding: 1,
  },
  dividerBox: {
    width: 400,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "60px",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  footerImgLeft: {
    width: "auto",
    height: "20px",
    textAlign: "left",
    justifyContent: "left",
  },
  footerImgRight: {
    width: "auto",
    height: "100px",
    textAlign: "right",
    justifyContent: "right",
  },
};
