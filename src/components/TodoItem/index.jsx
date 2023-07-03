import React from 'react'
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { remove } from '../../store/slice/todoSlice';

export default function TodoItem({id, task}) {
  const dispatch = useDispatch();
  return (
    <div className={s.item}>
        <p>{task}</p>
        <button onClick={() => dispatch(remove(id))}>X</button>
    </div>
  )
}
