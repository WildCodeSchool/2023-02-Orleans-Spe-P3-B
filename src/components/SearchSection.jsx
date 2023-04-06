import { Button, Heading, Text } from '@chakra-ui/react';

const SearchSection = () => {
  return (
    <>
      <Heading as='h2'>{'You want to find a cocktail ?'}</Heading>
      <Text>{'Well if you click on the button below you can do all the research you want !'}</Text>
      <Button>{'Click here !'}</Button>
    </>
  );
};

export default SearchSection;
