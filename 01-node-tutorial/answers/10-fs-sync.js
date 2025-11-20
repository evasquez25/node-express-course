const { writeFileSync, readFileSync } = require("fs")
const filePath = "./temporary/fileA.txt"

writeFileSync(filePath, "Hello World\n")
writeFileSync(filePath, "My name is Eric, ", { flag: "a" })
writeFileSync(filePath, "I am 23 years old", { flag: "a" })

const content = readFileSync(filePath, "utf-8")
console.log(content)