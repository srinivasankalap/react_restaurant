import React, { useState, useEffect } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [orders, setOrders] = useState([]);
  const categories = ['Table 1', 'Table 2', 'Table 3'];
  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
    localStorage.setItem(newOrder.orderId, JSON.stringify(newOrder));
  };
  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.orderId !== orderId);
    setOrders(updatedOrders);
    localStorage.removeItem(orderId);
  };

  useEffect(()=>{
    const storedOrders = Object.keys(localStorage).map((orderId) =>
      JSON.parse(localStorage.getItem(orderId))
    );
    setOrders(storedOrders);
  },[]);

  return (
    <div className="App">
      <h1>Restaurant Ordering App</h1>
      <ExpenseForm onAddOrder={addOrder} />
      <div className="order-lists">
        {categories.map((category) => (
          <ExpenseList
            key={category}
            orders={orders.filter((order) => order.tableNumber === category)}
            category={category}
            onDeleteOrder={deleteOrder}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
