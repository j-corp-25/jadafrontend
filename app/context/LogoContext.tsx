import React, { createContext, useContext, useState, useEffect } from 'react';
import { API_URL } from '@/config';

const LogoContext = createContext({
    Logo: '',
    Heroimage: '',
    Aboutimage: '',
  });


export const LogoProvider = ({ children }) => {
  const [logos, setLogos] = useState({
    Logo: '',
    Heroimage: '',
    Aboutimage: '',
  });

  useEffect(() => {
    const fetchLogos = async () => {
      const response = await fetch(`${API_URL}/api/imagepage?populate=*`, {
        cache: 'no-store',
      });
      const data = await response.json();
      console.log(data)
      setLogos({
        Logo: data.data.attributes.Logo.data.attributes.formats.small.url,
        Heroimage: data.data.attributes.Heroimage.data.attributes.formats.small.url,
        Aboutimage: data.data.attributes.Aboutimage.data.attributes.formats.small.url,
      });
    };

    fetchLogos();
  }, []);

  return (
    <LogoContext.Provider value={logos}>
      {children}
    </LogoContext.Provider>
  );
};

// Hook for easy consumption of the context
export const useLogos = () => useContext(LogoContext);
