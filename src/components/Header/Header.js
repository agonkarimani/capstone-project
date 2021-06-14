import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children, uuid }) {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.h2`
  display: grid;
  width: 100%;
  place-items: center;
  margin: 0;
  font-size: 1.2em;
  font-weight: 500;
  padding: 20px;
  justify-self: center;
  font-family: 'Roboto';
  font-size: 20px;
  color: black;
`
