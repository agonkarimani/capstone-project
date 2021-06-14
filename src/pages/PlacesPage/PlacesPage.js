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
    <>
      <Wrapper>
        <CardWrapper>
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
          <Button onClick={onNavigate}>Favorites</Button>
        </CardWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  padding: 4rem;
  background: #fff;
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`;
const CardWrapper = styled.div`
  position: relative;
  margin: 50px 0 45px;
`;

const ListWrapper = styled.ul`
  margin-bottom: 24px;
`;
