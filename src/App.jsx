import { useEffect, useState } from "react";
import "./App.css";
import getRandomNumber from "./utils/getRandomNumber";
import useFetch from "./hooks/useFetch";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import FormSearch from "./components/FormSearch";
import Loading from "./components/Loading";

function App() {
  const randomId = getRandomNumber(126);
  const [idLocation, setIdLocation] = useState(randomId);

  const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
  const [location, getApiLocation, hasError] = useFetch(url);
  useEffect(() => {
    getApiLocation();
  }, [idLocation]);

  return (
    <div className="app">
      <div className="header">
        <img
          className="RickYMorty__img"
          src="https://occ-0-33-448.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdlsO0LP022AtLRcPlik-5uWGqVS90oIr1Wy70ULe7-qyaW-Y3a9zUgndw6Q6KuHX2gH_Vd3Nxnl6EOU38_ep9ApNbNfn2Krr6hLj6fhs_eZ.png?r=976"
          alt="Rick y Morty"
        />
      </div>
      <FormSearch setIdLocation={setIdLocation} />
      {hasError ? (
        <h2 className="message__error">
          ✖️ Hey! you must provide an id from 1 to 126 😢
        </h2>
      ) : (
        <>
          {location ? <LocationInfo location={location} /> : <Loading />}{" "}
          <div className="resident-container">
            {location?.residents.map((url) => (
              <ResidentCard url={url} key={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
