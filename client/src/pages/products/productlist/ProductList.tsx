//hooks
import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

//Components

//Styles
import { Wrapper, ProductListContainer } from "./ProductList.styles";
import { Input } from "../../../style/forms";

//types
import { Product } from "../../../types/product";
import ProductBox from "../../../components/product-box/ProductBox";

type Props = {
  addToCart: (clickedItem: Product) => void;
};

const ProductList: React.FC<Props> = ({ addToCart }) => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([] as Product[]);

  const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `https://westbmusic.herokuapp.com/api/products?category=${category.toLowerCase()}`
            : "https://westbmusic.herokuapp.com/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);

  return (
    <Wrapper id="hero">
      <h1>Beats</h1>
      <Input
        onChange={handleChangeCategory}
        placeholder="søk etter kategori.. eks: hiphop"
      ></Input>
      <ProductListContainer>
        {products?.map((beat) => (
          <ProductBox
            key={beat.title}
            clickedItem={beat}
            addToCart={addToCart}
          />
        ))}
      </ProductListContainer>
    </Wrapper>
  );
};

export default ProductList;
