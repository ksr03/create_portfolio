import React, { useState } from 'react'
import Header from '@components/Header';
import Top from '@components/Top';
import About from '@components/About/About';
import Developments from '@components/Works/Works';
import Copyright from '@components/Copyright';
import Loading from '@components/Loading';
import { VStack } from '@chakra-ui/react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  addEventListener('load', () => {setIsLoading(false)})
  return (
    <div className="App">
      <Loading isLoading={isLoading} />
      <Header />
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