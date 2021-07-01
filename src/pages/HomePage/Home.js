import React from "react";
import styled from "styled-components/macro";

function HeroSection() {
  return (
    <>
      <Wrapper>
        <video src="../../Assets/Albaniadrone.mp4" autoPlay loop muted />
        <Header>BALKAN AWAITS</Header>
        <Text>What are you waiting for?</Text>
      </Wrapper>
    </>
  );
}

export default HeroSection;

const Wrapper = styled.div`
  background-color: transparent;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  video {
    object-fit: cover;
    width: 100%;
    height: 900px;
    position: fixed;
    z-index: -1;
  }
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    margin-top: -150px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    margin-top: -100px;
  }
`;

const Header = styled.h1`
  color: white;
  font-size: 100px;
  margin-top: -100px;
  @media screen and (max-width: 960px) {
    font-size: 35px;
  }
`;

const Text = styled.p`
  margin-top: 8px;
  color: white;
  font-size: 32px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
