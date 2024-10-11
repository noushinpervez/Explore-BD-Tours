import { FaRegHeart, FaStar } from "react-icons/fa";

const TourBook = ({ tour }) => {
  return (
    <div className="lg:ml-6 h-full">
      <div className="rounded-3xl p-4 shadow-md md:p-6 border-border border w-full">

        {/* Price and Rating Section */ }
        <div className="text-link text-sm flex justify-between items-center mb-8">
          <p>
            From: <span className="font-bold text-lg text-foreground">৳ { tour.price }</span>
          </p>
          <p className="flex items-center gap-1.5">
            <FaStar className="text-yellow-400" />
            <span className="font-bold text-lg text-foreground">{ tour.stars }</span>
            <span className="text-base">({ tour.reviews }) reviews</span>
          </p>
        </div>

        {/* Booking Form */ }
        <form action="#" className="space-y-4">

          {/* Name and Phone Input */ }
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="name">Name</label>
              <input
                className="w-full rounded-lg border border-border focus:border-[#8ed1fc] p-3.5"
                placeholder="Your Name*"
                type="text"
                id="name"
                required
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border border-border focus:border-[#8ed1fc] p-3.5"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          {/* Email Input */ }
          <div>
            <label className="sr-only" htmlFor="email">Email</label>
            <input
              className="w-full rounded-lg border border-border focus:border-[#8ed1fc] focus:outline-none p-3.5"
              placeholder="Your Email*"
              type="email"
              id="email"
              required
            />
          </div>

          {/* People and Country Input */ }
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="people">People</label>
              <input
                className="w-full rounded-lg border border-border focus:border-[#8ed1fc] focus:outline-none p-3.5"
                placeholder="People"
                type="number"
                id="people"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="country">Country of Resident</label>
              <input
                className="w-full rounded-lg border border-border focus:border-[#8ed1fc] focus:outline-none p-3.5"
                placeholder="Country of Resident"
                type="text"
                id="country"
              />
            </div>
          </div>

          {/* Message Input */ }
          <div>
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea
              className="w-full rounded-lg border border-border focus:border-[#8ed1fc] focus:outline-none p-3.5"
              placeholder="Message"
              rows="3"
              id="message"
            ></textarea>
          </div>

          {/* Submit Button */ }
          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-full bg-primary px-5 py-3 font-medium text-white hover:bg-primary-dark"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TourBook;