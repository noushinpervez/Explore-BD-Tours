import { FaRegCircle } from "react-icons/fa";

const Highlights = ({ highlights }) => (
  <>
    <h2 className="mb-2 font-bold mt-8 text-3xl uppercase">Highlights</h2>
    <ul className="text-link mb-4 mt-8 pl-5 text-sm">
      { highlights.map((highlight, index) => (
        <li key={ index } className="flex items-start mb-5">
          <FaRegCircle className="mt-1 mr-3 p-[2.5px] text-[#5191FA]" />
          <span>{ highlight }</span>
        </li>
      )) }
    </ul>
  </>
);

export default Highlights;