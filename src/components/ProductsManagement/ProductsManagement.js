import React, { useState } from 'react';
import styles from './ProductsManagement.module.css';

const ProductsManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Mouse', category: 'Hardware', price: 10.99, stockQuantity: 50 },
    { id: 2, name: 'Charger', category: 'Hardware', price: 12.99, stockQuantity: 30 },
    { id: 3, name: 'Laptop', category: 'Software', price: 50.99, stockQuantity: 20 },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stockQuantity: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      ...formData
    };
    setProducts([...products, newProduct]);
    setFormData({
      name: '',
      category: '',
      price: '',
      stockQuantity: ''
    });
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div className={styles.container}>
      <h2>Products Management</h2>
      
      <form className={styles.form}>
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleInputChange} />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleInputChange} />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleInputChange} />
        <input type="number" name="stockQuantity" placeholder="Stock Quantity" value={formData.stockQuantity} onChange={handleInputChange} />
        <button type="button" onClick={handleAddProduct}>Add Product</button>
      </form>

      {/* Table to display list of products */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stockQuantity}</td>
              <td>
                <button className={styles.actionBtn} onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsManagement;