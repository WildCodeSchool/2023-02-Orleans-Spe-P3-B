import { createContext, useState } from 'react';

const FilterSearchContext = createContext();

const FilterSearchProvider = ({ children }) => {
  const [ingredient, setIngredient] = useState('');
  const [isAlcoholic, setIsAlcoholic] = useState('');
  const [category, setCategory] = useState('');
  const [glass, setGlass] = useState('');

  return (
    <FilterSearchContext.Provider
      value={{
        ingredient,
        isAlcoholic,
        category,
        glass,
        setIngredient,
        setIsAlcoholic,
        setCategory,
        setGlass,
      }}
    >
      {children}
    </FilterSearchContext.Provider>
  );
};
export default FilterSearchContext;
export { FilterSearchProvider };
