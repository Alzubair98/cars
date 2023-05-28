import { changeSearchTerm } from "../store/index";
import { useDispatch, useSelector } from "react-redux";

const CarSearch = () => {
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const dispatch = useDispatch();

  console.log("search term", searchTerm);

  const handleSearchTermChange = (e) => {
    e.preventDefault();
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <form>
          <label>Search</label>
          <input
            className="input"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </form>
      </div>
    </div>
  );
};

export default CarSearch;
