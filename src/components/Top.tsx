import React from 'react'
import { Center, Text, Image } from '@chakra-ui/react'

type Props = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Top = ({setIsLoading}:Props) => {
  return (
    <Center w='100%'>
        <Image 
            src='top_image.png'
            alt='イメージ画像'
            w='80%'
            maxWidth='1000px'
            h='500px'
            objectFit='cover'
            marginY={0}
            onLoad={() => {setIsLoading(false)}}
        />
        <Text 
            marginTop={50}
            color='white' 
            fontSize='23px' 
            fontWeight='hairline' 
            textAlign='left'
            position='absolute'
        >
            開発を学んでいる学生です。
        </Text>
    </Center>
  )
}

export default Top