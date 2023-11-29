import React, { useState, useEffect } from 'react'
import Header from '@components/Common/Header'
import NotFound from '@components/NotFound'
import Loading from '@components/Common/Loading';
import { VStack } from '@chakra-ui/layout'

const NoMatch = () => {
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
        <NotFound/>
      </VStack>
    </>
  )
}

export default NoMatch