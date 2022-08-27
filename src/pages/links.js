import * as React from "react"
import Layout from '../components/layout'
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';


const LinksPage = () =>{
  return (
    <Layout pageTitle="Links">
      <Container fluid>
        <Nav className="me-auto">
          <Nav.Link href="https://github.com/johnawin">GitHub</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/johnawin/">LinkedIn</Nav.Link>
        </Nav>
      </Container>
    </Layout>
  )
}

export default LinksPage
