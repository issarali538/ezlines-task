import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css'
import Header from './components/Header'
import BrowseBuyExport from './components/BrowseBuyExport';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
        <Header />
        <MainContent />
        <BrowseBuyExport />
    </div>
  );
}

export default App;
