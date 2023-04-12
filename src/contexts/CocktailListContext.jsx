import { createContext, useState } from 'react';

const CocktailListContext = createContext();

const CocktailsListProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  return <CocktailListContext.Provider value={{ cocktails, setCocktails }}>{children}</CocktailListContext.Provider>;
};

export default CocktailListContext;
export { CocktailsListProvider };
