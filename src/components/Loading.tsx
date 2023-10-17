import React from 'react'
import './Loading.css'
import { Box } from '@chakra-ui/react'

type Props = {
    isLoading: boolean
}

const Loading = ({isLoading}:Props) => {
  const Circle = Array.from({length: 12}, (_, index) => {
    const animationDelay = `${(index/10).toFixed(1)}s`
    const degree = index * 30
    return (
        <circle 
            key={index} 
            cx='115px' 
            cy='75px' 
            r='6px' 
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