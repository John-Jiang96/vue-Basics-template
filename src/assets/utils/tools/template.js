import component from '@/components'
export default class Component {
    constructor(content = []) {
        this.content = content
    }
    registerMethods() {
        this.configList = component.concat(this.content)
    }
    install(vue) {
        this.registerMethods()
        this.configList.forEach(item => {
            vue.component(item.name, item.entity)
        })
    }
}