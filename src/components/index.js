const files = require.context('./', true, /\.js$/)
let modules = []
files.keys().forEach((key) => {
    let module = files(key)
    if (module.default) {
        modules.push({
            name: module.default.name,
            entity: module.default
        })
    }
})
export default modules