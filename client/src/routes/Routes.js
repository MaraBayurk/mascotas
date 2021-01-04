import Home from '../pages/home/Home.js'
import AnimalDetail from '../pages/animalDetail/AnimalDetail.js'
import NavBar from '.././components/navBar/NavBar.js'
import Admins from '../pages/admins/Admins.js'

import React from "react";
import { Route } from "react-router-dom";



const Routes = () => {
  return (
    <>
        <Route exact path="/admins" component={Admins}></Route>
        <Route exact path= "/" component={Home}></Route>
        <Route exact path= "/animals/:id" component={AnimalDetail}></Route>
       
    </>
  );
};

export default Routes;