import React from 'react'
import getWindowSize from '@hooks/getWindowSize'
import { useState } from 'react'
import { HStack, VStack, Box, Text, Spacer } from '@chakra-ui/layout'
import { CloseIcon } from '@chakra-ui/icons'

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
        document.body.style.overflow = 'hidden'
    }
    if (modalState === 2){
        setTimeout(() => { 
            setShow(false) 
            setModalState(0) 
        }, 200) 
        document.body.style.overflow = 'auto'
    }

    let scale = 1
    const w = getWindowSize()[0]
    if(w < 500)
        scale = w / 450 

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
                            rounded='5px'
                            transform={modalState === 1 ? 'scale(1)' : 'scale(.9)'}
                            transition='.2s'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Box
                                w='100%' 
                                h='200px' 
                                roundedTop='5px'
                                overflow='hidden'
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                            >
                                <video 
                                    src={'dev/'+image+".mp4"} 
                                    style={{transform: 'scale(1.5)'}}
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
                            <VStack w='100%' overflowY='scroll'>
                                <HStack marginY='20px' h='50px' w='90%'>
                                    <Text w='20%' textAlign='center' fontSize='15px' color='#036a80'>作品名</Text>
                                    <Text w='80%' textAlign='center' fontSize='25px'>{title}</Text>
                                </HStack>
                                <HStack marginBottom='15px' paddingBottom='15px' w='90%' borderBottom='1px solid #DDDDDD'>
                                    <Text w='20%' textAlign='center' fontSize='14px' color='#036a80'>概要</Text>
                                    <Text w='80%' fontSize='16px'>{detail}</Text>
                                </HStack>
                                <HStack marginBottom='16px' paddingBottom='15px' w='90%' borderBottom='1px solid #DDDDDD'>
                                    <Text w='20%' textAlign='center' fontSize='14px' color='#036a80'>工夫</Text>
                                    <Text w='80%' fontSize='16px'>{focus}</Text>
                                </HStack>
                                <HStack marginBottom='20px' w='90%'>
                                    <Text w='20%' textAlign='center' fontSize='14px' color='#036a80'>技術</Text>
                                    <Text w='80%' fontSize='16px'>{skills}</Text>
                                </HStack>
                            </VStack>
                        </VStack>
                    </Box>
                ) : (
                    <></>
                )}
        </>
    ) 
}

export default Modal