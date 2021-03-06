module.exports = {
  siteMetadata: {
    title: `ResInDe`,
    description: `Princeton Research, Innovation, Design`,
    author: `ResInDe`,
    navLinks: [
      { name: "About", link: "/about" },
      { name: "Work", link: "/work" },
      { name: "Team", link: "/team" },
      { name: "For Students", link: "/for-students" },
      { name: "IDEA Conference", link: "/conference" },
      { name: "Contact Us", link: "/contact" },
    ],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `resinde`,
        short_name: `ResInDe`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/resinde-logo-square.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-0FD5J2RZ1X", "UA-189091603-1"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
