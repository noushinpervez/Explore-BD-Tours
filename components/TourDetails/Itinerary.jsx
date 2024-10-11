import { CiCirclePlus } from "react-icons/ci";
import { FaMinus } from "react-icons/fa6";

const Itinerary = ({ itinerary }) => (
  <>
    <h2 className="mb-2 font-bold mt-8 text-3xl">Itinerary</h2>
    <div className="mt-8">
      { itinerary.map((item, index) => (
        <details key={ index } className="bg-bgCard border border-border rounded-2xl p-4 group mb-3" open={ index === 0 }>
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="border border-border py-2 px-4 rounded-xl font-bold text-primary">Day { item.day }</h5>
            <span className="relative flex-shrink-0 ml-1.5 w-6 h-6 text-link">
              <CiCirclePlus className="absolute inset-0 w-6 h-6 opacity-100 group-open:opacity-0 transition-all duration-300 ease-in-out" />
              <FaMinus className="absolute inset-0 w-6 h-6 opacity-0 group-open:opacity-100 transition-all duration-300 ease-in-out p-2 bg-[#0c63e4] rounded-full text-bgColor" />
            </span>
          </summary>
          <p className="mt-8 leading-relaxed tracking-wide text-link">{ item.description }</p>
        </details>
      )) }
    </div>
  </>
);

export default Itinerary;