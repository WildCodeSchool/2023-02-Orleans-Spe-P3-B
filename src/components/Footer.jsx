import { Flex, HStack, Spacer, Tab, TabList, Tabs, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <Flex as='footer' height='2.5rem' width='100%' bg='footer.200' position='relative' bottom='0' shadow='lg' alignItems='center'>
      <Text as='h1' color={'light.500'} ml={4}>
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
