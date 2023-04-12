import { useState, useEffect } from 'react';
import { Box, UnorderedList, ListItem, Spacer, Image, Stack, StackDivider, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const DescriptionCocktail = () => {
  const [cocktail, setCocktail] = useState(null);
  const params = useParams();
  let { drinkId } = useParams();
  useEffect(() => {
    if (drinkId) {
      fetch(`https:\\www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
        .then(response => response.json())
        .then(data => setCocktail(data.drinks[0]));
    }
  }, [params]);
  if (!cocktail) return null;

  return (
    <>
      <Wrap justify='center' spacing='50px' m={'5'}>
        <WrapItem p={'5'} boxShadow='lg' w='500px' h='auto' borderRadius='lg' bg={'light.50'} backdropFilter='saturate(150%) blur(10px)'>
          <Box justify='center' as='b' p={'4'} position='relative'>
            <Stack divider={<StackDivider />}>
              <Heading fontSize={'40px'} mt={'5'} mb={'4'} color={'light.400'}>
                {cocktail.strDrink}
              </Heading>
              <Spacer />
            </Stack>
            <Spacer />
            <Text fontSize='lg' color={'secondary.600'} mt={'6'} mb={'4'}>
              <UnorderedList>
                <ListItem>{cocktail.strAlcoholic}</ListItem>
                <ListItem>{cocktail.strCategory}</ListItem>
                <ListItem>{cocktail.strGlass}</ListItem>
              </UnorderedList>
            </Text>
            <Text fontSize='xl' color={'light.400'} mt={'6'} mb={'3'}>
              {' '}
              {'Ingredients :'}{' '}
            </Text>
            <Text fontSize='2xl' color={'secondary.600'}>
              <p>
                {cocktail.strIngredient1} {cocktail.strMeasure1}
              </p>
              <p>
                {cocktail.strIngredient2} {cocktail.strMeasure2}
              </p>
              <p>
                {cocktail.strIngredient3} {cocktail.strMeasure3}
              </p>
              <p>
                {cocktail.strIngredient4} {cocktail.strMeasure4}
              </p>
              <p>
                {cocktail.strIngredient5} {cocktail.strMeasure5}
              </p>
              <p>
                {cocktail.strIngredient6} {cocktail.strMeasure6}
              </p>
            </Text>
            <Spacer />
            <Text fontSize='xl' color={'light.400'} mt={'6'}>
              {'Instructions :'}
            </Text>
            <Text fontSize='2xl' color={'secondary.600'} mt={'3'}>
              {cocktail.strInstructions}
            </Text>
            <Spacer />
          </Box>
        </WrapItem>
        <WrapItem>
          <Image
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            borderRadius='lg'
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
