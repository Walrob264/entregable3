import "./styles/locationInfo.css";

const LocationInfo = ({ location }) => {
  return (
    <article className="location__info">
      <ul className="Location__info-detail">
        <li className="location__li">
          <span className="Info__detail__name">Name:</span>
          <span className="location__info-detail_name">{location?.name}</span>
        </li>
        <li className="location__li">
          <span className="Info__detail">Type:</span>
          <span className="location__info-detail">{location?.type}</span>
        </li>
        <li className="location__li">
          <span className="Info__detail">Dimension:</span>
          <span className="location__info-detail">{location?.dimension}</span>
        </li>
        <li className="location__li">
          <span className="Info__detail">Population:</span>
          <span className="location__info-detail">
            {location?.residents.length}
          </span>
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
