import { Routes, Route } from "react-router"
import ProductList from "../pages/ProductList"
import ProductDetails from "../pages/ProductDetails"
import CreateProduct from "../pages/CreateProduct"
import NavBar from "../components/NavBar"
import Homepage from "../pages/Homepage"
function App() {
  return (
    <div>
      <NavBar/>
       <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/new-product" element={<CreateProduct/>}/>
        <Route path="/products/:productId" element={<ProductDetails/>}/>
         </Routes>
    </div>
  )
}

export default App
