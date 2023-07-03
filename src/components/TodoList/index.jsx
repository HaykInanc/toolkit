import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem';

export default function TodoList() {
  const list = useSelector(({todos}) => todos.list);
  return (
    <div>
        {
            list.map(item => <TodoItem key={item.id} {...item} />)
        }
    </div>
  )
}
