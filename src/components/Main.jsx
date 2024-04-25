import "../App.css";
import MainBannerButton from "./Mainbannerbuttonwhite";
import MainProducts from "./MainProducts";
import Headline from "./BlockHeadline";
import Form from "./Form";

function Main() {
  return (
    <>
      <div className="main">
        <MainBannerButton
          bannerHeading="High Quality. Reliability. Technologies"
          bannerText="Leading distributor of consumer electronics and home appliances
            offering a wide selection of products and services"
        />
        <Headline
          heading="Products"
          button="Go to catalog"
          paragraph="Compuline offers a wide range of products that will help meet business needs in many market segments."
        />
        <MainProducts />
        <Headline
          heading="Partners"
          button="Become a partner"
          paragraph="Compuline is committed to long-term relationships, so it extends full and comprehensive support to partners at all stages."
        />
        <Form />
      </div>
    </>
  );
}

export default Main;
