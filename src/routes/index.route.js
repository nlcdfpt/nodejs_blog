const siteRoute = require('./site.route');
const newsRoute = require('./news.route');

function route(app) {
    app.use('/', siteRoute);

    app.use('/news', newsRoute);
}

module.exports = route;