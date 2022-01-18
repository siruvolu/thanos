import React, { useState } from "react";
import { Ingredient } from "../../interfaces/Ingredient";

import "./IngredientItem.css";

function IngredientItem(props: { ingredient: Ingredient }) {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
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
            <span>Is {props.ingredient.text} selected: <span className={(checked) ? 'blue': 'red'}>{"" + checked}</span></span>
        </div>
    )
}

export default IngredientItem
