
function Property(data) {
    Object.assign(this, data);
}

Property.prototype.getOverview = function () {
    return this.overview;
}

Customer.prototype.setOverview = function (overview) {
    this.overview = overview;
}

Customer.prototype.getFacts = function () {
    return this.facts;
}

Customer.prototype.setFacts = function (facts) {
    this.facts = facts;
}

Customer.prototype.getOthers = function () {
    return this.others;
}

Customer.prototype.setOthers = function (others) {
    this.others = others;
}

Customer.prototype.getVisits = function () {
    return this.visits;
}

Customer.prototype.setVisits = function (visits) {
    this.visits = visits;
}

Customer.prototype.getHomeImage = function () {
    return this.homeImage;
}

Customer.prototype.setHomeImage = function (homeImage) {
    this.homeImage = homeImage;
}

Customer.prototype.getImages = function () {
    return this.images;
}

