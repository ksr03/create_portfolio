import React from 'react'
import { VStack, HStack, Box, Text, Link } from '@chakra-ui/layout'
import { AiOutlineRight } from 'react-icons/ai'

const NotFound = () => {
  return (
    <>
        <VStack w='80%' zIndex='5' bg='#D6D6D6'>
            <Box h='80px' />
            <Text fontSize='40px' fontWeight='bold'>Not Found</Text>
            <Text marginBottom='10px' fontSize='17px'>このページは存在しません。</Text>
            <Link href='/' style={{ textDecoration: 'none' }}>
                <HStack 
                    marginBottom='30px'
                    paddingLeft='25px' 
                    paddingRight='20px' 
                    paddingY='8px'
                    border='1px solid white' 
                    borderRadius='full'
                    bg='whiteAlpha.500'
                    transition='.2s'
                    _hover={{ bg: 'whiteAlpha.700' }}
                >
                    <Text marginRight='15px' fontSize="17px" >
                        トップページへ戻る
                    </Text>
                    <AiOutlineRight size='20px' />
                </HStack>
            </Link>
        </VStack>
    </>
  )
}

export default NotFound