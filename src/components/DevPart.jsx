import React from 'react'
import { Text, VStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import image from '../images/dev1.png'

const DevPart = () => {
  return (
    <VStack 
        margin={10}
        bg='white' 
        w='200px' 
        h='230px'
        // minWidth='200px'
        borderRadius='5px'
        // float='left'
    >
        <Image
            margin={0}
            w='100%'
            h='110px'
            rounded='5px'
            alt='開発物イメージ'
            src={image}
            objectFit='cover'
        />
        <Text margin={0} fontSize='20px' fontWeight='bold'>abc</Text>
        <Text 
            margin={0} 
            fontSize='17px' 
            w='90%' 
            h='60px'
            lineHeight='18px' 
            wordBreak='break-all'
            overflow='hidden'
        >
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </Text>
    </VStack>
  )
}

export default DevPart