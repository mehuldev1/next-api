"use client"
import  route  from '@/app/utility/routes'
import Link from 'next/link'
import React from 'react'

async function getUsers(){
  let data = await fetch('http://localhost:3000/api/users')
  data = await data.json()
  return data
}

async function deleteUser(id){
  let data = await fetch(`http://localhost:3000/api/users/${id}`,{
    method: "DELETE"
  })
  data = await data.json()
  return data
}

async function Page() {
  const users= await getUsers()

  return (
    <div>
      <h1>User List</h1>
      <br/>
      <div>
        {
          users.map((user)=>(
            <div key={user.id} style={{display:'flex',gap:"10px",margin:  "10px"}}>
              <Link href={`${route.users}${user.id}`}>{user.name}</Link><br />
              <button onClick={()=>deleteUser(user.id)}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Page