import React from 'react'
import { IngredientItem } from './IngredientItem'

const ingredients: Ingredient[] = [
    {
        text: 'Garlic',
        selected: True,
    },
    {
        text: 'Ginger',
        selected: True,
    },
    {
        text: 'Corriander',
        selected: false,
    },       
];

function App() {
    return (
        <ul>
        <IngredientItem ingredient={ingredients[0]} />
        <IngredientItem ingredient={ingredients[1]} />
        <IngredientItem ingredient={ingredients[2]} />
        </ul>
    );
}

export default App
