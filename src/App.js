import React, { useState } from 'react';
import './App.css';
import Player from './Player'

function App() {
  const [users, setUsers] = useState([])

  const addUser = () => {
    const id = users.length + 1
    const newUser = {id: id, points: '0', bounty: '0', name: ''}
    setUsers(u => u.concat([newUser]))
  }

  const removeUser = (id) => {
    setUsers(u => u.filter((i) => i.id !== id))
  }

  return (
    <div className="App">
      <button className='add_button' onClick={() => addUser()}>Adicionar Jogador</button>
      {users.map((u, key) =>
        <Player user={u} key={key} setUsers={setUsers} removeUser={removeUser}/>
      )}

    </div>
  );
}

export default App;
