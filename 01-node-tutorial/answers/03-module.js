const names = require("./04-name.js")
console.log(names)

const greet = require("./05-utils.js")
greet(names.john)
greet(names.bob)
greet(names.ashley)

const flavors = require("./06-alternative-flavor.js")
console.log("Their favorite flavors are: ", flavors)

require("./07-mind-granade.js")