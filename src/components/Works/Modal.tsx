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
    }
    if (modalState === 2){
        setTimeout(() => { 
            setShow(false) 
            setModalState(0) 
        }, 200) 
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
                            <HStack marginY={5} h='50px'>
                                <Text marginRight='20px' fontSize={scale*20}>作品名:</Text>
                                <Text fontSize={scale*35}>{title}</Text>
                            </HStack>
                            <HStack h='80px'>
                                <Text marginLeft='30px' w='20%' fontSize={scale*15}>概要:</Text>
                                <Text marginRight='30px' w='80%' fontSize={scale*17}>{detail}</Text>
                            </HStack>
                            <hr style={{width: '90%'}}/>
                            <HStack h='120px'>
                                <Text marginLeft='30px' w='20%' fontSize={scale*15}>こだわり:</Text>
                                <Text marginRight='30px' w='80%' fontSize={scale*17}>{focus}</Text>
                            </HStack>
                            <hr style={{width: '90%'}}/>
                            <HStack h='30px' w='100%'>
                                <Text marginLeft='30px' w='20%' fontSize={scale*15}>使用技術:</Text>
                                <Text marginRight='30px' w='80%' fontSize={scale*17}>{skills}</Text>
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