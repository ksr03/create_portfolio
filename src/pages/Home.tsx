import React from 'react'
import '../App.css';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import { VStack } from '@chakra-ui/react';

const Home = () => {
  return (
    <div className="App">
      <Header />
      <VStack>
        <Introduction />
      </VStack>
    </div>
  )
}

export default Home