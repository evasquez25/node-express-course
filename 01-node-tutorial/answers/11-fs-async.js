const { writeFile } = require("fs")
const filePath = "./temporary/fileB.txt"

console.log("Writing to file...")
writeFile(filePath, "This is line 1\n", (err, result) => {
    console.log("writing line 1...")
    if (err) {
        console.log("Error writing line 1:", err)
    } else {
        console.log("Line 1 written successfully!")
        writeFile(filePath, "This is line 2\n", { flag: "a" }, (err, result) => {
            console.log("writing line 2...")
            if (err) {
                console.log("Error writing line 2:", err)
            } else {
                console.log("Line 2 written successfully!")
                writeFile(filePath, "This is line 3", { flag: "a" }, (err, result) => {
                    console.log("writing line 3...")
                    if (err) {
                        console.log("Error writing line 3:", err)
                    } else {
                        console.log("Line 3 written successfully!")
                    }
                })
            }
        })
    }
});

console.log("At end.")
