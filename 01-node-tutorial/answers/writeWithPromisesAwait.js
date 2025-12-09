const { writeFile, readFile } = require("fs").promises;
const filePath = './temporary/temp.txt'

async function writer() {
    try {
        await writeFile(filePath, "Hello\n")
        await writeFile(filePath, "World\n", { flag: 'a'})
        await writeFile(filePath, "!", { flag: 'a'})
    } catch (error) {
        console.log(error)
    }
}

async function reader() {
    try {
        const content = await readFile(filePath, 'utf-8')
        console.log(content)
    } catch (error) {
        console.log(error)
    }
}

async function readWrite() {
    try {
        await writer()
        await reader()
    } catch (error) {
        console.log(error)
    }
}

readWrite()