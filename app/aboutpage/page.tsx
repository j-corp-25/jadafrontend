// pages/about.js
import { API_URL } from "@/config";
import Link from "next/link";

// Hypothetical server-side data fetching function
async function getData() {
    const res = await fetch(`${API_URL}/api/aboutpage`, {cache: 'no-store'} )
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await res.json(); // Correct way to parse JSON
    return data.data.attributes; // Accessing the attributes directly
}

export default async function Page() {
    const data = await getData();

    return (
        <div>
            <Link href='/'>Home</Link>
            <div>{data.first_para}</div>
            <div>{data.second_para}</div>
        </div>
    );
}


// Hypothetical example of fetching data server-side for the component
// Adjust according to actual Next.js 13 server component data fetching capabilities
