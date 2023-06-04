import { useRef } from "react";
import "./styles/formSearch.css";

const FormSearch = ({ setIdLocation }) => {
  const idLocationValue = useRef();

  const handleSumbit = (e) => {
    e.preventDefault();
    const inputValue = idLocationValue.current.value.trim();

    if (inputValue !== "") {
      setIdLocation(inputValue);
    }
  };
  return (
    <div className="form_Search">
      <form onSubmit={handleSumbit}>
        <input
          placeholder="Enter Id Location"
          type="text"
          ref={idLocationValue}
          className="form"
        />
        <button className="button__Search">Search</button>
      </form>
    </div>
  );
};

export default FormSearch;
