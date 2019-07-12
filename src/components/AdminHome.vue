<template>
  <div class="home_view" >
    <div class="home_item" v-for="lottery in lotteryList">
      <label>{{lottery.title}}</label>
      <button class="apply_button">删除</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AdminHome",
      data () {
        return {
          lotteryList: [
            {title: '北京市购房摇号'},
            {title: '杭州市购车摇号'}
          ]
        }
      }
    }
</script>

<style scoped>
  .home_view {
    margin: 100px 0
  }
  .home_item {
    margin: 20px 0;
  }
  .home_item label {
    font-size: 30px;
    font-weight: bold;
    padding: 0 30px;
  }
  .apply_button {
    font-size: 16px;
    border-radius: 10px;
    width: 100px;
    height: 33px;
    background-color: rgb(255, 65, 15);
    color: rgb(255, 255, 255);
    cursor: pointer;
    padding: 0px;
    /*border-width: initial;*/
    border-style: none;
    border-color: initial;
    -o-border-image: initial;
    border-image: initial;
  }
</style>
