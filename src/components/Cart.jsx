import React from 'react'

const Cart = ({ items = [] }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Cart total: {items.length}</p>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
