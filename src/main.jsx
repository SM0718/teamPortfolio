import React from 'react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ContactForm from './pages/ContactForm.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ServiceDesc from './pages/ServiceDesc.jsx'
import PricingSection from './pages/PricingSection.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home /> } />
      <Route path='/about' element={<AboutUs /> } />
      <Route path='/contact' element={<ContactForm /> } />
      <Route path='/services' element={<ServicesPage /> } />
      <Route path='/portfolio/:position' element={<PortfolioPage /> } />
      <Route path='/services/:serviceId' element={<ServiceDesc /> } />
      <Route path='/pricing' element={<PricingSection /> } />
    </Route>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
)
