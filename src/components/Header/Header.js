import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.h1`
  display: flex;
  place-items: center;
  justify-content: center;
  margin: 0;
  padding: 20px;
  font-family: 'Roboto';
  font-size: 30px;
  color: darkseagreen;
  background: none;
`
