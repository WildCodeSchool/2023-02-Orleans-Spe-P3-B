import { Button, Card, CardBody, Center, Heading, Stack, Image, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CardCocktailList = ({ strDrink, strDrinkThumb, idDrink }) => {
  return (
    <Box mb={10}>
      <Card bg='light.50' boxShadow='base' margin='0.5rem'>
        <CardBody maxWidth='16rem' padding='0'>
          <Image borderRadius='lg' src={strDrinkThumb} alt={strDrink} zIndex={1} filter='auto' brightness='95%' padding='8px' />
          <Stack padding='1rem' spacing='5'>
            <Center>
              <Heading as='h2' size='md' color='secondary.600'>
                {strDrink}
              </Heading>
            </Center>
            <Center>
              <Button size='sm' mt={2} width='75%' variant='cardButton' id='cocktailDetail'>
                <Link to={`/description/${idDrink}`}>{'Have a look'}</Link>
              </Button>
            </Center>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default CardCocktailList;
