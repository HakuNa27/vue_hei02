<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" alt="" :class="{full: isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
    props:["lunbotuList","isfull"]
}
</script>

<style>
.mint-swipe {
  height: 200px
  }

.mint-swipe-item img {
      /* width: 100%; */
      height: 100%;
    }
.mint-swipe {
  height: 200px;
}

.mint-swipe-item {
  text-align: center;
}

.full {
  width: 100%;
}
</style>
