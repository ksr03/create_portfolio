import React from 'react'
import './Loading.css'
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
  const Circle = Array.from({length: 12}, (_, index) => {
    const animationDelay = `${(index/10).toFixed(1)}s`
    const degree = index * 30
    return (
        <circle 
            key={index} 
            cx='125px' 
            cy='75px' 
            r='10px' 
            stroke='transparent' 
            className='load-blink-dot' 
            style={{animationDelay: animationDelay}} 
            transform={`rotate(${degree},75,75)`}
        />
    )
})
  return (
    <div>
        <Box   
            position='fixed'
            top={0}
            left={0}
            w='100%'
            h='100%'
            bg='#F3F3F3'
            opacity={isLoading ? 1 : 0}
            display='flex'
            alignItems='center'
            justifyContent='center'
            zIndex={isLoading ? '9999' : '0'}
            transition='.2s'
        >
          <div id="sample05" className="loading">
            <svg width="150px" height="150px">
                {Circle}
            </svg>
          </div>
        </Box>
    </div>
  )
}

export default Loading