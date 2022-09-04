import * as React from "react"
import Layout from '../components/layout'
import ReactDOM from "react-dom/client"
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';


const ResumePage = () =>{
  return (
    <Layout pageTitle="Resume">
      
      <div className="d-grid gap-2">
        <Button variant="outline-light" size="lg" href="../dl/AA. Johnathan Nguyen Resume.pdf" download>Resume</Button>
      </div>
    </Layout>
  )
}

export default ResumePage
