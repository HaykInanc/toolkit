import React from 'react'
import { useSelector } from 'react-redux'

export default function ProductsList() {
    const products = useSelector(({products}) => products.list);
  return (
    <div>
        {
            products.map((item => <p key={item.id}>{item.title}</p>))
        }
    </div>
  )
}
