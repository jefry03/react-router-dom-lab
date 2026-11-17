import axios from 'axios'
import {useState , useEffect} from 'react'
import { Link } from "react-router"
function productsList(){
const [products , setProducts] = useState([])
async function getAllProducts(){
        const response = await axios.get('https://products-api-164h.onrender.com/products')
        console.log(response.data)
    setProducts(response.data)
}       
   useEffect(()=>{
        getAllProducts()
     } , [])
    return (
        <div>
         <h2>All products</h2>
         {products.map((oneProducts)=>
          <><p>title:{oneProducts.title}</p><Link to={`/products/${oneProducts._id}`}>See Details</Link></>
        )}
        </div>
    )
} 
export default productsList