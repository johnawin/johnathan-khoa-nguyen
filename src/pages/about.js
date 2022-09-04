import * as React from 'react'
import Layout from '../components/layout'
import * as styles from '../components/layout.module.css';
import Card from 'react-bootstrap/Card';



const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">


      <Card>
      <Card.Header as="p">About Me</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p>Hello my name is Johnathan.<br/></p>
        <p>I like to describe myself as:<br/>
        Experienced in working under a professional setting and not afraid to take initiative on important tasks and opportunities.<br/>
        Flexible and quick to adapt when working with new tools and changing environments.<br/>
        Always open to grow and learn more from mentors and peers.<br/>
        Eager to contribute hard work and critical thinking.<br/>
        Dedicated to help accomplish goals and reach milestones.
        </p>
        </blockquote>
      </Card.Body>
    </Card>
    </Layout>
  )
}



export default AboutPage
