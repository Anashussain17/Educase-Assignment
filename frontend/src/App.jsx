import {Routes,Route} from "react-router-dom"
// pages
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <>
   
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/dashboard/:email" element={<Dashboard/>}></Route>
   </Routes>
   
      
    </>
  )
}

export default App
