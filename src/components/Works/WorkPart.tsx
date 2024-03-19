import React from 'react'
import Modal from '@components/Works/Modal'
import { useState } from 'react'
import { HStack, Text, VStack, Spacer } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { FaHashtag } from 'react-icons/fa'

type Props = {
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

const DevPart = ({image, title, scale, introduction, date, skills, detail, background, focus, github, demo}: Props) => {
    const [show, setShow] = useState(false)
    return (
    <>
        <VStack 
            margin={15}
            bg='white' 
            w='200px' 
            h='270px'
            borderRadius='5px'
            cursor='pointer'
            transition='.15s'
            _hover={{ bg: "#FAFAFA"}}
            onClick={() => setShow(true)}
            zIndex='5'
        >
            <Image
                w='100%'
                h='110px'
                roundedTop='5px'
                alt='開発物イメージ'
                src={"dev/" + image + ".png"}
                objectFit='cover'
            />
            <HStack paddingTop='2px' width='100%' height='12px' paddingX='8px'>
                <Text textAlign='left' fontSize='11px'>
                    {date}
                </Text>
                <Spacer/>
                <Text paddingX='5px' rounded='full' bg='#E9F2F3' textAlign='right' fontSize='13px' color='#036a80'>
                    {scale}
                </Text>
            </HStack>
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
            background={background}
            focus={focus}
            github={github}
            demo={demo}
        />
    </>
    )
}

export default DevPart