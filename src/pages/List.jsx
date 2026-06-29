import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({token}) => {
  const [list,setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list")
      if(response.data.success){
        setList(response.data.products)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + "/api/product/remove", {id}, {headers:{token}})
    if(response.data.success){
      toast.success(response.data.message);
      await fetchList();
    }else{
      toast.error(response.data.message)
    }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchList();
  },[])
  return (
    <>
    <p className="text-2xl font-bold text-gray-900 mb-6">
  All Products
</p>

<div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

  {/* Table Header */}

  <div className="hidden md:grid grid-cols-[90px_3fr_1.5fr_1fr_100px] items-center bg-gray-50 border-b border-gray-200 px-6 py-4 text-sm font-semibold text-gray-700">
    <p>Image</p>
    <p>Product</p>
    <p>Category</p>
    <p>Price</p>
    <p className="text-center">Action</p>
  </div>

  {/* Product List */}

  <div className="divide-y divide-gray-100">

    {list.map((item, index) => (

      <div
        key={index}
        className="grid grid-cols-[80px_1fr] md:grid-cols-[90px_3fr_1.5fr_1fr_100px] items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-all duration-300"
      >

        {/* Image */}

        <img
          className="w-16 h-16 rounded-xl object-cover border"
          src={item.image[0]}
          alt={item.name}
        />

        {/* Name */}

        <div>
          <h3 className="font-semibold text-gray-900">
            {item.name}
          </h3>

          <p className="text-xs text-gray-500 md:hidden">
            {item.category}
          </p>
        </div>

        {/* Category */}

        <p className="hidden md:block text-gray-600">
          {item.category}
        </p>

        {/* Price */}

        <p className="font-semibold text-black">
          {currency}
          {item.price}
        </p>

        {/* Delete */}

        <button
          onClick={() => removeProduct(item._id)}
          className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 transition hover:bg-red-600 hover:text-white"
        >
          ✕
        </button>

      </div>

    ))}

  </div>

</div>
    </>
  )
}

export default List