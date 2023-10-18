import React from 'react'
import getWindowSize from '@hooks/getWindowSize'
import AllSkills from '@components/About/AllSkills'
import Guide from '@components/Works/Guide'
import { VStack, HStack, Text, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { LiaUserCircle } from 'react-icons/lia'
import { RiComputerLine } from 'react-icons/ri'

const About = () => {
    const w = getWindowSize()[0]
  return (
    <VStack 
        paddingTop='40px'
        paddingBottom='10px'
        w='80%'
        maxWidth='1000px'
        bg='#D6D6D6'
        spacing={0}
    >
        <Text 
            marginY='20px'
            fontSize='30px' 
            fontWeight='bold' 
            color='#036a80'
        >
            About
        </Text>
        <HStack>
            <Image 
                marginRight='20px'
                borderRadius='100px'
                boxSize='110px'
                src='user_image.jpg'
                alt='ユーザー画像'
                objectFit='cover'
            />
            <VStack>
                <Text fontSize='27px'>しろ</Text>
                <Text fontSize='17px'>@ksr03_dev</Text>
            </VStack>
        </HStack>
        <Box
            w={ w < 1000 ? `${(1-w/1000)*30 + 65}%` : '65%'}
            paddingX='30px'
            paddingY='15px'
            marginTop='30px'
            marginBottom='30px' 
            border='1px solid #F5F5F5'
            bg='whiteAlpha.500'
            borderRadius='10px'
        >
            <HStack marginTop='5px' marginBottom='20px'>
                <LiaUserCircle size='35px' color='#181818' />
                <Text fontWeight='bold'>私について</Text>
            </HStack>
            <Text marginX='auto' paddingBottom='20px' w='95%' lineHeight='25px' fontSize='15px' >
                情報系学科の大学生です。UI/UXやデザインに興味があります。バックエンド・フロントエンド共に学習中です。
            </Text>
            <hr/>
            <HStack marginTop='30px' marginBottom='25px'>
                <RiComputerLine size='32px' color='#181818' />
                <Text fontWeight='bold'>使用できるスキル</Text>
            </HStack>
            <AllSkills />
            <Guide />
        </Box>
    </VStack>
  )
}

export default About