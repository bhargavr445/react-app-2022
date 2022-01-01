import './App.css';
import React from 'react';
import EmployeeList from './components/employee-list.js';
import CreateEmployee from './components/create-employee.js';
import Header from './components/header.js';
import Shopping from './components/shopping.js'
import Indecision from './components/indecision/indecision';

import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/emp" element={<EmployeeList />} />
        <Route path="/create-emp" element={<CreateEmployee />} />
        <Route path="/shopping" element={<Shopping />}/>
        <Route path="/indecision" element={<Indecision />}/>
      </Routes>
    </div>
  );
}

export default App;
