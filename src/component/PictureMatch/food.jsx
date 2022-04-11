import React from "react";
import Foods from "./foods";

export default function Food({ foodData }) {

    const { category, nutrition } = foodData
    const { calories,carbs,fat,protein } = nutrition

    const isLoading = localStorage.isloading;
    const picture = localStorage.picture;

    function handleAddPicture(N, R=0, P=0, F=0, C=0) {
        localStorage.pictureN = N;
        localStorage.pictureR = R;
        localStorage.pictureP = P;
        localStorage.pictureF = F;
        localStorage.pictureC = C;
        alert(isLoading)
        alert(`${N} saved`)
    }

    return (
        
        <main>
            <section className="nutrients">
                <img src={picture} alt="" className='pic' style={{width: '50vw', textAlign:'center'}}/>
                <h1>This food has <span style={{color: 'Aqua', fontSize: '1.2em'}}>{((category.probability)*100).toFixed(2)}</span> % of being <span style={{color: 'red', fontSize: '1.5em'}}>{category.name}</span></h1>
                <ul style={{color: 'white'}}>
                    <li>Calories: {calories.value.toFixed(0)} <span style={{color: 'Aqua'}}>{nutrition.calories.unit}</span></li>
                    <li>Carbohydrates: {carbs.value.toFixed(0)} <span style={{color: 'Aqua'}}>{nutrition.carbs.unit}</span></li>
                    <li>Fat: {fat.value.toFixed(0)} <span style={{color: 'Aqua'}}>{nutrition.fat.unit}</span></li>
                    <li>Protein: {protein.value.toFixed(0)} <span style={{color: 'Aqua'}}>{nutrition.protein.unit}</span></li>
                </ul>
                <button onClick={() => handleAddPicture(category.name, calories.value.toFixed(0), protein.value.toFixed(0), fat.value.toFixed(0), carbs.value.toFixed(0))}>Add</button>
            </section>
            <section>
                {foodData.recipes.map((food) => {
                    return <Foods key={food.id} food={food} />
                })}
            </section>
        </main>
    )
}