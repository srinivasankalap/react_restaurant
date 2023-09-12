
import React, { useState } from 'react';
import './ExpenseForm.css';

const OrderForm = ({ onAddOrder }) => {
  const [orderId, setOrderId] = useState('');
  const [dish, setDish] = useState('');
  const [amount, setAmount] = useState('');
  const [tableNumber, setTableNumber] = useState('Table 1'); // Default table

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      orderId,
      dish,
      amount,
      tableNumber,
    };
    onAddOrder(newOrder);
    // Clear form fields
    setOrderId('');
    setDish('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dish"
        value={dish}
        onChange={(e) => setDish(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={tableNumber}
        onChange={(e) => setTableNumber(e.target.value)}
      >
        <option value="Table 1">Table 1</option>
        <option value="Table 2">Table 2</option>
        <option value="Table 3">Table 3</option>
      </select>
      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderForm;
