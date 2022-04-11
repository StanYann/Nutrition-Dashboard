import React, { Component } from 'react';
import {NavLink,Route,Routes,Outlet} from 'react-router-dom';
import Dashboard from './component/Dashboard';
import PictureMatch from './component/PictureMatch';
import Recipe from './component/Recipe';
import BodyMeasure from './component/BodyMeasure'
import './App.css';


export default class App extends Component {
  state = {
    hour: '',
    minute: ''
  }

  componentDidMount() {
    const d = new Date();
    const hour = d.getHours();
    const minute = d.getMinutes();
    setTimeout(() => {
      this.setState({
        hour,
        minute
      });
    }, 1000)
    
  }

  render() {
    const { hour,minute } = this.state
  return (
    <div className="wrapper" style={{marginLeft: '10px'}}>
    <div className="main-container">
        {/* <!-- Header Nav-Bar --> */}
      <div className="header">
      <div className="logo">Nutrition
        <span className="logo-det">Dashboard</span></div>
        <NavLink className="header-link" to="/dashboard"><svg t="1646316061941" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1256"><path d="M746.666667 842.666667v64H277.333333v-64h469.333334z m160-704v618.666666h-789.333334v-618.666666h789.333334z m-64 64h-661.333334v490.666666h661.333334v-490.666666zM384 419.072v149.333333h-64v-149.333333h64z m160-85.333333v234.666666h-64v-234.666666h64z m160 64v170.666666h-64v-170.666666h64z" fill="#ffffff" p-id="1257"></path></svg>
        Dashboard</NavLink>
        <NavLink className="header-link" to="/picturematch"><svg t="1646361872810" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3429"><path d="M394.007273 870.632727H116.363636c-25.6 0-46.545455-20.945455-46.545454-46.545454v-628.363637c0-25.6 20.945455-46.545455 46.545454-46.545454h500.829091c12.8 0 23.272727 10.472727 23.272728 23.272727s-10.472727 23.272727-23.272728 23.272727H116.363636v628.363637h265.541819l292.770909-412.392728c8.843636-12.334545 23.04-19.549091 37.934545-19.54909s29.090909 7.214545 37.934546 19.54909l133.818181 188.509091V195.723636h-116.130909c-12.8 0-23.272727-10.472727-23.272727-23.272727s10.472727-23.272727 23.272727-23.272727H884.363636c25.6 0 46.545455 20.945455 46.545455 46.545454v477.323637c0 10.24-6.516364 19.083636-16.290909 22.109091-9.541818 3.025455-20.247273-0.465455-26.065455-8.610909l-175.941818-247.854546-299.752727 422.167273a22.574545 22.574545 0 0 1-18.850909 9.774545z" fill="#ffffff" p-id="3430"></path><path d="M394.007273 870.632727H116.363636c-25.6 0-46.545455-20.945455-46.545454-46.545454v-20.247273c0-5.818182 2.327273-11.636364 6.283636-15.825455l207.825455-224.116363c18.152727-18.850909 50.501818-18.618182 68.189091-0.232727l141.265454 152.436363c7.447273 8.145455 8.145455 20.247273 1.861818 29.323637l-82.152727 115.432727a23.272727 23.272727 0 0 1-19.083636 9.774545zM116.363636 813.149091v11.170909h265.541819l64.232727-90.298182-128.232727-138.24L116.363636 813.149091z" fill="#ffffff" p-id="3431"></path><path d="M884.363636 870.632727H394.007273c-8.610909 0-16.756364-4.887273-20.712728-12.567272-3.956364-7.68-3.258182-16.989091 1.629091-24.203637l299.752728-422.167273c8.843636-12.334545 23.04-19.549091 37.934545-19.54909s29.090909 7.214545 37.934546 19.54909l175.941818 247.854546c2.792727 3.956364 4.189091 8.610909 4.189091 13.498182v151.04c0.232727 25.832727-20.712727 46.545455-46.312728 46.545454z m-445.207272-46.545454H884.363636v-143.592728l-171.752727-241.803636-273.454545 385.396364zM290.909091 405.178182c-44.916364 0-81.454545-36.538182-81.454546-81.454546s36.538182-81.454545 81.454546-81.454545 81.454545 36.538182 81.454545 81.454545-36.538182 81.454545-81.454545 81.454546z m0-116.363637c-19.316364 0-34.909091 15.592727-34.909091 34.909091s15.592727 34.909091 34.909091 34.909091 34.909091-15.592727 34.909091-34.909091-15.592727-34.909091-34.909091-34.909091z" fill="#ffffff" p-id="3432"></path></svg>
        Picture Match</NavLink>
        <NavLink className="header-link" to="/recipe"><svg t="1646362119257" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4251"><path d="M800 960 224 960C188.64 960 160 931.328 160 896L160 128C160 92.64 188.64 64 224 64L800 64C835.328 64 864 92.64 864 128L864 896C864 931.328 835.328 960 800 960ZM800 128 704 128 704 416C704 433.664 689.664 448 672 448 654.336 448 640 433.664 640 416L640 128 224 128 224 896 800 896 800 128Z" p-id="4252" fill="#ffffff"></path></svg>
        Recipe</NavLink>
        <NavLink className="header-link" to="/bodymeasure"><svg t="1646902403918" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1583"><path d="M277.333333 938.666667H110.933333c-12.8 0-25.6-12.8-25.6-25.6v-166.4c0-25.6-17.066667-42.666667-42.666666-42.666667s-42.666667 17.066667-42.666667 42.666667v166.4C0 972.8 51.2 1024 110.933333 1024h166.4c25.6 0 42.666667-17.066667 42.666667-42.666667s-17.066667-42.666667-42.666667-42.666666zM981.333333 704c-25.6 0-42.666667 17.066667-42.666666 42.666667v166.4c0 17.066667-12.8 25.6-25.6 25.6h-166.4c-25.6 0-42.666667 17.066667-42.666667 42.666666s17.066667 42.666667 42.666667 42.666667h166.4c64 0 110.933333-51.2 110.933333-110.933333v-166.4c0-25.6-17.066667-42.666667-42.666667-42.666667zM913.066667 0h-166.4c-25.6 0-42.666667 17.066667-42.666667 42.666667s17.066667 42.666667 42.666667 42.666666h166.4c12.8 0 25.6 12.8 25.6 25.6v166.4c0 25.6 17.066667 42.666667 42.666666 42.666667s42.666667-17.066667 42.666667-42.666667V110.933333C1024 51.2 972.8 0 913.066667 0zM42.666667 320c25.6 0 42.666667-17.066667 42.666666-42.666667V110.933333c0-12.8 12.8-25.6 25.6-25.6h166.4c25.6 0 42.666667-17.066667 42.666667-42.666666s-17.066667-42.666667-42.666667-42.666667H110.933333C51.2 0 0 51.2 0 110.933333v166.4c0 25.6 17.066667 42.666667 42.666667 42.666667zM512 341.333333c72.533333 0 128-55.466667 128-128s-55.466667-128-128-128-128 55.466667-128 128 55.466667 128 128 128z m0-170.666666c25.6 0 42.666667 17.066667 42.666667 42.666666s-17.066667 42.666667-42.666667 42.666667-42.666667-17.066667-42.666667-42.666667 17.066667-42.666667 42.666667-42.666666zM554.666667 499.2v-51.2h234.666666c25.6 0 42.666667-17.066667 42.666667-42.666667s-17.066667-42.666667-42.666667-42.666666h-554.666666c-25.6 0-42.666667 17.066667-42.666667 42.666666s17.066667 42.666667 42.666667 42.666667H469.333333v51.2c-59.733333 17.066667-106.666667 76.8-106.666666 140.8v213.333333c0 25.6 17.066667 42.666667 42.666666 42.666667s42.666667-17.066667 42.666667-42.666667v-213.333333c0-34.133333 29.866667-64 64-64s64 29.866667 64 64v213.333333c0 25.6 17.066667 42.666667 42.666667 42.666667s42.666667-17.066667 42.666666-42.666667v-213.333333c0-68.266667-46.933333-123.733333-106.666666-140.8z" p-id="1584" fill="#ffffff"></path></svg>
        Body Measure</NavLink>
        <Outlet/>
      <div className="user-info">
        <div className="user-name">Admin</div>
        <svg className="profile" viewBox="-42 0 512 512" fill="currentColor">
        <path d="M210.4 246.6c33.8 0 63.2-12.1 87.1-36.1 24-24 36.2-53.3 36.2-87.2 0-33.9-12.2-63.2-36.2-87.2-24-24-53.3-36.1-87.1-36.1-34 0-63.3 12.2-87.2 36.1S87 89.4 87 123.3c0 33.9 12.2 63.2 36.2 87.2 24 24 53.3 36.1 87.2 36.1zm-66-189.3a89.1 89.1 0 0166-27.3c26 0 47.5 9 66 27.3a89.2 89.2 0 0127.3 66c0 26-9 47.6-27.4 66a89.1 89.1 0 01-66 27.3c-26 0-47.5-9-66-27.3a89.1 89.1 0 01-27.3-66c0-26 9-47.6 27.4-66zm0 0M426.1 393.7a304.6 304.6 0 00-12-64.9 160.7 160.7 0 00-13.5-30.3c-5.7-10.2-12.5-19-20.1-26.3a88.9 88.9 0 00-29-18.2 100.1 100.1 0 00-37-6.7c-5.2 0-10.2 2.2-20 8.5-6 4-13 8.5-20.9 13.5-6.7 4.3-15.8 8.3-27 11.9a107.3 107.3 0 01-66 0 119.3 119.3 0 01-27-12l-21-13.4c-9.7-6.3-14.8-8.5-20-8.5a100 100 0 00-37 6.7 88.8 88.8 0 00-29 18.2 114.4 114.4 0 00-20.1 26.3 161 161 0 00-13.4 30.3A302.5 302.5 0 001 393.7c-.7 9.8-1 20-1 30.2 0 26.8 8.5 48.4 25.3 64.4C41.8 504 63.6 512 90.3 512h246.5c26.7 0 48.6-8 65.1-23.7 16.8-16 25.3-37.6 25.3-64.4a437 437 0 00-1-30.2zm-44.9 72.8c-11 10.4-25.4 15.5-44.4 15.5H90.3c-19 0-33.4-5-44.4-15.5C35.2 456.3 30 442.4 30 424c0-9.5.3-19 1-28.1A272.9 272.9 0 0141.7 338a131 131 0 0110.9-24.7A84.8 84.8 0 0167.4 294a59 59 0 0119.3-12 69 69 0 0123.6-4.5c1 .5 3 1.6 6 3.6l21 13.6c9 5.6 20.4 10.7 34 15.1a137.3 137.3 0 0084.5 0c13.7-4.4 25.1-9.5 34-15.1a2721 2721 0 0027-17.2 69 69 0 0123.7 4.5 59 59 0 0119.2 12 84.5 84.5 0 0114.9 19.4c4.5 8 8.2 16.3 10.8 24.7a275.2 275.2 0 0110.8 57.8c.6 9 1 18.5 1 28.1 0 18.5-5.3 32.4-16 42.6zm0 0" /></svg>
        <div className="hour">{hour}:{minute}</div>
      </div>
      </div>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/picturematch" element={<PictureMatch />}/>
            <Route path="/recipe" element={<Recipe />}/>
            <Route path="/bodymeasure" element={<BodyMeasure />}/>
            
          </Routes>
          
    
    </div>
    </div>

  );
}
}

