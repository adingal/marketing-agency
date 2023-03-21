import { Row } from 'reactstrap'
import styled from 'styled-components'

export const StyledHeroContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  > img {
    max-width: 80%;
    display: block;
    margin: 0 auto;
  }
  @media (min-width: 577px) {
    > img {
      max-width: 60%;
    }
  }
  @media (min-width: 769px) {
    min-height: 500px;
    align-items: start;
    text-align: left;
  }
  @media (min-width: 992px) {
    > img {
      max-width: 100%;
    }
  }
`

export const StyledRow = styled(Row)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  > div:last-of-type {
    margin-bottom: 30px;
  }
  @media (min-width: 769px) {
    flex-direction: row;
    > div:last-of-type {
      margin-bottom: 0;
    }
  }
`

export const StyledHeading = styled('h1')`
  @media (min-width: 577px) {
    font-size: 2.5rem;
  }
  @media (min-width: 992px) {
    font-size: 3rem;
  }
  @media (min-width: 1201px) {
    font-size: 3.5rem;
  }
`

export const StyledLeadText = styled('p')`
  font-weight: 400;
  font-size: 0.9rem;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.55);
  @media (min-width: 577px) {
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    margin-bottom: 24px;
    font-size: 1.1rem;
  }
`

export const StyledAnchor = styled('a')`
  display: inline-block;
  position: relative;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s color ease-in;
  padding-bottom: 3px;
  color: #2d4588;
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
