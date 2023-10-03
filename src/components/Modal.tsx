import React from 'react'
import { HStack, VStack, Box, Text, Spacer } from '@chakra-ui/layout'
import { AiOutlineCloseCircle } from 'react-icons/ai'

type Props = {
    show: boolean
    setShow: any
}

const Modal = ({show, setShow}: Props) => {
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
                        bg='rgba(0, 0, 0, 0.5)'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        onClick={() => setShow(false)}
                    >
                        <VStack
                            bg='white' 
                            w='90%' 
                            h='600px' 
                            maxWidth='600px' 
                            onClick={(e) => e.stopPropagation()}
                        >
                            <HStack w='100%' >
                                <Spacer />
                                <Box 
                                    marginTop={5} 
                                    marginRight={5} 
                                    w='60px' 
                                    h='60px'
                                    rounded='10px'
                                    transition='.3s'
                                    _hover={{ bg: "#CCCCCC" }} 
                                    onClick={() => setShow(false)}
                                >
                                    <AiOutlineCloseCircle size='60px' color='#3D454B' />
                                </Box>
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