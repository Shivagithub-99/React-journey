import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [inStock, setInStock] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);

  function toggleStates(){
    setInStock(!inStock)
  }


  return (
    <>
      <div className="card" style={{ width: "20rem" }}>
        <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcC00MTQta3V0ODY1OC1rdXQtMS1sLmpwZw.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">ASUS Vivobook</h5>
          <p className="card-text">69000</p>
          <p>Electronics</p>
          {inStock ? <p className="badge bg-success px-3 py-2">In stock</p> : <p className="badge bg-danger px-3 py-2">Out of stock</p>}
          {inStock && <button className='rounded mx-1 border px-2 py-0.5 bg-info text-dark'>Add to cart</button>}
          <button className="border ms-2" onClick={() => setIsWishlisted(!isWishlisted)}>{isWishlisted ? "❤️ Wishlisted" : "🩶 Add to Wishlist"}</button>
        </div>
      </div>
      <button className='bg-warning mx-5 my-3' onClick={toggleStates}>Toggle</button>
    </>
  )
}

export default App
