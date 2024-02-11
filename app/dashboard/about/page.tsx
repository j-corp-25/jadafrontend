'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { API_URL } from '@/config'


const fetcher = (url) => fetch(url).then((res) => res.json())
const Dashboard = () => {
  const { data: session } = useSession()
  const { data: aboutPageData, error } = useSWR(
    `${API_URL}/api/aboutpage?populate=*`,
    fetcher
  )
  const { register, handleSubmit, reset } = useForm()

  React.useEffect(() => {
    if (aboutPageData) {
      reset({
        first_para: aboutPageData.data.attributes.first_para,
        second_para: aboutPageData.data.attributes.second_para,
        info: aboutPageData.data.attributes.info
      })
    }
  }, [aboutPageData, reset])

  if (error) return <div>Failed to load</div>

  const onSubmit = async (formData) => {
    console.log(formData)
    try {
      const res = await fetch(`${API_URL}/api/aboutpage`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${session?.jwt}`,
        },
        body: JSON.stringify({ data: formData }),
      })
      if (!res.ok) {
        throw new Error('Failed to update data')
      }
      console.log(formData)
      alert('Data updated successfully')
    } catch (error) {
      console.error('Failed to submit the form', error)
    }
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white p-8 rounded-lg shadow-lg '>
      <div className='space-y-4' >
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
          <label htmlFor="first_para">First Paragraph</label>
          <textarea
            {...register('first_para')}
            id='first_para'


            className='text-sm border overflow-hidden min-h-24 resize-none rounded-md border-jada-purple-700 p-1'
          />
           <label htmlFor="secondPara">Second Paragraph</label>
          <textarea
            {...register('second_para')}
            id='secondPara'
            className='text-sm overflow-hidden border min-h-24 resize-none rounded-md border-jada-purple-700 p-1'
          />
          <label htmlFor="infoPart">Information Summary</label>
          <textarea
            {...register('info')}
            id='infoPart'
            className='text-sm  border min-h-24 resize-none rounded-md border-jada-purple-700 p-1'
          />
          <button type='submit' className=' bg-blue-100'>Save Changes</button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard
