import * as React from "react"
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'
import * as styles from '../components/layout.module.css';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';


const IndexPage = () => {
  return (
    <Layout>
      <StaticImage
        src="../images/IMG_0345.JPG"
        height={300}
        className={styles.content}
        />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
