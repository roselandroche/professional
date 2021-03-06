module.exports = {
  siteMetadata: {
    title: `Professional History`,
    description: `Securely save professional information in one central location`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Raleway", `limelight`, `source sans pro\:300,400,400i,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `professional`,
        short_name: `professional`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/laptop.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: "@theme-ui/preset-funk",
      },
    },
  ],
}
