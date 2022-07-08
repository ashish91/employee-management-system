import './App.css';
import Navbar from './components/Navbar';

import React from 'react'
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';

const App = () => {
  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path='/' element={<EmployeeList />} />
          <Route path='/employeeList' element={<EmployeeList />} />
          <Route path='/addEmployee' element={<AddEmployee />} />
          <Route path='/editEmployee/:id' element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
