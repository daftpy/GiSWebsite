import * as React from "react"
import { graphql } from 'gatsby'
import Header from "../components/header"
import HeroImg from "../components/heroImg"

// data
const links = [
  {
    text: "Twitch",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "Tiktok",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Instagram",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Soundcloud",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
]

// markup
const IndexPage = ({data}) => {
  return (
    <main>
      <Header siteTitle="GabeisGunk" links={links} />
      <HeroImg />
      <title>GabeisGunk</title>
      {/* {links.map(link => (
        <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
          <span>
            <a
              style={linkStyle}
              href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
            >
              {link.text}
            </a>
            {link.badge && (
              <span style={badgeStyle} aria-label="New Badge">
                NEW!
              </span>
            )}
            <p style={descriptionStyle}>{link.description}</p>
          </span>
        </li>
      ))} */}
    </main>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          tableOfContents
        }
      }
    }
  }
`
export default IndexPage