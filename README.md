# Lil' Todos Exercise before lunch

- Make sure you do `npm install` after you clone this repo!

You need to be able to toggle Todos into their `complete` and `incomplete` states!

For this, you'll have the `toggleTodo` function.
This function is on lines `28` to `34` in `App.jsx` function.

# For the function:

- Generate a copy of the array 
> (const newTodos = [...todos])
- Loop the new array and change the Todo you're looking for (if it's completed, change it to incomplete and vice versa)
- Update todos original function
> setTodos(newTodos)

# For the call inside the component:

- Make sure you're passing toggleTodo into the component's props
- In `Todo.jsx`, assign onClick events to the Undo or Done Icons (actually, both can call the same function as they work like a toggle!)