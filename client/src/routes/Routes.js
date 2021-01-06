import Home from '../pages/home/Home.js'
import AnimalDetail from '../pages/animalDetail/AnimalDetail.js'
import NavBar from '.././components/navBar/NavBar.js'
import Admins from '../pages/admins/Admins.js'

import React from "react";
import { Route } from "react-router-dom";
import Features from '../template/Main/Sidebar/features.js';
import Content from '../template/Main/Content/content.js';
import Todo from '../template/todo.js';



const Routes = () => {
  return (
    <>
     
       <Route exact path="/admins" component={Admins}></Route>
       <Route exact path= "/" component={Home}></Route>
       <Route exact path= "/animals/:id" component={AnimalDetail}></Route>
       <Route exact path= "/features" component={Features}></Route>
       <Route exact path= "/content" component={Content}></Route>
       <Route exact path= "/todo" component={Todo}></Route>
    </>
  );
};

export default Routes;