import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
}

export default function Button(props) {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  padding: 12px;
  border: none;
  font-family: 'Roboto';
  font-size: 20px;
  width: 200px;
  color: black;
  background-color: white;
`
