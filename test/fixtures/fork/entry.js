const Cp = require('./worker.js');

module.exports = function () {
    return new Promise((resolve) => {
        const p = new Cp()
        p.on('message', (r) => {
            resolve(r)
        })
        p.send('it works')
    })
}