import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Header from "./../../components/Header/Header";
import Button from "./../../components/Button/Button";

FavoritesPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default function FavoritesPage({ onNavigate }) {
  return (
    <Wrapper>
      <Header>Favorites</Header>

      <Button onClick={onNavigate}>Places</Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
