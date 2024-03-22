import React, { useContext, useState, useMemo, useCallback } from "react";
import { CountryContext } from "../context/CountryContext";
import CountryCard from "../components/CountryCard";
import ScrollToTop from "../components/ScrollToTop";
// import { useDebounce } from "../hooks/useDebounce";

const CountryPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [countryRegion, setCountryRegion] = useState("");

  const { countryData, darkMode, error, loader } = useContext(CountryContext);

  const filterData = useCallback((countries, input, region) => {
    return countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(input.toLowerCase()) &&
        country.region.toLowerCase().includes(region.toLowerCase())
    );
  }, []);

  const filteredCountries = useMemo(() => {
    return filterData(countryData, inputValue, countryRegion);
  }, [countryData, inputValue, filterData, countryRegion]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDropDownChange = (e) => {
    console.log(e.target.value);
    setCountryRegion(e.target.value);
  };

  return (
    <>
      <ScrollToTop />
      {loader ? (
        <p className="text-center mt-5 font-bold text-2xl">Loading....</p>
      ) : (
        <section className={`my-32`}>
          <div className="flex max-w-full lg:flex-row flex-col-reverse w-auto  my-10 gap-6 lg:gap-52 mx-10 lg:justify-around  lg:items-center text-center">
            <select
              onChange={handleDropDownChange}
              className={`px-5 py-3 rounded ${
                darkMode ? "bg-[#2b3945]" : "bg-[#f4f4f4]"
              }`}
            >
              <option value=""> All</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <button>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-zinc-100 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="search"
                  value={inputValue}
                  onChange={handleChange}
                  placeholder="Search for a country"
                  className={`w-full py-4 rounded  pl-12 pr-10  outline-none ${
                    darkMode ? "bg-[#2b3945]" : "bg-[#f4f4f4]"
                  } `}
                />
              </div>
            </button>
          </div>

          <div className="flex justify-center items-center text-center pt-10">
            <div className="grid px-10 lg:max-w-6xl mx-auto itemc  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-10">
              {filteredCountries.length === 0 && (
                <p className="text-xl text-center">No countries found....</p>
              )}
              {filteredCountries?.map((country) => (
                <CountryCard
                  key={country?.cca3}
                  name={country?.name.common}
                  imgUrl={country?.flags.svg}
                  population={country?.population}
                  capital={country?.capital?.[0]}
                  region={country?.region}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CountryPage;
