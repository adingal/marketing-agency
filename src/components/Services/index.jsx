import React from 'react'
import { Col, Button } from 'reactstrap'
import CustomContainer from '../../atoms/CustomContainer'
import ItemCard from '../../atoms/ItemCard'
import envelopeIcon from '../../assets/envelopeIcon.png'
import codeIcon from '../../assets/codeIcon.png'
import { StyledRow, StyledHeading } from './style'

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
