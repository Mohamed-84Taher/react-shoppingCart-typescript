import { styled } from "@mui/material";

export const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  fontFamily: "Arial,Helvetica,sans-serif",
  borderBottom: "1px solid lightblue",
  paddingBottom: "20px"
});
export const InformationDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between"
});
export const ImgItem = styled("img")({
  maxWidth: "80px",
  objectFit: "cover",
  marginRight: "20px"
});
