import React, { useState } from "react";
import styled from "styled-components";

function CardItem(props) {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <Card>
        <CardWrapper>
          <CardImageWrapper data-category={props.label}>
            <CardImage alt="Travel Image" src={props.src} />
          </CardImageWrapper>
          <CardInfo>
            <CardHeader className="cards__item__header">
              {props.header}
            </CardHeader>
            <CardText className="cards__item__text">
              {readMore ? props.text : `${props.text.substring(0, 50)}...`}
              <ShowText onClick={() => setReadMore(!readMore)}>
                {readMore ? "show less" : "show more"}
              </ShowText>
            </CardText>
          </CardInfo>
        </CardWrapper>
      </Card>
    </>
  );
}

const Card = styled.section`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`;

const CardImageWrapper = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;
  &::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
    box-sizing: border-box;
  }
`;

const CardImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
`;

const CardInfo = styled.div`
  padding: 20px 30px 30px;
`;

const CardText = styled.p`
  color: black;
  font-size: 12px;
  line-height: 24px;
`;

const ShowText = styled.button`
  background-color: #fff;
  border: none;
  color: #1f98f4;
  font-size: 10px;
`;

const CardHeader = styled.h2`
  color: rgb(0, 0, 83);
  font-size: 18px;
`;

export default CardItem;
