import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../../store/slice/usersSlice';

export default function AddUser() {
  const dispatch = useDispatch();
  const onSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const lastname = event.target.lastname.value;
    const age = +event.target.age.value;
    dispatch(add({name, lastname, age}));
    event.target.reset();
  }
  return (
    <form onSubmit={onSubmit}>
        <input type="text" name='name' placeholder='Имя' />
        <input type="text" name='lastname' placeholder='Фамилия' />
        <input type="number" name='age' placeholder='Возраст' />
        <button>Добавить</button>
    </form>
  )
}
