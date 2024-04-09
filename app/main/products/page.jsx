"use client"

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAction from './useAction';
import { useRouter } from 'next/navigation'

function Page() {
  const router  = useRouter()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Failed to fetch products');
      }
    }
    fetchData();
  }, []);

  const { handleEdit, handleDelete } = useAction();

  return (
    <div>
      <ToastContainer />
      <h1>All Products</h1>
      <button onClick={()=>router.push('/main/products/addproduct')}>Add Product</button>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <button onClick={() => handleEdit(item._id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Page;
