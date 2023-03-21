import React from 'react'
import { Col } from 'reactstrap'
import CustomContainer from '../../atoms/CustomContainer'
import heroImage from '../../assets/hero.png'
import {
  StyledHeroContainer,
  StyledRow,
  StyledHeading,
  StyledLeadText,
  StyledAnchor,
} from './style'

function Hero() {
  return (
    <div id="home">
      <CustomContainer>
        <StyledRow>
          <Col xs={12} lg={6}>
            <StyledHeroContainer>
              <StyledHeading className="fw-semibold">
                The Spirit of <br />
                Digital Agency
              </StyledHeading>
              <StyledLeadText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi eligendi, consequatur repudiandae magni quas aperiam.
              </StyledLeadText>
              <div>
                <a
                  href="#about"
                  className="btn btn-danger px-3 py-lg-2 me-3 me-lg-4 rounded-pill"
                >
                  More About Us
                </a>
                <StyledAnchor href="#contact">Get in Touch</StyledAnchor>
              </div>
            </StyledHeroContainer>
          </Col>
          <Col xs={12} lg={6}>
            <StyledHeroContainer>
              <img className="img-fluid" src={heroImage} alt="Hero" />
            </StyledHeroContainer>
          </Col>
        </StyledRow>
      </CustomContainer>
    </div>
  )
}

export default Hero
