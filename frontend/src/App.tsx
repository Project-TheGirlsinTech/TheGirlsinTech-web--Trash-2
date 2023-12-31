import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home/Home';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import OrderDetail from './Orders/OrderDetail';
import PaymentScreeen from './Payment/Payment';
import "./App.css";


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };

  return (
    <Router>
      <div className="App">
        <div className="grid-container">
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>&#9776;</button>
              <a href="index.html">The Girls In Tech</a>
            </div>
            <div className="header-links">
              <Link to="/">Home</Link>
              <Link to="/catalog">Catalog</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/payment">Payment</Link>
              <Link to="/fulfillment">Fulfillment</Link>
            </div>
          </header>
          <div>
            <aside className="sidebar">
              <h3>Shopping Categories</h3>
              <button className="sidebar-close-button" onClick={closeMenu}>
                x
              </button>
              <ul>
                <li>
                  <a href="index.html">Pants</a>
                </li>

                <li>
                  <a href="index.html">Shirts</a>
                </li>
              </ul>
            </aside>
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Products />} />
                <Route path="orders" element={<Orders />}></Route>
                <Route path="/order/:id" element={<OrderDetail />}></Route>
                <Route path="payment" element={<PaymentScreeen />}/>
              </Routes>
            </main>
            <footer>&copy; 2023 The Girls In Tech</footer>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;