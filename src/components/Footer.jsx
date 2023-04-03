import { Flex, HStack, Spacer, Tab, TabList, Tabs, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <Flex
      as='footer'
      display={{ base: 'flex' }}
      bg='primary.400'
      m={6}
      paddingStart={6}
      paddingEnd={6}
      rounded='2xl'
      shadow='lg'
      alignItems='center'
    >
      <Text as='h1' color={'light.500'}>
        {'Made by: Mikael, Chloé and Violeta'}
      </Text>
      <Spacer />
      <Tabs variant='unstyled'>
        <TabList>
          <HStack>
            <Tab _selected={{ color: 'light.500' }}>
              <NavLink to='/legal-notice'>{'Legal Notice'}</NavLink>
            </Tab>
          </HStack>
        </TabList>
      </Tabs>
    </Flex>
  );
}
export default Footer;
