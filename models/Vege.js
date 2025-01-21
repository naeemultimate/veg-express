const veges = require('../veges.json')

class Vege {
constructor(vege) {
    this.id = vege.id
    this.name = vege.name
    this.family = vege.family
    this.order = vege.order
    this.nutritions = vege.nutritions
}

static showAll() {
    return veges.map(e => new Vege(e))
}

}

module.exports = Vege