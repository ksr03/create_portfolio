import React from 'react'
import DevPart from './DevPart'
import { VStack, Wrap, WrapItem, Text, Box } from '@chakra-ui/layout'
import developments from '../developments.json'

type dev_type = {
  image: string
  title: string
  introduction: string
  date: string
  skills: string
  detail: string
  focus: string
}

const Developments = () => {
  const DevList:any = developments.map(( {image, title, introduction, date, skills, detail, focus}: dev_type, index: number )=>{
    return (
      <WrapItem key={index}>
          <DevPart 
            image={image} 
            title={title} 
            introduction={introduction}
            date={date} 
            skills={skills}
            detail={detail}
            focus={focus}
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
          marginY={0}
          marginX={5} 
          paddingY={5} 
          paddingX={10} 
          rounded='10px' 
          bg='white'
        >
          今までに作成した開発物です。クリックすると詳細が表示されます。
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