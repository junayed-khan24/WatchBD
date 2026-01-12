import React from "react";
import { Link } from "react-router";

const products = [
  {
    id: 1,
    name: "Round Dial",
    image:"../../src/assets/watch.png",
    price: 400,
    oldPrice: 450,
    rating: 4,
    sale: true,
  },
  {
    id: 2,
    name: "Golden Classical",
    image: "../../src/assets/watch.png",
    price: 400,
    oldPrice: 500,
    rating: 5,
    sale: true,
  },
  {
    id: 3,
    name: "Stainless Steel",
    image: "../../src/assets/watch.png",
    price: 500,
    rating: 5,
    sale: false,
  },
  {
    id: 4,
    name: "Romani Semi",
    image: "../../src/assets/watch.png",
    price: 200,
    oldPrice: 300,
    rating: 4,
    sale: true,
  },
  {
    id: 5,
    image: "../../src/assets/watch.png",
    name: "Classic Black",
    price: 350,
    rating: 4,
    sale: false,
  },
  {
    id: 6,
    image: "../../src/assets/watch.png",
    name: "Luxury Gold",
    price: 600,
    rating: 5,
    sale: false,
  },
  {
    id: 7,
    name: "Silver Chain",
    image: "../../src/assets/watch.png",
    price: 420,
    rating: 4,
    sale: false,
  },
  {
    id: 8,
    name: "Modern Watch",
    image: "../../src/assets/watch.png",
    price: 480,
    rating: 5,
    sale: false,
  },
];

const Product = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Bestsellers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-md">
            <figure className="p-6 relative">
              {product.sale && (
                <span className="badge badge-error text-white absolute top-4 left-4">
                  SALE
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className=" object-contain"
              />
            </figure>

            <div className="card-body text-center">
              <h3 className="font-semibold">{product.name}</h3>

              {/* Rating */}
              <div className="rating rating-sm justify-center">
                {[...Array(5)].map((_, i) => (
                  <input
                    key={i}
                    type="radio"
                    className="mask mask-star-2 bg-red-500"
                    checked={i < product.rating}
                    readOnly
                  />
                ))}
              </div>

              {/* Price */}
              <p className="mt-2">
                {product.oldPrice && (
                  <span className="line-through text-gray-400 mr-2">
                    ${product.oldPrice}
                  </span>
                )}
                <span className="font-bold">${product.price}</span>
              </p>

              <div className="card-actions justify-center mt-4">
                <Link to={`/product/${product.id}`}>
                  <button className="btn btn-error btn-sm text-white">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
