var PropertyService = require("../service/PropertyService")()

module.exports = function (app) {

    var service = new PropertyService();

    app.get('/list/:search', (req, res) => {
        const page = req.query.page;
        const size = req.query.size;
        const search = req.params.search;
        service.findAllBySearch(search, page, size)
        .then(allByCity => res.send(allByCity))
        .catch(() => res.status(500).send('An error ocurred when trying to find properties'));
    });

    app.get('/most-visited', (req, res) => {
        service.findMostVisited()
        .then(allByCity => res.send(allByCity))
        .catch(() => res.status(500).send('An error ocurred when trying to find properties'));
    });

    app.get('/recent-visited', (req, res) => {
        service.findRecentVisited()
        .then(allByCity => res.send(allByCity))
        .catch(() => res.status(500).send('An error ocurred when trying to find properties'));
    });
};