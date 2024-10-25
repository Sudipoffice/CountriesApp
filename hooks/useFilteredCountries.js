import { useMemo } from "react"


export default function useFilteredCountries(countriesData, query, region, sortBy ){
const filteredCountries  = useMemo(() => {
    let result = countriesData;

    if(query){
        result = result.filter((country) => country.name.common.toLowerCase().includes(query.toLowerCase()))
    }
    if(region){
        result  = result.filter((country) => {
            return region === "All" || country.region === region;
        })
    }

    if(sortBy === "Alphabet"){
        result = result.sort((a, b) => a.name.common.localeCompare(b.name.common))
      }
      else if(sortBy === "Population"){
        result = result.sort((a, b) => b.population - a.population)
      }
      else if (sortBy === "Area") {
        result = result.sort((a, b) => b.area - a.area);
      }

      return result;

},[countriesData, query, region, sortBy ])

return filteredCountries;
    
}