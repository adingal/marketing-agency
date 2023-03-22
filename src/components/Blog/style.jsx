import styled from 'styled-components'
import { Row } from 'reactstrap'

export const StyledHeading = styled('h2')`
  margin-bottom: 16px;
  @media (min-width: 577px) {
    font-size: 2rem;
    text-align: center;
  }
  @media (min-width: 992px) {
    font-size: 2.5rem;
    text-align: left;
    margin-bottom: 24px;
  }
  @media (min-width: 1201px) {
    font-size: 3rem;
  }
`

export const StyledRow = styled(Row)`
  > div {
    margin-bottom: 30px;
  }
  > div:first-of-type .card {
    background-color: #ff3c4c;
    color: #fff;
  }
  > div:first-of-type .card-title {
    color: #fff;
  }
  > div:first-of-type .card-subtitle {
    color: #ddd;
  }
  @media (min-width: 577px) {
    max-width: 400px;
    margin: 0 auto;
  }
  @media (min-width: 769px) {
    max-width: 100%;
    > div {
      margin-bottom: 0;
    }
  }
`
