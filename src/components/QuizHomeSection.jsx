import { Box, Button, Center, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import imageOne from '../assets/images/cocktail-yellow.jpeg';

const QuizHomeSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/discover-a-cocktail');
  };
  return (
    <Flex height='100%' width='100%' alignItems='center' direction='column' mt='6rem'>
      <Heading as='h1' fontSize='4xl' align='center' mb={5} color='light.200' textShadow='1px 3px #e4686f'>
        {'Discover your new favourite drink !'}
      </Heading>
      <Container
        maxW='20rem'
        height='30rem'
        borderRadius='lg'
        position='relative'
        mt={5}
        boxShadow='sm'
        p={0}
        display='flex'
        direction={{ base: 'column' }}
        alignItems='center'
        justifyContent='center'
      >
        <Image
          borderRadius='lg'
          src={imageOne}
          alt='Image of a cocktail'
          height='30rem'
          width='100%'
          objectFit='cover'
          align='bottom'
          boxShadow='base'
        />
        <Box borderRadius='lg' height='100%' width='100%' content='' position='absolute' zIndex='1' />
        <Box position='absolute' maxW='100%' bottom='15%' zIndex='2'>
          <Text color='secondary.700' align='center'>
            {`Discover your new favourite drink in just one simple step !`}
          </Text>
        </Box>
        <Box position='absolute' bottom='2%' zIndex='2'>
          <Button onClick={handleClick} m='auto' size='md' variant='quizSectionButton'>
            {'Go discover !'}
          </Button>
        </Box>
      </Container>
    </Flex>
  );
};

export default QuizHomeSection;
