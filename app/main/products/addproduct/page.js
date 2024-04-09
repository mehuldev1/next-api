"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


function page() {
    const [productName, setProductName] = useState('');
    const router = useRouter()

    const handleSubmit = async (e) => {
        const payload = {
            name : productName
        }
      e.preventDefault();
      const data = await axios.post('http://localhost:3001/api/products',payload)
      setProductName(''); 
      router.push('/main/products')
    };
  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="productName">Product Name:</label>
    <input
      type="text"
      id="productName"
      value={productName}
      onChange={(e) => setProductName(e.target.value)}
      required
    />
    <button type="submit">Add Product</button>
  </form>
  )
}

export default page