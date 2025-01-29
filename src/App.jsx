import React, { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
function App() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner of the page
  }, [pathname]);
  return (
    <div className='flex flex-col'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App