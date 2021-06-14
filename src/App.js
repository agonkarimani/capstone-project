import styled from "styled-components";
import PlacesPage from "./pages/PlacesPage/PlacesPage";

export default function App() {
  return (
    <AppGrid>
      <PlacesPage />
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
