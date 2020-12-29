import Home from '../pages/home/Home.js'
import Animal from '../pages/animal/Animal.js'
import NavBar from '.././components/navBar/NavBar.js'

import React from "react";
import { Route } from "react-router-dom";



const Routes = () => {
  return (
    <>
        <Route path='/' component={NavBar}></Route>
        <Route exact path="/admins" component={Admins}></Route>
        <Route exact path= "/" component={Home}></Route>
        <Route exact path= "/animals/:id" component={Animal}></Route>
       
    </>
  );
};

export default Routes;