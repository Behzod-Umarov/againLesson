import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
	return (
		<Link
			to={`/product/${product.id}`}
			className='shadow overflow-hidden rounded-xl'
		>
			<div className='h-[200px] w-full'>
				<img
					className='w-full h-full object-contain'
					src={product.images[0]}
					alt={product.title}
				/>
			</div>
			<div className='p-3'>
				<h3 className='line-clamp-2 text-lg font-semibold'>{product.title}</h3>
				<p className='line-clamp-2 text-sm text-gray-500'>
					{product.description}
				</p>
				<div className='p-3'>
				<p className='line-clamp-2 text-lg text-black-800'>
					{product.price}$
				</p>
			</div>
			</div>
		</Link>
	);
};

export default ProductsCard;
