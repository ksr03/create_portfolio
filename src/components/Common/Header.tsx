import React, { useState } from 'react'
import { Text, HStack, Flex, Spacer, Link, Image } from '@chakra-ui/react';
import { TbBrandGithub } from 'react-icons/tb'
import { RiTwitterXLine } from 'react-icons/ri'

const Header = () => {

        // icon1
        const [iconColor1, seticonColor1] = useState('#3D454B'); // 初期色を設定
        const handleMouseEnter1 = () => {
          seticonColor1('#111111'); // 色を変更
        };
        const handleMouseLeave1 = () => {
          seticonColor1('#3D3D3D'); // 初期色に戻す
        };

        // icon2
        const [iconColor2, seticonColor2] = useState('#3D454B'); // 初期色を設定
        const handleMouseEnter2 = () => {
          seticonColor2('#111111'); // 色を変更
        };
        const handleMouseLeave2 = () => {
          seticonColor2('#3D3D3D'); // 初期色に戻す
        };

  return (
        <Flex 
            minWidth='max-content' 
            alignItems='center' 
            h="60px" 
            w='100vw'
            bg='rgba(255, 255, 255, 0.4)'
            backdropFilter='auto' 
            backdropBlur='5px'
            filter='auto'
            zIndex='9000'
            position='fixed'
            top='0'
        >
            <Link href='/' style={{ textDecoration: 'none' }}>
                <Text marginLeft="20px" fontSize="25px" fontWeight='bold' color="#036a80">
                    Portfolio
                </Text>
            </Link>
            <Spacer/>
            <HStack spacing="15px" marginRight="25px">
                <Link href='https://twitter.com/ksr03_dev' rounded="10px">
                    <RiTwitterXLine 
                        size="30px" 
                        onMouseEnter={handleMouseEnter1}
                        onMouseLeave={handleMouseLeave1}
                        color={iconColor1}
                        style={{transition: '.2s'}}
                    />
                </Link>
                <Link href='https://github.com/ksr03' rounded="10px">
                    <TbBrandGithub 
                        size="35px" 
                        onMouseEnter={handleMouseEnter2}
                        onMouseLeave={handleMouseLeave2}
                        color={iconColor2}
                        style={{transition: '.2s'}}
                    />
                </Link>
                <Link href='https://qiita.com/ksr03' rounded="10px">
                    <Image 
                      bg='white' 
                      boxSize='32px' 
                      rounded='full' 
                      src='images/favicon.png' 
                      alt='Qiita'
                      transition='.2s'
                      _hover={{bg: '#EEEEEE'}}
                    />
                </Link>
            </HStack>
        </Flex>
          )
}

export default Header