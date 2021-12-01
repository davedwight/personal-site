import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

export default function Contact() {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact</h1>
        <p>
          Reach me at{" "}
          <a target="_blank" href="https://twitter.com/daveydavejr">
            @daveydavejr
          </a>{" "}
          on twitter
        </p>
      </Layout>
    </div>
  )
}
