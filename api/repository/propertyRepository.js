const fs = require('fs');
const fetch = require('node-fetch');

function PropertyRepository() {
    this.data = JSON.parse(fs.readFileSync(__dirname + '/../data/data.json'));
}

PropertyRepository.prototype.findAllBySearchPaged = function (search, page, size) {
    return new Promise((resolve, reject) => {
        const allBySearch = this.data
            .filter(function (p) { return (p.overview.city.toUpperCase().includes(search.toUpperCase())) 
                || (p.overview.neighborhood.toUpperCase().includes(search.toUpperCase())) 
                || (p.overview.zipcode.toString() === search) });

        const currentPage = allBySearch.slice(Number(page) * Number(size), (Number(page) + 1) * Number(size));
        const results = {
            content: currentPage,
            page: Number(page),
            size: Number(size),
            totalElements: allBySearch.length
        }
        resolve(results);
    });
}

PropertyRepository.prototype.findMostVisited = async function () {
    return new Promise((resolve, reject) => {
        const property = this.data.sort((a,b) => (a.visits.total < b.visits.total) ? 1 : ((b.visits.total < a.visits.total) ? -1 : 0)).slice(0,4);
        resolve(property);
    });
}

PropertyRepository.prototype.findRecentVisited = async function () {
    return new Promise((resolve, reject) => {
        const property = this.data.sort((a,b) => (new Date(a.visits.lastVisited) < new Date(b.visits.lastVisited)) ? 1 : ((new Date(b.visits.lastVisited) < new Date(a.visits.lastVisited) ) ? -1 : 0)).slice(0,4);
        resolve(property);
    });
}

module.exports = PropertyRepository;