import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { loadFromLocal, saveToLocal } from "./utils/localStorage";
import PlacesPage from "./pages/PlacesPage/PlacesPage";
import Home from "./pages/HomePage/Home";
import locations from "./data.json";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

export default function App() {
  const [places, setPlaces] = useState(loadFromLocal("places") ?? locations);
  const favorites = places.filter((place) => place.isFavorite);

  useEffect(() => {
    saveToLocal("places", locations);
  }, [places]);

  return (
    <AppContainer>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/PlacesPage">
          <PlacesPage
            places={places}
            handleToggleIsFavorite={handleToggleIsFavorite}
          />
        </Route>
        <Route path="/FavoritesPage">
          <FavoritesPage
            favorites={favorites}
            handleToggleIsFavorite={handleToggleIsFavorite}
          />
        </Route>
      </Switch>
      <Navbar />
    </AppContainer>
  );

  function handleToggleIsFavorite(id) {
    const index = places.findIndex((place) => place.id === id);
    const favorites = places[index];
    console.log(favorites);
    setPlaces([
      ...places.slice(0, index),
      { ...favorites, isFavorite: !favorites.isFavorite },
      ...places.slice(index + 1),
    ]);
  }
}

const AppContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: auto min-content;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  gap: 20px;
`;
