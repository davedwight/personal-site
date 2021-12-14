import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import * as blogStyles from "./blog.module.scss"

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // const data = useStaticQuery(graphql`
  //   query {
  //     allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
  //       edges {
  //         node {
  //           title
  //           slug
  //           publishedDate(formatString: "MMMM Do, YYYY")
  //           body {
  //             raw
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li key={edge.node.frontmatter.title} className={blogStyles.post}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}
