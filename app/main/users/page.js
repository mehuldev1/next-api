import  route  from '@/app/utility/routes'
import Link from 'next/link'
import React from 'react'

async function getUsers(){
  let data = await fetch('http://localhost:3000/api/users')
  data = await data.json()
  return data
}

async function page() {
  const users= await getUsers()
  return (
    <div>
      <h1>User List</h1>
      <br/>
      <div>
        {
          users.map((user)=>(
            <div key={user.id}>
              <Link href={`${route.users}${user.id}`}>{user.name}</Link><br />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page