/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-less`],
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        modifyVars: {
          "text-color": "#1DA57A",
        },
      },
    },
  ],
};
