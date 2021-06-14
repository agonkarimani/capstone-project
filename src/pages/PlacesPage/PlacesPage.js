import PropTypes from "prop-types";
import Card from "./../../components/Card/Card";
import locations from "./../../data.json";
import styled from "styled-components/macro";
import Header from "../../components/Header/Header";

PlacesPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default function PlacesPage({ onNavigate }) {
  return (
    <>
      <Wrapper>
        <Header>Travel the Balkans!</Header>
        <ListWrapper>
          {locations.places.map(({ id, image, title, text, label }) => {
            return (
              <Card
                key={id}
                image={image}
                title={title}
                text={text}
                label={label}
              />
            );
          })}
        </ListWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px;
  place-items: center;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-space-evenly;
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 30px;
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
`;
