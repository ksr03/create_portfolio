import React, { useState } from 'react'
import Header from '../components/Header';
import Top from '../components/Top';
import About from '../components/About';
import Developments from '../components/Developments';
import Copyright from '../components/Copyright';
import Loading from '../components/Loading';
import { VStack } from '@chakra-ui/react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div className="App">
      {isLoading && <Loading />}
      <Header />
      <VStack marginBottom={50} justify='center' spacing={0}>
        <Top setIsLoading={setIsLoading} />
        <About />
        <Developments />
      </VStack>
      <Copyright/>
    </div>
  )
}

export default Home