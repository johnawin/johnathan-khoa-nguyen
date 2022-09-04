import * as React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as styles from './layout.module.css';
import background from '../images/wood_img.jpg';
import {StaticImage} from 'gatsby-plugin-image'


const Layout = ({ pageTitle, children }) => {
  return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/links">Links</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className={styles.container}>
        <h1 className={styles.content}>{children}</h1>
          <StaticImage
            alt=""
            style={{position: "absolute"}}
            src='../images/wood_img.jpg'
            className={styles.backgroundImage}
          />
      </div>
    </>
  );
}

export default Layout
