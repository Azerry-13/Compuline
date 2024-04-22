import MainBannerButton from "./components/Mainbannerbuttonblue";
import MainProducts from "./components//MainProducts";

function Products() {
  return (
    <>
      <div className="products">
        <MainBannerButton
          bannerHeading="Products"
          bannerText="Compuline will prove particularly useful to you if you seek to work with products from the categories of computer and household appliances, office equipment, and complex systems."
        />
        <MainProducts />
      </div>
    </>
  );
}

export default Products;
