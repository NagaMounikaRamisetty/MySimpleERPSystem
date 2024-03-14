import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ProductsManagement from './components/ProductsManagement/ProductsManagement';
import OrdersManagement from './components/OrdersManagement/OrdersManagement';
import OrdersCalendarView from './components/OrdersCalendarView/OrdersCalendarView';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>Simple ERP System</h1>
        </header>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="/">Dashboard</a></li>
            <li><a href="/products">Products Management</a></li>
            <li><a href="/orders">Orders Management</a></li>
            <li><a href="/calendar">Orders Calendar View</a></li>
          </ul>
        </nav>
        <main className="main-content">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/products" component={ProductsManagement} />
            <Route path="/orders" component={OrdersManagement} />
            <Route path="/calendar" component={OrdersCalendarView} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;