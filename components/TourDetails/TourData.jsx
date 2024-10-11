import { IoCheckmark, IoCloseOutline } from "react-icons/io5";

import TourMap from "./TourMap";
import TourInfo from "./TourInfo";
import AboutTour from "./AboutTour";
import Highlights from "./Highlights";
import Itinerary from "./Itinerary";
import Languages from "./Languages";
import Reviews from "./Reviews";

const TourData = ({ tour }) => {
  return (
    <div className="col-span-8 lg:mb-0 mb-16">
      {/* Tour Info */ }
      <TourInfo
        duration={ tour.duration }
        tourType={ tour.tourType }
        groupSize={ tour.groupSize }
        languages={ tour.languages }
      />

      <hr className="border-1 border-border my-10 w-full" />

      {/* About this Tour */ }
      <AboutTour aboutTour={ tour.aboutTour } />

      <Highlights highlights={ tour.highlights } />

      <hr className="border-1 border-border my-10 w-full" />

      {/* Included/Excluded */ }
      <h2 className="mb-2 font-bold mt-8 text-3xl">Included/Excluded</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ul className="text-link mb-4 mt-8">
          { tour.included.map((include, index) => (
            <li key={ index } className="flex items-start mb-5">
              <IoCheckmark className="mt-0.5 mr-3 w-5 h-5 p-1 bg-[#cef2e5] text-[#10ac58] rounded-full" />
              <span>{ include }</span>
            </li>
          )) }
        </ul>

        <ul className="text-link md:mt-8 my-4">
          { tour.excluded.map((exclude, index) => (
            <li key={ index } className="flex items-start mb-5">
              <IoCloseOutline className="mt-0.5 mr-3 w-5 h-5 p-1 bg-[#fad6d6] text-[#da3838] rounded-full" />
              <span>{ exclude }</span>
            </li>
          )) }
        </ul>
      </div>

      <hr className="border-1 border-border my-10 w-full" />

      {/* Itinerary */ }
      <Itinerary itinerary={ tour.itinerary } />

      <hr className="border-1 border-border mt-16 mb-10 w-full" />

      {/* Languages */ }
      <Languages languages={ tour.languages } />

      <hr className="border-1 border-border my-10 w-full" />

      {/* Location */ }
      <TourMap location={ tour.location } />

      {/* Reviews */ }
      <Reviews stars={ tour.stars } reviews={ tour.reviews } />
    </div>
  );
};

export default TourData;