const { stdin, stdout } = process
const fs = require('fs')
const path = require('path')

const output = fs.createWriteStream(path.join(__dirname, 'text.txt'))

stdout.write('Ожидание ввода текста...\n')

stdin.on('data', (data) => {
    const dataStr = data.toString().trim()
    if (dataStr === 'exit') {
        process.exit()
    } else {
        output.write(data.toString())
        stdout.write(
            'Ожидание ввода дополнительного текста... (или exit для завершения)\n'
        )
    }
})
process.on('exit', () => stdout.write('Всего доброго, до свидания!'))
process.on('SIGINT', process.exit)
