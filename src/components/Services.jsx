import React from 'react'
import {
  Row,
  Col,
  Button,
  CardBody,
  Card,
  CardTitle,
  CardText,
} from 'reactstrap'
import styled from 'styled-components'
import CustomContainer from '../atoms/CustomContainer'
import ItemCard from '../atoms/ItemCard'
import envelopeIcon from '../assets/envelopeIcon.png'
import codeIcon from '../assets/codeIcon.png'

const StyledHeading = styled('h2')`
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

const StyledRow = styled(Row)`
  > div {
    margin-bottom: 30px;
  }
  > div:first-of-type {
    text-align: center;
  }
  @media (min-width: 577px) {
    max-width: 400px;
    margin: 0 auto;
  }
  @media (min-width: 769px) {
    max-width: 100%;
    > div:first-of-type {
      text-align: left;
    }
  }
`

function Service() {
  return (
    <div id="services">
      <CustomContainer>
        <StyledRow>
          <Col xs={12} lg={4}>
            <StyledHeading>
              Anything you need, we've got you covered
            </StyledHeading>
            <Button
              href="#contact"
              className="px-3 me-3 me-lg-4 rounded-pill"
              color="danger"
            >
              Get in Touch
            </Button>
          </Col>
          <Col xs={12} lg={3}>
            <ItemCard
              imgSource={envelopeIcon}
              title="Web & Graphic Design"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat iusto magni natus incidunt, veniam temporibus!"
            />
          </Col>
          <Col xs={12} lg={3}>
            <ItemCard
              imgSource={codeIcon}
              title="Web & App Development"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat iusto magni natus incidunt, veniam temporibus!"
            />
          </Col>
        </StyledRow>
      </CustomContainer>
    </div>
  )
}

export default Service
