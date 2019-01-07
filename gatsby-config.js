module.exports = {
  siteMetadata: {
    title: `corydhmiller.com Gatsby Site`,
    description: `Public repo for corydhmiller.com using Gatsby
`,
    author: `@corydhmiller`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `corydhmiller.com`,
        short_name: `corydhmiller.com`,
        start_url: `/`,
        background_color: `#6624d7`,
        theme_color: `#6624d7`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-remark', {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
  ],
}
