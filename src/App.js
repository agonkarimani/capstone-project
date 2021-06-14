import styled from "styled-components";
import { useState } from "react";
import Placespage from "./pages/PlacesPage/PlacesPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("PlacesPage");

  return (
    <AppGrid>
      {currentPage === "placesPage" && (
        <Placespage onNavigate={() => setCurrentPage("favoritesPage")} />
      )}

      {currentPage === "favoritesPage" && (
        <FavoritesPage onNavigate={() => setCurrentPage("PlacesPage")} />
      )}
    </AppGrid>
  );
}

const AppGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: auto min-content;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  gap: 20px;
`;
