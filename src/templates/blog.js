import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Layout from "../components/layout"
import Head from "../components/head"

// export const query = graphql`
//   query ($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

export default function Blog(props) {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <>
            {/* <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre> */}
            <img
              src={node.data.target.fixed.src}
              alt={node.data.target.title}
            />
          </>
        )
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {renderRichText(props.data.contentfulBlogPost.body, options)}
    </Layout>
  )
}
