import { Button } from "@mui/material";
//types
import { CartItemType } from "../App";
//styles
import { ImgItem, InformationDiv, Wrapper } from "./CartItem.styles";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <InformationDiv>
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </InformationDiv>
      <InformationDiv>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}>
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}>
          +
        </Button>
      </InformationDiv>
    </div>
    <ImgItem
      src={item.image}
      alt={item.title}
    />
  </Wrapper>
);

export default CartItem;
