import React from 'react';
import { Route, Routes } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@style/theme';

import Home from "@pages/Home"
import ShootingGame from '@pages/ShootingGame';
import NoMatch from '@pages/NoMatch';

function App() {
  return (
    <div className='App'>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shooting_game' element={<ShootingGame />} />
          <Route path='*' element={<NoMatch />} />
        </Routes> 
      </ChakraProvider>
    </div>
  );
}

export default App;
