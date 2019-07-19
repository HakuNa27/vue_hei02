<template>
  <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->
    <div class="thums-pic mui-clearfix">
      <vue-preview :slides="imgs"></vue-preview>
    </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
// 1. 导入评论子组件
import comment from "../subcomponents/comment.vue";


export default {
  data() {
    return {
      id: this.$route.params.id, // 从路由中获取到的 图片Id
      photoinfo: '', // 图片详情
      imgs: [] // 缩略图的数组
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      // 获取图片的详情
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimageInfo/" + this.id)
        .then(result => {
          if (result.body.status === 0) {
            this.photoinfo = result.body.message[0];
          }
        });
    },
    getThumbs() {
      // 获取缩略图
      this.$http
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.id)
        .then(result => {
          if (result.body.status === 0) {
            // 循环每个图片数据，补全图片的宽和高
            this.imgs = result.body.message;
            this.imgs.forEach(item => {
              item.w = 600;
              item.h = 400;
              item.msrc = item.src;
            });
            // // 把完整的数据保存到 list 中
            // this.imgs = result.body.message;
          }
        });
    }
  },
  components: {
    // 注册 评论子组件
    "cmt-box": comment
  }
};
</script>
<style>
 .details-head {
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
    }

    .details-head h3 {
        margin: 20px;
        line-height: 36px;
        text-align: left;
    }

    .details-head p {
        width: 100%;
        padding: 0 20px;
        text-align: left;
    }

    .thums-pic {
        width: 92%;
        margin: 20px auto;
    }

    .thums-pic figure {
        float: left;
        width: 110px;
        margin: 0;
        margin-left: 10px;
    }

    .thums-pic figure img {
        width: 100%;
    }

    .details-body {
        padding: 20px;
        line-height: 36px;
        text-indent: 2em;
        text-align: left;
    }
</style>

