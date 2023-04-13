import { Menu, MenuButton, MenuItem, MenuList, Image, Text, MenuCommand, IconButton } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import imgLogo from '../assets/images/logo.png';

function BurgerMenu() {
  return (
    <Menu shadow='md'>
      <MenuButton
        shadow='md'
        color='secondary.400'
        bg='light.200'
        m={4}
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='unstyled'
      />
      <MenuList color='secondary.400' bg='light.200'>
        <MenuCommand>
          <Image src={imgLogo} ms='2' boxSize='25px'></Image>
          <Text ms='3'>{"THE MIXER'S LOUNGE"}</Text>
        </MenuCommand>
        <MenuItem mt='5' bg='light.200'>
          <NavLink to='/home'>{'Home'}</NavLink>
        </MenuItem>
        <MenuItem bg='light.200'>
          <NavLink to='/the-cocktails'>{'The Cocktails'}</NavLink>
        </MenuItem>
        <MenuItem bg='light.200'>
          <NavLink to='/discover-a-cocktail'>{'Discover a Cocktail'}</NavLink>
        </MenuItem>
        <MenuItem bg='light.200'>
          <NavLink to='/about'>{'About'}</NavLink>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default BurgerMenu;
