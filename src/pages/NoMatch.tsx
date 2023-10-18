import React, { useState } from 'react'
import Header from '@components/Header'
import NotFound from '@components/NotFound'
import Loading from '@components/Loading';
import { VStack } from '@chakra-ui/layout'

const NoMatch = () => {
  const [isLoading, setIsLoading] = useState(true)
  addEventListener('load', () => {setIsLoading(false)})

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