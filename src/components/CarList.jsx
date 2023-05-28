import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const cars = useSelector(({ cars: { cars, searchTerm } }) => {
    return cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
                dispatch(removeCar(car));
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
