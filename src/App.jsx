import Navbar from "./components/Navbar"
import Login from "./components/Login";
import Signup from "./components/Signup";
import Wishlist from "./Wishlist";
import Home from "./Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
      </Routes>
    </Router>
  )
}

export default App
