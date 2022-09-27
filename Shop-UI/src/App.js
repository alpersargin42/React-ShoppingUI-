import Navbar from "./Navbar"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </>
  )
}

export default App
