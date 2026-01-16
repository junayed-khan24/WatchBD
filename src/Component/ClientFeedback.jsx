import React from "react";
import { FaStar } from "react-icons/fa";

const feedbacks = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Business Owner",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    message:
      "Amazing quality watches! The design is premium and delivery was super fast. Highly recommended.",
  },
  {
    id: 2,
    name: "Sophia Lee",
    role: "Fashion Blogger",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 4,
    message:
      "I love the elegant design. Perfect for both casual and formal outfits. Worth the price.",
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Entrepreneur",
    image: "https://i.pravatar.cc/150?img=56",
    rating: 5,
    message:
      "Excellent craftsmanship and premium feel. This is my second purchase and I’m impressed again.",
  },
  // {
  //   id: 4,
  //   name: "Sophia Lee",
  //   role: "Fashion Blogger",
  //   image: "https://i.pravatar.cc/150?img=32",
  //   rating: 4,
  //   message:
  //     "I love the elegant design. Perfect for both casual and formal outfits. Worth the price.",
  // },
  // {
  //   id: 5,
  //   name: "Michael Smith",
  //   role: "Entrepreneur",
  //   image: "https://i.pravatar.cc/150?img=56",
  //   rating: 5,
  //   message:
  //     "Excellent craftsmanship and premium feel. This is my second purchase and I’m impressed again.",
  // },
  // {
  //   id: 6,
  //   name: "Sophia Lee",
  //   role: "Fashion Blogger",
  //   image: "https://i.pravatar.cc/150?img=32",
  //   rating: 4,
  //   message:
  //     "I love the elegant design. Perfect for both casual and formal outfits. Worth the price.",
  // },
  // {
  //   id: 7 ,
  //   name: "Michael Smith",
  //   role: "Entrepreneur",
  //   image: "https://i.pravatar.cc/150?img=56",
  //   rating: 5,
  //   message:
  //     "Excellent craftsmanship and premium feel. This is my second purchase and I’m impressed again.",
  // },{
  //   id: 8,
  //   name: "Sophia Lee",
  //   role: "Fashion Blogger",
  //   image: "https://i.pravatar.cc/150?img=32",
  //   rating: 4,
  //   message:
  //     "I love the elegant design. Perfect for both casual and formal outfits. Worth the price.",
  // },
  // {
  //   id: 9,
  //   name: "Michael Smith",
  //   role: "Entrepreneur",
  //   image: "https://i.pravatar.cc/150?img=56",
  //   rating: 5,
  //   message:
  //     "Excellent craftsmanship and premium feel. This is my second purchase and I’m impressed again.",
  // },
];

const ClientFeedback = () => {

    

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600">
            Trusted by customers worldwide for quality, style, and reliability.
          </p>
        </div>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-600 text-sm leading-relaxed">
                “{item.message}”
              </p>

              {/* Client */}
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <span className="text-xs text-gray-500">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
