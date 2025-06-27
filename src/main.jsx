import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import DeliveryProgress from './pages/DeliveryProgress.jsx';
import FaqPage from './pages/FaqPage.jsx';
import SingleProductPage from './pages/SingleProductPage.jsx';
import CartPage from './pages/CartPage.jsx';
import BillingPage from './pages/BillingPage.jsx';
import PaymentPage from './pages/PaymentPage.jsx';
import OrderCompletePage from './pages/OrderCompletePage.jsx';

import MainLayout from './layouts/MainLayout.jsx';
import { CartProvider } from './context/CartContext.jsx';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<SingleProductPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/delivery" element={<DeliveryProgress />} />

            {/* 🛒 Cart Flow Routes */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/cart/billing" element={<BillingPage />} />
            <Route path="/cart/billing/payment" element={<PaymentPage />} />
            <Route path="/cart/billing/payment/complete" element={<OrderCompletePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
