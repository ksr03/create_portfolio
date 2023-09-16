import React, { useState } from 'react'
import { Text, HStack, Flex, Spacer, Link } from '@chakra-ui/react';
import { FaGithubSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'




const Header = () => {

        // icon1
        const [iconColor1, seticonColor1] = useState('#3D454B'); // 初期色を設定
        const handleMouseEnter1 = () => {
          seticonColor1('#111111'); // 色を変更
        };
        const handleMouseLeave1 = () => {
          seticonColor1('#3D454B'); // 初期色に戻す
        };

        // icon2
        const [iconColor2, seticonColor2] = useState('#3D454B'); // 初期色を設定
        const handleMouseEnter2 = () => {
          seticonColor2('#111111'); // 色を変更
        };
        const handleMouseLeave2 = () => {
          seticonColor2('#3D454B'); // 初期色に戻す
        };

  return (
        <Flex 
            minWidth='max-content' 
            alignItems='center' 
            h="60px" 
            w='100%'
            backdropFilter='auto' 
            backdropBlur='5px'
            filter='auto'
            brightness='110%'
            zIndex='9999'
            position='fixed'
            top='0'
        >
            <Link href='' style={{ textDecoration: 'none' }}>
                <Text fontSize="25px" fontWeight='bold' marginLeft="20px" color="#3D454B">
                    Portfolio
                </Text>
            </Link>
            <Spacer/>
            <HStack spacing="15px" marginRight="20px">
                <Link href='https://twitter.com/shirokichi_cr' rounded="10px">
                    <FaSquareXTwitter 
                        size="45px" 
                        onMouseEnter={handleMouseEnter1}
                        onMouseLeave={handleMouseLeave1}
                        color={iconColor1}
                    />
                </Link>
                <Link href='https://github.com/ksr03' rounded="10px">
                    <FaGithubSquare 
                        size="45px" 
                        onMouseEnter={handleMouseEnter2}
                        onMouseLeave={handleMouseLeave2}
                        color={iconColor2}
                    />
                </Link>
            </HStack>
        </Flex>
          )
}

export default Header