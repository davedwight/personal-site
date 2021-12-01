import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Sample Gatsby project</h1>
      <h2>I'm Dave, a software engineer.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}
