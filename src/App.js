import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Users from "./pages/Users";
import NewPlace from "./pages/NewPlace";
import UserPlaces from "./pages/UserPlaces";
import Navigation from "./components/Navigation/Navigation";
import UpdatePlace from "./pages/UpdatePlace";
const App = () => {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <main>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/places/new" element={<NewPlace></NewPlace>}></Route>
          <Route
            path="/:userId/places"
            element={<UserPlaces></UserPlaces>}
          ></Route>
          <Route
            path="/places/:placeId"
            element={<UpdatePlace></UpdatePlace>}
          ></Route>
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
