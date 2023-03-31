import { Box } from '@chakra-ui/react';
import BurgerMenu from './BurgerMenu';
import Navbar from './Navbar';

function Header() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box display={{ base: 'flex', md: 'none' }}>
        <BurgerMenu />
      </Box>
    </>
  );
}

export default Header;
