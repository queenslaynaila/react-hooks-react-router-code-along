import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./Components/Home"
import About from "./Components/About"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Messages from "./Components/Messages"









ReactDOM.render(
  <BrowserRouter>
   <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/signup" element={<Signup></Signup>}></Route>
    <Route path="/messages" element={<Messages></Messages>}></Route>
  </Routes>
  </BrowserRouter>,

 document.getElementById("root")
 );
