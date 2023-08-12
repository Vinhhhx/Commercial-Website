import React from 'react';
import './App.css';
import {BrowserRouter, Routes , Route } from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import CompareProducts from './pages/CompareProducts';
import WishList from './pages/WishList';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndCondition from './pages/TermAndCondition';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="product" element={<OurStore/>} />
          <Route path="product/:id" element={<SingleProduct/>} />
          <Route path="blogs" element={<Blogs/>} />
          <Route path="blog/:id" element={<SingleBlog/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path="checkout" element={<Checkout/>} />
          <Route path="compare-product" element={<CompareProducts/>} />
          <Route path="wishlist" element={<WishList/>} />
          <Route path="login" element={<Login/>} />
          <Route path="forgot-password" element={<ForgotPassword/>} />
          <Route path="signup" element={<SignUp/>} />
          <Route path="reset-password" element={<Resetpassword/>} />
          <Route path="privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="refund-policy" element={<RefundPolicy/>} />
          <Route path="shipping-policy" element={<ShippingPolicy/>} />
          <Route path="term-and-conditions" element={<TermAndCondition/>} />


        </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App;
