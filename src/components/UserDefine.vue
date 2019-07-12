<template>
  <div class="show_define_view">
    <div class="form-block">
      <label for="num">允许参与人数</label>
      <input id="num" type="number" @change="getPN" placeholder="请输入参与人数" v-model="peopleNum" class="">
    </div>
    <div class="form-block">
      <label for="num2">中签数</label>
      <input id="num2" type="number" @change="getLN" placeholder="请输入中签数" v-model="lotteryNum" class="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserDefine",
      data () {
          return {
            peopleNum: [],
            lotteryNum: []
          }
      },
      methods: {
          getPN: function () {
            this.GLOBAL.lotteryInfo.peopleNum = this.peopleNum;
          },
        getLN: function () {
          this.GLOBAL.lotteryInfo.lotteryNum = this.lotteryNum;
        }
      }
    }
</script>

<style scoped>
  .show_define_view {
    margin: auto;
  }
  .form-block {
    margin: 20px 0;
  }
  .form-block label {
    display: block;
    margin: 10px 30px;
    text-align: left;
    font-size: 20px;
    color: rgb(153, 153, 153);
  }
  .form-block input {
    padding: 8px 18px;
    margin: 0 30px;
  }
  input {
    width: 100%;
    height: 30px;
    background-color: rgb(247, 247, 247);
    /*border-width: initial;*/
    border-style: none;
    border-color: initial;
    -o-border-image: initial;
    border-image: initial;
    border-radius: 2px;
  }
</style>
