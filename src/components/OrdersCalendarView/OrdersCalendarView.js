import React from 'react';
import styles from './OrdersCalendarView.module.css';

function OrdersCalendarView() {
  const orders = [
    { id: 1, customerName: 'A', deliveryDate: '2024-03-12' },
    { id: 2, customerName: 'B', deliveryDate: '2024-03-13' },
    { id: 3, customerName: 'C', deliveryDate: '2024-03-17' },
    { id: 4, customerName: 'D', deliveryDate: '2024-03-18' },
  ];

  const ordersByDate = {};
  orders.forEach(order => {
    const date = new Date(order.deliveryDate).toLocaleDateString();
    if (!ordersByDate[date]) {
      ordersByDate[date] = [];
    }
    ordersByDate[date].push(order);
  });

  const renderOrdersForDate = (date) => {
    if (!ordersByDate[date]) return null;
    return ordersByDate[date].map(order => (
      <div key={order.id} className={styles.orderItem}>
        <div className={styles.orderId}>Order ID: {order.id}</div>
        <div className={styles.customerName}>Customer: {order.customerName}</div>
      </div>
    ));
  };

  
  const renderCalendarDays = () => {
    const dates = Object.keys(ordersByDate);
    return dates.map(date => (
      <div key={date} className={styles.calendarDay}>
        <div className={styles.date}>{date}</div>
        <div className={styles.orders}>{renderOrdersForDate(date)}</div>
      </div>
    ));
  };

  return (
    <div className={styles.calendar}>
      <h2 className={styles.title}>Orders Calendar View</h2>
      <div className={styles.calendarGrid}>
        {renderCalendarDays()}
      </div>
    </div>
  );
}

export default OrdersCalendarView;