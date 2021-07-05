import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { FiHome } from 'react-icons/fi'
import { GiMountainRoad } from 'react-icons/gi'
import { MdFavoriteBorder } from 'react-icons/md'

function Navbar() {
  return (
    <>
      <NavWrapper>
        <MenuWrapper>
          <MenuPoint>
            <StyledLink
              to="/"
              activeStyle={{
                color: 'darkgreen',
              }}
            >
              <FiHome />
            </StyledLink>
          </MenuPoint>
          <MenuPoint>
            <StyledLink
              to="/PlacesPage"
              activeStyle={{
                color: 'darkgreen',
              }}
            >
              <GiMountainRoad />
            </StyledLink>
          </MenuPoint>
          <MenuPoint>
            <StyledLink
              to="/Favoritespage"
              activeStyle={{
                color: 'darkgreen',
              }}
            >
              <MdFavoriteBorder />
            </StyledLink>
          </MenuPoint>
        </MenuWrapper>
      </NavWrapper>
    </>
  )
}

export default Navbar

const NavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  will-change: transform;
  transform: translateZ(0);
  display: flex;
  height: 50px;
  box-shadow: 0 -2px 5px -2px #333;
  background-color: #fff;
`

const MenuWrapper = styled.div`
  flex-grow: 1;
  text-align: center;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const MenuPoint = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLink = styled(Link)`
  font-size: 46px;
  padding: 0 25px;
  color: darkseagreen;
  text-align: center;
`
