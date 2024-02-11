'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { API_URL } from '@/config';

const LogoImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [altText, setAltText] = useState('');

  useEffect(() => {
    const getLogoImage = async () => {
      const res = await fetch(`${API_URL}/api/imagepage?populate=*`,{ cache: 'no-store' });
      const data = await res.json();
      const image = data.data.attributes.Logo.data.attributes.formats.small;
      setImageUrl(image.url);
      setAltText(image.name);
    };

    getLogoImage();
  }, []); // Empty dependency array means this effect runs once on mount

  if (!imageUrl) return <div>Loading...</div>;

  return <Image src={imageUrl} height={50} width={50} alt={altText} />;
};

export default LogoImage;
