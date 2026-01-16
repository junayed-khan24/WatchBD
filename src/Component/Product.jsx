import React from "react";
import { Link } from "react-router";
import watchImg from "../../src/assets/watch.png";

const products = [
  {
    id: "1",
    name: "Round Dial",
    image: watchImg,
    price: 400,
    rating: 4,
    description: "Classic round dial watch with premium finishing.",
  },
  {
    id: "2",
    name: "Golden Classical",
    image: watchImg,
    price: 400,
    rating: 5,
    description: "Luxury golden watch for elegant style.",
  },
  {
    id: "3",
    name: "Stainless Steel",
    image: watchImg,
    price: 500,
    rating: 5,
    description: "Strong stainless steel watch with modern design.",
  },
  {
    id: "4",
    name: "Romani Semi",
    image: watchImg,
    price: 200,
    rating: 4,
    description: "Affordable semi-classic watch for daily use.",
  },
  {
    id: "5",
    name: "Romani Semi",
    image: watchImg,
    price: 200,
    rating: 4,
    description: "Affordable semi-classic watch for daily use.",
  },
  {
    id: "6",
    name: "Romani Semi",
    image: watchImg,
    price: 200,
    rating: 4,
    description: "Affordable semi-classic watch for daily use.",
  },
  {
    id: "7",
    name: "Romani Semi",
    image: watchImg,
    price: 200,
    rating: 4,
    description: "Affordable semi-classic watch for daily use.",
  },
  {
    id: "8",
    name: "Romani Semi",
    image: watchImg,
    price: 200,
    rating: 4,
    description: "Affordable semi-classic watch for daily use.",
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
                    className="mask mask-star-2 bg-yellow-400"
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
