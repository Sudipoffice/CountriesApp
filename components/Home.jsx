import { useState } from "react";
import SearchnSortBar from "../components/SearchnSortBar";
import CountriesList from "../components/CountriesList";

const Home = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");
  const [sortBy, setSortBy] = useState("All");
  return (
    <div className="bg-white dark:bg-gray-700 h-screen">
      <SearchnSortBar setSortBy={setSortBy} setRegion={setRegion} setQuery={setQuery} />
      <CountriesList sortBy={sortBy} region={region} query={query}  />
    </div>
  );
};

export default Home;
