import React from 'react'
import '../App.css';
import Header from '../components/Header';
import Top from '../components/Top';
import About from '../components/About';
import { VStack } from '@chakra-ui/react';

const Home = () => {
  return (
    <div className="App">
      <Header />
      <VStack justify='center' spacing={0}>
        <Top />
        <About />
      </VStack>
    </div>
  )
}

export default Home