
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

interface Review {
  customer: string;
  comment: string;
  rating: number;
  date: string;
}

const ReviewsCard = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    setReviews([
      {
        customer: "Priya Sharma",
        comment: "Great work! Fixed the sink quickly and professionally.",
        rating: 5,
        date: "Jan 15, 2024",
      },
      {
        customer: "Amit Patel",
        comment: "Very professional during the bathroom renovation. Highly recommend.",
        rating: 4,
        date: "Jan 10, 2024",
      },
      {
        customer: "Sneha Gupta",
        comment: "Quick response for emergency repair. Saved the day!",
        rating: 5,
        date: "Jan 8, 2024",
      },
    ]);
  }, []);

  return (
    <div className="bg-white shadow rounded-2xl p-6">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900">Customer Reviews</h2>
      <p className="text-gray-500 text-sm mb-4">What your customers say</p>

      {/* Reviews List */}
      <div className="flex flex-col gap-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl px-4 py-3"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-gray-900">{review.customer}</h3>
              <span className="text-xs text-gray-500">{review.date}</span>
            </div>
            <p className="text-sm text-gray-700 mt-1">{review.comment}</p>
            
            {/* Rating Stars */}
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsCard;
