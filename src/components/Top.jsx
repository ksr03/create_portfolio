import React from 'react'
import { Box, Center, Text, Image } from '@chakra-ui/react'
import image from '../images/image.png'

const Top = () => {
  return (
    <Center w='100%'>
        <Image 
            src={image}
            alt='イメージ画像'
            w='80%'
            maxWidth='1000px'
            h='500px'
            objectFit='cover'
            marginY={0}
        />
            <Text 
                style={{ 
                    position: 'absolute',
                }} 
                marginTop={50}
                color='white' 
                fontSize='23px' 
                fontWeight='hairline' 
                textAlign='left'
            >
                ものづくりが好きな学生です。<br/>
                ゆるく開発しています。
            </Text>
    </Center>
  )
}

export default Top