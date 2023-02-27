import SearchBox from "../components/SearchBox";
import CountryCards from "../components/CountryCards";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { getCountries, getRegion } from "../redux/actions/countries";

Enzyme.configure({ adapter: new Adapter() });

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const getCountriesData = async () => {
    try {
      const res = await dispatch(getCountries());
      res && setData(res.payload);
      res && setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getRegionData = async (value) => {
    try {
      const res = await dispatch(getRegion(value));
      res && setData(res.payload);
      res && setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      getCountriesData();
    }, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnChange = (value) => {
    setLoading(true);
    if (value === "all") {
      getCountriesData();
    } else {
      const timer = setTimeout(() => {
        getRegionData(value);
      }, 500);
      return () => clearTimeout(timer);
    }
  };

  const handleInput = (value) => {
    "input";
    setQuery(value);
  };

  return (
    <div className="pt-28">
      <SearchBox
        handleOnChange={handleOnChange}
        handleInput={handleInput}
      />
      <CountryCards
        setData={setData}
        data={data}
        status={data?.status}
        loading={loading}
        query={query}
      />
    </div>
  );
};

export default Home;
