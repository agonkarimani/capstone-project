import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";

FavoritesPage.propTypes = {
  history: PropTypes.func.isRequired,
  handleToggleIsFavorite: PropTypes.func,
};

export default function FavoritesPage({ favorites, handleToggleIsFavorite }) {
  let history = useHistory();

  return (
    <>
      <Wrapper>
        <Header>Your favorites</Header>
        <div>
          <BackButton onClick={() => history.goBack()}>&lt; back</BackButton>
        </div>
        <ListWrapper>
          {favorites.map(({ id, image, title, text, label, isFavorite }) => {
            return (
              <Card
                key={id}
                image={image}
                title={title}
                text={text}
                label={label}
                isFavorite={isFavorite}
                onToggleIsFavorite={() => handleToggleIsFavorite(id)}
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

const BackButton = styled.button`
  background-color: transparent;
  color: darkgreen;
  border: none;
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
