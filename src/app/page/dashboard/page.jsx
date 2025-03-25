'use client'
import { useUser } from '@/app/Context/UserContext'
import React from 'react'

const page = () => {
  const {user} = useUser()
  console.log(user)
  return (
    <div>
     {user?.username}
    </div>
  )
}

export default page
