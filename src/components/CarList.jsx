import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const cars = useSelector((state) => {
    return state.cars.cars;
  });

  const dispatch = useDispatch();

  return (
    <div className="car-list">
      {cars.map((car) => {
        return (
          <div key={car.id} className="panel">
            <p>
              {car.name} - ${car.cost}
            </p>
            <button
              className="button is-danger"
              onClick={() => {
                dispatch(removeCar(car.id));
              }}
            >
              Delete
            </button>
          </div>
        );
      })}{" "}
      <hr />
    </div>
  );
};

export default CarList;
