import React from 'react'
import Modal from '@components/Modal'
import { useState } from 'react'
import { HStack, Text, VStack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { FaHashtag } from 'react-icons/fa'

type Props = {
    image: string
    title: string
    introduction: string
    date: string
    skills: string
    detail: string
    focus: string
}

const DevPart = ({image, title, introduction, date, skills, detail, focus}: Props) => {
    const [show, setShow] = useState(false)
    return (
    <>
        <VStack 
            margin={15}
            bg='white' 
            w='200px' 
            h='260px'
            borderRadius='10px'
            cursor='pointer'
            transition='.15s'
            zIndex='5'
            _hover={{ bg: "#FAFAFA"}}
            onClick={() => setShow(true)}
        >
            <Image
                w='100%'
                h='110px'
                roundedTop='10px'
                alt='開発物イメージ'
                src={"dev/" + image + ".png"}
                objectFit='cover'
            />
            <Text 
                marginLeft='8px' 
                w='100%'
                h='5px' 
                textAlign='left'
                fontSize='10px'
                lineHeight='3px'
            >
                {date}
            </Text>
            <Text h='30px' fontSize='20px' fontWeight='bold'>
                {title}
            </Text>
            <Text 
                fontSize='15px' 
                w='90%' 
                h='55px'
                lineHeight='18px' 
                wordBreak='break-all'
                overflow='hidden'
            >
                {introduction}
            </Text>
            <HStack marginLeft='20px' marginTop='3px' w='100%' h='20px' alignItems='start'>
                <FaHashtag size='15px' color='#A69A7D'/>
                <Text w='100%' lineHeight='15px' color='#A69A7D'>{skills}</Text>
            </HStack>
        </VStack>
        <Modal 
            show={show} 
            setShow={setShow} 
            image={image}
            title={title}
            skills={skills}
            detail={detail}
            focus={focus}
        />
    </>
    )
}

export default DevPart