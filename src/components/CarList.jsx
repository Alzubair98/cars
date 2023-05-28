import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const { cars, name } = useSelector(({ form, cars: { cars, searchTerm } }) => {
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const dispatch = useDispatch();

  return (
    <div className="car-list">
      {cars.map((car) => {
        // Decide if this car should be bold
        const bold =
          name && car.name.toLowerCase().includes(name.toLowerCase());

        return (
          <div key={car.id} className={`panel ${bold && "bold"}`}>
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
