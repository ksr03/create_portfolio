import React from 'react'
import getWindowSize from '@components/getWindowSize'
import { Center, Text, Image } from '@chakra-ui/react'

const Top = () => {
  const w = getWindowSize()[0]
  return (
    <Center w='100%'>
        <Image 
            src='top_image.jpg'
            alt='イメージ画像'
            w='80%'
            h={w > 800 ? `${(w-800)*0.5 + 500}px` : '500px'}
            maxWidth='1000px'
            maxHeight='750px'
            objectFit='cover'
            objectPosition='bottom'
            marginY={0}
        />
        <Text 
            paddingX='15px'
            w='80%'
            maxWidth='1000px'
            color='#EEEEEE' 
            fontSize='30px' 
            fontWeight='bold' 
            textAlign='left'
            position='absolute'
            top='60px'
        >
            in the Department of <br/>
            information Science <br/>
            and <br/>
            Engineering
        </Text>
    </Center>
  )
}

export default Top