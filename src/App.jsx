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
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <HeaderMobile />
        <Footer />
      </div>
      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/vendorspartners" element={<VendorsPartners />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
