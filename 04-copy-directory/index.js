const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname, 'files-copy'), () => {})
const pathCurrent = path.join(__dirname, './files')
const pathCopy = path.join(__dirname, './files-copy')

fs.readdir(pathCurrent, function (err, files) {
    for (let file of files) {
        const pathFile = path.join(__dirname, './files', `${file}`)
        const pathNewFile = path.join(__dirname, './files-copy', `${file}`)
        fs.copyFile(pathFile, pathNewFile, (err) => {})
    }
})
