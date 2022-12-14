import { useState } from "react";
import Image from "next/image";
import {
  Bars3Icon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({placeholder}) => {

    const router = useRouter()
  const [searchInput, setsearchInput] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [noofGuests, setnoofGuests] = useState(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setsearchInput('')
  }

  const search = () => {
    router.push({
        pathname: '/search',
        query: {
            location: searchInput,
            startDate: startDate.toString(),
            endDate: endDate.toString(),
            noofGuests
        },
    });
  };

  const handleSelect = (ranges) => {
    setstartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div onClick={() => router.push('/')} className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setsearchInput(e.target.value)}
          type="text"
          className="pl-5 bg-transparent outline-none flex-grow tet-sm text-gray-600 placeholder-gray-400"
          placeholder={placeholder || 'Start your search'}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hover:bg-gray-300 rounded-full py-2 px-2 hidden md:inline cursor-pointer text-black font-semibold">
          Airbnb your home
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer hover:bg-gray-300 rounded-full m-2" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full md:hover:shadow-md cursor-pointer">
          <Bars3Icon className="h-7" />
          <UserCircleIcon className="h-7" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-7">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-3 pb-3">
            <h2 className="text-2xl pl-2 flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noofGuests}
              onChange={(e) => setnoofGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400 border-2"
            />
          </div>
          <div className="flex">
                <button onClick={resetInput} className="flex-grow text-gray-500">
                    Cancel
                </button>
                <button onClick={search} className="flex-grow text-red-400">
                    Search
                </button>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;
