import PropTypes from "prop-types";
import Card from "./../../components/Card/Card";
import locations from "./../../data.json";
import styled from "styled-components/macro";
import Header from "./../../components/Header/Header";
import Button from "./../../components/Button/Button";

PlacesPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default function PlacesPage({ onNavigate }) {
  return (
    <Wrapper>
      <Header>Travel the Balkans!</Header>
      <ListWrapper>
        {locations.places.map(({ id, image, title, text }) => {
          return <Card key={id} images={image} title={title} text={text} />;
        })}
      </ListWrapper>
      <Button onClick={onNavigate}>Favorites</Button>
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
const ListWrapper = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 10px;
  padding: 5px;
`;
