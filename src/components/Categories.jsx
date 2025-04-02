"use client"
import { Link, useSearchParams } from "react-router-dom"

const Categories = ({ categories }) => {
  const [searchParams] = useSearchParams()
  const currentCategory = searchParams.get("category")

  return (
    <div className="categories-filter mb-6">
      <h3 className="text-lg font-semibold mb-3">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <Link
          to="/products"
          className={`px-3 py-1.5 rounded-full text-sm ${!currentCategory ? "bg-gray-800 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          All
        </Link>
        {categories.map((category) => (
          <Link
            key={category}
            to={`/products?category=${category}`}
            className={`px-3 py-1.5 rounded-full text-sm ${
              currentCategory === category ? "bg-gray-800 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories

