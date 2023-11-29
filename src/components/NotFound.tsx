import React from 'react'
import LinkButton from '@components/Common/LinkButton'
import { VStack, Box, Text } from '@chakra-ui/layout'

const NotFound = () => {
  return (
    <>
        <VStack paddingBottom='25px' w='80%' maxWidth='1000px' zIndex='5' bg='#D6D6D6'>
            <Box h='80px' />
            <Text fontSize='40px' fontWeight='bold'>Not Found</Text>
            <Text marginBottom='10px' fontSize='17px'>このページは存在しません。</Text>
            <LinkButton link='/' type='home' />
        </VStack>
    </>
  )
}

export default NotFound