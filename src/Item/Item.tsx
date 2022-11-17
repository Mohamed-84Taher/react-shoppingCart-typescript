import { Button } from "@mui/material";
//styles
import { Img, ItemWrapper, MyDiv } from "./Item.styles";
//types
import { CartItemType } from "../App";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <ItemWrapper>
    <Img
      src={item.image}
      alt={item.title}
    />
    <MyDiv>
      <h3>{item.title}</h3>
      <p>{item.description.substring(0, 100)} ........</p>
      <h3>${item.price}</h3>
    </MyDiv>
    <Button
      sx={{ bg: "#bdbdbd", color: "black" }}
      onClick={() => handleAddToCart(item)}>
      Add To Cart
    </Button>
  </ItemWrapper>
);

export default Item;
