import { HOME_CONTENT, BEATS } from "../../development/data";
import { ProductOverviewWrapper } from "./Home.styles";
import ImageSlider from "../../components/slider/ImageSlider";

const ProductOverview = () => {
  return (
    <ProductOverviewWrapper id="beats">
      <h1 style={{ margin: "0 auto 1em auto" }}>
        {HOME_CONTENT.product_overview_title}
      </h1>
      <ImageSlider products={BEATS} slidesToShow={3} />
    </ProductOverviewWrapper>
  );
};

export default ProductOverview;
