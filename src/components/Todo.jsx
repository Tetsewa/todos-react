import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import UndoIcon from '@mui/icons-material/Undo';

function Todo({ todo, deleteTodo }) {

    const { id, title, completed } = todo
    const isCompleteClass = completed ? "complete" : "incomplete"

    return (
        <div className={`todo ` + isCompleteClass} todo-id={id}>

            <div className='title'>
                {title}
            </div>

            <div className='actions'>

                {completed
                    ? <UndoIcon />
                    : <DoneIcon />
                }


                <DeleteIcon onClick={() => deleteTodo(id)} />
            </div>

        </div>
    )
}

export default Todo