const fs = require('fs')
const path = require('path')
const pathCurrent = path.join(__dirname, './secret-folder')

fs.readdir(pathCurrent, function (err, files) {
    for (let file of files) {
        const pathFile = path.join(__dirname, './secret-folder', `${file}`)
        const fileName = file
        fs.stat(pathFile, function (err, file) {
            if (file.isFile()) {
                //console.log(fileName.slice(0, fileName.lastIndexOf('.')))
                //console.log(fileName.slice(fileName.lastIndexOf('.') + 1))
                //console.log(file.size)
                console.log(
                    fileName.slice(0, fileName.lastIndexOf('.')) +
                        ' - ' +
                        fileName.slice(fileName.lastIndexOf('.') + 1) +
                        ' - ' +
                        file.size +
                        'b'
                )
            }
        })
    }
})
