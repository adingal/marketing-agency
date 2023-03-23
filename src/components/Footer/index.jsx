import React from 'react'
import CustomContainer from '../../atoms/CustomContainer'
import { Nav, NavItem } from 'reactstrap'
import {
  StyledFooter,
  StyledContainer,
  StyledHeading,
  StyledNavLink,
  StyledImageContainer,
} from './style'
import facebookIcon from '../../assets/facebookIcon.svg'
import instagramIcon from '../../assets/instagramIcon.svg'
import twitterIcon from '../../assets/twitterIcon.svg'

function Footer() {
  const links = ['Home', 'Services', 'About', 'Portfolio', 'Blog', 'Contact']

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
    <footer>
      <CustomContainer>
        <StyledContainer>
          <p className="small text-uppercase text-white fw-semibold mb-0">
            SpaceBox
          </p>
          <StyledHeading>Creativity Above</StyledHeading>
          <Nav>{renderNavItems()}</Nav>
          <p className="small text-white">
            &copy; {new Date().getFullYear() ?? '2023'} SpaceBox
          </p>
          <p className="small text-muted">
            Design from{' '}
            <a
              className="text-muted text-decoration-none"
              href="https://www.graphberry.com/item/doob-simple-agency-psd-template"
              target="_blank"
              rel="noreferrer"
            >
              Graphberry
            </a>
          </p>
          <StyledImageContainer>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </StyledImageContainer>
        </StyledContainer>
      </CustomContainer>
    </footer>
  )
}

export default Footer
