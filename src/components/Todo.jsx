import React,{useState} from 'react';
import TodoList from './TodoList';

const Todo = () => {

    const [Todo, setTodo] = useState("");
    const [Todos, setTodos] = useState([]);


    const handleChange = (e) => {
        setTodo(e.target.value);
        // console.log(e.target.value)
        // setTodo(Todo);
    }

    const AddtoTodos = () => {
        
        // console.log(Todo);
        setTodos([...Todos,
            {
                id : Date.now(),
                value : Todo,
                isCompleted : false,
            }
            ]);
        }
  return (
    <div >  Enter Todo Here... 
             <div>
        <input onChange={handleChange} type="text" placeholder='Enter a Todo'  className='inputdiv'/>
        <button onClick={AddtoTodos} className='inputbttn'>+</button>

       <TodoList Todos={Todos} />
        </div>
        
    </div>
  )
}

export default Todo