import React, { useState } from 'react'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import CustomContainer from '../../atoms/CustomContainer'
import { ReactComponent as BurgerIcon } from '../../assets/burgerIcon.svg'
import { ReactComponent as CloseIcon } from '../../assets/closeIcon.svg'
import logo from '../../assets/logo.png'
import { StyledButton, StyledNavLink } from './style'

function Header() {
  const links = ['Home', 'Services', 'About', 'Portfolio', 'Blog', 'Contact']
  const [isOpen, setIsOpen] = useState(false)
  const { width } = useWindowDimensions()
  const showToggle = width > 768

  const toggle = () => {
    if (width <= 768) {
      setIsOpen(!isOpen)
    }
  }

  const renderNavItems = () => {
    if (links && links.length > 0) {
      return links.map((link, idx) => (
        <NavItem key={`${link}-${idx}`}>
          <StyledNavLink onClick={toggle} href={`#${link.toLowerCase()}`}>
            {link}
          </StyledNavLink>
        </NavItem>
      ))
    }
    return null
  }

  return (
    <header>
      <CustomContainer>
        <Navbar container={false} className="py-3 py-lg-4" expand={showToggle}>
          <NavbarBrand className="fw-semibold" href="/">
            <img src={logo} alt="SpaceBox" />
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
    </header>
  )
}

export default Header
