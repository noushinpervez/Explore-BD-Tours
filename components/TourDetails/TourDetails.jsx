import HeaderCarousel from "./HeaderCarousel";
import TourData from "./TourData";
import TourBook from "./TourBook";
import Breadcrumb from "./Breadcrumb";

import { PiShareFatLight, PiHeart } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

const TourDetails = ({ tour }) => {
  return (
    <section className="mb-24">
      {/* Breadcrumb */ }
      <Breadcrumb tour={ tour } />
      {/* Header Carousel for images */ }
      <HeaderCarousel images={ tour.images } />

      <div className="max-w-screen-xl mx-auto px-2">
        <div className="md:grid grid-cols-12 w-full mb-10">
          <div className="col-span-8 mb-6">
            {/* Tour Title */ }
            <h1 className="text-3xl font-bold mb-2">{ tour.name }</h1>

            {/* Tour Rating */ }
            <p className="flex items-center gap-1.5 text-link">
              <FaStar className="text-yellow-400" />
              <span className="font-bold text-foreground">{ tour.stars }</span>
              ({ tour.reviews } Reviews)
            </p>
          </div>

          {/* Icons */ }
          <div className="col-span-4 flex md:justify-end gap-4">
            <PiShareFatLight className="w-11 h-11 p-2.5 border border-border rounded-full shadow-md" />
            <PiHeart className="w-11 h-11 p-2.5 border border-border rounded-full shadow-md" />
          </div>
        </div>

        <div className="lg:grid grid-cols-12 w-full">
          {/* Tour Details */ }
          <TourData tour={ tour } />

          {/* Book Form */ }
          <aside className="space-y-8 col-span-4 lg:sticky lg:top-0 md:h-screen">
            <TourBook tour={ tour } />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default TourDetails;