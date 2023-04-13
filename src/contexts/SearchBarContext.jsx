import { createContext, useState } from 'react';

const SearchBarContext = createContext();

const SearchBarProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  return <SearchBarContext.Provider value={{ search, setSearch }}>{children}</SearchBarContext.Provider>;
};
export default SearchBarContext;
export { SearchBarProvider };
