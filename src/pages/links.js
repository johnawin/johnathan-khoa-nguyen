import * as React from "react"
import Layout from '../components/layout'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


const LinksPage = () =>{
  return (
    <Layout pageTitle="Links">
      <Container fluid>
        <Nav>
          <div className="d-grid gap-2">
            <Button variant="outline-light" size="lg" href="https://github.com/johnawin">GitHub</Button>
            <Button variant="outline-light" size="lg" href="https://www.linkedin.com/in/johnawin">LinkedIn</Button>
          </div>
        </Nav>
      </Container>
    </Layout>
  )
}

export default LinksPage
