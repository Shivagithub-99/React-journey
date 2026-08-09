import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: "mobile", price: "30000", isFavourite: true },
    { id: 2, name: "earphones", price: "300", isFavourite: true },
    { id: 3, name: "laptop", price: "60000", isFavourite: false },
    { id: 4, name: "mouse", price: "3000", isFavourite: true },
  ])

  const [showDisc, setShowDesc] = useState(true)

  function toggleDiscount(){
    setShowDesc(!showDisc)
  }

  return (
    <>
      <h2>Products</h2>
      {
        products.map((product) => {
          return<div className="card" style={{width:"18rem"}}>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{product.price}</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
              {showDisc && <p className='btn btn-warning' onClick={()=>applyDisc(product.id)}>discount 10%</p>}
              {product.isFavourite?<p className='btn btn-primary'>❤️ Favourited</p>:<p className='btn btn-danger'>🩶 Not favourited</p>}
            </div>
            <button className='btn btn-outline-success' onClick={toggleDiscount}>Toggle</button>
          </div>
        })
      }
    </>
  )
}

export default App
