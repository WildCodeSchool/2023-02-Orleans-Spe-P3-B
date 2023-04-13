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
        <Heading fontSize={'clamp(1.5em, 2vw, 3em)'} as='h1' size='lg' paddingBlockStart={70} pb={10}>
          {'Search Your Cocktail'}
        </Heading>
      </Center>

      <form onSubmit={handleSubmit}>
        <FormControl mb={{ sm: '4rem', base: '0' }}>
          <Box display='flex' flexDirection='column'>
            <Center>
              <Center>
                <FormLabel m={4} display={{ base: 'none', lg: 'block' }}>
                  {'Search a cocktail'}
                </FormLabel>
              </Center>
              <Input
                value={search}
                onChange={handleChange}
                maxW='30rem'
                bg='rgba(255, 255, 255, 0.32)'
                border='1px solid rgba(255, 255, 255, 1)'
                type='text'
                placeholder='Enter the name of a cocktail'
                mx='1rem'
              />
            </Center>
          </Box>
        </FormControl>
      </form>
    </>
  );
};

export default SearchBar;
