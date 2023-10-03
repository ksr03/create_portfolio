import React from 'react'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { FaHashtag } from 'react-icons/fa'

type Props = {
    image: string
    title: string
    detail: string
    date: string
    skills: string
}

const DevPart = (props: Props) => {
  return (
    <VStack 
        margin={15}
        bg='white' 
        w='200px' 
        h='260px'
        borderRadius='10px'
    >
        <Image
            margin={0}
            w='100%'
            h='110px'
            roundedTop='10px'
            alt='開発物イメージ'
            src={"dev/" + props.image}
            objectFit='cover'
        />
        <Text 
            marginLeft='8px' 
            marginY={0} w='100%'
            h='5px' 
            textAlign='left'
            fontSize='10px'
            lineHeight='3px'
        >
            {props.date}
        </Text>
        <Text margin={0} h='30px' fontSize='20px' fontWeight='bold'>
            {props.title}
        </Text>
        <Text 
            margin={0} 
            fontSize='15px' 
            w='90%' 
            h='55px'
            lineHeight='18px' 
            wordBreak='break-all'
            overflow='hidden'
        >
            {props.detail}
        </Text>
        <HStack marginLeft='20px' marginTop='3px' w='100%' h='20px' alignItems='start'>
            <FaHashtag size='15px' color='#A69A7D'/>
            <Text margin={0} w='100%' lineHeight='15px' color='#A69A7D'>{props.skills}</Text>
        </HStack>
    </VStack>
  )
}

export default DevPart