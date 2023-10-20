import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from '../../queries/userQueries';

function UserList() {
    const { data, loading, error } = useQuery(GET_ALL_USERS);
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    return (
        <div>
        {data.getAllUsers.map((user, index) => {
          return (
            <div key={index}>
              {user.name}
            </div>
          )
        })}
      </div>
    )
}

export default UserList