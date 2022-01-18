import React, { useState } from "react";
import { Ingredient } from "../../interfaces/Ingredient"

function IngredientItem(props: { ingredient: Ingredient }) {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        console.log(!checked);
        setChecked(!checked);
    }
    return (
        <div>
            <input 
            type="checkbox"
            checked={checked}
            onChange={handleChange}
             />
            <span>{props.ingredient.text}</span>
            <br/>
            <span>Is {props.ingredient.text} selected:{"" + checked}</span>
        </div>
    )
}

export default IngredientItem
