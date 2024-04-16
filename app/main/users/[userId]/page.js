import  route  from '@/app/utility/routes'
import Link from 'next/link'
import React from 'react'

async function getUser(id){
  let data = await fetch(`http://localhost:3000/api/users/${id}`)
  data = await data.json()
  return data
}

async function Page({params}) {
  const user = await getUser(params.userId)
  return (
    <div>
      <h1>User List</h1>
      <Link href={route.users}>Back</Link>
      <br/>
      <div>
        <h3>{user?.name}</h3>
        <h3>{user?.age}</h3>
       
      </div>
    </div>
  )
}

export default Page