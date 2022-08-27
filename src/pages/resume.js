import * as React from "react"
import Layout from '../components/layout'
import ReactDOM from "react-dom/client"
import {Link} from 'react-router-dom'
const ResumePage = () =>{
  return (
    <Layout pageTitle="Resume">
      <p>My Resume will be linked here for download</p>
      <a href="../dl/AA. Johnathan Nguyen Resume.pdf" download>Resume</a>
    </Layout>
  )
}

export default ResumePage
