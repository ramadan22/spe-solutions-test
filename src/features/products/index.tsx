import React, { useEffect, useState } from 'react';
import { getList } from './hooks/UseGetData';

const Products = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getList();
      console.log(result?.data);
      setList(result?.data);
    }

    fetchData();

  }, []);

  const handleInput = (index: number, qty: number) => {
    const listUpdate: any = [...list];
    listUpdate[index].quantity = qty;

    setList(listUpdate);
  }

  const numberFormat = (value: number) => {
    const formattedNumber = (value || 0).toLocaleString('id-ID');

    return formattedNumber;
  }

  const handleTotal = (productList: any) => {
    let totalPrice = 0;
  
    productList.forEach((item: any) => {
      const { quantity, product } = item;
      const { price } = product;
  
      totalPrice += quantity * price;
    });
  
    return totalPrice;
  };

  return (
    <div className="flex flex-col py-20">
      <h1 className="text-2xl mb-10 text-center">SPE Frontend Shop</h1>
      <div className="bg-black text-white p-6 flex">
        <div className="flex-1">Product</div>
        <div className="w-[200px] text-center">Quatity</div>
        <div className="w-[200px] text-center">Subtotal</div>
      </div>
      {list.map((item: any, idx: number) => (
        <div className="px-6">
          <div className="py-6 border-b flex">
            <div className="flex-1 flex gap-x-4">
              <div className="border p-3 rounded w-[150px]">
                <img className="w-full object-cover" src={item.product.media_url} alt="product" />
              </div>
              <div>
                <p>{item.product.code}</p>
                <p>{item.product.name}</p>
                <p>IDR {numberFormat(item.product.price)}</p>
                <p>{item.product.stock} in stock</p>
              </div>
            </div>
            <div className="w-[200px] flex justify-center items-center">
              <input
                type="text"
                onChange={(event) => handleInput(idx, Number(event.target.value))}
                value={item.quantity || 0}
                className="border w-[70px] text-center p-1 rounded"
              />
            </div>
            <div className="w-[200px] flex justify-center items-center">
              IDR {numberFormat(item.product.price * item.quantity)}
            </div>
          </div>
        </div>
      ))}
      <div className="bg-black text-white p-6 flex">
        <div className="flex-1" />
        <div className="w-[200px] text-center">TOTAL</div>
        <div className="w-[200px] text-center">
          IDR {numberFormat(handleTotal(list))}
        </div>
      </div>
    </div>
  )
};

export default Products;
