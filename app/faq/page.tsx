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
    <div className='container mx-auto p-4 flex flex-col md:flex-row '>
      <div className='flex-1 p-4'>
        <h1 className='text-3xl font-bold mb-8 text-center text-jada-purple-800'>
          Frequently Asked Questions
        </h1>

        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  )
}

export default FAQPage
