import { useSelector } from "react-redux";

const CarList = () => {
  const { cars } = useSelector((state) => {
    return { cars: state.cars.cars };
  });
  console.log(cars);
  return <div>CarList</div>;
};

export default CarList;
