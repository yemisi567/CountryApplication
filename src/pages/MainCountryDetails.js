import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import CountryDetails from "../components/CountryDetails";
import { useParams } from "react-router-dom";
import { getCountryDetails } from "../redux/actions/countries";
import { useDispatch } from "react-redux";

const MainCountryDetails = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [nativeName, setNativeName] = useState([]);
  const [countryDetails, setCountryDetails] = useState([]);

  const getSpecificDetails = async () => {
    try {
      const res = await dispatch(getCountryDetails(name));
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
    setLoading(true);
    const timer = setTimeout(() => {
      getSpecificDetails();
    }, 200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
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
    </>
  );
};

export default MainCountryDetails;
