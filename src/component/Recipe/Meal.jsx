import React,{ useState,useEffect } from 'react';

export default function Meal({ meal }) {

    const [ imageUrl,setImageUrl ] = useState("");

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=5f2dde49cbcd41c4b7196d2f87214526&includeNutrition=false`
        )
            .then((response) => response.json())
            .then((data) => {
                 setImageUrl(data.image);
            })
            .catch(() => {
                console.log('error');
            });
    }, [meal.id])

  return (
      <article>
          <h1>{meal.title}</h1>
          <img src={imageUrl} alt="recipe" />
          <ul className='instructions'>
              <li>Preparation time: {meal.readyMinutes} minutes</li>
              <li>Number of servings: {meal.servings}</li>
          </ul>
          <a style={{background:'#7f21eb'}}href={meal.sourceUrl}>Go to Recipe</a>
      </article>
  );
}
