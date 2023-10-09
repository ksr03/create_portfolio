import React from 'react'
import { Box, Text } from '@chakra-ui/react'

type Props = {
    isLoading: boolean
}

const blinkingTextStyles = {
    animation: "blink 2s infinite",
    "@keyframes blink": {
      "0%": {
        opacity: 1,
      },
      "50%": {
        opacity: 0,
      },
      "100%": {
        opacity: 1,
      },
    },
  };

const Loading = ({isLoading}:Props) => {
  return (
    <div>
        <Box   
            position='fixed'
            top={0}
            left={0}
            w='100%'
            h='100%'
            bg='white'
            opacity={isLoading ? 1 : 0}
            display='flex'
            alignItems='center'
            justifyContent='center'
            zIndex={isLoading ? '9999' : '0'}
            transition='.2s'
        >
            <Text fontSize='30px' sx={blinkingTextStyles}>Loading</Text>
        </Box>
    </div>
  )
}

export default Loading