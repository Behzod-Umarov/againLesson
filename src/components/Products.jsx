import React, { useState, useEffect } from 'react';
import ProductsCard from './ProductsCard';
import { useGetAllQuery } from '../lib/apiSlice/productsApi';
import Pagination from './Pagination';

const Products = ({ products: initialProducts, isLoading, error, total, page, setPage }) => {
  const [products, setProducts] = useState(initialProducts || []);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    setProducts(initialProducts || []);
  }, [initialProducts]);

  console.log("Mahsulotlar:", products);

  const handleSort = (type) => {
    let sortedProducts = [...products];
    if (type === "name") {
      sortedProducts.sort((a, b) => {
        const titleA = a.title || ""; // name o‘rniga title ishlatamiz
        const titleB = b.title || "";
        return titleA.localeCompare(titleB);
      });
    } else if (type === "price") {
      sortedProducts.sort((a, b) => (a.price || 0) - (b.price || 0));
    }
    setProducts(sortedProducts);
    setSortBy(type);
  };

  if (error) {
    return (
      <div className='text-center text-3xl opacity-75 py-10'>
        <i className='fa fa-times'></i> Something went wrong :{'('}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='text-center text-3xl opacity-75 py-10'>
        <i className='fa fa-circle-notch fa-spin'></i>
      </div>
    );
  }

  return (
    <div className='pb-10'>
      <div className='container'>
        <div className='mb-5'>
          <h2 className='text-3xl font-bold mb-3'>Mahsulotlar</h2>
          <div className='flex gap-3'>
            <button
              onClick={() => handleSort("")}
              className={`px-4 py-2 rounded-xl cursor-pointer border hover:shadow-2xl ${
                sortBy === "" ? "bg-amber-900 text-white" : "bg-white text-black"
              }`}
            >
              Barchasi
            </button>
            <button
              onClick={() => handleSort("name")}
              className={`px-4 py-2 rounded-xl cursor-pointer border hover:shadow-2xl ${
                sortBy === "name" ? "bg-amber-900 text-white" : "bg-white text-black"
              }`}
            >
              Ism bo'yicha
            </button>
            <button
              onClick={() => handleSort("price")}
              className={`px-4 py-2 rounded-xl cursor-pointer border hover:shadow-2xl ${
                sortBy === "price" ? "bg-amber-900 text-white" : "bg-white text-black"
              }`}
            >
              Narx bo'yicha
            </button>
          </div>
        </div>

        {products && products.length > 0 ? (
          <div className='grid grid-cols-4 gap-5'>
            {products.map(p => (
              <ProductsCard product={p} key={p.id} />
            ))}
          </div>
        ) : (
          <div className='text-center py-10 opacity-75 text-2xl'>Empty</div>
        )}
      </div>
      <Pagination
        isLoading={isLoading}
        page={page}
        setPage={setPage}
        total={total}
      />
	        <footer className="p-4 bg-gray-100 text-center">
        <p>© 2025 Do‘kon Nomi. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
	
  );
};

export default Products;