import React from "react";
import styled from "styled-components/macro";
import PlacesPage from "./pages/PlacesPage/PlacesPage";
/*import { Route, Switch } from "react-router-dom";*/

export default function App() {
  return (
    <AppContainer>
      <PlacesPage />
    </AppContainer>
  );
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
