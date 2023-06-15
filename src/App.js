import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css'
import Header from './components/Header'
import BrowseBuyExport from './components/BrowseBuyExport';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import AOS from 'aos';
import { useEffect } from 'react';

function App() {

  useEffect(()=> {AOS.init()},[])
  
  return (
    <div className="App">
        <Header />
        <MainContent />
        <BrowseBuyExport />
        <Footer />
    </div>
  );
}

export default App;
