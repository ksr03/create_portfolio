import React, { useState, useEffect } from 'react'
import Loading from '@components/Common/Loading';
import Header from '@components/Common/Header'
import LongFlight from '@components/ShootingGame/LongFlight'
import Detail from '@components/ShootingGame/Detail';
import Copyright from '@components/Common/Copyright';
import { VStack } from '@chakra-ui/react';

const ShootingGame = () => {  
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', ()=>{setIsLoading(false)});
    }
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Header/>
      <VStack marginBottom={50} justify='center' spacing={0}>
        <VStack
              w='80%'
              h='60px'
              maxWidth='1000px'
              bg='#AAB7CA'
        />
        <LongFlight/>
        <Detail/>
      </VStack>
      <Copyright/>
    </>
  )
}

export default ShootingGame