import Header from "./components/Header"
import Footer from './components/Footer';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Products from './components/Products';
import Frequent from './components/Frequent';
import { trees } from './data/trees';
import Single from './components/Single';
import Login from './components/Login';
import Cart from './components/Cart';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/FAQ' element={<Frequent />} />
          <Route path='/products' element={<Products data={trees} />} />
          <Route path='/single/:id' element={<Single />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
