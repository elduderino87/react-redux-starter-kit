import React from 'react'
import './TodoView.scss'

export const TodoView = ({todos}) => (
  <div>
    <h4>Todo View!</h4>
    <ul>
      {todos.map(todo =>
        <li key={todo.id}>
          <div>
            {todo.title} {todo.isNew ? <i>New</i> : ''}
          </div>
        </li>
      )}
    </ul>
  </div>
)

export default TodoView
