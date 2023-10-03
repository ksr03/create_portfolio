import React from 'react'
import DevPart from './DevPart'
import { VStack, Wrap, WrapItem, Text, Box } from '@chakra-ui/layout'

const Developments = () => {
  return (
    <VStack 
      w='80%' 
      bg='#FFDFD4' 
      maxWidth='1000px' 
      paddingBottom={40}
    >
        <Text 
            fontSize='30px' 
            fontWeight='bold' 
            color='#3D454B'
        >
            Developments
        </Text>
        <Box 
          w='90%'
          marginX={15}
        >
          <Wrap spacing={4} justify='center'>
            <WrapItem>
              <DevPart image='dev1.png' title='abc' detail='aaaaaaaaaa' />
            </WrapItem>
          </Wrap>
        </Box>
    </VStack>
  )
}

export default Developments