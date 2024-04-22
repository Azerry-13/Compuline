import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Products from "./Products";
import NotFound from "./NotFound";
import VendorsPartners from "./VendorsPartners";
import Contacts from "./Contacts";
import HeaderMobile from "./components/HeaderMobile";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <HeaderMobile />
        <Footer />
      </div>
      <Routes>
        <Route path="/Compuline/home" element={<Main />} />
        <Route path="/Compuline/about" element={<About />} />
        <Route path="/Compuline/products" element={<Products />} />
        <Route path="/Compuline/vendorspartners" element={<VendorsPartners />} />
        <Route path="/Compuline/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
