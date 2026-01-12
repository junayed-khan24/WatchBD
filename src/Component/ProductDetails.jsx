import React from "react";
import { useParams, Link } from "react-router";

const products = [
  {
    id: "1",
    name: "Round Dial",
    image:"../../src/assets/watch.png",
    price: 400,
    rating: 4,
    description: "Classic round dial watch with premium finishing.",
  },
  {
    id: "2",
    name: "Golden Classical",
    image:"../../src/assets/watch.png",
    price: 400,
    rating: 5,
    description: "Luxury golden watch for elegant style.",
  },
  {
    id: "3",
    name: "Stainless Steel",
    image:"../../src/assets/watch.png",
    price: 500,
    rating: 5,
    description: "Strong stainless steel watch with modern design.",
  },
  {
    id: "4",
    name: "Romani Semi",
    image:"../../src/assets/watch.png",
    price: 200,
    rating: 4,
    description: "Affordable semi-classic watch for daily use.",
  },
  {
    id: "5",
    name: "Romani Semi",
    image:"../../src/assets/watch.png",
    price: 200,
    rating: 4,
    description: "Affordable semi-classic watch for daily use.",
  },{
    id: "6",
    name: "Romani Semi",
    image:"../../src/assets/watch.png",
    price: 200,
    rating: 4,
    description: "Affordable semi-classic watch for daily use.",
  },{
    id: "7",
    name: "Romani Semi",
    image:"../../src/assets/watch.png",
    price: 200,
    rating: 4,
    description: "Affordable semi-classic watch for daily use.",
  },{
    id: "8",
    name: "Romani Semi",
    image:"../../src/assets/watch.png",
    price: 200,
    rating: 4,
    description: "Affordable semi-classic watch for daily use.",
  },
];

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <Link to="/" className="text-red-500 mb-6 inline-block">
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="bg-base-100 shadow-md rounded-lg p-6 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-80 object-contain"
          />
        </div>

        {/* Info */}
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>

          {/* Rating */}
          <div className="rating rating-md mt-2">
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

          <p className="text-2xl font-semibold mt-4">
            ${product.price}
          </p>

          <p className="mt-4 text-gray-600">
            {product.description}
          </p>

          <button className="btn btn-error mt-6 text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
