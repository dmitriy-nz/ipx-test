(async function () {
    const fs = require('fs')
    const Sharp = require('sharp')

    await Sharp(fs.readFileSync('./imgs/test.jpg')).resize(200, 200, { fit: 'inside' }).webp().toFile('output.webp', (err, info) => {
        console.log(err, info)
    })

    console.log("Hello World!");
}());

