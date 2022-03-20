import { HOME_CONTENT, BEATS } from "../../development/Data";
import { ProductOverviewWrapper } from "./Home.styles";
import ImageSlider from "../../components/slider/ImageSlider";
import { Link as DomLink } from "react-router-dom";

const ProductOverview = () => {
  return (
    <ProductOverviewWrapper id="beats">
      <h1 style={{ margin: "0 auto 1em auto" }}>
        {HOME_CONTENT.product_overview_title}
      </h1>
      <ImageSlider products={BEATS} slidesToShow={3} />

      <div className="button-container">
        <DomLink to="/products">
          <button className="button button-primary">
            Gå til oversikt over alle beats
          </button>
        </DomLink>
      </div>
    </ProductOverviewWrapper>
  );
};

export default ProductOverview;
