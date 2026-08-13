import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './components/Product';

function App() {
  const [category, setCategory] = useState("All");

  const products = [
    { id: 1, name: "Laptop", price: 60000, category: "Electronics", inStock: true },
    { id: 2, name: "Shoes", price: 2500, category: "Fashion", inStock: true },
    { id: 3, name: "Mobile", price: 30000, category: "Electronics", inStock: false },
    { id: 4, name: "Watch", price: 5000, category: "Fashion", inStock: true },
  ];

  function filterProducts(category) {
    return category === "All"
      ? products
      : products.filter((product) => {
        return product.category === category;
      });
  }

  const filteredProducts = filterProducts(category)

  return (
    <>
      <button className='mx-1 my-2' onClick={() => setCategory("All")}>All</button>
      <button className='mx-1 my-2' onClick={() => setCategory("Electronics")}>Electronics</button>
      <button className='mx-1 my-2' onClick={() => setCategory("Fashion")}>Fashion</button>
      {
        filteredProducts.map((product) => (
          <Product products={product} />
        ))
      }
    </>
  )
}

export default App
