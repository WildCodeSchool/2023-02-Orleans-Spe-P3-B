import { Heading, Center, FormControl, FormLabel, Input, Box } from '@chakra-ui/react';
import { useContext } from 'react';
import SearchBarContext from '../contexts/SearchBarContext.jsx';

const SearchBar = () => {
  const { search, setSearch } = useContext(SearchBarContext);
  const handleChange = e => {
    setSearch(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <Center>
        <Heading as='h2' size='lg' paddingBlockStart={70}>
          Search Your Cocktail
        </Heading>
      </Center>

      <form onSubmit={handleSubmit}>
        <FormControl>
          <Box display='flex' flexDirection='column'>
            <Center>
              <FormLabel textCenter>Search a cocktail</FormLabel>

              <Input
                value={search}
                onChange={handleChange}
                maxW='30rem'
                bg='rgba(255, 255, 255, 0.32)'
                border='1px solid rgba(255, 255, 255, 1)'
                type='text'
                placeholder='Enter the name of a cocktail'
              />
            </Center>
          </Box>
        </FormControl>
      </form>
    </>
  );
};

export default SearchBar;
