import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

export default function About() {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About</h1>
        <p>
          I'm a software engineer that graduated Lambda School.{" "}
          <Link to="/contact">Get in touch with me</Link>
        </p>
      </Layout>
    </div>
  )
}
