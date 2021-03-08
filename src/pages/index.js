import * as React from "react"
import { graphql } from 'gatsby'
import Header from "../components/header"
import HeroImg from "../components/heroImg"
import Article from "../components/article"
import Footer from "../components/footer"
import YAMLDATA from "../../_tiktok/tiks.yaml"

// data
const links = [
  {
    text: "Twitch",
    url: "https://www.twitch.tv/gabeisgunk",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "Tiktok",
    url: "https://www.tiktok.com/@gabeisgunk/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/gabewifdaglasses",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Soundcloud",
    url: "https://soundcloud.com/gabeisgunk",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
]
const socialLinks = [
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
      <div className="container">
        <Header siteTitle="GabeisGunk" links={links} />
        <HeroImg />
        <div className="bottomFold">
          <div className="articles">
            <title>GabeisGunk</title>
            <h2>Articles</h2>
            <Article
              articleTitle={data.allMarkdownRemark.edges[0].node.frontmatter.title}
              articleBody={data.allMarkdownRemark.edges[0].node.html}
              articleDate={data.allMarkdownRemark.edges[0].node.frontmatter.date}
            />
          </div>
          <div className="socialFeed">
          <h2>Social</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed elit accumsan, porttitor diam ut, pharetra ligula. In ac imperdiet mauris.
            </p>
            <p>{YAMLDATA.recent_tiktok}</p>
          </div>
        </div>
        {/* <div dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[0].node.html}}></div> */}
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
        <Footer />
      </div>
    </main>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date
          }
        }
      }
    }
  }  
`
export default IndexPage
