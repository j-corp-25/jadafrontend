// Define your URLs
const url1 = process.env.NEXT_PUBLIC_API_URL;
const url2 = 'http://localhost:1338';
const url3 = 'http://localhost:1337';


export const API_URL = url1 || url2 || url3;
