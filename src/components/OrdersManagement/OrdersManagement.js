import React, { useState } from 'react';
import styles from './OrdersManagement.module.css';

function OrdersManagement() {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'A', orderDate: '2024-03-12', status: 'Completed' },
    { id: 2, customerName: 'B', orderDate: '2024-03-13', status: 'Completed' },
    { id: 3, customerName: 'C', orderDate: '2024-03-17', status: 'Pending' },
    { id: 4, customerName: 'D', orderDate: '2024-03-18', status: 'Pending'}
  ]);

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const deleteOrder = (orderId) => {
    const filteredOrders = orders.filter(order => order.id !== orderId);
    setOrders(filteredOrders);
  };

  const renderOrders = () => {
    return orders.map(order => (
      <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.customerName}</td>
        <td>{order.orderDate}</td>
        <td>{order.status}</td>
        <td>
          <button className={styles.statusButton} onClick={() => updateOrderStatus(order.id, 'Completed')}>
            Mark as Completed
          </button>
          <button className={styles.deleteButton} onClick={() => deleteOrder(order.id)}>
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className={styles.ordersContainer}>
      <h2>Orders Management</h2>
      <table className={styles.ordersTable}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {renderOrders()}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersManagement;