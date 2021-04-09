var PropertyRepository = require('../repository/propertyRepository')
const BadRequestError = require('../utils/badRequestError');

function PropertyService() {
    this.propertyRepository = new PropertyRepository();
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