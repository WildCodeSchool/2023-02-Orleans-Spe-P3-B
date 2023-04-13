import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import pinkCocktail from '../assets/cocktailpink.jpg';
import blueCocktail from '../assets/cocktailblue.jpg';

const BottomPictures = () => {
  return (
    <Box mt={16}>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Image
          borderRight={{ md: '4px solid white', base: '' }}
          height='40vh'
          width='100%'
          objectFit='cover'
          align='50% 45%'
          src={pinkCocktail}
          alt='picture of a cocktail'
        />
        <Image
          borderLeft={{ md: '4px solid white', base: '' }}
          height='40vh'
          width='100%'
          objectFit='cover'
          align='50% 30%'
          src={blueCocktail}
          alt='picture of a cocktail'
        />
      </SimpleGrid>
    </Box>
  );
};

export default BottomPictures;
