import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
