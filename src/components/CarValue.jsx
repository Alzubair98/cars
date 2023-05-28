import { useSelector } from "react-redux";

const CarValue = () => {
  const cost = useSelector(({ cars: { cars, searchTerm } }) => {
    return cars
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0);
  });

  return <div className="car-value">Total Cost : ${cost}</div>;
};

export default CarValue;
