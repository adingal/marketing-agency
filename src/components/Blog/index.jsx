import React from 'react'
import CustomContainer from '../../atoms/CustomContainer'
import BlogCard from '../../atoms/BlogCard'
import { StyledRow, StyledHeading } from './style'
import { Col } from 'reactstrap'

const blogItems = [
  {
    id: 1,
    title: 'Sunt deserunt',
    subtitle: 'Dolores fugiat',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quod, sunt deserunt nostrum dolores fugiat.',
  },
  {
    id: 2,
    title: 'Lorem Ipsum',
    subtitle: 'Dolor sit amet',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quod, sunt deserunt nostrum dolores fugiat.',
  },
  {
    id: 3,
    title: 'Adipisicing elit',
    subtitle: 'Ullam quod',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quod, sunt deserunt nostrum dolores fugiat.',
  },
]

function Blog() {
  const renderBlogItems = () => {
    return blogItems.map((item) => (
      <Col xs={12} lg={4} key={item.id}>
        <BlogCard item={item} />
      </Col>
    ))
  }

  return (
    <div id="blog">
      <CustomContainer>
        <p className="small text-uppercase text-sm-center text-lg-start text-danger fw-semibold mb-0">
          Blog Stories
        </p>
        <StyledHeading>Check Our News</StyledHeading>
        <StyledRow>{renderBlogItems()}</StyledRow>
      </CustomContainer>
    </div>
  )
}

export default Blog
