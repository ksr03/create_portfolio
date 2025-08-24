import React from 'react'
import getWindowSize from '@utils/getWindowSize'
import AllSkills from '@components/About/AllSkills'
import Guide from '@components/About/Guide'
import { VStack, HStack, Text, Box } from '@chakra-ui/layout'
import { UnorderedList, ListItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/image'
import { LiaUserCircle } from 'react-icons/lia'
import { RiComputerLine } from 'react-icons/ri'
import { FaPencilAlt, FaMedal } from 'react-icons/fa'

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
        zIndex='5'
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
                src='images/user_image.jpg'
                alt='ユーザー画像'
                objectFit='cover'
            />
            <VStack>
                <Text padding='7px' fontSize='27px' borderBottom='1px solid #F5F5F5'>Haruka Koshiro</Text>
                <Text fontSize='17px'>@ksr03_dev</Text>
            </VStack>
        </HStack>
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
            {/* 私について */}
            <Box width='100%' borderBottom='1px solid #F7F7F7'>
                <HStack marginTop='5px' marginBottom='20px'>
                    <LiaUserCircle size='35px' color='#181818' />
                    <Text fontWeight='bold'>私について</Text>
                </HStack>
                <Text marginX='auto' paddingBottom='25px' w='95%' lineHeight='25px' fontSize='15px' >
                    山口大学大学院2年生の神代春花と申します。<br/>
                    エンジニアコミュニティや技術系イベント・勉強会などを通じて新たな技術を学んだり、スキルを伸ばしたりしています。
                    バックエンド・フロントエンド共に学習中ですが、チーム開発ではフロントエンドを担当することが多いです。<br/>
                    UI/UXに興味があり、将来はユーザー視点で利用しやすいサービスを作れるエンジニアになりたいと考えています。
                </Text>
            </Box>
            {/* 使用できるスキル */}
            <Box width='100%' paddingBottom='20px' borderBottom='1px solid #F7F7F7'>
                <HStack marginTop='30px' marginBottom='25px'>
                    <RiComputerLine size='32px' color='#181818' />
                    <Text fontWeight='bold'>使用できるスキル</Text>
                </HStack>
                <AllSkills />
                <Guide />
            </Box>
            {/* 資格・試験 */}
            <Box width='100%' borderBottom='1px solid #F7F7F7'>
                <HStack marginTop='30px' marginBottom='25px'>
                    <FaPencilAlt size='30px' color='#181818' />
                    <Text fontWeight='bold'>資格・試験</Text>
                </HStack>
                <Text marginX='auto' paddingBottom='25px' w='95%' lineHeight='25px' fontSize='15px'>
                    基本情報技術者(2023年6月)、応用情報技術者(2023年12月)
                </Text>
            </Box>
            {/* 表彰 */}
            <Box width='100%'>
                <HStack marginTop='30px' marginBottom='25px'>
                    <FaMedal size='30px' color='#181818' />
                    <Text fontWeight='bold'>表彰</Text>
                </HStack>
                <UnorderedList marginX='auto' paddingBottom='25px' w='90%' lineHeight='25px' fontSize='15px' style={{ whiteSpace: 'pre-wrap' }}>
                    <ListItem>2022/12  技育CAMP「はじめてのハッカソン」vol.9にて「Shaminer」を開発し、努力賞を頂きました。</ListItem>
                    <ListItem>2023/3  技育CAMPアドバンスにて「Shaminer」の機能追加を行い、GMOインターネットグループ株式会社より企業賞を頂きました。</ListItem>
                    <ListItem>2024/3  技育CAMPマンスリーハッカソンvol.1にて「Imagiterior」を開発し、優秀賞を頂きました。</ListItem>
                    <ListItem>2024/3  常盤工業会より常盤賞(学業優秀者)を頂きました。</ListItem>
                </UnorderedList>
            </Box>
        </Box>
    </VStack>
  )
}

export default About
