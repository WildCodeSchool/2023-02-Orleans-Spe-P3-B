import { Box, Image, SimpleGrid } from '@chakra-ui/react';

const BottomPictures = () => {
  return (
    <Box mt={10}>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Image
          borderRight={{ md: '4px solid white', base: '' }}
          height='40vh'
          width='100%'
          objectFit='cover'
          align='50% 45%'
          src='./src/assets/cocktailpink.jpg'
          alt='picture of a cocktail'
        />
        <Image
          borderLeft={{ md: '4px solid white', base: '' }}
          height='40vh'
          width='100%'
          objectFit='cover'
          align='50% 30%'
          src='./src/assets/cocktailblue.jpg'
          alt='picture of a cocktail'
        />
      </SimpleGrid>
    </Box>
  );
};

export default BottomPictures;
