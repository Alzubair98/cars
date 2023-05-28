import { useSelector } from "react-redux";

const CarValue = () => {
  const cost = useSelector((state) => {
    return state.cars.cars.map((car) => {
      return car.cost;
    });
  });
  console.log(cost);
  const sum = cost.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <div>
      {" "}
      <h3>Total Value : ${sum}</h3>
    </div>
  );
};

export default CarValue;
