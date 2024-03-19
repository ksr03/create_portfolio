import React from 'react'
import LinkButton from '@components/Common/LinkButton'
import { useState } from 'react'
import { HStack, VStack, Box, Text, Spacer } from '@chakra-ui/layout'
import { CloseIcon } from '@chakra-ui/icons'

const ModalText = ({title, text}:{title:string, text:string}) => {
    return (
        <HStack marginBottom='15px' paddingBottom='20px' w='90%' borderBottom='1px solid #DDDDDD' whiteSpace='pre-wrap'>
            <Text w='20%' textAlign='center' fontSize='14px' color='#036a80'>{title}</Text>
            <Text w='80%' fontSize='16px'>{text}</Text>
        </HStack>
    )
}

type Props = {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    image: string
    title: string
    skills: string
    detail: string
    background: string
    focus: string
    github: string
    demo: string
}

const Modal = ({show, setShow, image, title, skills, detail, background, focus, github, demo}: Props) => {

    //モーダルの状態
    //0:非表示から表示へ 1:表示中 2:表示から非表示へ
    const [modalState, setModalState] = useState(0)

    //モーダルが表示された際の処理
    if (show && modalState === 0){
        setTimeout(() => { setModalState(1) }, 1)  
        document.body.style.overflow = 'hidden'
    }

    //モーダルが閉じられた際の処理
    if (modalState === 2){
        setTimeout(() => { 
            setShow(false) 
            setModalState(0) 
        }, 200) 
        document.body.style.overflow = 'auto'
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
                                    muted
                                    loop
                                    playsInline
                                />
                            </Box>
                            <HStack
                                w='100%'
                                position='absolute'
                            >
                                <Spacer />
                                <CloseIcon 
                                    margin='10px'
                                    padding='7px'
                                    boxSize='50px' 
                                    bg='#036a80'
                                    color='white'
                                    rounded='full'
                                    transition='.15s' 
                                    cursor='pointer'
                                    _hover={{ bg: '#035B6D' }}
                                    onClick={()=>setModalState(2)} 
                                />
                            </HStack>
                            <VStack paddingBottom='25px' w='100%' overflowY='scroll'>
                                <HStack marginY='20px' h='50px' w='90%'>
                                    <Text w='20%' textAlign='center' fontSize='15px' color='#036a80'>作品名</Text>
                                    <Text w='80%' textAlign='center' fontSize='25px'>{title}</Text>
                                </HStack>
                                <ModalText title='概要' text={detail} />
                                <ModalText title='背景' text={background} />
                                <ModalText title='工夫' text={focus} />
                                <ModalText title='技術' text={skills} />
                                <LinkButton link={github} type='github' />
                                <LinkButton link={demo} type='demo' />
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