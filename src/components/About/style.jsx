import styled from 'styled-components'
import { Row } from 'reactstrap'

export const StyledHeading = styled('h2')`
  text-transform: capitalize;
  margin-bottom: 16px;
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

export const StyledRow = styled(Row)`
  img {
    max-width: 80%;
    display: block;
    margin: 0 auto;
  }
  > div {
    margin-bottom: 30px;
  }
  > div:last-of-type {
    text-align: center;
  }
  @media (min-width: 769px) {
    max-width: 100%;
    > div {
      margin-bottom: 0;
    }
    > div:last-of-type {
      text-align: left;
    }
  }
  @media (min-width: 992px) {
    img {
      max-width: 90%;
    }
  }
`
