import React from 'react'
import DevPart from './DevPart'
import { VStack, Wrap, WrapItem, Text, Box } from '@chakra-ui/layout'
import developments from '../developments.json'

type dev_type = {
  image: string
  title: string
  detail: string
  date: string
  skills: string
}

const Developments = () => {
  const DevList:any = developments.map(( development: dev_type, index: number )=>{
    return (
      <WrapItem key={index}>
          <DevPart 
            image={development.image} 
            title={development.title} 
            detail={development.detail}
            date={development.date} 
            skills={development.skills}
          />
      </WrapItem>
    )
  })

  return (
    <VStack 
      w='80%' 
      bg='#FFDFD4' 
      maxWidth='1000px' 
      paddingBottom={40}
    >
        <Text 
          marginBottom={3}
            fontSize='30px' 
            fontWeight='bold' 
            color='#3D454B'
        >
            Developments
        </Text>
        <Text 
          margin={0} 
          paddingY={5} 
          paddingX={10} 
          rounded='10px' 
          bg='white'
        >
          今までに作成した開発物です。
        </Text>
        <Box 
          w='90%'
          marginX={15}
        >
          <Wrap spacing={4} justify='center'>
            {DevList}
          </Wrap>
        </Box>
    </VStack>
  )
}

export default Developments