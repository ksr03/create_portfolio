import React from 'react'
import { VStack, HStack, Text } from '@chakra-ui/layout'
import { FaRegFaceMeh, FaRegFaceLaugh } from 'react-icons/fa6'

const Guide = () => {
  return (
    <VStack marginTop={15} w='180px' h='50px' alignItems='start' >
        <HStack>
            <FaRegFaceMeh size='17px' color='#6DB633'/>
            <Text h='18px' fontSize='13px' lineHeight='19px'>使用したことがある</Text>
        </HStack>
        <HStack>
            <FaRegFaceLaugh size='17px' color='#3278E1' />
            <Text h='18px' fontSize='13px' lineHeight='19px'>基本的な操作ができる</Text>
        </HStack>
    </VStack>
  )
}

export default Guide