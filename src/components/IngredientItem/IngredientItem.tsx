import { Ingredient } from "../../interfaces/Ingredient"

function IngredientItem(props: { ingredient: Ingredient }) {
    return (
        <div>
            <span>{props.ingredient.text}</span>
        </div>
    )
}

export default IngredientItem
