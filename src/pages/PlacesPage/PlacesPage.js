import Card from "./../../components/Card/Card";
import styled from "styled-components/macro";
import Header from "../../components/Header/Header";

export default function PlacesPage({ places, handleToggleIsFavorite }) {
  console.log(places);
  return (
    <>
      <Wrapper>
        <Header>Travel the Balkans!</Header>
        <ListWrapper>
          {places?.map(({ id, image, title, text, label, isFavorite }) => {
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
