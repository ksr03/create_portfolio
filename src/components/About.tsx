import React from 'react'
import getWindowSize from './getWindowSize'
import AllSkills from './AllSkills'
import Guide from './Guide'
import { VStack, HStack, Text, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { BiSolidUserCircle } from 'react-icons/bi'
import { AiFillTool } from 'react-icons/ai'

const About = () => {
    const w = getWindowSize()[0]
  return (
    <VStack 
        w='80%'
        maxWidth='1000px'
        bg='#FFFEF8'
        spacing={0}
    >
        <Text 
            marginY='20px'
            fontSize='30px' 
            fontWeight='bold' 
            color='#3D454B'
        >
            About
        </Text>
        <HStack>
            <Image 
                marginRight='20px'
                borderRadius='100px'
                boxSize='130px'
                src='user_image.jpg'
                alt='ユーザー画像'
                objectFit='cover'
            />
            <VStack>
                <Text fontSize='30px'>しろ</Text>
                <Text fontSize='17px'>@ksr03_dev</Text>
            </VStack>
        </HStack>
        <Box
            w={ w < 1000 ? `${(1-w/1000)*30 + 65}%` : '65%'}
            paddingX='30px'
            paddingY='20px'
            marginTop='30px'
            marginBottom='30px' 
            bg='white'
            borderRadius='20px'
        >
            <HStack marginBottom='10px'>
                <BiSolidUserCircle size='40px' color='#3D454B' />
                <Text fontWeight='bold'>私について</Text>
            </HStack>
            <Text marginX='auto' paddingBottom='20px' w='95%' lineHeight='25px' >
                情報系学科の大学生です。UIやデザインに興味があります。バックエンド・フロントエンド共に学習中です。
            </Text>
            <hr/>
            <HStack marginTop='15px' marginBottom='15px'>
                <AiFillTool size='40px' color='#3D454B' />
                <Text fontWeight='bold'>使用できるスキル</Text>
            </HStack>
            <AllSkills />
            <Guide />
        </Box>
    </VStack>
  )
}

export default About