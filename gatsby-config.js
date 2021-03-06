module.exports = {
  siteMetadata: {
    title: "Gabe is Gunk",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/_posts/blog`,
        name: 'pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
};
