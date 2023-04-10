import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatInterface from "./Component/Chat";
import Home from "./Component/Home";
import User from './Component/User';

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/user" element={ <User />}></Route>
              <Route path="/chat" element={ <ChatInterface /> }></Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
