const {writeFile, readFile } = require("fs").promises
const filePath = "./temporary/temp.txt"

writeFile(filePath, "Hello\n")
.then(() => {
    return writeFile(filePath, "World\n", { flag: 'a' })
})
.then(() => {
    return writeFile(filePath, "!", { flag: 'a' })
})
.then(() => {
    return readFile(filePath, "utf-8")
})
.then((content) => {
    console.log(content)
})
.catch((error) => {
    console.log(error)
})