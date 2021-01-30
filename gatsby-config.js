module.exports = {
  siteMetadata: {
    title: `ELVNS GATSBY-SITE`,
    description: `ELVNS GATSBY-SITE for Front-End Developers`,
    author: `@css`
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: "markdown-pages"
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`)
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`
  ]
};
