import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCars,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";
import { changeCost, changeName, formReducer } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, addCars, removeCar, changeSearchTerm, changeCost, changeName };
