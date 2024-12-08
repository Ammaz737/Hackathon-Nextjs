import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "Library Stool Chair",
      description: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
      imgSrc: "/02.jpg",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      description: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
      imgSrc: "/02.jpg",
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h2 className="text-[22px] font-medium pl-3 mb-6">Bag</h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:justify-between bg-white p-4 rounded-lg shadow-md mb-4"
            >
              {/* Item Details */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-24 h-24 bg-gray-200 rounded overflow-hidden">
                  <Image
                    src={item.imgSrc}
                    alt={`Image of ${item.name}`}
                    width={150}
                    height={150}
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-[16px] font-normal text-[#272343] mb-3">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">{item.description}</p>
                  <div className="flex justify-center sm:justify-start space-x-12">
                    <p className="text-[15px] font-normal text-[#757575]">
                      Size: {item.size}
                    </p>
                    <p className="text-[15px] font-normal text-[#757575]">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="flex justify-center sm:justify-start gap-3 mt-3 text-gray-500 hover:text-black cursor-pointer">
                    <CiHeart size={20} />
                    <RiDeleteBin6Line size={20} />
                  </div>
                </div>
              </div>

              {/* Item Price */}
              <div className="flex justify-center sm:justify-end gap-3 mt-4 sm:mt-0">
                <p className="text-[16px] font-normal text-[#111111]">MRP:</p>
                <p className="text-[16px] font-normal text-[#111111]">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Subtotal */}
            <div className="flex justify-between mb-4">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg font-semibold">${subtotal.toFixed(2)}</p>
            </div>

            {/* Estimated Delivery */}
            <div className="flex justify-between mb-4">
              <p className="text-lg">Estimated Delivery & Handling</p>
              <p className="text-lg font-semibold text-green-500">Free</p>
            </div>

            <hr className="mb-4" />

            {/* Total */}
            <div className="flex justify-between mb-6">
              <p className="text-xl font-bold">Total</p>
              <p className="text-xl font-bold">${subtotal.toFixed(2)}</p>
            </div>

            {/* Checkout Button */}
            <button className="w-full h-[60px] rounded-[30px] text-white bg-[#029FAE] hover:bg-[#028693]">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
