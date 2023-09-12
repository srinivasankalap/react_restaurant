// OrderList.js
import React from 'react';
import './ExpenseList.css'

const OrderList = ({ orders, category, onDeleteOrder}) => {
  return (
    <div className="order-list-container">
      <h2 className="category-heading">{category}</h2>
      <ul className="order-list">
        {orders.map((order) => (
          <li key={order.orderId} className="order-item">
            {`Dish: ${order.dish}, Amount: ${order.amount}, ${order.tableNumber}`}
            <button className="delete-button" onClick={() => onDeleteOrder(order.orderId)}>Delete Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
