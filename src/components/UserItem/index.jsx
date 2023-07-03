import React from 'react'
import { remove } from '../../store/slice/usersSlice';
import s from './style.module.css'
import { useDispatch } from 'react-redux';
import { incr } from '../../store/slice/usersSlice';

export default function UserItem({id, name, lastname, age}) {
  const dispatch = useDispatch();
  return (
    <div className={s.item}>
        <p>{name}</p>
        <p>{lastname}</p>
        <div>
          <p>{age}</p>
          <button onClick={() => dispatch(incr(id))}>+</button>
        </div>
        <button onClick={() => dispatch(remove(id))}>Удалить</button>
    </div>
  )
}
