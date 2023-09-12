import './app.css';
import Header from './components/header/Header';
import Sidebar from './components/slidebar/Sidebar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import { useState } from 'react';


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const OpenSideBar = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div className="grid-container">
      <Header OpenSideBar={OpenSideBar} />
      <Sidebar isOpen={isOpen} OpenSideBar={OpenSideBar} />
      <Footer />
      <Home />
    </div >
  );
}

export default App;
