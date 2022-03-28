import React,{ useState,useEffect } from 'react';

export default function Foods({ food }) {

    const [ imageUrl,setImageUrl ] = useState("");

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${food.id}/information?apiKey=5f2dde49cbcd41c4b7196d2f87214526&includeNutrition=false`
        )
            .then((response) => response.json())
            .then((data) => {
                 setImageUrl(data.image);
            })
            .catch(() => {
                console.log('error');
            });
    }, [food.id])

  return (
      <article>
          <h1>{food.title}</h1>
           <img src={imageUrl} alt="recipe" />
          {/* <ul className='instructions'>
              <li>Preparation time: {food.readyMinutes} minutes</li>
              <li>Number of servings: {food.servings}</li>
          </ul> */}
          <a style={{background:'#7f21eb'}}href={food.sourceUrl}>Go to Recipe</a>
      </article>
  );
}
