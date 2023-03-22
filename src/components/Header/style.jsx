import styled from 'styled-components'
import { NavLink, Button } from 'reactstrap'

export const StyledButton = styled(Button)`
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

export const StyledNavLink = styled(NavLink)`
  position: relative;
  font-weight: 600;
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
