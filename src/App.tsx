import AddToDo from "./components/AddToDo";
import { NavBar } from "./components/NavBar";
import { NewTodo } from "./components/NewTodo";
import React from "react";

export default function App() {
  return (
    <main>
      <NavBar/>
      <AddToDo />
      <NewTodo />
    </main>
  )
}
