import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CountryContext } from "../context/CountryContext";
import { FaArrowLeft } from "react-icons/fa";

const SingleCountry = () => {
  const [country, setCountry] = useState([]);
  const [countryBorders, setCountryBorders] = useState([]);

  const { name } = useParams();

  const getCountryByName = async () => {
    try {
      const resp = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      );
      const data = await resp.json();
      setCountry(data);
      setCountryBorders(data[0]?.borders);
      console.log(data[0]?.borders);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountryByName();
  }, []);

  return (
    <section className="container max-w-7xl mx-auto my-20 px-10">
      <Link to={`/`}>
        <button
          style={{
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
          }}
          className={` flex  justify-center items-center gap-3 rounded text-sm my-10 py-3 px-7 `}
        >
          <FaArrowLeft /> Back
        </button>
      </Link>
      <div className=" grid grid-cols-1 place-items-start lg:grid-cols-2 gap-10 ">
        <div className="">
          <img
            src={country[0]?.flags?.svg}
            alt={country[0]?.name?.common}
            className="w-full h-auto object-cover mb-6 rounded-lg"
          />
        </div>

        <div className="flex justify-center items-start flex-col lg:text-xl">
          <h1 className="text-xl font-semibold">{name}</h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5  mt-10">
            <div className="flex gap-2">
              <h1 className="font-semibold">Native:</h1>
              <span className="flex gap-1">
                {Object.values(country[0]?.name.nativeName || {}).map(
                  (item) => (
                    <p className="" key={item.common}>
                      {item.common + ","}
                    </p>
                  )
                )}
              </span>
            </div>
            <div className="">
              <div className="flex gap-2">
                <h1 className="font-semibold">Population:</h1>
                <span>{country[0]?.population}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <h1 className="font-semibold">Region:</h1>
              <span>{country[0]?.region}</span>
            </div>
            <div className="flex gap-2">
              <h1 className="font-semibold">Sub Region:</h1>
              <span>{country[0]?.subregion}</span>
            </div>
            <div className="flex gap-2">
              <h1 className="font-semibold">Capital:</h1>
              <span>{country[0]?.capital}</span>
            </div>
          </div>
          <div className="grid lg:grid-cols-1 grid-cols-1 gap-4 mt-10">
            <div className="flex ">
              <h1 className="font-semibold">Top Level Domain:</h1>{" "}
              <span className="ml-2">{country[0]?.tld[0]}</span>
            </div>
            <div className="flex gap-2">
              <h1 className="font-semibold">Languages:</h1>{" "}
              <span>
                {country[0]?.languages.eng} , {country[0]?.languages.hin}
              </span>
            </div>
            <div className="flex gap-2">
              <h1 className="font-semibold">Currencies:</h1>{" "}
              <span className="">
                {Object.entries(country[0]?.currencies || {}).map(
                  ([code, currency]) => (
                    <div key={code} className="flex">
                      <h3>
                        {currency.name}
                        {`(${currency.symbol})`}
                      </h3>
                    </div>
                  )
                )}
              </span>
            </div>
            <div className="flex gap-2">
              <h1 className="font-semibold">Region:</h1>
              <span>{country[0]?.region}</span>
            </div>
            <div className="flex  gap-2">
              <h1 className="font-semibold ">Borders:</h1>
              {!countryBorders && <p className="font-light">No Borders..</p>}
              {countryBorders?.map((item) => (
                <li
                  style={{
                    backgroundColor: "var(--bg-color)",
                    color: "var(--text-color)",
                  }}
                  className="flex justify-center items-center px-2 border  "
                >
                  {item}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCountry;
