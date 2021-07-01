const files = require.context('./', true, /\.js$/)
let modules = {}
files.keys().forEach((key) => {
    let module = files(key)
    let name = key.split('/')[1].split('.')[0];
    if (module.default) {
        modules[name] = module.default
    }
})
export default modules