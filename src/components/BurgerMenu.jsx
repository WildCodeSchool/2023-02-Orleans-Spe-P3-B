import React from 'react';
import { Menu, MenuButton, MenuItem, MenuList, Image, Text, MenuCommand, IconButton } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

function BurgerMenu() {
  return (
    <Menu shadow='md' color='secondary.400' bg='light.200' m='2'>
      <MenuButton
        shadow='md'
        color='secondary.400'
        bg='light.200'
        m='3'
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='unstyled'
      />
      <MenuList color='secondary.400' bg='light.200'>
        <MenuCommand bg='light.200'>
          <Image src={'src/assets/images/logo4.png'} ms='2' boxSize='25px'></Image>
          <Text ms='3'>THE MIXER'S LOUNGE</Text>
        </MenuCommand>
        <MenuItem mt='5' bg='light.200'>
          <NavLink to='/'>Home</NavLink>
        </MenuItem>
        <MenuItem bg='light.200'>
          <NavLink to='/the-cocktails'>The Cocktails</NavLink>
        </MenuItem>
        <MenuItem bg='light.200'>
          <NavLink to='/find-your-cocktail'>Find Your Cocktail</NavLink>
        </MenuItem>
        <MenuItem bg='light.200'>
          <NavLink to='/about'>About</NavLink>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default BurgerMenu;
