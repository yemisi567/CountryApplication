import "../dist/output.css";
import { Icon } from "@iconify/react";

const SearchBox = ({ handleOnChange, handleInput }) => {
  return (
    <div className="md:flex justify-between md:pt-14 md:pb-10 md:gap-10 px-8 md:px-10 ">
      <div className="flex  rounded-md items-center lg:w-[45vw] gap-4 mt-10 mb-6 md:mt-0 md:mb-0 dark:bg-[#2b3945]  bg-white shadow-md w-full shadow-gray-100 dark:shadow-gray-800 px-6 py-4">
        <Icon
          icon="material-symbols:search-rounded"
          color="#CCCCCC"
          className="text-xl"
        />
        <input
          type="text"
          placeholder="Search for a country ..."
          className="text-sm outline-none w-full bg-transparent dark:text-white"
          onChange={(e) => handleInput(e.target.value)}
        />
      </div>
      <select
        name="countries"
        id="countries"
        data-testid="countries"
        className="p-4 flex justify-start text-md outline-none dark:bg-[#2b3945] dark:text-white"
        defaultValue="selected"
        onChange={(e) => handleOnChange(e.target.value)}
      >
        <option value="selected" disabled>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
        <option value="all">All</option>
      </select>
    </div>
  );
};

export default SearchBox;
