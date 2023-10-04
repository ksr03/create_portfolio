import React from 'react'
import '../App.css';
import Header from '../components/Header';
import Top from '../components/Top';
import About from '../components/About';
import Developments from '../components/Developments';
import Copyright from '../components/Copyright';
import { VStack } from '@chakra-ui/react';

const Home = () => {
  return (
    <div className="App">
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