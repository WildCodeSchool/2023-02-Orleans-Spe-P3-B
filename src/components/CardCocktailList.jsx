import { Button, Card, CardBody, Center, Collapse, Container, Heading, HStack, Stack, Tag, TagLabel, Image, Box } from '@chakra-ui/react';
import { useState } from 'react';

const CardCocktailList = ({ strDrink, strDrinkThumb }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <Box>
      <Card
        role='group'
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        bg='light.50'
        backdropFilter='saturate(200%)'
        margin='0.5rem'
      >
        <CardBody maxWidth='16rem' padding='0'>
          <Image borderRadius='lg' src={strDrinkThumb} alt={strDrink} zIndex={1} filter='auto' brightness='95%' padding='8px' />
          <Container
            display={'flex'}
            _groupHover={{ display: 'none' }}
            width='94%'
            height='25%'
            paddingTop='13%'
            bgGradient='linear(rgba(255, 114, 75, 0),rgba(1,1,1, 0.2),rgba(1,1,1, 0.6),rgba(1,1,1, 1))'
            position='absolute'
            bottom='3%'
            left='3%'
            justifyContent='center'
          >
            <Heading
              as='h2'
              fontSize='1.2rem'
              maxWidth='100%'
              noOfLines={1}
              display={'flex'}
              _groupHover={{ display: 'none' }}
              color='light.200'
            >
              {strDrink}
            </Heading>
          </Container>
          <Collapse transition={{ enter: { duration: 0.7 } }} animateOpacity in={isShown}>
            <Stack padding='1rem' spacing='5'>
              <Center>
                <Heading as='h2' noOfLines={1} size='md' color='secondary.600'>
                  {strDrink}
                </Heading>
              </Center>
              <Center>
                <Button size='sm' mt={2} width='75%' variant='cardButton'>
                  {'Have a look'}
                </Button>
              </Center>
            </Stack>
          </Collapse>
        </CardBody>
      </Card>
    </Box>
  );
};

export default CardCocktailList;
