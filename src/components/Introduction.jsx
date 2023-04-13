import { Box, Center, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import introductionCocktail from '../assets/intrococktail.jpeg';

const Introduction = () => {
  return (
    <Container maxW={{ sm: '90%', lg: '70%' }}>
      <Center>
        <Heading as='h1' size='2xl' align='center' mt={5} color='light.200' textShadow='1px 3px #e4686f'>
          {`Welcome to the Mixer's Lounge`}
        </Heading>
      </Center>
      <Container maxW='100%' bg='light.50' borderRadius='lg' backdropFilter='saturate(200%) blur(16px)' mt={5} boxShadow='sm' p={0}>
        <Flex maxW='100%' direction={{ base: 'column', lg: 'row' }} alignItems='center' justifyContent='space-between'>
          <Image
            borderRadius='lg'
            src={introductionCocktail}
            width={{ base: '100%', lg: 'auto' }}
            height={{ base: '15rem', lg: '20rem' }}
            objectFit='cover'
            boxShadow='base'
          />
          <Box maxW='65%' mt={{ base: '1.25rem', lg: '0' }} mb={{ base: '1.25rem', lg: '0' }} mr={5} ml={5}>
            <Text color='secondary.700'>
              {
                'The aim of this website is quite simple: making looking for a cocktail easy and fun. You can look through our listing, search by name, ingredients or categories, but you can also take a little test and find out what your new favourite cocktail will be! We hope you will enjoy your stay!'
              }
            </Text>
            <Text fontSize='xs' color='secondary.600'>
              {'Drinking alcohol is dangerous for your health. Remember to always drink responsibly.'}
            </Text>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default Introduction;
