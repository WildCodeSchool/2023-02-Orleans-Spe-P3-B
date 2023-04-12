import { createContext, useState } from 'react';

const FilterSearchContext = createContext();

const FilterSearchProvider = ({ children }) => {
  const [ingredient, setIngredient] = useState('');
  const [isAlcoholic, setIsAlcoholic] = useState('');
  const [category, setCategory] = useState('');
  const [glass, setGlass] = useState('');
  const [ingredientsList, setIngredientsList] = useState([
    { label: 'Tequila', value: 'Tequila' },
    { label: 'Cider', value: 'Cider' },
    { label: 'Absinthe', value: 'Absinthe' },
    { label: 'Champagne', value: 'Champagne' },
    { label: 'Baileys irish cream', value: 'Baileys irish cream' },
    { label: 'Orange Juice', value: 'Orange Juice' },
    { label: 'Bourbon', value: 'Bourbon' },
  ]);
  const [categoryList, setCategoryList] = useState([
    { label: 'Ordinary Drink', value: 'Ordinary Drink' },
    { label: 'Cocktail', value: 'Cocktail' },
    { label: 'Soft Drink', value: 'Soft Drink' },
    { label: 'Cocoa', value: 'Cocoa' },
    { label: 'Punch / Party Drink', value: 'Punch / Party Drink' },
    { label: 'Beer', value: 'Beer' },
    { label: 'Coffee / Tea', value: 'Coffee / Tea' },
    { label: 'Shot', value: 'Shot' },
    { label: 'Shake', value: 'Shake' },
  ]);
  const [glassList, setGlassList] = useState([
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
  ]);
  return (
    <FilterSearchContext.Provider
      value={{
        ingredient,
        isAlcoholic,
        category,
        glass,
        ingredientsList,
        categoryList,
        glassList,
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
