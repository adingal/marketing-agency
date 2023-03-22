import React from 'react'
import CustomContainer from '../../atoms/CustomContainer'
import { StyledHeading } from './style'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

function Contact() {
  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
  }

  return (
    <div id="contact">
      <CustomContainer>
        <p className="small text-uppercase text-danger fw-semibold mb-0">
          Contact Us
        </p>
        <StyledHeading>Get in Touch</StyledHeading>
        <Form onSubmit={onFormSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup floating>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <Label for="email">Email</Label>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup floating>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  type="text"
                />
                <Label for="subject">Password</Label>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup floating>
            <Input
              id="message"
              name="message"
              placeholder="Message"
              type="textarea"
              rows={5}
              style={{ height: 200 }}
            />
            <Label for="message">Address</Label>
          </FormGroup>
          <div className="text-center">
            <Button
              color="danger"
              className="px-3 py-lg-2 me-3 me-lg-4 rounded-pill"
              type="submit"
            >
              Send Message
            </Button>
          </div>
        </Form>
      </CustomContainer>
    </div>
  )
}

export default Contact
