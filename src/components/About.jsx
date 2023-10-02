import React from 'react'
import { VStack, HStack, Text, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { BiSolidUserCircle } from 'react-icons/bi'
import { AiFillTool } from 'react-icons/ai'
import user_image from '../images/user_image.jpg'

const About = () => {
  return (
    <VStack 
        marginBottom={50}
        w='80%'
        maxWidth='1000px'
        bg='#FFFEF8'
        spacing={0}
    >
        <Text 
            fontSize='30px' 
            fontWeight='bold' 
            color='#3D454B'
        >
            About
        </Text>
        <HStack>
            <Image 
                borderRadius='100px'
                boxSize='150px'
                src={user_image}
                alt='ユーザー画像'
                objectFit='cover'
            />
            <VStack >
                <Text fontSize='30px'>しろ</Text>
                <Text fontSize='17px'>@ksr03_dev</Text>
            </VStack>
        </HStack>
        <Box
            w='60%' 
            paddingX={30}
            paddingY={20}
            marginTop={20}
            marginBottom={40} 
            bg='white'
        >
            <HStack>
                <BiSolidUserCircle size='40px' color='#3D454B' />
                <Text fontWeight='bold'>私について</Text>
            </HStack>
            <Text lineHeight={2} marginLeft={20}>
                情報系学科の学生です。デザインに興味があります。
            </Text>
            <hr/>
            <HStack>
                <AiFillTool size='40px' color='#3D454B' />
                <Text fontWeight='bold'>使用できるスキル</Text>
            </HStack>
            <Text lineHeight={2} marginLeft={20}>
                学校で学習したもの → C/Java/HTML/CSS/PHP<br/>
                開発で使用したもの → Javascript/React/Python/MySQL<br/>
                バックエンド・フロントエンド共に学習中です。
            </Text>
        </Box>
    </VStack>
  )
}

export default About