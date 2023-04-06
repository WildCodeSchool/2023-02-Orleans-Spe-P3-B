import { useState, useEffect } from 'react';
import { Box, UnorderedList, ListItem, Spacer, Image, Stack, StackDivider, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';

const DescriptionCocktail = () => {
  const [drink, setDrink] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php', { signal: signal })
      .then(response => response.json())
      .then(data => setDrink(data.drinks[0]));

    return () => {
      controller.abort();
    };
  }, []);

  const ingredients = [drink.strAlcoholic, drink.strIngredient1];
  const cocktailIngredients = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
    drink.strIngredient10,
  ];
  for (let i = 0; i < drink.strIngredient1; i++) {
    return cocktailIngredients;
  }

  return (
    <>
      <Wrap justify='center' spacing='50px' m={'5'}>
        <WrapItem p={'5'} boxShadow='lg' w='500px' h='auto' borderRadius='lg' bg={'light.50'} backdropFilter='saturate(150%) blur(10px)'>
          <Box justify='center' as='b' p={'4'} position='relative'>
            <Stack divider={<StackDivider />}>
              <Heading fontSize={'4xl'} mt={'5'} mb={'5'} color={'secondary.600'}>
                {drink.strDrink}
              </Heading>
              <Spacer />
            </Stack>
            {ingredients.map((ingredient, index) => (
              <UnorderedList mt={'2'} color={'secondary.600'} key={index}>
                <ListItem as='b' fontSize='xl'>
                  * {ingredient}
                </ListItem>
              </UnorderedList>
            ))}
            <Spacer />
            <Text fontSize='2xl' color={'secondary.600'} mt={'6'} mb={'5'}>
              Ingredients :
            </Text>
            <Spacer />
            {cocktailIngredients.map((cocktailIngredient, index) => (
              <UnorderedList color={'secondary.600'} key={index}>
                <ListItem as='b' fontSize='xl'>
                  {cocktailIngredient}
                </ListItem>
              </UnorderedList>
            ))}
            <Text fontSize='2xl' color={'secondary.600'} mt={'6'}>
              Instructions :
            </Text>
            <Spacer />
            <Text fontSize='xl' color={'secondary.600'} mt={'5'}>
              {drink.strInstructions}
            </Text>
          </Box>
        </WrapItem>
        <WrapItem>
          <Image
            borderRadius='lg'
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            width={{ base: '30rem' }}
            height={{ base: '50rem' }}
            objectFit='cover'
          />
        </WrapItem>
      </Wrap>
    </>
  );
};

export default DescriptionCocktail;
