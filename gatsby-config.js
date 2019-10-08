module.exports = {
  siteMetadata: {
    title: 'Knowit Stavanger - Amsterdam 2019',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-material-ui',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdowns`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.API_KEY,
        tables: [
          {
            baseId: process.env.BASE_ID,
            tableName: process.env.TABLE_NAME,
            mapping: { speaker_image: 'fileNode' },
          },
        ],
      },
    },
  ],
  pathPrefix: '/',
};
