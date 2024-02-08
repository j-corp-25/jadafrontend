'use client'
import React, { useState, useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const Dashboard = () => {
  const API_URL = 'http://localhost:1337/api/aboutpage'
  const [isEditing, setIsEditing] = useState(false)
  const { data: session } = useSession()
  const [formData,setFormData]= useState({
    first_para:"",
    second_para:""
  })
  const handleEdit = () => {
    setIsEditing(true)
  }
  useEffect(() => {
    const fetchHomepageData = async () => {
        const res = await fetch(`${API_URL}`)
        if(!res.ok){
            throw new Error('Failed to fetch homepage data')
        }
        const homepage = await res.json()
        setFormData({
            first_para: homepage.data.attributes.first_para,
            second_para: homepage.data.attributes.second_para,
        })
        console.log(homepage)

    }
    fetchHomepageData()

  },[])
  const handleInputChange =(e) => {
    const {name, value} = e.target
    setFormData((prev) =>({...prev,[name]: value}))
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const res = await fetch(API_URL,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${session?.jwt}`
        },
        body: JSON.stringify({data: formData})
    })
    if(!res.ok){
        setIsEditing(false)
        throw new Error('Failed to update data')
    }
    setIsEditing(false)
    alert('Data updated successfully')

  }


  return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white p-8 rounded-lg shadow-lg">

    <div className="space-y-4">
    <Link href="/">
        Home
    </Link>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            name='first_para'
            value={formData.first_para}
            onChange={handleInputChange}
          />
          <input
            name='second_para'
            value={formData.second_para}
            onChange={handleInputChange}
          />

          <button type='submit'>Save Changes</button>
        </form>
      ) : (
        <>
          <h1 className="text-5xl font-bold">{formData.first_para}</h1>
          <h2 className="text-3xl text-gray-700">{formData.second_para}</h2>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  </div>
);

}

export default Dashboard
