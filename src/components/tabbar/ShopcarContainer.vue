<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="(item,index) in goodslist" :key="index">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox></numbox>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>
              已勾选商品
              <span class="red"></span> 件， 总价
              <span class="red"></span>
            </p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
  data(){
    return {
      goodslist:[]
    }
  },
  created(){
    this.getGoodsList()
  },
  methods:{
    getGoodsList(){
       // 1. 获取到 store 中所有的商品的Id，然后拼接出一个 用逗号分隔的 字符串
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      // 如果 购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错=
      if(idArr.length<=0){
        return
      }
       // 获取购物车商品列表
       this.$http.get("http://www.liulongbin.top:3005/api/goods/getshopcarlist/"+idArr.join(","))
       .then(result=>{
         if(result.body.status==0){
           console.log(result.body);
           
           this.goodslist=result.body.message
           
         }
       })
    }
  },
  components:{
    numbox,
  }
}
</script>

<style scoped>
.shopcar-container {
background-color: #eee;
overflow: hidden;
}
.mui-card-content-inner {
display: flex;
align-items: center;
padding: 10px;
}
.mint-switch-core{
width: 45px;
height:25px;
}
::before{
width: 23px;
height:24px;
}
::after{
width: 23px;
height:23px;
}
img {
width: 50px;
}
h1 {
font-size: 13px;
}
.info {
display: flex;
flex-direction: column;
justify-content: space-between;
}
.price {
color: red;
font-weight: bold;
}
.jiesuan {
display: flex;
justify-content: space-between;
align-items: center;
}
.red {
color: red;
font-weight: bold;
font-size: 16px;
}

.mui-card{
margin: 8px;
}

</style>