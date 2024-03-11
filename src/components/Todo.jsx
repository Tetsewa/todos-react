
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import UndoIcon from '@mui/icons-material/Undo';

function Todo({ todo, deleteTodo, toggleTodo }) {

    const { id, title, completed } = todo
    const isCompleteClass = completed ? "complete" : "incomplete"

    return (
        <div className={`todo ` + isCompleteClass} todo-id={id}>

            <div className='title'>
                {title}
            </div>

            <div className='actions'>

                {completed
                    ? <UndoIcon onClick = {() => toggleTodo(id)} />
                    : <DoneIcon onClick = {() => toggleTodo(id)} />
                }

                
                <DeleteIcon onClick={() => deleteTodo(id)} />
            </div>

        </div>
    )
}

export default Todo