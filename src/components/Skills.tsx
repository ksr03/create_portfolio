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
    // eslint-disable-next-line
    const FrontSkills:any = skill_list.map(({name, level}: skill_type, index: number) => {
        return (
            <Skill key={index} name={name} level={level} />
        )
    })

  return (
    <>
        <HStack marginTop='25px' marginBottom='10px' marginLeft='10px' h='20px'>
            <RiCircleFill color='#303030' size='10px' />
            <Text fontWeight='bold' color='#464646'>{genre_name}</Text>
        </HStack>
        <Box paddingBottom='20px' w='100%' display='flex' flexWrap='wrap' >
            {FrontSkills}
        </Box>
        <hr color='#EEEEEE' style={{ width: '95%' }}/>
    </>
  )
}

export default Skills