import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  images: PropTypes.node.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default function Card({ text, title, images }) {
  return (
    <WrapperList>
      <img src={images} alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
    </WrapperList>
  )
}

const WrapperList = styled.li`
  background-color: white;
  padding: 20px;
  margin: 20px;
  align-items: center;
  box-shadow: 0 8px 4px lightgrey;
  display: grid;
  max-width: 100%;
  font-family: 'Roboto';
  list-style-type: none;
  font-size: 18px;
  color: black;
  img {
    justify-self: center;
    width: 90%;
    max-width: 500px;
    margin: 10px;
    border-radius: 40px;
    object-fit: cover;
  }
  h2 {
    color: navy;
    font-size: 25px;
  }
`
