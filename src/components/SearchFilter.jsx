import { FormLabel, Select, Box, SimpleGrid, Image } from '@chakra-ui/react';
import { useContext } from 'react';
import FilterSearchContext from '../contexts/FilterSearchContext.jsx';

const SearchFilter = () => {
  const ingredientsList = [
    { label: 'Tequila', value: 'Tequila' },
    { label: 'Cider', value: 'Cider' },
    { label: 'Absinthe', value: 'Absinthe' },
    { label: 'Champagne', value: 'Champagne' },
    { label: 'Baileys irish cream', value: 'Baileys irish cream' },
    { label: 'Orange Juice', value: 'Orange Juice' },
    { label: 'Bourbon', value: 'Bourbon' },
  ];
  const categoryList = [
    { label: 'Ordinary Drink', value: 'Ordinary Drink' },
    { label: 'Cocktail', value: 'Cocktail' },
    { label: 'Soft Drink', value: 'Soft Drink' },
    { label: 'Cocoa', value: 'Cocoa' },
    { label: 'Punch / Party Drink', value: 'Punch / Party Drink' },
    { label: 'Beer', value: 'Beer' },
    { label: 'Coffee / Tea', value: 'Coffee / Tea' },
    { label: 'Shot', value: 'Shot' },
    { label: 'Shake', value: 'Shake' },
  ];
  const glassList = [
    { label: 'Coffee mug', value: 'Coffee mug' },
    { label: 'Cocktail glass', value: 'Cocktail glass' },
    { label: 'Collins Glass', value: 'Collins Glass' },
    { label: 'Pitcher', value: 'Pitcher' },
    { label: 'Old-fashioned glass', value: 'Old-fashioned glass' },
    { label: 'Highball glass', value: 'Highball glass' },
    { label: 'Pint glass', value: 'Pint glass' },
    { label: 'Whiskey Glass ', value: 'Whiskey Glass ' },
    { label: 'Whiskey sour glass', value: 'Whiskey sour glass' },
    { label: 'Beer mug', value: 'Beer mug' },
    { label: 'Hurricane glass', value: 'Hurricane glass' },
    { label: 'Shot Glass', value: 'Shot Glass' },
    { label: 'Martini Glass', value: 'Martini Glass' },
  ];

  const { setIngredient, setIsAlcoholic, setCategory, setGlass } = useContext(FilterSearchContext);

  const handleSelectIngredient = e => setIngredient(e.target.value);
  const handleSelectIsAlcoholic = e => setIsAlcoholic(e.target.value);
  const handleSelectCategory = e => setCategory(e.target.value);
  const handleSelectGlass = e => setGlass(e.target.value);

  return (
    <>
      <SimpleGrid minChildWidth='120px' spacing='20px'>
        <Box height='10rem' display='flex' flexDirection='column' alignItems='center'>
          <Image boxSize='200px' src='./src/assets/images/ingredient2-icon.png' alt='Dan Abramov' fill='white' />
          <FormLabel mt={4}>Ingredient</FormLabel>
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
        <Box height='10rem' display='flex' flexDirection='column' alignItems='center'>
          <Image boxSize='200px' src='./src/assets/images/alcoholic-icon.png' alt='Dan Abramov' />
          <FormLabel mt={4}>Alcoholic</FormLabel>
          <Select
            onChange={handleSelectIsAlcoholic}
            bg='rgba(255, 255, 255, 0.32)'
            border='1px solid rgba(255, 255, 255, 1)'
            placeholder='Yes or Not'
          >
            <option value='Alcoholic'>Yes</option>
            <option value='Non_Alcoholic'>No</option>
          </Select>
        </Box>
        <Box height='10rem' display='flex' flexDirection='column' alignItems='center'>
          <Image boxSize='200px' src='./src/assets/images/cocktail.png' alt='Dan Abramov' />
          <FormLabel mt={4}>Category</FormLabel>
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
        <Box height='10rem' display='flex' flexDirection='column' alignItems='center'>
          <Image boxSize='200px' src='./src/assets/images/martini-glass.png' alt='Dan Abramov' />
          <FormLabel mt={4}>Glass</FormLabel>
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
    </>
  );
};

export default SearchFilter;
