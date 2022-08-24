import * as React from "react"
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'
import * as Images from '../images'

const IndexPage = () => {
  return (
    <Layout pageTitle="NGUYEN">
      <p>Johnathan Khoa</p>
      <StaticImage
        src="../images/IMG_0345.JPG"
        />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
