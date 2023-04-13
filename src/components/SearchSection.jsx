import { Box, Button, Center, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import cocktail from '/src/assets/images/cocktail-blue.jpeg';
const SearchSection = () => {
  return (
    <>
      <Container maxW={{ sm: '90%', lg: '70%' }} mt='6rem'>
        <Center>
          <Heading as='h2' align='center' color='light.200' textShadow='1px 3px #e4686f'>
            {`You want to find a cocktail ?`}
          </Heading>
        </Center>
        <Container maxW='100%' bg='light.50' borderRadius='lg' backdropFilter='saturate(200%) blur(16px)' mt={5} boxShadow='sm' p={0}>
          <Flex maxW='100%' direction={{ base: 'column', lg: 'row' }} alignItems='center' justifyContent='space-between'>
            <Box maxW='65%' mt={{ base: '1.25rem', lg: '0' }} mb={{ base: '1.25rem', lg: '0' }} mr={5} ml={5}>
              <Text color='secondary.700' pl={{ md: '0rem', lg: '4rem' }}>
                {'Well if you click on the button you can do all the research you want !'}
              </Text>
            </Box>
            <Box>
              <Center>
                <Button mx='4rem' my='2rem' as={NavLink} to='/the-cocktails'>
                  {'Click Here'}
                </Button>
              </Center>
            </Box>
            <Image
              borderRightRadius='5px'
              src={cocktail}
              width={{ base: '100%', lg: 'auto' }}
              height={{ base: '15rem', lg: '20rem' }}
              objectFit='cover'
              boxShadow='base'
            />
          </Flex>
        </Container>
      </Container>
    </>
  );
};

export default SearchSection;
