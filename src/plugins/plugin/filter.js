export default {
    name: 'Filter',
    entity: [{
        name: 'trim',
        entity: (value, trim) => {
            switch (trim) {
                case 1:
                    return value.replace(/\s+/g, "");
                case 2:
                    return value.replace(/(^\s*)|(\s*$)/g, "");
                case 3:
                    return value.replace(/(^\s*)/g, "");
                case 4:
                    return value.replace(/(\s*$)/g, "");
                default:
                    return value;
            }
        }
    }]

}