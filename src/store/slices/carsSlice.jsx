import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },

  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCars(state, action) {
      // Assumption: , action.payload === {name: 'ab', cost:140}
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },

    removeCar(state, action) {
      // Assumption:
      // action.payload == the id of the car we want to remove

      const index = state.cars.indexOf(action.payload);

      state.cars.splice(index, 1);

      // const updated = state.cars.filter((car) => {
      //   action.payload !== car.id;
      // });

      // console.log(updated);

      // state.cars = updated;
    },
  },
});

export const { addCars, removeCar, changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
