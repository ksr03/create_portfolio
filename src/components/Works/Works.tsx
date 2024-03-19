import React from 'react'
import WorkPart from '@components/Works/WorkPart'
import { VStack, Wrap, WrapItem, Text, Box } from '@chakra-ui/layout'
import developments from '@data/developments.json'

type work_type = {
  image: string
  title: string
  scale: string
  introduction: string
  date: string
  skills: string
  detail: string
  background: string
  focus: string
  github: string
  demo: string
}

const Works = () => {
  // eslint-disable-next-line
  const WorkList:any = developments.map(( {image, title, scale, introduction, date, skills, detail, background, focus, github, demo}: work_type, index: number )=>{
    return (
      <WrapItem key={index}>
          <WorkPart 
            image={image} 
            title={title} 
            scale={scale}
            introduction={introduction}
            date={date} 
            skills={skills}
            detail={detail}
            background={background}
            focus={focus}
            github={github}
            demo={demo}
          />
      </WrapItem>
    )
  })

  return (
    <VStack 
      w='80%' 
      bg='#D6D6D6' 
      maxWidth='1000px' 
      paddingBottom='30px'
    >
        <Text 
          marginTop='5px'
          marginBottom='0px'
          fontSize='30px' 
          fontWeight='bold' 
          color='#036a80'
          zIndex='5'
        >
            Works
        </Text>
        <Text 
          marginBottom='15px'
          paddingY='8px'
          paddingX='15px'
          fontSize='15px'
          zIndex='5'
        >
          今までに作成した開発物です。クリックすると詳細が表示されます。
        </Text>
        <Box 
          w='90%'
          marginX={15}
        >
          <Wrap spacing={4} justify='center'>
            {WorkList}
          </Wrap>
        </Box>
    </VStack>
  )
}

export default Works