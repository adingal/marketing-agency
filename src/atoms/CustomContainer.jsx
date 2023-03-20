import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'

function CustomContainer({ children }) {
  return <Container>{children}</Container>
}

CustomContainer.propTypes = {
  children: PropTypes.node,
}

export default CustomContainer
