import React from 'react'
import ContactForm from '../components/ContactForm'

const ContactPage: React.FC = () => {
  return (
    <main className='justify-between min-h-screen w-full content-center'>
      <div className='flex-col mx-12 md:mx-24 lg:mx-96 space-y-10 flex '>
        <h1 className='text-3xl font-bold mb-8 text-center mt-10'>Contact Jada</h1>
        <ContactForm />
      </div>
    </main>
  )
}

export default ContactPage
