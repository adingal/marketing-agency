import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import CustomContainer from '../atoms/CustomContainer'

function Hero() {
  return (
    <CustomContainer>
      <Row>
        <Col xs={12} lg={6}>
          <h1>Text</h1>
        </Col>
        <Col xs={12} lg={6}>
          <h1>Image</h1>
        </Col>
      </Row>
    </CustomContainer>
  )
}

export default Hero
