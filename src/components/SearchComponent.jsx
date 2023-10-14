import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchComponent = () => {
  const [searchInput, setSearchInput] = useState("");
  const [originalSearchResults, setOriginalSearchResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("/CA.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setOriginalSearchResults(data);
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchInput = (event) => {
    const input = event.target.value;
    setSearchInput(input);
    if (input.length > 0) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const handleSearch = () => {
    const results = originalSearchResults.filter((result) =>
      result.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between ml-10 mt-20">
      <div className="w-full md:w-6/12 relative">
        <div className="text-6xl font-bold mb-4">
          Find{" "}
          <b className="bg-gradient-to-r from-blue-500 via-purple-700 to-blue-500 text-transparent bg-clip-text">
            Partners
          </b>{" "}
          (CAs) <br />
          available Online
        </div>
        <p className="text-sm font-open-sans font-semibold text-20 leading-30 tracking-normal text-left text-gray-500">
          <b>CONNECT</b> with us where your services are listed and visible to a
          myriad <br />
          of businesses seeking CA’s for compliance support
        </p>
        <input
          type="text"
          placeholder="Search by name"
          className="w-full md:w-80 pl-5 h-14 mt-10 border-solid font-semibold rounded-lg border-l border-b border-t border-black border-opacity-50"
          value={searchInput}
          onChange={handleSearchInput}
        />
        <button
          className="w-full md:w-40 h-14 bg-blue-600 text-white font-semibold rounded-lg mt-3 md:mt-0"
          onClick={handleSearch}
        >
          Search
        </button>
        {showResults && (
          <div className="absolute w-full md:w-80 mt-1 max-h-48 overflow-y-auto bg-white border rounded-lg border-gray-300 shadow-lg md:left-0">
            {searchResults.map((ca) => (
              <Link to={`/ca-details/${ca.name}`} key={ca.id}>
                <div className="flex flex-col items-center p-3 cursor-pointer">
                  <img src={ca.image} alt={ca.name} className="w-16 h-16 rounded-full" />
                  <h3 className="text-lg font-semibold mt-2">{ca.name}</h3>
                  <p className="text-sm text-gray-500">{ca.intro}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="hidden md:flex w-5/12 h-180 overflow-x-hidden">
        <div className="flex gap-4">
          <div className="w-2/5 h-100 border rounded-lg">
            <img src="/assets/Picture1.png" alt="Frame 1" className="w-full h-full rounded-lg" />
          </div>
          <div className="w-2/5 h-100 border rounded-lg">
            <img src="/assets/Picture2.png" alt="Frame 2" className="w-full h-full rounded-lg" />
          </div>
          <div className="w-2/5 h-100 border rounded-lg">
            <img src="/assets/Picture3.png" alt="Frame 3" className="w-full h-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
