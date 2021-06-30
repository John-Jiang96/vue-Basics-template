const files = require.context('./plugin', true, /\.js$/)
let modules = {}
files.keys().forEach((key) => {
    let module = files(key)
    if (module.default) {
        modules[module.default.name] = module.default.entity
    }
})
export default modules