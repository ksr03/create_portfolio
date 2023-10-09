import React from 'react'
import { useState } from 'react'
import { HStack, VStack, Box, Text, Spacer, Center } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { CloseIcon } from '@chakra-ui/icons'
import { AiOutlineClose } from 'react-icons/ai'

type Props = {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    image: string
    title: string
    skills: string
    detail: string
    focus: string
}

const Modal = ({show, setShow, image, title, skills, detail, focus}: Props) => {
    
    //モーダルの状態
    const [modalState, setModalState] = useState(0)
    if (show && modalState === 0){
        setTimeout(() => { setModalState(1) }, 1)        
    }
    if (modalState === 2){
        setTimeout(() => { 
            setShow(false) 
            setModalState(0) 
        }, 200) 
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
                        bg={modalState === 1 ? 'rgba(0, 0, 0, .5)' : 'rgba(0, 0, 0, 0)'}
                        opacity={modalState === 1 ? '1' : '0'}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        transition='.2s'
                        zIndex='9999'
                        onClick={() => setModalState(2)}
                    >
                        <VStack
                            bg='white' 
                            w='90%' 
                            h='90%' 
                            maxWidth='600px'
                            maxHeight='600px' 
                            rounded='20px'
                            transform={modalState === 1 ? 'scale(1)' : 'scale(.9)'}
                            transition='.2s'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Box
                                w='100%' 
                                h='200px' 
                                roundedTop='20px'
                                overflow='hidden'
                            >
                                <video 
                                    src={'dev/'+image+".mp4"} 
                                    autoPlay
                                    loop
                                />
                            </Box>
                            <HStack
                                w='100%'
                                position='absolute'
                            >
                                <Spacer />
                                <CloseIcon 
                                    marginTop='10px'
                                    marginRight='10px'
                                    boxSize='30px' 
                                    color='rgba(255, 255, 255, .3)'
                                    mixBlendMode='difference'
                                    transition='.15s' 
                                    _hover={{ color: "rgba(255, 255, 255, .5)" }}
                                    onClick={()=>setModalState(2)} 
                                />
                            </HStack>
                            <HStack marginY={5} h='50px'>
                                <Text marginRight='20px' fontSize='20px'>作品名:</Text>
                                <Text fontSize='35px'>{title}</Text>
                            </HStack>
                            <HStack h='80px'>
                                <Text marginLeft='30px' w='20%'>概要:</Text>
                                <Text marginRight='30px' w='80%'>{detail}</Text>
                            </HStack>
                            <hr style={{width: '90%'}}/>
                            <HStack h='120px'>
                                <Text marginLeft='30px' w='20%'>こだわり:</Text>
                                <Text marginRight='30px' w='80%'>{focus}</Text>
                            </HStack>
                            <hr style={{width: '90%'}}/>
                            <HStack h='30px' w='100%'>
                                <Text marginLeft='30px' w='20%' >使用技術:</Text>
                                <Text marginRight='30px' w='80%'>{skills}</Text>
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