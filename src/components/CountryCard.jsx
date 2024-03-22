import { useContext } from "react";
import { Link } from "react-router-dom";
import { CountryContext } from "../context/CountryContext";

const CountryCard = ({ imgUrl, name, population, capital, region }) => {
  const { darkMode } = useContext(CountryContext);
  return (
    <>
      <Link to={`/country/${name}`}>
        <div
          className={` ${
            darkMode ? "bg-[#2b3945]" : "bg-[#f4f4f4]"
          } pb-5 w-full h-full cursor-pointer hover:-translate-y-2 hover:transition hover:ease-out`}
        >
          <img
            src={imgUrl}
            alt={name}
            className="aspect-video object-cover object-center "
          />
          <div className="p-4">
            <h2 className="  font-bold mb-4 semibold  flex items-center">
              {name}
            </h2>
            <ul className="text-sm ">
              <li className="flex items-center font-bold  mb-1">
                Population :
                <span className="mx-2 font-normal">{population}</span>
              </li>
              <li className="flex items-center font-bold  mb-1">
                Capital:
                <span className="mx-2 font-normal">{capital}</span>
              </li>
              <li className="flex items-center  font-bold   mb-1 ">
                Region: <span className="mx-2 font-normal">{region}</span>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CountryCard;
