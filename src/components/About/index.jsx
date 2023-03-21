import React from 'react'
import { Col } from 'reactstrap'
import CustomContainer from '../../atoms/CustomContainer'
import aboutImage from '../../assets/about.png'
import { StyledRow, StyledHeading } from './style'

function About() {
  return (
    <div id="about">
      <CustomContainer>
        <StyledRow>
          <Col xs={12} lg={6}>
            <img className="img-fluid" src={aboutImage} alt="About" />
          </Col>
          <Col xs={12} lg={6}>
            <StyledHeading>
              Some fine <br /> word about us
            </StyledHeading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              sint explicabo repudiandae illo. Itaque possimus earum quidem
              explicabo, eum quos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ullam enim nulla sit, voluptate quos!
            </p>
          </Col>
        </StyledRow>
      </CustomContainer>
    </div>
  )
}

export default About
