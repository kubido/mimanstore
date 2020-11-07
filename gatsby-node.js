const path = require('path')
const products = require('./src/content/products.json')

const generateSlug = (str) => {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  products.map(product => {
    let slug = generateSlug(product.title)
    createPage({
      path: `/products/${slug}`,
      component: require.resolve(`./src/templates/ProductDetail.js`),
      context: {
        slug,
        product
      },
    })
  })
}