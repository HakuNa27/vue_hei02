<template>
  <div class="goods-list">
    <div class="goods-item">
      <img src="https://farm4.staticflickr.com/3920/15008465772_383e697089_b.jpg" alt>
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg" alt>
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg" alt>
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="https://farm4.staticflickr.com/3920/15008465772_383e697089_b.jpg" alt>
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
}
.goods-item {
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 4px 0;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 293px;
}
img {
  width: 100%;
}
.title {
  font-size: 14px;
}
.info {
  background-color: #eee;
}
p {
  margin: 0;
  padding: 5px;
}
.now {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.old {
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}
.sell {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
</style>
