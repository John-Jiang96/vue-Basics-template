const config = {
    projectName: API_CONFIG[window.rdpModule].VUE_APP_TITLE,
    historyMode: 'history',
    axiosResponseType: 'json',
    home: API_CONFIG[window.rdpModule].VUE_APP_SYSTEM_HOME_URL,
    isIndex: API_CONFIG[window.rdpModule].VUE_IS_INDEX,
    timeout: 10000
};

export default {
    development: Object.assign({
            axiosBaseUrl: '/'
        },
        config
    ),
    production: Object.assign({
            axiosBaseUrl: ''
        },
        config
    )
};