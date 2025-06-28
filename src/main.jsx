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
import AuthPages from './pages/AuthPages.jsx';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage.jsx';
import { ResetPasswordPage } from './pages/ResetPasswordPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import ServiceBookingPage from './pages/ServiceBookingPage.jsx';

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
            <Route path="/auth" element={<AuthPages />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/services/:id" element={<ServiceDetailsPage />} />
            <Route path="/services/:id/book" element={<ServiceBookingPage />} />




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
