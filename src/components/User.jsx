
import React from 'react'

function User(props) {

    // Retrieve information from user
    const user = props.user
    const { id, name, username, email, balance } = user

    return (
        <div className={`user`}>
            <div className='main-info'>
                <span className='id'>
                    {id}
                </span>
                <span className='name'>
                    {name}
                </span>
            </div>
            <div className='details'>
                <span className='username'>
                    {username}
                </span>
                <span className='email'>
                    {email}
                </span>
            </div>
            <div className='balance'>
                {balance}€
            </div>
        </div>
    )
}

export default User