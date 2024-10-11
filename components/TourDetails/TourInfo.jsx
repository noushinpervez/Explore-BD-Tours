import { FaRegClock } from "react-icons/fa";
import { PiFootprints } from "react-icons/pi";
import { HiOutlineUsers, HiLanguage } from "react-icons/hi2";

const TourInfo = ({ duration, tourType, groupSize, languages }) => (
  <div className="mb-8 text-link grid grid-cols-2 md:grid-cols-4 gap-3">
    {/* Duration */ }
    <div className="flex items-center gap-4">
      <FaRegClock className="border border-border rounded-xl p-3 w-12 h-12" />
      <div>
        <p className="font-bold text-foreground">Duration</p>
        <p>{ duration }</p>
      </div>
    </div>

    {/* Tour Type */ }
    <div className="flex items-center gap-4">
      <PiFootprints className="border border-border rounded-xl p-3 w-12 h-12" />
      <div>
        <p className="font-bold text-foreground">Tour Type</p>
        <p>{ tourType }</p>
      </div>
    </div>

    {/* Group Size */ }
    <div className="flex items-center gap-4">
      <HiOutlineUsers className="border border-border rounded-xl p-3 w-12 h-12" />
      <div>
        <p className="font-bold text-foreground">Group Size</p>
        <p>{ groupSize }</p>
      </div>
    </div>

    {/* Languages */ }
    <div className="flex items-center gap-4">
      <HiLanguage className="border border-border rounded-xl p-3 w-12 h-12" />
      <div>
        <p className="font-bold text-foreground">Languages</p>
        <p>{ languages.join(", ") }</p>
      </div>
    </div>
  </div>
);

export default TourInfo;