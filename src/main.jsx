import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import DeliveryProgress from './pages/DeliveryProgress';
import FaqPage from './pages/FaqPage.jsx';
import MainLayout from "./layouts/MainLayout";
import SingleProductPage from './pages/SingleProductPage.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
