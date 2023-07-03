import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../../store/slice/todoSlice';

export default function AddTask() {

  const dispatch = useDispatch();

  const handler = event => {
    event.preventDefault();
    const task = event.target.task.value;
    
    dispatch(add(task));
    event.target.reset();
  }
  
  return (
    <form onSubmit={handler}>
        <input type="text" name='task' />
        <button>Добавить</button>
    </form>
  )
}
