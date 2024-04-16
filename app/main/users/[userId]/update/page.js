"use client"
import React, { useEffect, useState } from 'react'

function Page({params}) {
    console.log(params.userId)
    const [name,setName] = useState(null)
    const [age,setAge] = useState(null)

    useEffect(()=>{
        getUser(params.userId)
    },[])

    async function getUser(id){
        let data = await fetch(`http://localhost:3000/api/users/${id}`)
        data = await data.json()
        setName(data.name)
        setAge(data.age)
      }
      
    
    const updateUser = async (id) =>{
        let data = await fetch(`http://localhost:3000/api/users/${id}`,{
            method:'PUT',
            body: JSON.stringify({name,age})
        })
        data = await data.json()
        console.log(data) 
    }

    return (
        <div>
            <h1>update User</h1>
            <br />
            <br />
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter name"/>
            <br />
            <br />
            <input type='text' value={age} onChange={(e)=>setAge(e.target.value)} placeholder="age"/>
            <br />
            <br />
           <button onClick={()=>updateUser(params.userId)}>update User</button>
        </div>
      )
}

export default Page