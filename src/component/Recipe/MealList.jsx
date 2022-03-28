import React from "react";
import Meal from "./Meal";


export default function MealList({ mealData }) {
    const nutrients = mealData.nutrients
    const { calories,carbohydrates,fat,protein } = nutrients
    console.log(mealData);


    function handleAddRecipe(R=0,P=0,F=0,C=0) {
        localStorage.recipeR = R;
        localStorage.recipeP = P;
        localStorage.recipeF = F;
        localStorage.recipeC = C;
        alert(`Saved Calories: ${R}; Protein: ${P}; Fat: ${F}; Carbohydrates: ${C}`)
    }

    return (
        <main>
            <section className="nutrients">
                <h1>Macros</h1>
                <ul>
                    <li>Calories: {calories.toFixed(0)}</li>
                    <li>Carbohydrates: {carbohydrates.toFixed(0)}</li>
                    <li>Fat: {fat.toFixed(0)}</li>
                    <li>Protein: {protein.toFixed(0)}</li>
                </ul>
                <button onClick={() => handleAddRecipe(calories.toFixed(0), protein.toFixed(0), fat.toFixed(0), carbohydrates.toFixed(0))}>Add</button>
            </section>
            <section className="meals">
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />
                })}
            </section>
        </main>
    )
}