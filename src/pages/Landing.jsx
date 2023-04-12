import { Box, Center, Container, Flex, Heading, Hide, Image, Text } from '@chakra-ui/react';
import cocktailLanding from '../assets/images/cocktail-landing.jpeg';
import cocktailLanding2 from '../assets/images/cocktail-landing2.jpeg';
import cocktailLanding3 from '../assets/images/cocktail-landing3.jpeg';

const Landing = () => {
  return (
    <>
      <Box pt='10rem' pb='5rem'>
        <Center>
          <Heading as='h1' size='3xl' color='light.200'>
            {"The Mixer's Lounge"}
          </Heading>
        </Center>
      </Box>

      <Container ms='1rem'>
        <Flex>
          <Image w='400px' h='45rem' pb='7rem' src={cocktailLanding} />
          <Image w='400px' h='45rem' pt='20rem' src={cocktailLanding2} />
          <Image w='400px' h='45rem' pb='15rem' src={cocktailLanding3} />
        </Flex>
      </Container>
    </>
  );
};

export default Landing;
