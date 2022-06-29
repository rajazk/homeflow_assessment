import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import PropertyCard from "./components/propertyCard/PropertyCard";
import LoadingIndicator from "./components/loaders/LoadingIndicator";

function App() {
  const [searchedData, setSearchedData] = useState([]);
  const [properties, setProperties] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPropertyData = async () => {
      setIsLoading(true);
      const response = await fetch("/property-data.json");
      const json = await response.json();

      setProperties(json.result.properties.elements);
      setIsLoading(false);
    };

    fetchPropertyData();
  }, []);

  useEffect(() => {
    const res = properties.filter((item) =>
      item.short_description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedData(res);
  }, [query, properties]);

  const handleBookMark = (propertyId) => {
    const index = searchedData.findIndex(
      (property) => property.property_id === propertyId
    );

    const data = [...searchedData];
    data[index].save = !data[index].save;
    setSearchedData(data);
  };

  return (
    <div className="container mx-auto my-5">
      <Header query={query} setQuery={setQuery} />
      {isloading ? (
        <LoadingIndicator />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
          {searchedData.length ? (
            searchedData.map((property) => (
              <PropertyCard
                key={property.property_id}
                property={property}
                handleBookMark={handleBookMark}
              />
            ))
          ) : (
            <h2 className="title">No Record Found!!</h2>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
