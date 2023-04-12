import { FormLabel, Select, Box, SimpleGrid, Image, Center, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import FilterSearchContext from '../contexts/FilterSearchContext.jsx';
import ingredientIcon from '../assets/images/ingredient-icon.svg';
import isAlcoholicIcon from '../assets/images/alcoholic-icon.png';
import categoryIcon from '../assets/images/category-icon.svg';
import glassIcon from '../assets/images/glass-icon.svg';

const SearchFilter = () => {
  const { setIngredient, setIsAlcoholic, setCategory, setGlass, ingredientsList, categoryList, glassList } =
    useContext(FilterSearchContext);

  const handleSelectIngredient = e => setIngredient(e.target.value);
  const handleSelectIsAlcoholic = e => setIsAlcoholic(e.target.value);
  const handleSelectCategory = e => setCategory(e.target.value);
  const handleSelectGlass = e => setGlass(e.target.value);

  return (
    <Box bg='primary.200' h={{ lg: '22rem', md: '32rem', sm: '34rem' }} px={{ md: '5rem', sm: '2rem' }} borderRadius='10px' w='90'>
      <Center>
        <Heading as='h2' size='lg' pb={{ md: '20px', sm: '2px' }} pt='1rem' fontSize={'clamp(1.5em, 2vw, 3em)'}>
          {'Search with a filter'}
        </Heading>
      </Center>
      <SimpleGrid columns={{ sm: '1', md: '2', lg: '4' }} spacing={{ lg: '20px', md: '20px', sm: '10px' }} px='1rem'>
        <Box height={{ lg: '10rem', md: '12rem', sm: '5rem' }} display='flex' flexDirection='column' alignItems='center'>
          <Image display={{ base: 'none', md: 'block' }} boxSize='100px' src={ingredientIcon} alt='Icon of the ingredient' fill='white' />
          <FormLabel mt={4}>{'Ingredient'}</FormLabel>
          <Select
            bg='rgba(255, 255, 255, 0.32)'
            border='1px solid rgba(255, 255, 255, 1)'
            placeholder='Select ingredient'
            onChange={handleSelectIngredient}
          >
            {ingredientsList.map(item => {
              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </Select>
        </Box>
        <Box height={{ md: '10rem', sm: '5rem' }} display='flex' flexDirection='column' alignItems='center'>
          <Image display={{ base: 'none', md: 'block' }} boxSize='100px' src={isAlcoholicIcon} alt='Icon of the alcoholic or not' />
          <FormLabel mt={4}>{'Alcoholic'}</FormLabel>
          <Select
            onChange={handleSelectIsAlcoholic}
            bg='rgba(255, 255, 255, 0.32)'
            border='1px solid rgba(255, 255, 255, 1)'
            placeholder='Yes or No'
          >
            <option value='Alcoholic'>Yes</option>
            <option value='Non_Alcoholic'>No</option>
          </Select>
        </Box>
        <Box height={{ md: '10rem', sm: '5rem' }} display='flex' flexDirection='column' alignItems='center'>
          <Image display={{ base: 'none', md: 'block' }} boxSize='100px' src={categoryIcon} alt='Icon of the Category' />
          <FormLabel mt={4}>{'Category'}</FormLabel>
          <Select
            onChange={handleSelectCategory}
            bg='rgba(255, 255, 255, 0.32)'
            border='1px solid rgba(255, 255, 255, 1)'
            placeholder='Select Category'
          >
            {categoryList.map(item => {
              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </Select>
        </Box>
        <Box height={{ md: '10rem', sm: '0rem' }} display='flex' flexDirection='column' alignItems='center' pb='2rem'>
          <Image display={{ base: 'none', md: 'block' }} boxSize='100px' src={glassIcon} alt='Icon of the type of glass' />
          <FormLabel mt={4}>{'Glass'}</FormLabel>
          <Select
            onChange={handleSelectGlass}
            bg='rgba(255, 255, 255, 0.32)'
            border='1px solid rgba(255, 255, 255, 1)'
            placeholder='Select Glass'
          >
            {glassList.map(item => {
              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </Select>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default SearchFilter;
