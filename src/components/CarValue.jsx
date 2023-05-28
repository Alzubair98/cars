import { useSelector } from "react-redux";

const CarValue = () => {
  const cost = useSelector(({ cars: { cars, searchTerm } }) => {
    const filterdCars = cars.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return filterdCars.reduce((acc, car) => {
      return acc + car.cost;
    }, 0);
  });

  return <div className="car-value">Total Cost : ${cost}</div>;
};

export default CarValue;
