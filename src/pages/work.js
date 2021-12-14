import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

export default function Work() {
  return (
    <div>
      <Layout>
        <Head title="Work" />
        <h1>Work</h1>
        <p>
          I'm a software engineer that graduated Lambda School.{" "}
          <Link to="/contact">Get in touch with me</Link>
          Here are some of my projects.
        </p>
      </Layout>
    </div>
  )
}
