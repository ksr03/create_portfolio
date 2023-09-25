import React from 'react'
import { Box, VStack, HStack, Text, Image } from '@chakra-ui/react'
import { BsArrowRightCircle } from 'react-icons/bs'
import image from '../images/image.png'

const Introduction = () => {
  return (
    <VStack bg='#565E64' w='85%' h='500px' align='flex-start' position='relative' >
        <Image 
            src={image}
            alt='イメージ画像'
            boxSize='400px'            
            style={{ 
                position: 'absolute',
                top: '70px',
                left: '220px',
            }} 
        />
        <Box position='absolute' marginTop='170px'  paddingTop='3px' paddingBottom='7px' transition='.2s' _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }} >
            <HStack h='50px'>
                <Text marginLeft='10px' marginRight='10px' color='white' fontSize='45px' textAlign='left'>
                    About
                </Text>
                <BsArrowRightCircle color='white' size='40px' />
            </HStack>  
            <HStack h='20px'>
                <Text marginLeft='5px' w='190px' lineHeight='1px'><hr/></Text>         
            </HStack>
            <HStack h='70px'>
                <Text marginLeft='10px' marginRight='10px' color='white' fontSize='25px' fontWeight='hairline' textAlign='left'>
                    ○○○○です。<br/>
                    簡単な自己紹介文
                </Text>
            </HStack>
        </Box> 
    </VStack>
  )
}

export default Introduction