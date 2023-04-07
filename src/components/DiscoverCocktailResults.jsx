import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Container, Flex, Heading, HStack, Image, Tag, TagLabel, Text } from '@chakra-ui/react';

const DiscoverCocktailResults = () => {
  const { cocktailId } = useParams();
  let [drink, setDrink] = useState('');
  let [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    const link = '/description/' + cocktailId;
    navigate(link);
  };

  useEffect(() => {
    if (!drink) {
      const controller = new AbortController();
      const signal = controller.signal;

      const link = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + cocktailId;
      fetch(link, { signal: signal })
        .then(response => response.json())
        .then(data => setDrink(data.drinks[0]));

      return () => {
        controller.abort();
      };
    }
  }, []);

  useEffect(() => {
    if (ingredients.length === 0) {
      for (let i = 1; i <= 15; i++) {
        let currentIngredient = `strIngredient${i}`;
        if (drink[currentIngredient]) {
          setIngredients(prevState => [...prevState, drink[currentIngredient]]);
        }
      }
    }
  }, [drink]);

  return (
    <Flex height='100%' width='100%' alignItems='center' direction='column'>
      <Heading as='h1' fontSize='4xl' align='center' mt={5} mb={10} color='light.200' textShadow='1px 3px #e4686f'>
        {'And your new favourite drink is...'}
      </Heading>
      <Flex
        maxW='80%'
        bg='light.50'
        borderRadius='lg'
        backdropFilter='saturate(200%) blur(16px)'
        mt={5}
        boxShadow='sm'
        p={0}
        direction={{ base: 'column', lg: 'row' }}
        alignItems='center'
      >
        <Image
          borderRadius='lg'
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          width={{ base: '100%', lg: 'auto' }}
          height={{ base: '15rem', lg: '20rem' }}
          objectFit='cover'
          boxShadow='base'
        />
        <Flex
          direction='column'
          alignItems='start'
          justifyContent='center'
          maxW='60%'
          mt={{ base: '1.25rem', lg: '0' }}
          mb={{ base: '1.25rem', lg: '0' }}
          mr={5}
          ml={10}
        >
          <Heading as='h2' marginInline={2} color='light.200' textShadow='1px 3px #e4686f'>
            {drink.strDrink}
          </Heading>
          <Text marginInline={2} color='secondary.700' noOfLines={4}>
            {drink.strInstructions}
          </Text>
          <Flex wrap='wrap'>
            {ingredients.map((ingredient, index) => (
              <Tag marginInline={2} mt={1} size='lg' key={index} bg='secondary.50'>
                <TagLabel color='light.200'>{ingredient}</TagLabel>
              </Tag>
            ))}
          </Flex>
          <Box>
            <Button
              onClick={handleClick}
              position={{ base: 'initial', lg: 'absolute' }}
              right='5%'
              bottom='8%'
              m='auto'
              mt={5}
              size='md'
              width={{ base: '50%', lg: '20%' }}
              variant='quizzButton'
            >
              {'See more'}
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DiscoverCocktailResults;
