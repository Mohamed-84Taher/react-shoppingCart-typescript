import { styled, Box } from "@mui/material";

export const Img = styled("img")({
  height: " 250px",
  objectFit: "cover",
  borderRadius: "20px 20px 0 0"
});
export const MyButton = styled("button")({
  borderRadius: "0 0 20px 20px"
});
export const MyDiv = styled("div")({
  fontFamily: "Arial, Helvetica,sans-serif",
  padding: "1rem"
  /*   height: "100px" */
});
export const ItemWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  width: "100%",
  border: "1px solid lightblue",
  borderRadius: "20px"
});
