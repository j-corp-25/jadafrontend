'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { API_URL } from '@/config'


const DashboardPage = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data: session } = useSession()
  const { data: homepageData, error } = useSWR(
    `${API_URL}/api/homepage?populate=*`,
    fetcher
  )
  const { register, handleSubmit, reset } = useForm()

  React.useEffect(() => {
    if (homepageData) {
      reset({
        title: homepageData.data.attributes.title,
        sub_title: homepageData.data.attributes.sub_title,
        page_text: homepageData.data.attributes.page_text,
      })
    }
  }, [homepageData, reset])

  if (error) return <div>Failed to load</div>

  const onSubmit = async (formData) => {
    console.log(formData)
    try {
      const res = await fetch(`${API_URL}/api/homepage`, {
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
      <div className='space-y-4'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
          <label htmlFor='title'>Hero Card Title</label>
          <textarea
            {...register('title')}
            id='title'
            className='text-sm border overflow-hidden min-h-18 resize-none rounded-md border-jada-purple-700 p-1'
          />
          <label htmlFor='subtitle'> Hero Card Subtitle</label>
          <textarea
            {...register('sub_title')}
            id='secondPara'
            className='text-sm overflow-hidden border min-h-18 resize-none rounded-md border-jada-purple-700 p-1'
          />
          <label htmlFor='pagetext'>Page Text</label>
          <textarea
            {...register('page_text')}
            id='pagetext'
            className='text-sm  border min-h-18 resize-none rounded-md border-jada-purple-700 p-1'
          />
          <button type='submit' className=' bg-blue-100'>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}

export default DashboardPage
