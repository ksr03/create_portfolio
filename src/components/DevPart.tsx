import React from 'react'
import { Text, VStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

type Props = {
    image: string
    title: string
    detail: string
}

const DevPart = (props: Props) => {
  return (
    <VStack 
        margin={15}
        bg='white' 
        w='200px' 
        h='230px'
        borderRadius='10px'
    >
        <Image
            margin={0}
            w='100%'
            h='110px'
            roundedTop='10px'
            alt='開発物イメージ'
            src={props.image}
            objectFit='cover'
        />
        <Text margin={0} fontSize='20px' fontWeight='bold'>
            {props.title}
        </Text>
        <Text 
            margin={0} 
            fontSize='17px' 
            w='90%' 
            h='60px'
            lineHeight='18px' 
            wordBreak='break-all'
            overflow='hidden'
        >
            {props.detail}
        </Text>
    </VStack>
  )
}

export default DevPart