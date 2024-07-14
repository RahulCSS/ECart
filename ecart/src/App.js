import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NavBar from './Components/NavBar';
import { Provider } from 'react-redux';
import store from './Store/Store';

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
