import React from 'react'
import { useState } from 'react'
import { HStack, VStack, Box, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

type Props = {
    show: boolean
    setShow: any
    image: string
    title: string
    skills: string
    detail: string
    focus: string
}

const Modal = ({show, setShow, image, title, skills, detail, focus}: Props) => {
    const [onViewing, setOnViewing] = useState(false)
    if (show){
        {setTimeout(() => { setOnViewing(true) }, 1) }       
    } else {
        {setTimeout(() => { setOnViewing(false) }, 1) }
    }

    return (
        <>
            {show ? 
                (
                    <Box   
                        position='fixed'
                        top={0}
                        left={0}
                        w='100%'
                        h='100%'
                        bg={onViewing ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'}
                        opacity={onViewing ? '1' : '0'}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        transition='.2s'
                        onClick={() => setShow(false)}
                    >
                        <VStack
                            bg='white' 
                            w='90%' 
                            h='600px' 
                            maxWidth='600px' 
                            rounded='20px'
                            transform={onViewing ? 'scale(1)' : 'scale(.9)'}
                            transition='.2s'
                            onClick={(e) => e.stopPropagation()}
                        >
                           <Image 
                                w='100%' 
                                h='200px' 
                                alt='開発物イメージ' 
                                src={'dev/'+image} 
                                objectFit='cover'
                                roundedTop='20px'
                            />
                            <HStack marginY={5} h='50px'>
                                <Text marginRight='20px' fontSize='20px'>作品名:</Text>
                                <Text fontSize='35px'>{title}</Text>
                            </HStack>
                            <HStack h='80px'>
                                <Text marginY={0} marginLeft='30px' w='20%'>概要:</Text>
                                <Text marginY={0} marginRight='30px' w='80%'>{detail}</Text>
                            </HStack>
                            <hr style={{width: '90%'}}/>
                            <HStack h='120px'>
                                <Text marginY={0} marginLeft='30px' w='20%'>こだわり:</Text>
                                <Text marginY={0} marginRight='30px' w='80%'>{focus}</Text>
                            </HStack>
                            <hr style={{width: '90%'}}/>
                            <HStack h='30px' w='100%'>
                                <Text marginY={0} marginLeft='30px' w='20%' >使用技術:</Text>
                                <Text marginY={0} marginRight='30px' w='80%'>{skills}</Text>
                            </HStack>
                        </VStack>
                    </Box>
                ) : (
                    <></>
                )}
        </>
    ) 
}

export default Modal