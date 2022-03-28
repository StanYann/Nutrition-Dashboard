import React, { Component } from 'react';
// import './index.css'

export default class Dashboard extends Component {

  // componentDidMount() {
  //   if(localStorage.untest = undefined) {
  //     localStorage.untest = true;
  //   } else if(localStorage.low = `You looks like a dying man, and not much movement every day. 
  //   Just go out side and do some sports, and take more ntritions every day!`) {
  //     localStorage.untest = false;
  //     localStorage.lowtrue = true
  //   }
  // }

  render() {
    const CALORIE = localStorage.Calorie;
    const PROTEIN = localStorage.Protein;
    const FAT = localStorage.Fat;
    const CARBOHYDRATE = localStorage.Carbohydrate;
    //Recipe
    const recipeR = localStorage.recipeR || 0;
    const recipeP = localStorage.recipeP || 0;
    const recipeF = localStorage.recipeF || 0;
    const recipeC = localStorage.recipeC || 0;
    //Picture Match
    const pictureN = localStorage.pictureN;
    const pictureR = localStorage.pictureR || 0;
    const pictureP = localStorage.pictureP || 0;
    const pictureF = localStorage.pictureF || 0;
    const pictureC = localStorage.pictureC || 0;
    //Calelater
    const RR = Number(recipeR) + Number(pictureR);
    const PP = Number(recipeP) + Number(pictureP);
    const FF = Number(recipeF) + Number(pictureF);
    const CC = Number(recipeC) + Number(pictureC);

    const RRR = (Number(RR)/Number(CALORIE))*100;
    const PPP = (Number(PP)/Number(PROTEIN))*100;
    const FFF = (Number(FF)/Number(FAT))*100;
    const CCC = (Number(CC)/Number(CARBOHYDRATE))*100;
    return (
        <div>
            {/* First Line */}
      <div className="user-box first-box">
      <div className="discount card" style={{'--delay': '.4s'}}>
        <div className="title">Nutrition Count(/g)</div>
        <div className="semi-donut margin" 
        style={{'--percentage' : `${RRR}`, '--fill': '#FF3D00', display: 'inline-flex'}}>
          {RR.toFixed(0)}/{CALORIE}<br/>
          Calorie
        </div>
        <div className="semi-donut-model-2 margin"
            style={{'--percentage' : `${PPP}`, '--fill': '#039BE5', display: 'inline-flex'}}>
            {PP.toFixed(0)}/{PROTEIN}<br/>
            Protein
        </div>
        <div className="semi-donut-model-2 margin"
            style={{'--percentage' : `${FFF}`, '--fill': '#f2ce48', display: 'inline-flex'}}>
            {FF.toFixed(0)}/{FAT}<br/>
            Fat
        </div>
        <div className="semi-donut-model-2 margin"
            style={{'--percentage' : `${CCC}`, '--fill': '#FFA500', display: 'inline-flex'}}>
            {CC.toFixed(0)}/{CARBOHYDRATE}<br/> 
            Carbohydrate
        </div>
        <div className="button offer-button ">{localStorage.untest ? 
        <h1 className='comment'>Oops! Looks like we dont have your body data yet. 
                           <br/>So why dont you go have Body Test in 'Body Measure' !</h1> : 
                           localStorage.lowtrue ? <h2>123</h2> : <h2>123</h2>}</div>
      </div> 
      </div>
        {/* Second Line */}
      <div className="user-box second-box">
      <div className="cards-wrapper" style={{'--delay': '1s'}}>
        <div className="cards-header">
        <div className="cards-view">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          Calendar View
          <span className="today">Today</span>
        </div>
        <div className="cards-header-date">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left">
          <path d="M15 18l-6-6 6-6" /></svg>
          <div className="title">Sat, Nov 25 2020</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right">
          <path d="M9 18l6-6-6-6" /></svg>
        </div>
        <div className="cards-button button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus">
          <path d="M12 5v14M5 12h14" />
          </svg>
          Create
        </div>
        </div>
        <div className="cards card">
        <table className="table">
          <thead>
          <tr>
            <th>Time</th>
            <th>Name</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Fat</th>
            <th>Carbohydrates</th>
            {/* <th>W</th>
            <th>Status</th> */}
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
            <input type="checkbox" id="row1" className="table-row" />
            <span className="time">17.00</span>
            </td>
            <td>{recipeR} Calories Recipe</td>
            <td>{recipeR}</td>
            <td>{recipeP}</td>
            <td>{recipeF}</td>
            <td>{recipeC}</td>
            {/* <td>€</td>
            <td></td>
            <td><svg viewBox="-22 0 134 134.06032" fill="currentColor">
              <path d="M23.347656 134.058594C8.445312 84.953125 39.933594 67.023438 39.933594 67.023438c-2.203125 26.203124 12.6875 46.617187 12.6875 46.617187 5.476562-1.652344 15.929687-9.375 15.929687-9.375 0 9.375-5.515625 29.78125-5.515625 29.78125s19.308594-14.929687 25.386719-39.726563c6.070313-24.796874-11.5625-49.691406-11.5625-49.691406 1.0625 17.550782-4.875 34.8125-16.507813 48 .582032-.671875 1.070313-1.417968 1.445313-2.226562 2.089844-4.179688 5.445313-15.042969 3.480469-40.199219C62.511719 14.890625 30.515625 0 30.515625 0c2.757813 21.515625-5.511719 26.472656-24.882813 67.3125-19.371093 40.832031 17.714844 66.746094 17.714844 66.746094zm0 0" />
            </svg></td>
            <td>
            <div className="status is-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6L9 17l-5-5" />
              </svg>
              Active
            </div>
            </td> */}
          </tr>
          <tr>
            <td>
            <input type="checkbox" id="row1" className="table-row" />
            <span className="time">17.00</span>
            </td>
            <td>{pictureN}</td>
            <td>{pictureR}</td>
            <td>{pictureP}</td>
            <td>{pictureF}</td>
            <td>{pictureC}</td>
            {/* <td>€</td>
            <td></td>
            <td><svg viewBox="-22 0 134 134.06032" fill="currentColor">
              <path d="M23.347656 134.058594C8.445312 84.953125 39.933594 67.023438 39.933594 67.023438c-2.203125 26.203124 12.6875 46.617187 12.6875 46.617187 5.476562-1.652344 15.929687-9.375 15.929687-9.375 0 9.375-5.515625 29.78125-5.515625 29.78125s19.308594-14.929687 25.386719-39.726563c6.070313-24.796874-11.5625-49.691406-11.5625-49.691406 1.0625 17.550782-4.875 34.8125-16.507813 48 .582032-.671875 1.070313-1.417968 1.445313-2.226562 2.089844-4.179688 5.445313-15.042969 3.480469-40.199219C62.511719 14.890625 30.515625 0 30.515625 0c2.757813 21.515625-5.511719 26.472656-24.882813 67.3125-19.371093 40.832031 17.714844 66.746094 17.714844 66.746094zm0 0" />
            </svg></td>
            <td>
            <div className="status is-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6L9 17l-5-5" />
              </svg>
              Active
            </div>
            </td> */}
          </tr>
          </tbody>
        </table>
        </div>
      </div>
      
      </div>
        </div>
    );
  }
}
