import { API_URL } from '@/config'
import FaqItem from '../components/FaqItem'

interface Faq {
  id: number
  question: string
  answer: string
}
interface FaqPageAttributes {
  faqs: Faq[]
}


async function getData() {
  const res = await fetch(`${API_URL}/api/faqpage?populate=*`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data.data.attributes as FaqPageAttributes
}


const FAQPage = async () => {
  const data = await getData()
  const { faqs } = data

  return (
  <main className='justify-between min-h-screen w-full'>

    <div className='p-4 flex flex-col md:flex-row mx-12 md:mx-24 lg:mx-96 '>
      <div className='flex-1 p-4'>
        <h1 className='text-3xl font-bold  text-center text-jada-purple-800 mb-8'>
          Frequently Asked Questions
        </h1>

        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
      </div>
    </div>
          </main>
  )
}

export default FAQPage
