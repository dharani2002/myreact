# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Todo in React

Part 1: Context

Why we need context?

To access to dos in any component we want, we would have to pass it as props to each component which I s very inefficient.

Creation of context

createContext = todoContext
in the context we add a todo object with keys values id, todo, completed

we also add empty functions addtodo, delete todo, updatetodo, toggleComplete

we can think of them as global objects and function which can be accessed in any component as long as they are wrapped in the Provider

we also create a custom hook useTodo to access the created context
finally we also declare TodoProvider using .Provider
Calling the context

We wrap the app component with the TodoProvider and provide the objects and function as its value.

The todos are a state that we need on which all the operations are defined and the context object is passed and stored
We also have to define the functions,

Addtodo is defined by using setTodo as a callback function setTodod(()=>[]))instead of setTodo(todo) to retain the old values and just add the new todo in the existing one
 Addtodo has one parameter todo. Now prev is an array of todo which must be spread to add a new element while reatiniung old values hence setTodo((prev)=>[{},…prev])

Now each todo object must be spread to change the id and todo hence setTodo((prev)=>[{id: Date.now(),…todo},…prev]) date.now gives unique values

For updatetodo we take id and todo
We must loop through each prev hence prev.map(prevTodo)=>
we check if the id matched the prevtodo id prevtodo.id=== id
and if it does we replace the new todo or keep it same ? todo: prevtodo

deletetodo takes in id

we take in prev values and filter out the ones that diesnt match the id and add to the new array
prev.filter((todo)=> todo.id!==id))
finally togglecomlete we loop thru prev similarly and if prevtodo id  matches then spread the prevtodo and change completed !prevTodo.completed ? {…prevTodo, completed:!prevtodod} else keep it same.

Part 2 local storage
To get todo we use localstroage.getotem, we convert it from string to json by json.parse.
To store items in local storage we use setitem in a separate useEffect? ,to convert object to string we use JSON.stringify
We cant use same useEffect because for setitem todod is a dependency but it will keep rerendering for get item

Part3 components
We use a state todo to set the string values this is not the object. Which we wire it the the input field  and we also settodo to onchange function
We have 2 components todoform and todoitem
Todoform we add a n event onsubmit with function add
The add will call addtodo function 
Todoitem calls updatetodo, deletd todo and togglecomplete frocontext using usetodo
In app.jsx we have to add a loop to call todoitem compoments




