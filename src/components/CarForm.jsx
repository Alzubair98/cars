import { useSelector, useDispatch } from "react-redux";
import { changeCost, changeName } from "../store";

const CarForm = () => {
  const state = useSelector((state) => {
    return state.form;
  });

  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Var</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label>Name</label>
            <input
              className="input is-exapnded"
              value={state.name}
              onChange={handleNameChange}
            />
            <label>Car Cost</label>
            <input
              className="input is-expanded"
              value={state.cost}
              onChange={(e) => {
                dispatch(changeCost(e.target.value));
              }}
            />
            <button>submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
