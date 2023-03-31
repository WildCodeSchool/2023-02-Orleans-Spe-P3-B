import React from 'react';
import { Flex, TabIndicator, HStack, Image, Spacer, Tab, TabList, Tabs, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <Flex
      as='nav'
      display={{ lg: 'flex', md: 'flex', sm: 'none', base: 'none' }}
      color='primary.400'
      bg='light.200'
      m={6}
      p='2px'
      paddingStart={8}
      paddingEnd={8}
      rounded='2xl'
      shadow='md'
      alignItems='center'
    >
      <Image src={'src/assets/images/logo4.png'} me={5} boxSize='40px'></Image>
      <Text as='h1'>THE MIXER'S LOUNGE</Text>
      <Spacer />
      <Tabs position='relative' variant='unstyled'>
        <TabList>
          <HStack spacing='20px'>
            <Tab _selected={{ color: 'secondary.500' }}>
              <NavLink to='/'>Home</NavLink>
            </Tab>
            <Tab _selected={{ color: 'secondary.500' }}>
              <NavLink to='/the-cocktails'>The Cocktails</NavLink>
            </Tab>
            <Tab _selected={{ color: 'secondary.600' }}>
              <NavLink to='/find-your-cocktail'>Find Your Cocktail</NavLink>
            </Tab>
            <Tab _selected={{ color: 'secondary.600' }}>
              <NavLink to='/about'>About</NavLink>
            </Tab>
          </HStack>
          <TabIndicator mt={{ lg: '9', md: '2' }} height='2px' bg='secondary.600' />
        </TabList>
      </Tabs>
    </Flex>
  );
}

export default Navbar;
