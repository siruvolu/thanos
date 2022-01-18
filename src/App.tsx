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
            {ingredients.map((ingredient) => {
                return <IngredientItem ingredient={ingredient}></IngredientItem>
            })}
        </ul>
    );
}

export default App
