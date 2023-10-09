import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//les composants des pages
import Header from './components/header/Header';
import Sidebar from './components/slidebar/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import { useState } from 'react';

// Les pages principales
import Products from './pages/products/ProductPage';
import ProductList from './pages/productList/ProductListPage';
import Categorie from './pages/categories/CategoriesPage';
import Promo from './pages/promo/PromoPage';

import Sell from './pages/sell/SellPage';
import Customers from './pages/customers/CustermersPage';
import Inventory from './pages/inventory/InventoryPage';
import Rapports from './pages/rapports/RapportPage';
import Setting from './pages/setting/SettingPage';


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const OpenSideBar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="grid-container">
      <Router>
        <Header OpenSideBar={OpenSideBar} />
        <Sidebar isOpen={isOpen} OpenSideBar={OpenSideBar} />
        <Footer />
        <Routes>
          <Route path='/' element={<Dashboard />} />

          <Route path='/products' element={<Products />} />
          {/* Onglet imbriquer dans la page product */}
          <Route path='/list' element={<ProductList />} />
          <Route path='categorie' element={<Categorie />} />
          <Route path='promo' element={<Promo />} />

          <Route path='/sell' element={<Sell />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/rapports' element={<Rapports />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </Router>

    </div >
  );
}

export default App;
