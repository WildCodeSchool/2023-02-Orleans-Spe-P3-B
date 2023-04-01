import { Flex, HStack, Spacer, Tab, TabList, Tabs, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex
      as='footer'
      display={{ base: 'flex' }}
      color='light.400'
      bg='primary.400'
      m={6}
      paddingStart={6}
      paddingEnd={2}
      rounded='2xl'
      shadow='lg'
      alignItems='center'
    >
      <Text as='h1' color={'light.600'}>
        {'Made by: Mikael, Chloé et Violeta'}
      </Text>
      <Spacer />
      <Tabs position='relative' variant='unstyled'>
        <TabList>
          <HStack>
            <Tab _selected={{ color: 'light.200' }}>
              <Text as='h1' color={'light.600'}>
                {'Legal Notice'}
              </Text>
            </Tab>
          </HStack>
        </TabList>
      </Tabs>
    </Flex>
  );
}
export default Footer;
