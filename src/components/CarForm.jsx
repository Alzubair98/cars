import { useSelector, useDispatch } from "react-redux";
import { changeCost, changeName } from "../store";

const CarForm = () => {
  const { name, cost } = useSelector((state) => {
    return { name: state.form.name, cost: state.form.cost };
  });

  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeName(carCost));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-exapnded"
              value={name}
              onChange={handleNameChange}
            />
            <label className="label">Car Cost</label>
            <input
              className="input is-expanded"
              value={cost}
              onChange={(e) => {
                dispatch(changeCost(e.target.value));
              }}
              type="number"
            />
            <button>submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
