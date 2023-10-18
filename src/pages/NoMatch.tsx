import React from 'react'
import Header from '@components/Header'
import NotFound from '@components/NotFound'
import { VStack } from '@chakra-ui/layout'

const NoMatch = () => {
  return (
    <>
      <Header/>
      <VStack marginBottom={50} justify='center' spacing={0}>
        <NotFound/>
      </VStack>
    </>
  )
}

export default NoMatch