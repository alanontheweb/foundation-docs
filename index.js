module.exports = {
  buildSearch: require('./lib/buildSearch'),
  handlebars: require('./lib/handlebars'),
  marked: require('./lib/marked'),
  componentTemplate: 'src/docs/layout/references.html',
  handlebarsHelpers: 'node_modules/foundation-docs/helpers/'
}
