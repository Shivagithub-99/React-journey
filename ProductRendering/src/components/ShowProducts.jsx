import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    let result = await fetch("https://fakestoreapi.com/products");
    let data = await result.json();
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h2>Products</h2>

      {products.length === 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid #ddd",
                width: "300px",
                padding: "1rem",
              }}
            >
              
              <div
                className="bg-secondary"
                style={{
                  width: "100%",
                  height: "300px",
                  marginBottom: "1rem",
                }}
              ></div>

              
              <div
                className="bg-secondary"
                style={{
                  width: "100%",
                  height: "20px",
                  marginBottom: "10px",
                }}
              ></div>

              
              <div
                className="bg-secondary"
                style={{
                  width: "70%",
                  height: "20px",
                  marginBottom: "20px",
                }}
              ></div>

              
              <div
                className="bg-secondary"
                style={{
                  width: "30%",
                  height: "20px",
                }}
              ></div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid black",
                width: "300px",
                padding: "1rem",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                }}
              />

              <h5>{product.title}</h5>

              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ShowProducts;