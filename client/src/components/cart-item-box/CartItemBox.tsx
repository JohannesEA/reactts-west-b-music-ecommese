import { AiOutlineDelete } from "react-icons/ai";
import { Product } from "../../types/Product";
import { Wrapper } from "./CartItemBox.styles";

interface ICartItemBox {
  product: Product;
}

const CartItemBox = ({ product }: ICartItemBox) => {
  return (
    <Wrapper>
      <img
        className={"cart-product-img"}
        src={product.image}
        alt={product.title}
      />
      <h4>{product.title}</h4>
      <p>Pris: {product.price} kr</p>

      <AiOutlineDelete size={25} color="red" />
    </Wrapper>
  );
};

export default CartItemBox;
