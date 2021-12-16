module.exports = {
  siteMetadata: {
    siteUrl: `https://www.gintu.github.io`,
  },
  pathPrefix: "/",
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-minify`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Rubik:400,500,700", "sans-serif"],
        },
      },
    },
  ],
};
