import React from 'react'
import getWindowSize from '@hooks/getWindowSize'
import shooting_game from '@data/shooting_game.json'
import LinkButton from '@components/Common/LinkButton'
import { VStack, HStack, Box, Text } from '@chakra-ui/layout'
import { GoQuestion } from "react-icons/go";
import { RiComputerLine } from 'react-icons/ri'
import { FaRegStar } from "react-icons/fa";

const Detail = () => {
    const w = getWindowSize()[0]

  return (
    <>
        <VStack
            paddingTop='30px'
            paddingBottom='30px'
            w='80%'
            maxWidth='1000px'
            bgGradient='linear(#AAB7CA, #D6D6D6)'
            spacing={0}
            zIndex='5'
        >
            <Box
            w={ w < 1000 ? `${(1-w/1000)*30 + 65}%` : '65%'}
            minWidth='260px'
            paddingX='25px'
            paddingY='15px'
            marginTop='30px'
            marginBottom='30px' 
            border='1px solid #F5F5F5'
            bg='whiteAlpha.500'
            borderRadius='10px'
            >
                <HStack marginTop='10px' marginBottom='20px'>
                    <GoQuestion size='35px' color='#181818'/>
                    <Text fontWeight='bold'>ゲームの説明</Text>
                </HStack>
                <Text marginX='auto' w='95%' fontSize='15px' >
                    {shooting_game.guide}
                </Text>
                <Text marginX='auto' marginBottom='30px' paddingBottom='20px' w='95%' borderBottom='1px solid #F7F7F7' lineHeight='25px' fontSize='15px' color='#FF002E' >
                    PCのみ対応しています。
                </Text>
                <HStack marginBottom='20px'>
                    <RiComputerLine size='35px' color='#181818'/>
                    <Text fontWeight='bold'>使用技術</Text>
                </HStack>
                <Text marginX='auto' marginBottom='30px' paddingBottom='20px' w='95%' borderBottom='1px solid #F7F7F7' lineHeight='25px' fontSize='15px' >
                    {shooting_game.skills}
                </Text>
                <HStack marginBottom='20px'>
                    <FaRegStar size='35px' color='#181818'/>
                    <Text fontWeight='bold'>工夫した点</Text>
                </HStack>
                <Text marginX='auto' marginBottom='30px' paddingBottom='20px' w='95%' borderBottom='1px solid #F7F7F7' lineHeight='25px' fontSize='15px' >
                    {shooting_game.focus}
                </Text>
                <VStack marginBottom='10px'>
                    <LinkButton link='https://github.com/ksr03/shooting_game' type='github' />
                </VStack>
            </Box>
        </VStack>
    </>
  )
}

export default Detail