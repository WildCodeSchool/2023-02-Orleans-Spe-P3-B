import { Box, Button, Center, Container, Flex, Heading, Image, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import imageOne from '../assets/images/cocktail-pink-transparent.png';
import { useNavigate } from 'react-router-dom';

const DiscoverCocktail = () => {
  const [drink, setDrink] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();
  const quizz = {
    question: 'What do you truly want ?',
    choices: ['To get smashed', `I'm Sam`, `I haven't decided yet`],
  };

  const { question, choices } = quizz;

  const onAnswerSelected = choice => {
    setSelectedAnswer(choice);
  };

  const handleResultClick = () => {
    if (selectedAnswer || parseInt(selectedAnswer) === 0) {
      setAnswer(selectedAnswer);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (answer || parseInt(answer) === 0) {
      let searchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
      let randomNumber = 0;
      if (parseInt(answer) === 0) {
        searchUrl += 'filter.php?a=Alcoholic';
        randomNumber = Math.floor(Math.random() * 100);
      } else if (parseInt(answer) === 1) {
        searchUrl += 'filter.php?a=Non_alcoholic';
        randomNumber = Math.floor(Math.random() * 100);
      } else {
        searchUrl += 'random.php';
      }

      fetch(searchUrl, { signal: signal })
        .then(response => response.json())
        .then(data => setDrink(data.drinks[randomNumber]));
    }

    if (drink) {
      const link = '/discover-a-cocktail-results/' + drink.idDrink;
      navigate(link);
    }
    return () => {
      controller.abort();
    };
  }, [answer, drink]);

  return (
    <Flex height='100%' width='100%' alignItems='center' direction='column'>
      <Heading
        as='h1'
        fontSize={{ sm: '2xl', md: '4xl', lg: '4xl' }}
        align='center'
        mt={5}
        mb={10}
        color='light.200'
        textShadow='1px 3px #e4686f'
      >
        {'Discover your new favourite drink !'}
      </Heading>
      <SimpleGrid columns={{ base: '1', lg: '2' }} mx='5rem'>
        <Box width='100%' display='flex' flexDirection='column'>
          <Text as='h2' align='center' fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }} color='light.200'>
            {question}
          </Text>
          <Center>
            <Container
              display='flex'
              alignItems='center'
              justifyContent=''
              flexDirection='column'
              maxW='30rem'
              minW='16rem'
              maxH='24rem'
              bg='light.50'
              borderRadius='lg'
              backdropFilter='saturate(200%) blur(16px)'
              mt={5}
              boxShadow='sm'
            >
              <List>
                {choices.map((choice, index) => (
                  <ListItem
                    align='center'
                    key={index}
                    value={choice}
                    bg={parseInt(selectedAnswer) === index ? 'secondary.600' : 'secondary.400'}
                    px='5rem'
                    borderRadius='lg'
                    border={parseInt(selectedAnswer) === index ? '1px solid #fff1e8' : ''}
                    _hover={{ background: 'secondary.600' }}
                    fontSize='xl'
                    my='2rem'
                    mx='1rem'
                    color='light.200'
                    onClick={() => onAnswerSelected(index)}
                  >
                    {choice}
                  </ListItem>
                ))}
              </List>
              <Button onClick={handleResultClick} size='md' width='30%' variant='quizzButton' mb='2rem'>
                {'Discover'}
              </Button>
            </Container>
          </Center>
        </Box>
        <Box ml={40}>
          <Image display={{ base: 'none', lg: 'block' }} src={imageOne} height='60vh' width='auto' />
        </Box>
      </SimpleGrid>
    </Flex>
  );
};

export default DiscoverCocktail;
