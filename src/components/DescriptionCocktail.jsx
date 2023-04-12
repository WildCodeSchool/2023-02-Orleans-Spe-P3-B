import { useState, useEffect } from 'react';
import { Box, UnorderedList, ListItem, Spacer, Image, Stack, StackDivider, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const DescriptionCocktail = () => {
  const [cocktail, setCocktail] = useState(null);
  const params = useParams();
  let { drinkId } = useParams();
  useEffect(() => {
    console.log('***', drinkId);
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
              <Heading fontSize={'4xl'} mt={'5'} mb={'5'} color={'secondary.600'}>
                {cocktail.strDrink}
              </Heading>
              <Spacer />
            </Stack>
            {/* {cocktail.map(cocktail => (
              <UnorderedList mt={'2'} color={'secondary.600'} key={index}>
                <ListItem as='b' fontSize='xl'>
                  {cocktail}
                </ListItem>
              </UnorderedList>
            ))}*/}
            <Spacer />
            <Text fontSize='2xl' color={'secondary.600'} mt={'6'} mb={'5'}>
              {'Ingredients :'}
              {cocktail.strIngredient1}
            </Text>
            <Spacer />

            <Text fontSize='2xl' color={'secondary.600'} mt={'6'}>
              Instructions :
            </Text>
            <Spacer />
            <Text fontSize='xl' color={'secondary.600'} mt={'5'}></Text>
          </Box>
        </WrapItem>
        <WrapItem>
          <Image width={{ base: '30rem' }} height={{ base: '50rem' }} objectFit='cover' />
        </WrapItem>
      </Wrap>
    </>
  );
};
export default DescriptionCocktail;
