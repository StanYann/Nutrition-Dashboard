import React, { Component } from 'react';
import './index.css'



export default class BodyMeasure extends Component {

  

  state = {
    gender: '',
    age: [],
    height: '',
    weight: '',
    daily: ''
  }

  // componentDidUpdate() {
  //   const { bmir } = localStorage;

  //   if(bmir == 'over') {
  //     {$("#tr_1").addClass("bg")}
  //   }
  // }
  
  // setState-Gender
  handleGetGender = (e) => {
    this.setState({
      gender: e.target.value,
    })
    localStorage.gender = e.target.value
  }
  // setState-Age
  handleGetAge = (e) => {
    this.setState({
      age: e.target.value,
    })
    localStorage.age = e.target.value
  }
  // setState-Height
  handleGetHeight = (e) => {
    this.setState({
      height: e.target.value
    })
    localStorage.height = e.target.value
  }
  // setState-Weight
  handleGetWeight = (e) => {
    this.setState({
      weight: e.target.value
    })
    localStorage.weight = e.target.value
  }

  handleGetDaily = (e) => {
    this.setState({
      daily: e.target.value
    })
    localStorage.daily = e.target.value
  }
  
  getResult = () => {
    const {gender, age, height, weight, daily} = localStorage;
    if(gender == 'male' && daily == 'basically-sitting-all-the-time') {
      const R = (66+(13*weight)+(5*height)-(6.8*age))*1.2;
      const P = weight*2.2;
      const F = (R*0.2)/9;
      const C = (R-(P*4)-(R*0.2))/4;
      localStorage.Calorie = R.toFixed(0);
      localStorage.Protein = P.toFixed(0);
      localStorage.Fat = F.toFixed(0);
      localStorage.Carbohydrate = C.toFixed(0);
    } else if(gender == 'male' && daily == 'light-activity') {
      const R = (66+(13*weight)+(5*height)-(6.8*age))*1.375;
      const P = weight*2.2;
      const F = (R*0.2)/9;
      const C = (R-(P*4)-(R*0.2))/4;
      localStorage.Calorie = R.toFixed(0);
      localStorage.Protein = P.toFixed(0);
      localStorage.Fat = F.toFixed(0);
      localStorage.Carbohydrate = C.toFixed(0);
    } else if(gender == 'male' && daily == 'moderate-activity') {
      const R = (66+(13*weight)+(5*height)-(6.8*age))*1.55;
      const P = weight*2.2;
      const F = (R*0.2)/9;
      const C = (R-(P*4)-(R*0.2))/4;
      localStorage.Calorie = R.toFixed(0);
      localStorage.Protein = P.toFixed(0);
      localStorage.Fat = F.toFixed(0);
      localStorage.Carbohydrate = C.toFixed(0);
    } else if(gender == 'male' && daily == 'very-active') {
      const R = (66+(13*weight)+(5*height)-(6.8*age))*1.725;
      const P = weight*2.2;
      const F = (R*0.2)/9;
      const C = (R-(P*4)-(R*0.2))/4;
      localStorage.Calorie = R.toFixed(0);
      localStorage.Protein = P.toFixed(0);
      localStorage.Fat = F.toFixed(0);
      localStorage.Carbohydrate = C.toFixed(0);
    } else if(gender == 'male' && daily == 'hyperactive') {
      const R = (66+(13*weight)+(5*height)-(6.8*age))*1.9;
      const P = weight*2.2;
      const F = (R*0.2)/9;
      const C = (R-(P*4)-(R*0.2))/4;
      localStorage.Calorie = R.toFixed(0);
      localStorage.Protein = P.toFixed(0);
      localStorage.Fat = F.toFixed(0);
      localStorage.Carbohydrate = C.toFixed(0);
    } else if(gender == 'female' && daily == 'basically-sitting-all-the-time') {
      const R = (665+(9.6*weight)+(1.8*height)-(4.7*age))*1.2;
      const P = weight*2.2;
      const F = (R*0.2)/9;
      const C = (R-(P*4)-(R*0.2))/4;
      localStorage.Calorie = R.toFixed(0);
      localStorage.Protein = P.toFixed(0);
      localStorage.Fat = F.toFixed(0);
      localStorage.Carbohydrate = C.toFixed(0);
    } else if(gender == 'female' && daily == 'light-activity') {
      const R = (665+(9.6*weight)+(1.8*height)-(4.7*age))*1.375;
      const P = weight*2.2;
      const F = (R*0.2)/9;
      const C = (R-(P*4)-(R*0.2))/4;
      localStorage.Calorie = R.toFixed(0);
      localStorage.Protein = P.toFixed(0);
      localStorage.Fat = F.toFixed(0);
      localStorage.Carbohydrate = C.toFixed(0);
    } else if(gender == 'female' && daily == 'moderate-activity') {
      const R = (665+(9.6*weight)+(1.8*height)-(4.7*age))*1.55;
      const P = weight*2.2;
      const F = (R*0.2)/9;
      const C = (R-(P*4)-(R*0.2))/4;
      localStorage.Calorie = R.toFixed(0);
      localStorage.Protein = P.toFixed(0);
      localStorage.Fat = F.toFixed(0);
      localStorage.Carbohydrate = C.toFixed(0);
    } else if(gender == 'female' && daily == 'very-active') {
      const R = (665+(9.6*weight)+(1.8*height)-(4.7*age))*1.725;
      const P = weight*2.2;
      const F = (R*0.2)/9;
      const C = (R-(P*4)-(R*0.2))/4;
      localStorage.Calorie = R.toFixed(0);
      localStorage.Protein = P.toFixed(0);
      localStorage.Fat = F.toFixed(0);
      localStorage.Carbohydrate = C.toFixed(0);
    } else if(gender == 'female' && daily == 'hyperactive') {
      const R = (665+(9.6*weight)+(1.8*height)-(4.7*age))*1.9;
      const P = weight*2.2;
      const F = (R*0.2)/9;
      const C = (R-(P*4)-(R*0.2))/4;
      localStorage.Calorie = R.toFixed(0);
      localStorage.Protein = P.toFixed(0);
      localStorage.Fat = F.toFixed(0);
      localStorage.Carbohydrate = C.toFixed(0);
    }

    const BMI = Number(weight)/Math.pow((Number(height)/100),2);
    console.log(BMI);
    localStorage.bmi = BMI.toFixed(2)
    if(BMI < 18.5) {
        localStorage.bmir = 'low'
    } else if(BMI<25) {
      localStorage.bmir = 'normal'
    } else if(BMI<30) {
      localStorage.bmir = 'over'
    } else if(BMI<35) {
      localStorage.bmir = 'over1'
    } else if(BMI<40) {
      localStorage.bmir = 'over2'
    } else if(BMI>40){
      localStorage.bmir = 'over3'
    }
      localStorage.tested = true;
  }

