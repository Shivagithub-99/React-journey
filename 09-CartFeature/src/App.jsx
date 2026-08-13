import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [isFavourite, setIsFavourite] = useState(false)
  const [stock, setStock] = useState(6);
  

  function toggleFavourite(){
    setIsFavourite(!isFavourite)
  }
  return (
    <>
      {cartCount === 0 ? <p className='mx-4 my-4'>Cart is empty</p> : <p className='mx-4 my-4'>Items in Cart: <b>{cartCount}</b></p>}
      {stock === 0 ? <p className='mx-4 my-4 text-danger'>Out of Stock</p> : <p className='mx-4 my-4'>Items in Stock: <b>{stock}</b></p>}
      <div className="card" style={{width: "18rem", boxShadow: "0px 0px 10px grey", marginLeft: "1rem"}}>
        <div className="card-body">
          <h5 className="card-title">Wireless Earbuds</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Electronics</h6>
          <p className="card-text">2099/-</p>
          {(cartCount < 5 && stock > 0) ? <button onClick={()=>{setCartCount(cartCount + 1); setStock(stock - 1)}} className='mx-2 bg-info-subtle border'>Add to cart</button> : <><button className='mx-2 bg-info-subtle border' disabled >Add to cart</button></>}
          {cartCount > 0 && <button onClick={()=>{setCartCount(cartCount - 1); setStock(stock + 1)}} className='bg-info-subtle border'>Remove from cart</button>}
          {cartCount === 5 && <p className='text-danger'>Maximum Cart Quantity Reached !</p> }
          {isFavourite ? <p onClick={toggleFavourite} style={{cursor: "pointer"}}>❤️</p> : <p onClick={toggleFavourite} style={{cursor: "pointer"}}>🩶</p>}
        </div>
      </div>
    </>
  )
}

export default App
