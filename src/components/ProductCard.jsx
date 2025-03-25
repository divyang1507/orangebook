import React from 'react'
import { FaStar } from "react-icons/fa";
const ProductCard = ({item}) => {
  return (
    <div>
      <div className="max-w-2xl mx-auto">


<div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg p-8" src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp" alt="product image"/>
    </a>
        <div className="px-5 pb-5">
            <a href="#">
                <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{item.Name}</h3>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <FaStar/>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                <a href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                    to cart</a>
            </div>
        </div>
</div>
</div>
    </div>
  )
}

export default ProductCard
