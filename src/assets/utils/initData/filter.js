export default {
    entity: [{
            name: 'format',
            entity: (num, len) => {
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
            entity: (times, type = 'YYYY-MM-DD') => {
                if (!times) return ''
                return Vue.$dayjs(times).format(type)
            }
        },
        {
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
        }
    ]

}