const Course = require('../models/Course');

class SiteController {

    index(req, res) {

        Course.find({}, (err, courses) => {
            if (err) {
                res.status(400).json({ error: 'ERROR!!!' });
                return;
            }
            res.json(courses);
        })
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;