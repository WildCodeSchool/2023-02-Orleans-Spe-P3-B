import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import BurgerMenu from './BurgerMenu';
import Navbar from './Navbar';

function Header() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box display={{ base: '0px', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}>
        <BurgerMenu />
      </Box>
    </>
  );
}

export default Header;
