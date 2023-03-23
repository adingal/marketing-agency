import { NavLink } from 'reactstrap'
import styled from 'styled-components'

export const StyledContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledHeading = styled('h2')`
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #ff3c4c;
  @media (min-width: 577px) {
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    font-size: 2.5rem;
    margin-bottom: 24px;
  }
  @media (min-width: 1201px) {
    font-size: 3rem;
  }
`

export const StyledNavLink = styled(NavLink)`
  position: relative;
  font-weight: 400;
  color: #fff;
  &:hover {
    color: #fff;
  }
  &::before {
    content: '';
    width: 0%;
    height: 1px;
    position: absolute;
    bottom: 3px;
    background-color: #ff3c4c;
    transition: 300ms;
  }
  &:hover::before {
    width: 80%;
  }
  @media (min-width: 1201px) {
    font-size: 1.125rem;
    padding: 8px 12px !important;
  }
`

export const StyledImageContainer = styled('div')`
  text-align: center;
  > a {
    display: inline-block;
    margin: 0 8px;
    cursor: pointer;
  }
`
