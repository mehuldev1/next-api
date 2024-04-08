"use client"
import React, { useEffect, useState } from 'react'


function page() {
    const [name,setName] = useState(null)
    const [age,setAge] = useState(null)

    const addUser = async () =>{
        let data = await fetch('http://localhost:3000/api/users',{
            method:'POST',
            body: JSON.stringify({name,age})
        })
        data = await data.json()
        console.log(data) 
    }

  return (
    <div>
        <h1>Add New User</h1>
        <br />
        <br />
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter name"/>
        <br />
        <br />
        <input type='text' value={age} onChange={(e)=>setAge(e.target.value)} placeholder="age"/>
        <br />
        <br />
       <button onClick={addUser}>Add User</button>
    </div>
  )
}

export default page