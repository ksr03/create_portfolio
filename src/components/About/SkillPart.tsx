import React from 'react'
import { HStack, Text } from '@chakra-ui/layout'
import { FaRegFaceMeh, FaRegFaceLaugh } from 'react-icons/fa6'

type Props = {
    name: string
    level: number
}

const SkillPart = ({name, level}: Props) => {
  return (
    <HStack margin='5px' paddingLeft='12px' paddingRight='15px' h='35px' bg='#F8F8F8' rounded='20px'>
        {level == 0 ? <FaRegFaceMeh size='18px' color='#6DB633'/> : <FaRegFaceLaugh size='18px' color='#3278E1' />}
        <Text fontSize='16px' lineHeight='3px'>{name}</Text>
    </HStack>
  )
}

export default SkillPart