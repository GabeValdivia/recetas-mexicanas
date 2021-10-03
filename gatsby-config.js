/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Recetas Sencillas',
    description: 'Recetas de comida Mexicana',
    author: 'Gabriel Valdivia',
    person: {name:"gabriel", age:48},
    simpleData:['item 1','item 2'],
    complexData:[
      {name:"gabriel", age:48},
      {name:"Jane", age:37},
    ],
  },
  plugins: [ 
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
}
