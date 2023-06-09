import React, { useState } from 'react'
import {
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'
import CustomContainer from '../../atoms/CustomContainer'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { StyledHeading } from './style'

const items = [
  {
    src: 'https://picsum.photos/id/123/1200/500',
    altText: 'Rain Drops',
    caption: 'Rain Drops',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/500',
    altText: 'River View',
    caption: 'River View',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/500',
    altText: 'Mountain Breeze',
    caption: 'Mountain Breeze',
    key: 3,
  },
]

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const { width } = useWindowDimensions()

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="img-fluid w-100" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} />
      </CarouselItem>
    )
  })

  return (
    <div id="portfolio">
      <CustomContainer>
        <Row>
          <Col xs={12}>
            <StyledHeading>
              See some of our <br /> Creative work
            </StyledHeading>
          </Col>
        </Row>

        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          {width > 577 && (
            <>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
            </>
          )}
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </CustomContainer>
    </div>
  )
}

export default Portfolio
