import { Box, Button, Center, Container, Flex, Grid, GridItem, Heading, Image, Link, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Container maxW={{ lg: '100%', md: '80%' }} pt='5rem'>
      <Grid maxH='10rem' templateRows='1fr' templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}>
        <GridItem display={{ base: 'none', lg: 'block' }} colSpan={1} borderLeftRadius='5px'>
          <Image
            display={{ base: 'none', lg: 'block' }}
            src='./src/assets/images/cocktail-pink.jpeg'
            boxSize='80rem'
            borderLeftRadius='5px'
          ></Image>
        </GridItem>
        <GridItem colSpan={1} bg='papayawhip' borderLeftRadius={{ base: '5px', lg: '0px' }} borderRightRadius='5px'>
          <Box>
            <Flex direction='column'>
              <Center>
                <Heading as='h1' pt='10rem'>
                  <Text mx='5rem' fontSize='clamp(20%, 6vh, 90%)'>
                    {' '}
                    {"About The Mixer's Lounge"}
                  </Text>
                </Heading>
              </Center>
              <Box mx='2rem' pt='8rem'>
                <Text>
                  {
                    "The Mixer's Lounge est un site permettant la recherche de cocktails, mais aussi, il permet de se faire surprendre par le choix d'un cocktail au hasard de la vie. Le hasard de la vie est incroyable, est renferme bien des surprises alors laissez vous porté. Je ne sais plus quoi écrire et du coup il y n'y a pas de raison de continuer à lire, alors il faut arrêter maintenant il n'y a vraiment plus rien à lire d'intéressant. Vraiment. Stop. C'est fini."
                  }
                </Text>
                <Box pt='15rem'>
                  <Center>
                    <Text>{'Un site créer par :'}</Text>
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
                            <Image me='.5rem' src='./src/assets/images/github-mark.svg' alt='Github Icon' boxSize='4rem' />
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
                            <Image me='.5rem' src='./src/assets/images/github-mark.svg' alt='Github Icon' boxSize='4rem' />
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
                            <Image me='.5rem' src='./src/assets/images/github-mark.svg' alt='Github Icon' boxSize='4rem' />
                            <Text>{'Mikaël'}</Text>
                          </Center>
                        </Button>
                      </Flex>
                      <Center>
                        <Text pt='5rem'>{'Réaliser avec :'}</Text>
                      </Center>
                      <Center>
                        <LinkBox>
                          <LinkOverlay href='https://www.thecocktaildb.com/'>
                            <Image pt='1rem' pb='2rem' src='./src/assets/images/logococktailapi.png' />
                          </LinkOverlay>
                        </LinkBox>
                      </Center>
                    </Box>
                  </Center>
                </Box>
              </Box>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default About;
