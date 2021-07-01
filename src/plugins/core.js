import { Loading } from 'element-ui';
import axios from 'axios';
import tools from '@/assets/utils/tools';
let loading;
let loadingNum = 0;
export default {
    startLoading() {
        if (loadingNum === 0) {
            loading = Loading.service({
                lock: true,
                text: '加载中...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
        }
        loadingNum++;
    },
    endLoading() {
        setTimeout(this.closeLoading, 300);
    },
    closeLoading() {
        if (loadingNum > 0) {
            loadingNum--;
        }
        if (loadingNum <= 0 && loading) {
            loading.close();
        }
    },
    install(vue) {
        vue.use(new tools())
        axios.defaults.baseURL = Vue.$config.axiosBaseUrl;
        axios.defaults.responseType = Vue.$config.axiosResponseType;
        axios.defaults.timeout = 10000;
        axios.defaults.withCredentials = true;

        axios.interceptors.request.use(
            config => {
                this.startLoading();
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );

        axios.interceptors.response.use(
            response => {
                this.endLoading();
                return response;
            },
            error => {
                this.endLoading();
                return Promise.reject(error);
            }
        );
    }
};