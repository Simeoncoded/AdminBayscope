import React from "react";
import Sidebar from "./components/Sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
