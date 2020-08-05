<template>
  <div>
    <!-- 轮播图区域 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,index) in banners" :key="index">
        <img :src="item.pic" />
      </van-swipe-item>
    </van-swipe>

    <!-- 选项卡操作 -->
    <div class="tab-item">
      <van-tabs v-model="active">
        <van-tab title="商品详情">
          <p v-html="content"></p>
        </van-tab>
        <van-tab title="商品评价">
          <p>商品评价</p>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 返回按钮 -->
    <div class="arrow" @click="goBack">
      <van-icon name="arrow-left" size="30" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["content", "banners"],
  data() {
    return {
         active: 0,
    };
  },
  computed: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.tab-item {
  width: 100%;
  background: #fff;
  margin-top: 0.2rem;
  p {
    padding: 0.15rem;
    width: 100% !important;
    box-sizing: border-box;
    img {
      width: 100% !important;
      height: 2rem !important;
    }
  }
}
.arrow {
  padding: 0.1rem;
  box-sizing: border-box;
  background: #f0f0f0;
  border-radius: 50%;
  position: fixed;
  top: 0.5rem;
  left: 0.3rem;
}
</style>
