import { useState } from "react";
import axios from "axios";

function CreatProducts() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    quantity:""
  });

   function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value })
  }


  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://products-api-164h.onrender.com/products",
        formData
      );
      console.log(response.data);

      setFormData({
        title: "",
        description: "",
        category: "",
        price: "",
        quantity:""
      });
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }

  return (
    <div>
      <h1>Create products</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor="quantity">quantity</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />

        <button type="submit">Create products</button>
      </form>
    </div>
  );
}

export default CreatProducts;