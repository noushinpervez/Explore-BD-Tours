const Book = ({tour}) => {
  return (
    <div className="ml-6">
      <div className="rounded-3xl p-8 shadow-lg lg:p-6 sticky">
        <form action="#" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="name">Name</label>
              <input
                className="w-full rounded-lg border border-border focus:border-[#8ed1fc] p-3 text-sm"
                placeholder="Your Name*"
                type="text"
                id="name"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border border-border focus:border-[#8ed1fc] p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="email">Email</label>
            <input
              className="w-full rounded-lg border border-border focus:border-[#8ed1fc] p-3 text-sm"
              placeholder="Your Email*"
              type="email"
              id="email"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="people">People</label>
              <input
                className="w-full rounded-lg border border-border focus:border-[#8ed1fc] p-3 text-sm"
                placeholder="People"
                type="number"
                id="people"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="country">Country of Resident</label>
              <input
                className="w-full rounded-lg border border-border focus:border-[#8ed1fc] p-3 text-sm"
                placeholder="Country of Resident"
                type="text"
                id="country"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border border-border focus:border-[#8ed1fc] p-3 text-sm"
              placeholder="Message"
              rows="3"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-full bg-primary px-5 py-3 font-medium text-white"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;