import React, { useState, useEffect } from 'react'
import Header from '@components/Header';
import Top from '@components/Top';
import About from '@components/About/About';
import Developments from '@components/Works/Works';
import Copyright from '@components/Copyright';
import Loading from '@components/Loading';
import { VStack } from '@chakra-ui/react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', ()=>{setIsLoading(false)});
    }
  }, []);

  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

  return (
    <div className="App" style={{width: `calc(100vw - ${scrollBarWidth}px)`}}>
      <Loading isLoading={isLoading} />
      <Header/>
      <VStack marginBottom={50} justify='center' spacing={0}>
        <Top />
        <About />
        <Developments />
      </VStack>
      <Copyright/>
    </div>
  )
}

export default Home