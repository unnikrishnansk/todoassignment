import React from 'react';

const TodoList = ({Todos}) => {
  return (
    <div>Add Todo Here..

{Todos.map((e) => 
        (
            <div className='displaydiv'>
                <div>
                {e.value}
                </div>
                <div>
                <input type="radio" className='radiobttn' />
                </div>
            </div>
        ))}
    </div>
  )
}

export default TodoList