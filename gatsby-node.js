const path = require('path')
const slug = require('slug')
const slash = require('slash')
const moment = require('moment')
const pagesRequest = require('./pages-request')
const combineNodes = require('./helpers/combineNodes')

const indexPage = path.resolve(process.cwd(), 'src/templates/index.js')
const eventsPage = path.resolve(process.cwd(), 'src/templates/events/index.js')
const eventsPost = path.resolve(process.cwd(), 'src/templates/events/single.js')
const kitchenPage = path.resolve(process.cwd(), 'src/templates/kitchen/index.js')
const kitchenPost = path.resolve(process.cwd(), 'src/templates/kitchen/single.js')
const barPage = path.resolve(process.cwd(), 'src/templates/bar/index.js')
const barPost = path.resolve(process.cwd(), 'src/templates/bar/single.js')
// const galleryPage = path.resolve(process.cwd(), 'src/templates/gallery/index.js')
// const galleryPost = path.resolve(process.cwd(), 'src/templates/gallery/single.js')

function createPost(withDate, node) {
  const date = node.en.date
    ? moment(node.en.date).format('YY-MM-DD')
    : null

  return Object.assign({}, node, {
    formatedDate: date,
    slug: slug(`${withDate && date ? `${date}-` : ''}${node.en.title}`).toLowerCase()
  })
}

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const result = await graphql(pagesRequest)

  if (result.errors) {
    throw new Error(result.errors)
  }

  function createPages(opts) {
    const {rootPath, pageTemplate, postTemplate, items} = opts

    createPage({
      path: rootPath,
      component: slash(pageTemplate),
      context: {
        data: {items},
      },
    })
    items.forEach(node => {
      createPage({
        path: `${rootPath}/${node.slug}`,
        component: slash(postTemplate),
        context: {data: node}
      })
    })
  }

  let { events, kitchen, bar, slider, gallery } = result.data

  events = combineNodes(events.edges).map(createPost.bind(null, true))
  kitchen = combineNodes(kitchen.edges).map(createPost.bind(null, false))
  bar = combineNodes(bar.edges).map(createPost.bind(null, false))
  gallery = gallery.edges
  slider = combineNodes(slider.edges)

  function filterIndexItem(item) {
    return (item.ru.image && item.ru.image.file) && (item.en.image && item.en.image.file)
  }

  const indexData = {
    events: events.filter(filterIndexItem).slice(0, 8),
    kitchen: kitchen.filter(filterIndexItem).slice(0, 4),
    bar: bar.filter(filterIndexItem).slice(0, 4),
    slider,
    gallery: gallery.find(item => item.node.title === 'На главную'),
  }

  createPage({
    path: '/',
    component: slash(indexPage),
    context: {data: indexData}
  })

  createPages({
    rootPath: '/events',
    pageTemplate: eventsPage,
    postTemplate: eventsPost,
    items: events,
  })
  createPages({
    rootPath: '/kitchen',
    pageTemplate: kitchenPage,
    postTemplate: kitchenPost,
    items: kitchen,
  })
  createPages({
    rootPath: '/bar',
    pageTemplate: barPage,
    postTemplate: barPost,
    items: bar,
  })
  // createPages({
  //   rootPath: '/gallery',
  //   pageTemplate: galleryPage,
  //   postTemplate: galleryPost,
  //   items: gallery,
  // })
}
