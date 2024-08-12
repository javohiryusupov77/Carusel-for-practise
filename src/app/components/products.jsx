"use client";

import "flowbite-react";
import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(baseUrl);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        {products.map((product) => (
          <div
            key={product.id}
            className="relative grid grid-cols-1 grid-cols-4"
          >
            <div className="col-span-1">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-60 h-auto"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-sm">${product.price}</p>
              </div>
            </div>
            <div className="col-span-1">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-60 h-auto"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-sm">${product.price}</p>
              </div>
            </div>
            <div className="col-span-1">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-60 h-auto"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-sm">${product.price}</p>
              </div>
            </div>
            <div className="col-span-1">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-60 h-auto"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-sm">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Products;
