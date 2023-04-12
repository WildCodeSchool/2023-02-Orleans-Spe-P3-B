import { Box, Button, Center, Container, Flex, Grid, GridItem, Heading, Hide, Image, Text, Wrap } from '@chakra-ui/react';
import cocktailLanding from '../assets/images/cocktail-landing.jpeg';
import cocktailLanding2 from '../assets/images/cocktail-landing2.jpeg';
import cocktailLanding3 from '../assets/images/cocktail-landing3.jpeg';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/home');
  };
  return (
    <>
      <Box pt='3rem' pb='8rem'>
        <Center>
          <Heading as='h1' color='light.400' textShadow='1px 1px #ff0000'>
            {"The Mixer's Lounge"}
          </Heading>
        </Center>
      </Box>

      <Box>
        <Center pt='12rem'>

          <Text fontSize={{}} color='light.400'>
            {'Find your'}
          </Text>
          <Text fontSize='clamp(50px, 10rem, 50px)' color='dark.400' pt='4rem'>
            {'COCKTAIL'}
          </Text>
        </Center>
        <Center pt='4rem'>
          <Button boxShadow='base' onClick={handleNavigate} borderRadius='10px' maxW='30rem'>
            {'Enter The Loundge'}
          </Button>
        </Center>
      </Box>
    </>
  );
};

export default Landing;
