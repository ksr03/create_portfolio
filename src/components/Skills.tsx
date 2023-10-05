import React from 'react'
import Skill from './Skill'
import { HStack, Text, Box } from '@chakra-ui/layout'
import { RiCircleFill } from 'react-icons/ri'

type skill_type = {
    name: string
    level: number
}

type Props = {
    genre_name: string
    skill_list: Array<skill_type>
}

const Skills = ({genre_name, skill_list}: Props) => {
    const FrontSkills:any = skill_list.map(({name, level}: skill_type, index: number) => {
        return (
            <Skill key={index} name={name} level={level} />
        )
    })

  return (
    <>
        <HStack marginTop='15px' marginBottom='10px' marginLeft='10px' h='20px'>
            <RiCircleFill color='#3D454B' size='10px' />
            <Text fontWeight='bold'>{genre_name}</Text>
        </HStack>
        <Box paddingBottom='10px' w='100%' display='flex' flexWrap='wrap' >
            {FrontSkills}
        </Box>
        <hr color='#EEEEEE' style={{ width: '95%' }}/>
    </>
  )
}

export default Skills