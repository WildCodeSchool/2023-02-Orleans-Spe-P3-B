import RandomCocktail from './RandomCocktail.jsx';
import { Box, Center, Container, Heading, SimpleGrid } from '@chakra-ui/react';

const RandomCocktailList = () => {
  return (
    <Box>
      <Center>
        <Heading mb={5} as='h2' align='center' mt={10} color='light.200' textShadow='1px 3px #e4686f'>
          Discover new drinks
        </Heading>
      </Center>
      <Center>
        <SimpleGrid spacing={[4, 5, 10]} columns={[1, 2, 3]}>
          <RandomCocktail />
          <RandomCocktail />
          <RandomCocktail />
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default RandomCocktailList;
