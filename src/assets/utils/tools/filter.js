export default class Filter {
    constructor(content) {
        this.content = content || []
    }
    registerMethods(vue) {
        let options = [{
                name: 'format',
                methodSubject: (num, len) => {
                    if (!num || isNaN(num)) return 0.00
                    if (len != undefined) {
                        return `${(num * 1).toFixed(len)}`.replace(
                            /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,
                            "$&,"
                        );
                    } else {
                        return `${(num * 1).toFixed(2)}`.replace(
                            /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,
                            "$&,"
                        );
                    }
                }
            },
            {
                name: 'getDay',
                methodSubject: (times, type = 'YYYY-MM-DD') => {
                    if (!times) return ''
                    return vue.$dayjs(times).format(type)
                }
            },
        ]
        this.configList = options.concat(this.content);
    }
    install(vue) {
        this.registerMethods(vue)
        this.configList.forEach((f) => {
            vue.filter(f.name, f.methodSubject)
        })
    }
}