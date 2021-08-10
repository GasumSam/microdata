/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Startup",
    titleTemplate: "%s | Helping startups get started",
    description: "A simple one-page site for new businesses that uses GatsbyJS",
    siteUrl: "https://thestartup.netlify.com",
    author: "Morgan Baker",
    authorSite: "https://www.morganbaker.dev",
    image: "/yellow-metal-design-decoration.jpg",
    twitterUsername: "@twitter",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-8GT3839DZ8',
          // Setting this parameter is optional
          anonymize: true
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production']
      },
    },

    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
