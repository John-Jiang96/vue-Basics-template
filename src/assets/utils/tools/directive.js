export default class Directive {
    constructor(content) {
        this.content = content || []
    }
    registerMethods() {
        let options = [{
            name: 'focus',
            entity: {
                inserted: function(el) {
                    el.focus()
                }
            }
        }]
        this.configList = options.concat(this.content)
    }
    install(vue) {
        this.registerMethods()
        this.configList.forEach(item => {
            vue.directive(item.name, item.entity)
        })
    }
}