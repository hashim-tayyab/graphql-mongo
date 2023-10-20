import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <br/>
        <Link to='/user-list'>View Users</Link>
        <br/>
        <Link to='/add-user'>Add User</Link>
        <br/>
        <Link to='/get-user'>Add User</Link>

    </div>
  )
}

export default Home