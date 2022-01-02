import './App.css';
import React from 'react';
import EmployeeList from './components/employee-list.js';
import CreateEmployee from './components/create-employee.js';
import Header from './components/header.js';
import Shopping from './components/shopping/shopping'
import Men from './components/shopping/Men/Men'
import Women from './components/shopping/Women/Women'
import Kids from './components/shopping/Kids/Kids'
import Indecision from './components/indecision/indecision';
import Boys from './components/shopping/Kids/Boys/Boys';
import Girls from './components/shopping/Kids/Girls/Girls';
import {Route, Routes} from 'react-router-dom';
import Tops from './components/shopping/Men/Tops/Tops';
import Bottoms from './components/shopping/Men/Bottoms/Bottoms';


function App() {
  return (
    <div>
      <Header />
      <Routes>        
        <Route path="/emp" element={<EmployeeList />} />
        <Route path="/create-emp" element={<CreateEmployee />} /> 
        <Route path="/indecision" element={<Indecision />}/>
        <Route path="/shopping" element={<Shopping />}>
            <Route path="men" element={<Men />}>
                <Route path="tops" element={<Tops />}/>
                <Route path="bottoms" element={<Bottoms />}/>
            </Route>
            <Route path="women" element={<Women />}/>
            <Route path="kids" element={<Kids />}>
              {/* kids child routing start */}
                <Route path="boys" element={<Boys />}/>
                <Route path="girls" element={<Girls />}/>
              {/* kids child routing end */}
            </Route>
        </Route>        
      </Routes>

    </div>
  );
}

export default App;
