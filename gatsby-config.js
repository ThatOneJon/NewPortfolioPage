/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**

  *@type {import('gatsby').GatsbyConfig} 
  */
 

  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

module.exports = {

  siteMetadata:{
     author:"@thatOneJon",
     person:{
      name:"john", age:"36", country:"france"
     },
     simpleData:["item1", "item2"],
     complexData: [
      {name:"john", age: 30},
      {name:"susan", age: 40}
     ],
  },

  plugins: [
  `gatsby-plugin-styled-components`, 
  `gatsby-plugin-anchor-links`, 
  `gatsby-plugin-react-helmet`, 
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-netlify`,
  `gatsby-transformer-remark`,
  
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `ti2sjnhp7sg2`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_API_KEY,
    },
  },

],
}
