import { SlTag } from "react-icons/sl";

const Languages = ({ languages }) => (
  <>
    <h2 className="mb-2 font-bold mt-8 text-3xl">Languages</h2>
    <ul className="mb-4 mt-8 grid grid-cols-2 md:grid-cols-3">
      { languages.map((language, index) => (
        <li key={ index } className="flex items-start mb-5">
          <SlTag className="mt-0.5 mr-3 w-5 h-5" />
          <span>{ language }</span>
        </li>
      )) }
    </ul>
  </>
);

export default Languages;