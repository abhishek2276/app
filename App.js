import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Home from './Home';
import TruckOwner from "./TruckOwner";
import AgentRegister from "./AgentRegister";
import AgentInfo from "./AgentInfo";
import NewTruck from "./NewTruck";
import TruckPost from "./TruckPost";
import ManageBook from "./ManageBook";
import AgentLogin from "./AgentLogin";
export default function App() {
  return (
    <div>
<Navbar/>
     

      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Dashboard />}></Route>

          <Route path='Dashboard' element={<Dashboard />}></Route>
          <Route path='Home' element={<Home />}></Route>
          <Route path='TruckOwner' element={<TruckOwner />}></Route>

          <Route path='AgentRegister' element={< AgentRegister />}></Route>

          <Route path='AgentInfo' element={<AgentInfo />}></Route>
          <Route path='AgentLogin' element={<AgentLogin />}></Route>

          <Route path='NewTruck' element={<NewTruck />}></Route>
          <Route path='TruckPost' element={<TruckPost/>}></Route>
          <Route path='ManageBook' element={<ManageBook/>}></Route>


        







        </Routes>
      </BrowserRouter>
    </div>
  )
}
