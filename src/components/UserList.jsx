import React from 'react'

function UserList(props) {
  return (
    <div>

        <button>Add New</button>
        <button>Refresh</button>

        {props.children}
        
    </div>
  )
}

export default UserList