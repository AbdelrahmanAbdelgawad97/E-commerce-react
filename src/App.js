import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import Footer from "./Components/Utility/Footer";
import LoginPage from "./pages/Authe/LoginPage";
import RegisterPage from "./pages/Authe/RegisterPage";
import AllCategoryPage from "./pages/Category/AllCategoryPage";
import AllBrand from "./Components/Brands/AllBrand";
import ShopProductPage from "./pages/Products/ShopProductPage";
function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/login" element={<LoginPage/>}/> 
        <Route path="/register" element={<RegisterPage/>}/> 
        <Route path="/allcategory" element={<AllCategoryPage/>}/> 
        <Route path="/allbrand" element={<AllBrand/>}/>
        <Route path="/shopproduct" element={<ShopProductPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
