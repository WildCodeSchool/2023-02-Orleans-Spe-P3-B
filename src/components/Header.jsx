import { Box } from '@chakra-ui/react';
import BurgerMenu from './BurgerMenu';
import Navbar from './Navbar';

function Header() {
  return (
    <>
      <Box display={{ lg: 'flex', md: 'flex', sm: 'none', base: 'none' }}>
        <Navbar />
      </Box>
      <Box display={{ base: 'flex', md: 'none' }}>
        <BurgerMenu />
      </Box>
    </>
  );
}

export default Header;