  handleTestAgain = () => {
    localStorage.removeItem('tested')
    window.location.reload()
  }

  render() {
    const {gender, age, height, weight, daily, bmi, bmir, Calorie, Protein, Fat, Carbohydrate} = localStorage;
    return localStorage.tested ? <div className="user-box">
                                    <div className="discount card" style={{'--delay': '.4s'}}>
                                      <div className='result'>
                                        <h1>Test Result</h1>
                                        <div className='result_row'>
                                        <div className='table' style={{float: 'left'}}>
                                          <table >
                                            <tbody>
                                              <tr style={{color: (bmir === 'low') ? 'rgb(93,109,207)' : 'white',fontWeight: (bmir === 'low') ? 'bolder' : '100'}}>
                                                <td style={{align: 'left'}}>Body mass index&#40;BMI&#41; &#60; 18.5</td>
                                                <td style={{align: 'right'}}>below normal weight</td>
                                              </tr>
                                              <tr style={{color: (bmir === 'normal') ? 'rgb(93,109,207)' : 'white',fontWeight: (bmir === 'normal') ? 'bolder' : '100'}}>
                                                <td style={{align: 'left'}}>Body mass index&#40;BMI&#41; &#62;&#61; 18.5 &#60; 25</td>
                                                <td style={{align: 'right'}}>normal weight</td>
                                              </tr>
                                              <tr style={{color: (bmir === 'over') ? 'rgb(93,109,207)' : 'white',fontWeight: (bmir === 'over') ? 'bolder' : '100'}}>
                                                <td style={{align: 'left'}}>Body mass index&#40;BMI&#41; &#62;&#61; 25 &#60; 30</td>
                                                <td style={{align: 'right'}}>overweight</td>
                                              </tr>
                                              <tr style={{color: (bmir === 'over1') ? 'rgb(93,109,207)' : 'white',fontWeight: (bmir === 'over1') ? 'bolder' : '100'}}>
                                                <td style={{align: 'left'}}>Body mass index&#40;BMI&#41; &#62;&#61; 30 &#60; 35</td>
                                                <td style={{align: 'right'}}>obesity I</td>
                                              </tr>
                                              <tr style={{color: (bmir === 'over2') ? 'rgb(93,109,207)' : 'white',fontWeight: (bmir === 'over2') ? 'bolder' : '100'}}>
                                                <td style={{align: 'left'}}>Body mass index&#40;BMI&#41; &#62;&#61; 35 &#60; 40</td>
                                                <td style={{align: 'right'}}>obesity II</td>
                                              </tr>
                                              <tr style={{color: (bmir === 'over3') ? 'rgb(93,109,207)' : 'white',fontWeight: (bmir === 'over3') ? 'bolder' : '100'}}>
                                                <td style={{align: 'left'}}>Body mass index&#40;BMI&#41; &#62;&#61; 40</td>
                                                <td style={{align: 'right'}}>obesity III</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="suggestion" style={{float: 'right'}}>
                                          <p>Your BMI is: <center><span className='neon'>{bmi}</span></center></p>
                                          <p>Your need to need:
                                            <center style={{width: '100%'}}><div style={{width: '35%'}}>
                                                                              <br/><span style={{float: 'left'}}>Calories:</span><span style={{float: 'right'}}><strong>{Calorie}</strong> Calories</span>
                                                                              <br/><span style={{float: 'left'}}>Protein:</span><span style={{float: 'right'}}><strong>{Protein}</strong> g</span>
                                                                              <br/><span style={{float: 'left'}}>Fat:</span><span style={{float: 'right'}}><strong>{Fat}</strong> g</span>
                                                                              <br/><span style={{float: 'left'}}>Carbohydrate:</span><span style={{float: 'right'}}><strong>{Carbohydrate}</strong> g</span>
                                                                            </div>
                                            </center>
                                          </p><br/><br/>
                                          <p style={{whiteSpace: 'nowrap', marginBottom: '10px'}}>If your want to <span style={{textDecoration: 'underline',fontWeight:'bolder'}}>loss weight</span>, you need ingest less than <strong>{Calorie}</strong> calories per day.</p>
                                          <p style={{whiteSpace: 'nowrap', marginBottom: '10px'}}>If your want to <span style={{textDecoration: 'underline',fontWeight:'bolder'}}>gain weight</span>, you need ingest more than <strong>{Calorie}</strong> calories per day.</p>
                                          <p style={{whiteSpace: 'nowrap', marginBottom: '10px'}}>Since you are <span style={{fontWeight:'bolder', textDecoration: 'underline'}}>{(bmir === 'low') ? 'below normal weight' :
                                                                                                                            (bmir === 'normal') ? 'normal weight' :
                                                                                                                            (bmir === 'over') ? 'over weight' :
                                                                                                                            (bmir === 'over1') ? 'obesity I' :
                                                                                                                            (bmir === 'over2') ? 'obesity II' :
                                                                                                                            (bmir === 'over3') ? 'obesity III' : ','}</span>, we recommend you to <span style={{fontWeight:'bolder', textDecoration: 'underline'}}>{(bmir === 'low') ? 'gain weight' :
                                                                                                                                                                                                              (bmir === 'normal') ? 'keep your current weight' :
                                                                                                                                                                                                              (bmir === 'over') ? 'loss your weight for a lot bit' :
                                                                                                                                                                                                          (bmir === 'over1' || bmir === 'over2' || bmir === 'over3') ? 'loss your weight immediately' : '.'}</span>.</p>
                                          <p style={{whiteSpace:'pre-line', marginBottom: '10px'}}>Looks like you {(daily == 'basically-sitting-all-the-time' && bmir == 'low' || daily == 'basically-sitting-all-the-time' && bmir == 'over1' || daily == 'basically-sitting-all-the-time' && bmir == 'over2' || daily == 'basically-sitting-all-the-time' && bmir == 'over3' || daily == 'light-activity' && bmir == 'low' || daily == 'light-activity' && bmir == 'over1' || daily == 'light-activity' && bmir == 'over2' || daily == 'light-activity' && bmir == 'over3') ? 'have little daily exercise, so why dont you stand up from sofa and go out do some sports now. You losser! nobody likes you!' :
                                                                                              (daily == 'basically-sitting-all-the-time' || daily == 'light-activity') ? 'have little daily exercise, so why dont you stand up from sofa and go out do some sports now.' :
                                                                                              (daily == 'moderate-activity' || daily == 'very-active' || daily == 'Hyperactive') ? 'have lots of exercise every day, thats good, keep it up.' : '.'}</p>                                                                                                                                              
                                          <p style={{}}>You are {(age <= 50) ? 'only' : ''} {age} years-old {(age > 51) ? 'already' : ','} {(age <= 50) ? 'you still got lots of time to achieve you goal' :
                                                                                                                                                                (age > 51) ? 'looks like you dont have much time to achieve your goal' : '.'}.</p>                                                                      
                                        </div>
                                        </div>
                                        <button style={{marginTop: '30px'}}onClick={this.handleTestAgain}>Test Again</button>
                                      </div>
                                      
                                    </div>
                                  </div>
          :<div>
            <div className="user-box">
                  <div className="discount card" style={{'--delay': '.4s'}}>
                    <h1>Calculate your daily nutrition need</h1>
                    <form>
                    {/* Get Gender */}
                    <div className="form-group">
                        <label id='gender-label' htmlFor='gender'>Gender: </label>
                        <select onChange={this.handleGetGender} name="" id='gender'>
                          <option disabled selected value> Select your Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      {/* Get Age */}
                      <div className='form-group'>
                        <label id="age-label" htmlFor="age">Age: </label>
                        <input value={this.state.age} onChange={this.handleGetAge} type="number" id='age' placeholder='Please enter your age'/>
                      </div>
                      {/* Get Height */}
                      <div className="form-group">
                        <label id="height-label" htmlFor="height">Height: </label>
                        <input onChange={this.handleGetHeight} type="number" id='height' placeholder='Please enter your height(cm)'/> cm
                      </div>
                      {/* Get Weight */}
                      <div className="form-group">
                        <label htmlFor="weight" id="weight-label">Weight: </label>
                        <input onChange={this.handleGetWeight} type="number" id='weight' placeholder='Please enter your weight(kg)'/> kg
                      </div>
                      {/* Get Daily exercise intensity */}
                      <div className="form-group">
                        <label htmlFor="daily" className="daily-label">Daily exercise intensity: </label>
                        <select onChange={this.handleGetDaily} name="" id="daily">
                          <option display selected value>Select your daily exercise intensity</option>
                          <option value="basically-sitting-all-the-time">Basically sitting all the time(basically no movement)</option>
                          <option value="light-activity">Light activity (light-intensity exercise 1-3 times a week)</option>
                          <option value="moderate-activity">Moderate activity (moderate-intensity exercise 3 to 5 times a week)</option>
                          <option value="very-active">Very active (6-7 high-intensity exercise a week)</option>
                          <option value="hyperactive">Hyperactive (daily vigorous exercise and heavy physical work)</option>
                        </select>
                      </div>

                      <button onClick={this.getResult}>Get Result</button>
                    </form>
                  </div> 
                </div>
        </div>;
  }
}
