/* eslint-disable array-callback-return */
import Loader from "./Loader";
import "../App.css";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const CountryCards = ({ loading, data, query }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div
            data-testid="query"
            className="grid pb-10 xl:grid-cols-4 md:grid-cols-2 px-8 justify-items-center dark:bg-[#1F2D36] bg-[#FAFAFA]"
          >
            {data?.data
              ?.filter((post) => {
                if (query === "") {
                  return post;
                } else if (
                  post.name.common.toLowerCase().includes(query.toLowerCase())
                ) {
                  return post;
                }
              })
              .sort((a, b) => (a.name.common < b.name.common ? -1 : 1))
              .map((data) => (
                <a
                  href={`/country/${data?.name?.common}`}
                  key={data?.name?.common}
                >
                  <div
                    data-testid="country"
                    className="bg-white border-[1px] dark:bg-[#2b3945] dark:text-white hover:rounded-none mt-10 w-100% md:w-30 cursor-pointer hover:scale-105 hover:shadow-xl lg:w-[60vw]"
                    key={data?.name?.common}
                  >
                    <div className=" h-[200px] xl:w-[300px] lg:w-[450px] md:w-[320px] w-[100%] ">
                      <img
                        src={data?.flags?.png}
                        alt={data?.name?.common}
                        className="hover:rounded-none h-full w-full"
                      />
                    </div>
                    <div className="text-left p-4" id="height">
                      <h3 className="font-extrabold text-xl my-2">
                        {data?.name?.common}
                      </h3>
                      <p className="font-semibold">
                        Population:{" "}
                        <span className="font-light">
                          {data?.population?.toLocaleString("en-US")}
                        </span>
                      </p>
                      <p className="font-semibold">
                        Region:{" "}
                        <span className="font-light">{data?.region}</span>
                      </p>
                      <p className="font-semibold">
                        Capital:{" "}
                        {data?.capital?.map((data) => (
                          <span className="font-light" key={data}>
                            {data}.{" "}
                          </span>
                        ))}
                        {!data?.capital && (
                          <span className="font-light">None.</span>
                        )}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CountryCards;
