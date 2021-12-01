import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import * as blogStyles from "./blog.module.scss"

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
              raw
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li key={edge.node.title} className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}
