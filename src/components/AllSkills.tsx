import React from 'react'
import Skill from './Skill'
import myskills from '../data/myskills.json'
import { HStack, Box, Text } from '@chakra-ui/layout'
import { RiCircleFill } from 'react-icons/ri'

type skill_type = {
    name: string
    level: number
}

const AllSkills = () => {
    const FrontSkills:any = myskills.front.map(({name, level}: skill_type, index: number) => {
        return (
            <Skill key={index} name={name} level={level} />
        )
    })
    const BackSkills:any = myskills.back.map(({name, level}: skill_type, index: number) => {
        return (
            <Skill key={index} name={name} level={level} />
        )
    })
    const OtherSkills:any = myskills.other.map(({name, level}: skill_type, index: number) => {
        return (
            <Skill key={index} name={name} level={level} />
        )
    })

  return (
    <>
        <HStack marginY='10px' marginLeft='10px' h='20px'>
            <RiCircleFill color='#3D454B' size='10px' />
            <Text fontWeight='bold'>フロントエンド</Text>
        </HStack>
        <Box w='100%' display='flex' flexWrap='wrap' >
            {FrontSkills}
        </Box>
        <hr color='#DDDDDD' style={{ width: '95%' }}/>
        <HStack marginY='10px' marginLeft='10px' h='20px'>
            <RiCircleFill color='#3D454B' size='10px' />
            <Text fontWeight='bold'>バックエンド</Text>
        </HStack>
        <Box w='100%' display='flex' flexWrap='wrap' >
            {BackSkills}
        </Box>
        <hr color='#DDDDDD' style={{ width: '95%' }}/>
        <HStack marginY='10px' marginLeft='10px' h='20px'>
            <RiCircleFill color='#3D454B' size='10px' />
            <Text fontWeight='bold'>その他</Text>
        </HStack>
        <Box w='100%' display='flex' flexWrap='wrap' >
            {OtherSkills}
        </Box>
    </>
  )
}

export default AllSkills