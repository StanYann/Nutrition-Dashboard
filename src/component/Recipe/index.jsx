import React, { useState } from 'react';
import MealList from './MealList';
import './recipe.css'

export default function Recipe() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=5f2dde49cbcd41c4b7196d2f87214526&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log('error');
      })
  }

  return  <div>
            {/* First Line */}
            <div className="user-box">
              <div className="discount card" style={{'--delay': '.4s'}}>
                <section className='controls'>
                  <input type="number" placeholder='Calories (e.g 2000)' onChange={handleChange} />
                </section>
                <button onClick={getMealData}>Get Daily Meal Plan</button>
                {mealData && <MealList mealData={mealData} />}
              </div> 
            </div>
          </div>
}
      
    