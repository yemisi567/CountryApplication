import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import CountryDetails from "../components/CountryDetails";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { getCountryBorders } from "../redux/actions/countries";

Enzyme.configure({ adapter: new Adapter() });

const BorderDetails = () => {
  const dispatch = useDispatch();
  const [lang, setLang] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState([]);
  const [nativeName, setNativeName] = useState([]);
  const [countryDetails, setCountryDetails] = useState([]);
  const { countryCode } = useParams();

  const getSpecificBorders = async () => {
    setLoading(true);
    try {
      const res = await dispatch(getCountryBorders(countryCode));
      setCountryDetails(res.payload.data[0]);
      setLang(Object.values(res.payload.data[0].languages));
      setCurrency(Object.values(res.payload.data[0].currencies));
      setNativeName(Object.values(res.payload.data[0].name.nativeName));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSpecificBorders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loading === true ? (
        <Loader />
      ) : (
        <div>
          <CountryDetails
            imgSrc={countryDetails?.flags?.png}
            imgAlt={countryDetails?.name?.common}
            countryName={countryDetails?.name?.common}
            nativeName={nativeName}
            population={countryDetails?.population}
            region={countryDetails?.region}
            subregion={countryDetails?.subregion}
            capital={countryDetails?.capital}
            tld={countryDetails?.tld}
            currency={currency}
            lang={lang}
            borders={countryDetails?.borders}
          />
        </div>
      )}
    </div>
  );
};

export default BorderDetails;
