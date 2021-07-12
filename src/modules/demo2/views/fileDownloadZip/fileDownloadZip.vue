<template>
  <div v-loading="loading">
    fileDownloadZip
    <img
      v-for="(item, index) of imgList"
      :key="index"
      :src="item.url"
      alt=""
    />
    <el-button @click="filesToRar()">下载图片</el-button>
    <el-button @click="$router.go(-1)">返回</el-button>
  </div>
</template>
<script>
import JSZip from "jszip";
import FileSaver from "file-saver";
export default {
  name: "fileDownloadZip",
  data() {
    return {
      loading: false,
      imgList: [
        {
          url: "https://img2.baidu.com/it/u=1077360284,2857506492&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          url: "https://img0.baidu.com/it/u=3155998395,3600507640&fm=26&fmt=auto&gp=0.jpg",
        },
      ],
    };
  },
  methods: {
    filesToRar(arrImages = this.imgList, filename = "学生涂鸦答题照片") {
      this.loading = true;
      let _this = this;
      let zip = new JSZip();
      let cache = {};
      let promises = [];
      let i = 0;
      arrImages.forEach((item) => {
        var promise = _this.getImgArrayBuffer(item.url).then((data) => {
          i++;
          let name = "(" + i + ")" + item.title + ".png";
          // 下载文件, 并存成ArrayBuffer对象(blob)
          zip.file(name, data, { binary: true }); // 逐个添加文件
          cache[name] = data;
        });
        promises.push(promise);
      });
      Promise.all(promises)
        .then(() => {
          zip.generateAsync({ type: "blob" }).then((content) => {
            // 生成二进制流
            setTimeout(() => {
              this.loading = false;
              FileSaver.saveAs(content, filename); // 利用file-saver保存文件  自定义文件名
            }, 1000);
          });
        })
        .catch((res) => {
          console.log("压缩失败");
        });
    },

    /**通过url获取文件blob
     *@param {string} url 图片http路径
     **/
    getImgArrayBuffer(url) {
      return new Promise((resolve, reject) => {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.responseType = "blob";
        xmlhttp.onload = function () {
          if (this.status == 200) {
            resolve(this.response);
          } else {
            reject(this.status);
          }
        };
        xmlhttp.send();
      });
    },
  },
};
</script>