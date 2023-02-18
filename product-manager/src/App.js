import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route element={<ProductForm/>} path="/" />
          <Route element={<ProductDetail/>} path="/:id" />
      </Routes>
    </BrowserRouter>                           
  </div>
  );
}

export default App;
