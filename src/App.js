import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import About from './pages/About';
import Services from './pages/Services';
import Product from './pages/Product';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Product/>

    </div>
  );
}

export default App;
