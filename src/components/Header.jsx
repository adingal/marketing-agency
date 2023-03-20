import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap'
import styled from 'styled-components'
import useWindowDimensions from '../hooks/useWindowDimensions'
import CustomContainer from '../atoms/CustomContainer'
import { ReactComponent as BurgerIcon } from '../assets/burgerIcon.svg'
import { ReactComponent as CloseIcon } from '../assets/closeIcon.svg'

const StyledButton = styled(Button)`
  display: none;
  background-color: transparent;
  border: none;
  padding: 0;
  outline: none;
  &:focus {
    box-shadow: none;
  }
  &:hover,
  &:active {
    background-color: transparent !important;
    border: none;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`

const StyledNavLink = styled(NavLink)`
  position: relative;
  font-weight: 600;
  &::before {
    content: '';
    width: 0%;
    height: 1px;
    position: absolute;
    bottom: 3px;
    background-color: #031d44;
    transition: 300ms;
  }
  &:hover::before {
    width: 100%;
  }
`

function Header() {
  const links = ['Home', 'About', 'Portfolio', 'Blog', 'Contact']
  const [isOpen, setIsOpen] = useState(false)
  const { width } = useWindowDimensions()
  const showToggle = width > 991

  const toggle = () => setIsOpen(!isOpen)

  const renderNavItems = () => {
    if (links && links.length > 0) {
      return links.map((link, idx) => (
        <NavItem key={`${link}-${idx}`}>
          <StyledNavLink href={`#${link.toLowerCase()}`}>{link}</StyledNavLink>
        </NavItem>
      ))
    }
    return null
  }

  return (
    <CustomContainer>
      <Navbar className="py-3 py-lg-4" expand={showToggle}>
        <NavbarBrand className="fw-semibold" href="/">
          SpaceBox
        </NavbarBrand>
        <StyledButton type="button" onClick={toggle}>
          {!isOpen ? (
            <BurgerIcon fill="#C0C0C0" height={32} width={32} />
          ) : (
            <CloseIcon fill="#C0C0C0" height={32} width={32} />
          )}
        </StyledButton>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            {renderNavItems()}
          </Nav>
        </Collapse>
      </Navbar>
    </CustomContainer>
  )
}

export default Header
