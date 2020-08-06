<template>
  <div>
    <van-nav-bar title="我的购物车" left-arrow @click-left="goBack"/>
    <!-- 购物车的列表组装件 -->
    <div class="item" v-for="(item,index) in cartList" :key="index">
      <van-checkbox v-model="item.checked" />
      <van-card class="card" :price="item.price" :title="item.name" :thumb="item.pic">
        <template #num>
          <van-stepper v-model="item.nums" />
        </template>
      </van-card>
    </div>

    <van-submit-bar class="btt" :price="totalAmounts" button-text="提交订单">
      <input type="checkbox" v-model="checked" @change="checkall" />全选
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {
    this.cartList = this.$store.state.cartList;
    console.log(this.checked);
  },
  data() {
    return {
      cartList: [],
      checked: true,
    };
  },
  computed: {
    totalAmounts(){
      let amounts = 0;
      this.cartList.forEach(item=>{
        if(item.checked == true){
          amounts += item.nums*item.price;
        }
      });

      return amounts*100;
    }
  },
  watch: {
    cartList:{
      handler(value){
        this.$store.commit("addCart",value);
        this.$store.commit("countCarts");

        let arr = value.filter(item=>{
          return item.checked == true;
        });

        if(value.length == arr.length){
          this.checked = true;
        }else{
          this.checked = false;
        }
      },
      deep: true,
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    checkall(e){
      console.log(e)
      this.cartList.forEach(item=>{
        item.checked=e.target.checked
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  padding: 0.2rem;
  box-sizing: border-box;
  display: flex;
  .card {
    flex: 1;
  }
}
.btt{
  bottom: 50px;
}
</style>
