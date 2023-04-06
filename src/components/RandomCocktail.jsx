import { useState, useEffect } from 'react';
import { Card, CardBody, Button, Heading, Stack, Image, HStack, Tag, TagLabel, Container, Collapse, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const RandomCocktail = () => {
  const [drink, setDrink] = useState('');
  const [isShown, setIsShown] = useState(false);

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

  return (
    <div>
      <Card
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        bg='light.50'
        backdropFilter='saturate(200%)'
        margin='0.5rem'
      >
        <CardBody maxWidth='280px' padding='0'>
          <Image borderRadius='lg' src={drink.strDrinkThumb} alt={drink.strDrink} zIndex={1} filter='auto' brightness='95%' padding='8px' />
          <Container
            display={isShown ? 'none' : 'flex'}
            width='94%'
            height='25%'
            paddingTop='13%'
            bgGradient='linear(rgba(255, 114, 75, 0),rgba(1,1,1, 0.2),rgba(1,1,1, 0.6),rgba(1,1,1, 1))'
            position='absolute'
            bottom='3%'
            left='3%'
            justifyContent='center'
          >
            <Heading as='h2' fontSize='1.2rem' maxWidth='100%' noOfLines={1} display={isShown ? 'none' : 'initial'} color='light.200'>
              {drink.strDrink}
            </Heading>
          </Container>
          <Collapse transition={{ enter: { duration: 0.7 } }} animateOpacity in={isShown}>
            <Stack padding='1rem' spacing='5'>
              <Center>
                <Heading as='h2' noOfLines={1} size='md' color='secondary.600'>
                  {drink.strDrink}
                </Heading>
              </Center>
              <Center>
                <HStack spacing={4}>
                  {ingredients.map((ingredient, index) => (
                    <Tag size='md' key={index} bg='secondary.50' opacity={0.8}>
                      <TagLabel color='light.200'>{ingredient}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
              </Center>
              <Center>
                <Button size='sm' mt={2} width='75%' variant='cardButton'>
                  <Link to='/description/:cocktail'>Have a look</Link>
                </Button>
              </Center>
            </Stack>
          </Collapse>
        </CardBody>
      </Card>
    </div>
  );
};

export default RandomCocktail;
