import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Orders = ({token}) => {

  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    if(!token){
      return null;
    }

    try {
      const response = await axios.post(backendUrl + '/api/order/list',{},{headers: {token}})
      console.log(response.data)
      if(response.data.success){
        setOrders(response.data.orders.reverse())
      }else{
         toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', { orderId, status:event.target.value}, {headers:{token}})
      if(response.data.success){
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message)
    }
  }

  useEffect(()=>{
    fetchAllOrders();
  },[token])

  return (
   <div className="w-full">

  <div className="mb-8">
    <h2 className="text-3xl font-bold text-gray-900">
      Orders
    </h2>

    <p className="text-gray-500 mt-1">
      Manage and track customer orders
    </p>
  </div>

  <div className="space-y-5">

    {orders.map((order, index) => (

      <div
        key={index}
        className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 grid grid-cols-1 lg:grid-cols-[80px_2fr_1fr_150px_220px] gap-6"
      >

        {/* Parcel Icon */}

        <div className="flex justify-center lg:justify-start">
          <img
            className="w-16 h-16"
            src={assets.parcel_icon}
            alt=""
          />
          
        </div>

        {/* Order Details */}

        <div>

          <div className="space-y-1">

            {order.items.map((item, index) => (

              <p
                key={index}
                className="text-gray-700"
              >
                <span className="font-semibold">
                  {item.name}
                </span>

                {" "}× {item.quantity}

                <span className="ml-2 text-gray-500">
                  ({item.size})
                </span>

              </p>

            ))}

          </div>

          <div className="mt-5">

            <h3 className="font-bold text-lg text-gray-900">
              {order.address.firstName} {order.address.lastName}
            </h3>

            <p className="text-gray-500 mt-2">
              {order.address.street}
            </p>

            <p className="text-gray-500">
              {order.address.city},
              {" "}
              {order.address.state},
              {" "}
              {order.address.country},
              {" "}
              {order.address.zipcode}
            </p>

            <p className="mt-2 font-medium">
              📞 {order.address.phone}
            </p>

          </div>

        </div>

        {/* Payment */}

        <div className="space-y-3">

          <div>
            <p className="text-xs uppercase text-gray-400">
              Items
            </p>

            <p className="font-semibold">
              {order.items.length}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-400">
              Payment Method
            </p>

            <p className="font-semibold">
              {order.paymentMethod}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-400">
              Payment
            </p>

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                order.payment
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {order.payment ? "Paid" : "Pending"}
            </span>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-400">
              Date
            </p>

            <p className="font-medium">
              {new Date(order.date).toLocaleDateString()}
            </p>
          </div>

        </div>

        {/* Amount */}

        <div className="flex flex-col justify-center">

          <p className="text-xs uppercase text-gray-400">
            Total Amount
          </p>

          <h2 className="text-2xl font-bold text-black">
            {currency}
            {order.amount}
          </h2>

        </div>

        {/* Status */}

        <div className="flex flex-col justify-center">

          <p className="text-xs uppercase text-gray-400 mb-2">
            Order Status
          </p>

          <select
            value={order.status}
            onChange={(event) =>
              statusHandler(event, order._id)
            }
            className="rounded-xl border border-gray-300 px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-black"
          >
            <option value="Order Placed">
              Order Placed
            </option>

            <option value="Packing">
              Packing
            </option>

            <option value="Shipped">
              Shipped
            </option>

            <option value="Out for delivery">
              Out for Delivery
            </option>

            <option value="Delivered">
              Delivered
            </option>

          </select>

        </div>

      </div>

    ))}

  </div>

</div>
  )
}

export default Orders