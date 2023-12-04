import React, { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect';
import Loading from '@components/Common/Loading';
import Header from '@components/Common/Header'
import LongFlight from '@components/ShootingGame/LongFlight'
import Detail from '@components/ShootingGame/Detail';
import Copyright from '@components/Common/Copyright';
import { VStack, Image, Text } from '@chakra-ui/react';

const Game = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (document.readyState === 'complete') {
        setIsLoading(false);
        } else {
        window.addEventListener('load', ()=>{setIsLoading(false)});
        }
    }, []);

    return (
        <>
          <Loading isLoading={isLoading} />
          <Header/>
          <VStack marginBottom={50} justify='center' spacing={0}>
            <VStack
                  w='80%'
                  h='60px'
                  maxWidth='1000px'
                  bg='#AAB7CA'
            />
            {isMobile ? 
              <Image 
                src='shooting_game/images/skeleton.jpg'
                alt='ゲームのタイトル画面'
                w='80%'
                maxWidth='1000px'
                objectFit='cover'
                filter='auto'
                brightness='30%'
              />
              : 
              <LongFlight/>}
            <Detail/>
          </VStack>
          <Copyright/>
        </>
      )
}

export default Game