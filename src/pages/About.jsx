import { Box, Button, Center, Container, Flex, Grid, GridItem, Heading, Image, Link, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import cocktail from '../assets/images/cocktail-pink.jpeg';
import githubLogo from '../assets/images/github-mark.svg';
import cocktailDbLogo from '../assets/images/logo-cocktail-api.png';

const About = () => {
  return (
    <Container maxW={{ lg: '100%', md: '80%' }} pt='5rem'>
      <Grid maxH='10rem' templateRows='1fr' templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}>
        <GridItem display={{ base: 'none', lg: 'block' }} colSpan={1} borderLeftRadius='5px'>
          <Image display={{ base: 'none', lg: 'block' }} src={cocktail} boxSize='80rem' borderLeftRadius='5px' />
        </GridItem>
        <GridItem colSpan={1} bg='light.400' borderLeftRadius={{ base: '5px', lg: '0px' }} borderRightRadius='5px'>
          <Flex direction='column'>
            <Center>
              <Heading as='h1' pt='10rem'>
                <Text mx='5rem' fontSize='clamp(20%, 6vh, 90%)'>
                  {"About The Mixer's Lounge"}
                </Text>
              </Heading>
            </Center>
            <Box mx='2rem' pt='8rem'>
              <Text>
                {
                  "The Mixer's Lounge is a site who you can research cocktails, but also, be surprised by the choice of a cocktail you don't even know yet. The chances to find a new cocktail who will suit you are incredible, so let yourself be carried away. I don't know what to write anymore and there is no reason to continue reading, so you have to stop reading, there is really nothing more interesting to read. Really. Stop. It's over."
                }
              </Text>
              <Box pt='15rem'>
                <Center>
                  <Text>{'A site created by :'}</Text>
                </Center>
                <Center>
                  <Box pt='1rem'>
                    <Flex gap='5rem' direction={{ base: 'column', lg: 'row' }}>
                      <Button
                        bg='light.50'
                        borderRadius='lg'
                        backdropFilter='saturate(200%) blur(16px)'
                        mt={5}
                        boxShadow='md'
                        as={Link}
                        href='https://github.com/Chloebert'
                        px='1rem'
                        py='3rem'
                      >
                        <Center>
                          <Image me='.5rem' src={githubLogo} alt='Github Icon' boxSize='4rem' />
                          <Text>{'Chloé'}</Text>
                        </Center>
                      </Button>
                      <Button
                        bg='light.50'
                        borderRadius='lg'
                        backdropFilter='saturate(200%) blur(16px)'
                        mt={5}
                        boxShadow='md'
                        as={Link}
                        href='https://github.com/VioletaBD'
                        px='1rem'
                        py='3rem'
                      >
                        <Center>
                          <Image me='.5rem' src={githubLogo} alt='Github Icon' boxSize='4rem' />
                          <Text>{'Violeta'}</Text>
                        </Center>
                      </Button>
                      <Button
                        bg='light.50'
                        borderRadius='lg'
                        backdropFilter='saturate(200%) blur(16px)'
                        mt={5}
                        boxShadow='md'
                        as={Link}
                        href='https://github.com/Ga-Mikael'
                        px='1rem'
                        py='3rem'
                      >
                        <Center>
                          <Image me='.5rem' src={githubLogo} alt='Github Icon' boxSize='4rem' />
                          <Text>{'Mikaël'}</Text>
                        </Center>
                      </Button>
                    </Flex>
                    <Center>
                      <Text pt='5rem'>{'With the use of  :'}</Text>
                    </Center>
                    <Center>
                      <LinkBox>
                        <LinkOverlay href='https://www.thecocktaildb.com/'>
                          <Image pt='1rem' pb='2rem' src={cocktailDbLogo} />
                        </LinkOverlay>
                      </LinkBox>
                    </Center>
                  </Box>
                </Center>
              </Box>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default About;
