import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      name: "Ameya Potdar",
      age: 25,
      job: "Python Developer",
    },
    {
      id: 2,
      name: "Lionel Messi",
      age: 35,
      job: "React Developer",
    },
    {
      id: 3,
      name: "Cristiano  Ronaldo",
      age: 38,
      job: "MongoDB Developer",
    },
    {
      id: 4,
      name: "Marc Overmars",
      age: 50,
      job: "Devops Developer",
    },
    {
      id: 5,
      name: "Edgar Davids",
      age: 23,
      job: "Angular Developer",
    },
    {
      id: 6,
      name: "Clarence Seedorf",
      age: 56,
      job: "Vue Developer",
    },
    {
      id: 7,
      name: "Ronaldo Nazario",
      age: 45,
      job: "Java Developer",
    },
    {
      id: 8,
      name: "Rivaldo",
      age: 50,
      job: "C Developer",
    },
    {
      id: 9,
      name: "Lev Yashin",
      age: 80,
      job: "C++ Developer",
    },
    {
      id: 10,
      name: "Peter Schmeichel",
      age: 78,
      job: "Ruby Developer",
    },
    {
      id: 11,
      name: "Paolo Maldini",
      age: 67,
      job: "Node JS Developer",
    },
    {
      id: 12,
      name: "Franco Baresi",
      age: 70,
      job: "Next JS Developer",
    },
    {
      id: 13,
      name: "Allesandro Nesta",
      age: 67,
      job: "Nest JS Developer",
    },
    {
      id: 14,
      name: "Andrea Pirlo",
      age: 56,
      job: "Golang Developer",
    },
    {
      id: 15,
      name: "Marco Van Basten",
      age: 45,
      job: "C# Developer",
    },
    {
      id: 16,
      name: "Ruud Gullit",
      age: 46,
      job: "Machine Learning Developer",
    },
    {
      id: 17,
      name: "Diego Maradona",
      age: 58,
      job: "Deep Learning Developer",
    },
    {
      id: 18,
      name: "Garrincha",
      age: 39,
      job: "Data Scientist Developer",
    },
    {
      id: 19,
      name: "Heideki Tojou",
      age: 47,
      job: "Automation Developer",
    },
    {
      id: 20,
      name: "Vladmir Jugovic",
      age: 89,
      job: "Guitar Developer",
    },
    {
      id: 21,
      name: "Zvonimir Boban",
      age: 84,
      job: "Bank Developer",
    },
    {
      id: 22,
      name: "Dejan Savicevic",
      age: 75,
      job: "Food Developer",
    },
    {
      id: 23,
      name: "Zinedine Zidane",
      age: 25,
      job: "Business Developer",
    },
  ],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
});

export const selectTableData = (state) => state.table.data;

export default tableSlice.reducer;
