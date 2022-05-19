import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./routes/Homepage";
import Account from "./routes/Account";
import Contact from "./routes/Contact";
import { Link } from "react-router-dom";
import "../src/css/homepage.css"
import ContactDetails from "./routes/ContactDetails";

function App() {
  return (
    <BrowserRouter>
       <nav>
        <Link to= "/" > Home</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/account" >Account</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<Account />}></Route>
          <Route path = "/contact/:id" element = {<ContactDetails/>} ></Route>
          <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Outlet/>
    </BrowserRouter>
  );
}

export default App;
