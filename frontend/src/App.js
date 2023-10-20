import React from 'react';
import UserList from './pages/userList/UserList';
import AddUser from './pages/addUser/AddUser';
import Home from './pages/Home/Home';
import GetUser from './pages/getUser/GetUser';
import { Route, Routes } from 'react-router-dom';


function App () {
    return (
     <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user-list' element={<UserList/>}/>
        <Route path='/add-user' element={<AddUser/>}/>
        <Route path='/get-user' element={<GetUser/>}/>

      </Routes>
      
     </div>
    );
  }

export default App;
