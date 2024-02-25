'use client'
import React, { useState } from 'react'
import TextAreaField from './TextAreaField'
import TextField from './TextField'
import emailjs from '@emailjs/browser'

const ContactForm: React.FC = () => {
  const SERVICE_ID = 'default_service'
  const TEMPLATE_ID = 'template_service'
  const PUBLIC_ID = 'qmXpZwvVswSAoVVrc'

  const [emailError, setEmailError] = useState<boolean | string>(false)
  const [nameError, setNameError] = useState<boolean | string>(false)
  const [messageError, setMessageError] = useState<boolean | string>(false)
  const [messageSuccess, setMessageSuccess] = useState<boolean | string>(false)

  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Submit form data
    console.log(formData)

    let errors = false

    if (!formData.from_name) {
      setNameError('Name Cannot be Blank')
      errors = true
      setTimeout(() => setNameError(false), 1500)
    } else {
      setNameError(false)
    }
    if (!formData.reply_to) {
      setEmailError('Email Cannot be empty')
      errors = true
      setTimeout(() => setEmailError(false), 1500)
    } else {
      setEmailError(false)
    }
    if (!formData.message) {
      setMessageError('Message Cannot be empty')
      errors = true
      setTimeout(() => setMessageError(false), 1500)
    } else {
      setMessageError(false)
    }

    if (!errors) {
      emailjs
        .sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          e.target as HTMLFormElement,
          PUBLIC_ID
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text)
          },
          (err) => {
            console.error('FAILED...', err)
          }
        )

      setFormData({
        from_name: '',
        reply_to: '',
        message: '',
      })

      setTimeout(() => setMessageSuccess(false), 1500)
      setMessageSuccess('Message Sent Successfully')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {nameError && (
        <div className='static left-20 inline-block text-red-500 '>
          {nameError}
        </div>
      )}
      <TextField
        label='Name'
        name='from_name'
        type='text'
        value={formData.from_name}
        onChange={handleChange}
      />
      {emailError && (
        <div className='static text-red-500 inline-block '>{emailError}</div>
      )}
      <TextField
        label='Email'
        name='reply_to'
        type='email'
        value={formData.reply_to}
        onChange={handleChange}
      />
      {messageError && (
        <div className='static text-red-500 inline-block'>{messageError}</div>
      )}
      <TextAreaField
        label='Message'
        name='message'
        value={formData.message}
        onChange={handleChange}
      />
      <div className='flex flex-col'>

      <button
        type='submit'
        className='bg-jada-pink-base hover:text-jada-accent-base text-jada-text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-[1.25rem]'
        >
        Send Message
      </button>
      {messageSuccess && (
        <div className='static text-green-800 inline-block text-xl mt-5'>
          {messageSuccess}
        </div>
      )}
      </div>
    </form>
  )
}

export default ContactForm
