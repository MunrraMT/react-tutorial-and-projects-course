import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar, Sidebar } from './base/components';

import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  ProductsPage,
  SingleProductPage,
} from './base/pages';

const App = () => (
  <>
    <Navbar />
    <Sidebar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />

      <Route path="/products/:id" element={<SingleProductPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
    <Footer />
  </>
);

export default App;
