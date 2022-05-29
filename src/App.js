import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import { Route, Routes } from "react-router-dom";
import New from "./components/New";
import Update from "./components/Update";
import FavList from "./components/FavList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/new" element={<New />} />
        <Route path="/update" element={<Update />} />
        <Route path="/favlist" element={<FavList />} />
      </Routes>
    </>
  );
}

export default App;
