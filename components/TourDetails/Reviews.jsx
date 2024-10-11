import { FaStar } from "react-icons/fa";

const Reviews = ({ stars, reviews }) => (
  <>
    <h2 className="mb-2 font-bold mt-10 text-3xl">Reviews</h2>
    <div className="bg-bgCard border border-border mt-5 p-16 rounded-3xl text-center">
      <h2 className="text-3xl font-bold text-[#3B71FE] flex items-center justify-center gap-2">
        <FaStar className="text-yellow-400 w-6 h-6" />
        { stars }/5
      </h2>
      <h4 className="my-2 font-bold text-2xl">Excellent</h4>
      <p className="text-link">({ reviews } reviews)</p>
    </div>
  </>
);

export default Reviews;