import React from 'react'
import { CardBody, Card, CardTitle, CardText } from 'reactstrap'
import styled from 'styled-components'

const StyledCard = styled(Card)`
  img {
    max-width: 50px;
  }
  @media (min-width: 769px) {
    min-height: 355px;
    img {
      max-width: 100%;
    }
  }
  @media (min-width: 1201px) {
    min-height: 276px;
  }
`

const StyledCardTitle = styled(CardTitle)`
  @media (min-width: 577px) {
    font-size: 1.15rem;
  }
  @media (min-width: 992px) {
    font-size: 1.35rem;
  }
  @media (min-width: 1201px) {
    font-size: 1.65rem;
  }
`

function ItemCard({ imgSource, title, description }) {
  return (
    <StyledCard className="shadow border-0">
      <CardBody>
        <img className="mb-3" src={imgSource} alt="Envelope" />
        <StyledCardTitle tag="h3">{title}</StyledCardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </StyledCard>
  )
}

export default ItemCard
