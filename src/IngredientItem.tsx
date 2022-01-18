import React from 'react';

interface Props {
 ingredient: Ingredient;
}

export cont IngredientItem: React.FC<props> = (props) => {
    return ( 
      <li>
        <label style={{ textDecoration: ingredient.selected ? 'line-through' : undefined }} >
        <input type="checkbox" checked={ingredient.selected} /> {ingredient.text}
        </label>
      </li>
      );
};