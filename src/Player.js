import React from 'react'

export default function Player({ user, setUsers, removeUser }) {

    const updateUserName = (value) => {
        setUsers(u => u.filter(i => i.id !== user.id)
            .concat([{ ...user, name: value }])
            .sort((a, b) => a.id - b.id))
    }

    const updateUserPoints = (value) => {
        setUsers(u => u.filter(i => i.id !== user.id)
            .concat([{ ...user, points: value }])
            .sort((a, b) => a.id - b.id))
    }

    const updateUserBounty = (value) => {
        setUsers(u => u.filter(i => i.id !== user.id)
            .concat([{ ...user, bounty: value }])
            .sort((a, b) => a.id - b.id))
    }

    return (
        <div className='player_container'>
            <div className='player_static'>
                <h4>{user.name}</h4>
                <div style={{ backgroundColor: 'blue' }}>
                    <p>Pontos</p>
                    <p>{user.points}</p>
                </div>
                <div style={{ backgroundColor: 'red' }}>
                    <p>Bounty</p>
                    <p>{user.bounty}</p>
                </div>
            </div>

            <div className='player_input'>
                <div className='input_container'>
                    <h4>Nome</h4>
                    <input type='text' value={user.name} onChange={(e) => updateUserName(e.target.value)} />
                </div>
                <div className='input_container'>
                    <h4>Pontos</h4>
                    <input type='number' value={user.points} onChange={(e) => updateUserPoints(e.target.value)} />
                </div>
                <div className='input_container'>
                    <h4>Bounty</h4>
                    <input type='number' value={user.bounty} onChange={(e) => updateUserBounty(e.target.value)} />
                </div>
            </div>
            <button className='delete_button' onClick={() => removeUser(user.id)}> - </button>
        </div>
    )
}