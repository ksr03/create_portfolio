import React from 'react'
import { Text, HStack, Flex, Spacer, Link } from '@chakra-ui/react';
import { FaGithubSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Header = () => {
  return (
        <Flex minWidth='max-content' alignItems='center' bg="gray" h="50px">
            <Text fontSize="30px" marginLeft="20px" color="white">Portfolio</Text>
            <Spacer/>
            <HStack spacing="15px" marginRight="20px">
                <Link href='https://twitter.com/shirokichi_cr' rounded="10px" _hover={{ backgroundColor: "#CCCCCC"}}>
                    <FaSquareXTwitter size="45px" color='#333333'/>
                </Link>
                <Link href='https://github.com/ksr03' rounded="10px" _hover={{ backgroundColor: "#CCCCCC"}}>
                    <FaGithubSquare size="45px" color='#333333'/>
                </Link>
            </HStack>
        </Flex>
          )
}

export default Header