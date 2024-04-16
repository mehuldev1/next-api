"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


function Page(props) {
  const [productId] = props.params.productId;
    const [productName, setProductName] = useState('');
    const router = useRouter()

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(`http://localhost:3001/api/products/${productId}`);
          setProductName(response.data.name)
        } catch (error) {
          console.error('Error fetching products:', error);
          toast.error('Failed to fetch products');
        }
      }
      fetchData();
    }, []);

    const handleSubmit = async (e) => {
        const payload = {
            name : productName
        }
      e.preventDefault();
      const data = await axios.put('http://localhost:3001/api/products/'+productId,payload)
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
    <button type="submit">Update Product</button>
  </form>
  )
}

export default Page