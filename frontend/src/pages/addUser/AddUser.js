import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../queries/userQueries';

function AddUser() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const handleAddUser = async () => {
    try {
      const res = await createUser({
        variables: {name, age:parseInt(age)}
      }) 
      console.log('User Added');
    } catch (error) {
      console.error('Error Adding User:', error);
    }
  }
  return (
    <div>
      <h2>Add new User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleAddUser}>Create User</button>
    </div>
  )
}

export default AddUser 