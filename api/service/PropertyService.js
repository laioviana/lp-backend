var PropertyRepository = require('../repository/propertyRepository')
const BadRequestError = require('../utils/badRequestError');

function PropertyService() {
    this.propertyRepository = new PropertyRepository();
}


PropertyService.prototype.findByNeighborhood = function (neighborhood) {
    if (!neighborhood) {
        throw new BadRequestError('Neighborhood must be informed!');
    }
    return this.propertyRepository.findByNeighborhood(neighborhood);
}

PropertyService.prototype.findByCity = function (city) {
    if (!city) {
        throw new BadRequestError('City must be informed!');
    }
    return this.propertyRepository.findByCity(city);
}

PropertyService.prototype.findByZipcode = function (zipcode) {
    if (!zipcode) {
        throw new BadRequestError('Zipcode must be informed!');
    }
    return this.propertyRepository.findByZipcode(zipcode);
}

PropertyService.prototype.findByType = function (type) {
    if (!type) {
        throw new BadRequestError('Property Type must be informed!');
    }
    return this.propertyRepository.findByNeighborhood(neighborhood);
}

PropertyService.prototype.findAllBySearch = function (search, page, size) {
    return this.propertyRepository.findAllBySearchPaged(search, page, size);
}

PropertyService.prototype.findMostVisited = function () {
    return this.propertyRepository.findMostVisited();
}

PropertyService.prototype.findRecentVisited = function () {
    return this.propertyRepository.findRecentVisited();
}

module.exports = function () {
    return PropertyService;
}