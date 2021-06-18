import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Heart from 'react-animated-heart'

Card.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.number,
  label: PropTypes.string,
}

export default function Card({ id, text, title, image, label }) {
  const [readMore, setReadMore] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <>
      <Wrapper>
        <ImageWrapper data-category={label}>
          <img alt="" src={image} />
        </ImageWrapper>
        <Header>{title}</Header>
        <Text>
          {readMore ? text : `${text.substring(0, 50)}...`}
          <DetailsButton onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'show more'}
          </DetailsButton>
        </Text>
        <FavButton>
          <Heart
            isClick={isFavorite}
            onClick={id => setIsFavorite(!isFavorite)}
          />
        </FavButton>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-flow: column;
  margin-right: auto;
  margin-left: auto;
  max-width: 350px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 12px darkgrey;
  text-decoration: none;
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-flow: column;
    max-width: 300px;
    height: auto;
    margin-right: auto;
    margin-left: auto;
    border-radius: 10px;
    box-shadow: 0 2px 12px darkgrey;
    text-decoration: none;
  }
`
const ImageWrapper = styled.figure`
  position: relative;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 10px;
  &::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: darkseagreen;
    box-sizing: border-box;
  }
  img {
    position: absolute;
    min-width: 350px;
    max-height: 350px;
    margin: 0;
    padding: 0%;
    object-fit: cover;
    display: block;
    position: relative;
  }
`
const Header = styled.h2`
  padding: 10px 15px 15px;
  color: darkseagreen;
  font-size: 25px;
`
const Text = styled.p`
  padding: 10px 15px 15px;
  color: black;
  font-size: 16px;
  line-height: 24px;
`

const DetailsButton = styled.button`
  background-color: white;
  border: none;
  color: #1f98f4;
  font-size: 13px;
`
const FavButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 10px;
`
