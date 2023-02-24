import SearchBox from "../components/SearchBox";
import CountryCards from "../components/CountryCards";
import { useState, useEffect } from "react";
import axios from "axios";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const getCountries = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setData(response);
    });
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      getCountries();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  console.log(data, "data");
  const handleOnChange = (value) => {
    setLoading(true);
    if (value === "all") {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    } else {
      axios
        .get(`https://restcountries.com/v3.1/region/${value}`)
        .then((res) => {
          setData(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    }
  };

  const handleInput = (value) => {
    setQuery(value);
  };

  return (
    <div className="pt-28">
      <SearchBox handleOnChange={handleOnChange} handleInput={handleInput} />
      <CountryCards
        setData={setData}
        data={data}
        status={data?.status}
        // isFetchedAfterMount={isFetchedAfterMount}
        loading={loading}
        query={query}
      />
    </div>
  );
};

export default Home;
