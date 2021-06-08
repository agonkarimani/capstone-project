import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import styled from "styled-components";

function Cards() {
  return (
    <CardsSection>
      <Header>Check out the most beautiful places of the Balkans!</Header>
      <CardsContainer>
        <CardsWrapper>
          <Card>
            <CardItem
              src="images/ksamil.jpg"
              text="Explore southern Albania and the amazing beach of Saranda!"
              label="Saranda"
              header="Saranda - South Albania"
            />
          </Card>
          <Card>
            <CardItem
              src="images/Dubrovnik.jpg"
              text="Travel to Dubrovnik and enjoy the picturesque old town!"
              label="Dubrovnik"
              header="Dubrovnik - The pearl of Croatia"
            />
          </Card>
          <Card>
            <CardItem
              src="images/theth.jpg"
              text="Theth the beautiful village in the Albanian Alps is an insiders' tip for hikers!"
              label="Theth"
              header="Theth - The Albanian Alps"
            />
          </Card>
          <Card>
            <CardItem
              src="images/plitvicer-seen.jpg"
              text="Plitvice Lakes National Park is one of the oldest and largest national parks of Croatia!"
              label="Plitvice"
              header="Plitvice - Croatias national park"
            />
          </Card>
          <Card>
            <CardItem
              src="images/kotor.jpg"
              text="Kotor is famous for its old town and its high population of cats!"
              label="Kotor"
              header="Kotor - The fjord of Montenegro"
            />
          </Card>
          <Card>
            <CardItem
              src="images/sarajevo.jpg"
              text="Sarajevo is also called the Jerusalem of Europe because of the diversity of the city!"
              label="Sarajevo"
              header="Sarajevo - Jerusalem of Europe"
            />
          </Card>
        </CardsWrapper>
      </CardsContainer>
    </CardsSection>
  );
}

const CardsSection = styled.section`
  padding: 4rem;
  background: #fff;
`;

const Header = styled.h1`
  text-align: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`;

const CardsWrapper = styled.div`
  position: relative;
  margin: 50px 0 45px;
`;

const Card = styled.div`
  margin-bottom: 40px;
`;

export default Cards;
