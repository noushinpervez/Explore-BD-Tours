import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaHeart, FaStar, FaRegStar, FaUserCircle } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

const TourCard = ({ tour }) => {
  // Render stars based on the rating and handle reviews display
  const renderStars = () => {
    const totalStars = 5;
    const filledStars = Math.round(tour.stars); // Rounds the rating to the nearest integer

    // If there are no reviews, show "No reviews"
    if (tour.reviews === 0) {
      return <p className="mt-5 mb-2 text-link">No reviews</p>;
    }

    // Render stars if there are reviews
    return (
      <div className="flex items-center text-link mt-5 mb-2">
        { Array.from({ length: totalStars }, (_, index) => (
          <span className="text-yellow-400" key={ index }>
            { index < filledStars ? (
              <FaStar size={ 16 } />
            ) : (
              <FaRegStar size={ 16 } />
            ) }
          </span>
        )) }
        <span className="mx-1.5 text-border">{ "•" }</span>
        { tour.reviews } Reviews
      </div>
    );
  };

  return (
    <div className="rounded-lg border border-border overflow-hidden relative">
      {/* Heart Icon */ }
      <div className="absolute top-5 right-3 z-10 text-bgColor">
        <FaHeart size={ 24 } />
      </div>

      {/* Image */ }
      <Link href={ `/tours/${tour.name}` }>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={ tour.images[0] }
            alt={ tour.name }
            sizes="100vw"
            width={ 0 }
            height={ 0 }
            className="h-full w-full object-cover hover:scale-105 transition-all duration-300 rounded-lg"
          />
        </div>
      </Link>

      {/* User */ }
      <div className="absolute top-44 right-4 z-50 bg-border rounded-full">
        <FaUserCircle className="text-border bg-bgColor rounded-full" size={ 35 } />
      </div>

      {/* Content section */ }
      <div className="px-4 mt-6">
        {/* Tour name */ }
        <Link href={ `/tours/${tour.name}` }>
          <h3 className="font-medium mb-0.5 transition-all duration-150 hover:text-primary">
            { tour.name }
          </h3>
        </Link>

        {/* Render stars or "No reviews" */ }
        { renderStars() }

        {/* Duration and Price section */ }
        <div className="flex items-center justify-between pb-4">
          <p className="flex items-center gap-1.5">
            <FaRegClock className="text-link" />
            <span>{ tour.duration }</span>
          </p>

          <div className="flex items-center gap-1.5">
            <BsLightningChargeFill className="text-yellow-400" />
            <span className="text-link">from </span>৳ { tour.price }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;