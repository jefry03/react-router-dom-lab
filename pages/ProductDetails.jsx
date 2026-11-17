import { useParams } from "react-router"
import axios from 'axios'
import { useState, useEffect } from "react"
function productDetails() {
    const [ product, setProduct ] = useState(null)

    const { productId } = useParams()
    console.log(productId)

    async function getProducts(){
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${productId}`)
        console.log(response.data)
        setProduct(response.data)
    }

    useEffect(()=>{
        getProducts()
    },[])

    

  return (
    <div>
        <h1>product Details</h1>
        {product ? 
        <>
            <p>title: {product.title}</p>
            <p>description: {product.description}</p>
            <p>category: {product.category}</p>
             <p>price: {product.price}</p>
             <p>quantity: {product.quantity}</p>
        </>
         : null}
        
    </div>
  )
}

export default productDetails