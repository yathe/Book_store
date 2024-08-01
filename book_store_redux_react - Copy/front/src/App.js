import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Slide from './Components/Slide';
import Accor from './Components/Accor';
import Footer from './Components/Footer';
import PrivateComponent from './Components/PrivateComponent';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import CardsDetails from './Components/CardsDetails'; // Make sure this import is correct
import Cards from './Components/Cards';
import AddressForm from './Components/AddressForm';
import OrderStatus from './Components/OrderStatus';
import CategoryPage from './Components/CategoryPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<>
              <Slide />
              <Cards />
              <Accor />
              <Footer />
            </>} />
            <Route path="/cart/:id" element={<CardsDetails />} />
            <Route path="/address" element={<AddressForm />} />
            <Route path="/order" element={<OrderStatus />} />
            <Route path="/category/:genre" element={<CategoryPage />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


