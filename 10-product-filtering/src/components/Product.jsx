import React from 'react'

const Product = (props) => {
  return (
    <div>
        <h3>{props.products.name}</h3>
        <p>{props.products.price}</p>
    </div>
  )
}

export default Product