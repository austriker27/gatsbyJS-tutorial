module.exports = {
  siteMetadata: {
    title: `Super pandas`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    }
      `gatsby-plugin-glamor`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`
        },
    },
  ],
};