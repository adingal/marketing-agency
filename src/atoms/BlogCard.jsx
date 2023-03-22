import React from 'react'
import {
  Button,
  CardBody,
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap'
import styled from 'styled-components'
import arrowRightIcon from '../assets/arrowRightIcon.svg'

const StyledCard = styled(Card)`
  img {
    max-width: 50px;
  }
  @media (min-width: 769px) {
    img {
      max-width: 100%;
    }
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

function BlogCard({ item }) {
  const { title, subtitle, description } = item
  return (
    <StyledCard className="shadow border-0">
      <CardBody>
        <StyledCardTitle tag="h3">{title}</StyledCardTitle>
        <CardSubtitle className="mb-3">{subtitle}</CardSubtitle>
        <CardText className="mb-0">{description}</CardText>
        <div className="text-end">
          <Button color="link" type="button">
            <img src={arrowRightIcon} alt="Arrow Right" />
          </Button>
        </div>
      </CardBody>
    </StyledCard>
  )
}

export default BlogCard
