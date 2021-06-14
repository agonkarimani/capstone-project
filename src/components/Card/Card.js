import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default function Card({ text, title, image, label }) {
  const [readMore, setReadMore] = useState(false)
  return (
    <>
      <Wrapper>
        <div>
          <figure data-category={label}>
            <img alt="" src={image} />
          </figure>
          <h2>{title}</h2>
          <p>
            {readMore ? text : `${text.substring(0, 50)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : 'show more'}
            </button>
          </p>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;
  div {
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 6px 20px darkgrey;
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
  }
  figure {
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
  }
  img {
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
  }
  h2 {
    padding: 10px 10px 10px;
    color: darkseagreen;
    font-size: 25px;
  }
  p {
    padding: 10px 10px 10px;
    color: black;
    font-size: 16px;
    line-height: 24px;
  }
  button {
    background-color: white;
    border: none;
    color: #1f98f4;
    font-size: 12px;
  }
`
