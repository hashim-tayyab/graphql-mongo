import React, { useEffect, useState } from 'react';
import { GET_USER } from '../../queries/userQueries';
import { useQuery } from '@apollo/client';

function GetUser() {

  const [onchangeId, setOnchangeId] = useState('');
  const [userId, setUserId] = useState('');
  const [detail, setDetail] = useState({});
  
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { userId: onchangeId }
  });

  useEffect(() => {
    if (!loading && data) {
      const user = data.getUser;
      if (user) {
        setDetail(user);
      }
    }
  }, [loading, data]);

  useEffect(() => {
    if(!loading && onchangeId) {
      if(error){
        console.log(error);
      }
    }
  },[loading, data]);

  if (loading) {
    return "Loading..."    
  } 
  
return (
  <div>
    <div>
      <h2>Get User</h2>
      <p>Enter User ID:</p>
      <input
        type="text"
        placeholder="Id..."
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={() => setOnchangeId(userId)}>Get User</button>
    </div>
    <h3>User Name: {detail?.name}</h3>
  </div>
);
}

export default GetUser