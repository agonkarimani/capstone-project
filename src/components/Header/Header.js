import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.h1`
  display: grid;
  width: 100%;
  place-items: center;
  margin: 0;
  padding: 20px;
  justify-self: center;
  font-family: 'Roboto';
  font-size: 35px;
  color: white;
  background-color: black;
`
