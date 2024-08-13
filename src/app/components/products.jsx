"use client";

import "flowbite-react";
import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";

function Products() {
   const [products, setProducts] = useState([]);
   useEffect(() => {
     const fetchProducts = async () => {
       try {
         const response = await fetch("https://fakestoreapi.com/products");
         const products = await response.json();
         setProducts(products);
       } catch (error) {
         console.error(error.message);
       }
     };
     fetchProducts();
   }, []);
   return (
     <div>
       <div className="h-56 sm:h-64 xl:h-96 2xl:h-96 mt-5 mb-5 bg-blue-400 py-5">
         <Carousel>
           <div className="flex justify-between">
             {products.slice(0, 4).map((p) => (
               <div className="px-20">
                 <img className="h-80" src={p.image} alt="" />
                 <div className="flex">
                   <p className=" text-indigo-600">{p.title}</p>
                   <strong>${p.price}</strong>
                 </div>
               </div>
             ))}
           </div>
           <div className="flex justify-between">
             {products.slice(4, 8).map((p) => (
               <div className="px-20">
                 <img className="h-80" src={p.image} alt="" />
                 <div className="flex">
                   <p className="text-indigo-600">{p.title}</p>
                   <strong>${p.price}</strong>
                 </div>
               </div>
             ))}
           </div>
           <div className="flex justify-between">
             {products.slice(8, 12).map((p) => (
               <div className="px-20">
                 <img className="h-80" src={p.image} alt="" />
                 <div className="flex">
                   <p className="text-indigo-600">{p.title}</p>
                   <strong>${p.price}</strong>
                 </div>
               </div>
             ))}
           </div>
           <div className="flex justify-between">
             {products.slice(12, 16).map((p) => (
               <div className="px-20">
                 <img className="h-80" src={p.image} alt="" />
                 <div className="flex">
                   <p className=" text-indigo-600">{p.title}</p>
                   <strong>${p.price}</strong>
                 </div>
               </div>
             ))}
           </div>
           <div className="flex justify-between">
             {products.slice(16, 20).map((p) => (
               <div className="px-20">
                 <img className="h-80" src={p.image} alt="" />
                 <div className="flex">
                   <p className=" text-indigo-600">{p.title}</p>
                   <strong>${p.price}</strong>
                 </div>
               </div>
             ))}
           </div>
         </Carousel>
       </div>
     </div>
   );
}

export default Products;
