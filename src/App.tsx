import IngredientItem from './components/IngredientItem/IngredientItem';
import { Ingredient } from './interfaces/Ingredient';

const ingredients: Ingredient[] = [
    {
        text: 'Garlic',
        selected: true,
    },
    {
        text: 'Ginger',
        selected: true,
    },
    {
        text: 'Corriander',
        selected: false,
    },       
];

function App() {
    return (
        <ul>
        <IngredientItem ingredient={ingredients[0]}></IngredientItem>
        </ul>
    );
}

export default App
