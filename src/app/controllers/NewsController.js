class NewsController {

    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send(`<h1>Nguyen Lam Cong Danh</h1>`);
    }
}

module.exports = new NewsController;