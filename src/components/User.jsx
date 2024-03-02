import React from 'react'

function User(props) {
    return <div className='user'>
        Name of user: {props.name}
    </div>
}

export default User