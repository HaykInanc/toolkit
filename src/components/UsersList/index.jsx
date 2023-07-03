import React from 'react'
import { useSelector } from 'react-redux'
import UserItem from '../UserItem';

export default function UsersList() {
  const list = useSelector(({users}) => users.list);
  return (
    <div>
        {
            list.map(user => <UserItem key={user.id} {...user} />)
        }
    </div>
  )
}
