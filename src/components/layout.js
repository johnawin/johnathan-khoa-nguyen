import * as React from 'react'
import {Link} from 'gatsby'
import {container} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/links">Links</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Layout
