const fs = require('fs')
const path = require('path')

const pathCurrent = path.join(__dirname, './styles')
const pathDestinationFile = path.join(__dirname, './project-dist', 'bundle.css')

const output = fs.createWriteStream(pathDestinationFile)

fs.readdir(pathCurrent, function (err, files) {
    for (let file of files) {
        if (file.slice(-3) === 'css') {
            const pathFile = path.join(__dirname, './styles', `${file}`)
            const input = fs.createReadStream(pathFile, 'utf-8')
            input.pipe(output)
        }
    }
})
