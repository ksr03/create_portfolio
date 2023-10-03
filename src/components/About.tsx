import React from 'react'
import { VStack, HStack, Text, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { BiSolidUserCircle } from 'react-icons/bi'
import { AiFillTool } from 'react-icons/ai'

const About = () => {
  return (
    <VStack 
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
                marginRight={10}
                borderRadius='100px'
                boxSize='150px'
                src='user_image.jpg'
                alt='ユーザー画像'
                objectFit='cover'
            />
            <VStack>
                <Text fontSize='30px' margin={0} >しろ</Text>
                <Text fontSize='17px' margin={0} >@ksr03_dev</Text>
            </VStack>
        </HStack>
        <Box
            w='60%' 
            paddingX={30}
            paddingY={20}
            marginTop={20}
            marginBottom={40} 
            bg='white'
            borderRadius='20px'
        >
            <HStack>
                <BiSolidUserCircle size='40px' color='#3D454B' />
                <Text fontWeight='bold'>私について</Text>
            </HStack>
            <Text lineHeight={2} marginLeft={20}>
                情報系学科の学生です。UIやデザインに興味があります。
            </Text>
            <hr/>
            <HStack marginTop={15}>
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