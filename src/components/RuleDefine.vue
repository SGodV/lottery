<template>
  <div class="show_define_view">
    <div class="form-block">
      <label for="is_num" class="">是否使用数字</label>
      <input id="is_num" type="checkbox" @change="getIN" placeholder="请输入数字位数" v-model="isNum" class="">
    </div>
    <div class="form-block">
      <label for="is_letter">是否使用英文字母</label>
      <input id="is_letter" type="checkbox" @change="getIL" placeholder="请输入字母位数" v-model="isLetter" class="">
      <label for="is_letter">（英文字母会加在数字前面）</label>
    </div>
    <div class="form-block" v-if="isNum">
      <label for="num">数字长度</label>
      <input id="num" type="number" @change="getNL" placeholder="请输入数字长度" v-model="numLength" class="">
    </div>
    <div class="form-block" v-if="isLetter">
      <label for="letter">字母长度</label>
      <input id="letter" type="number" @change="getLL" placeholder="请输入活动标题" v-model="letterLength" class="">
    </div>
  </div>
</template>

<script>
    export default {
      name: "RuleDefine",
      data () {
          return {
            isNum: false,
            isLetter: false,
            numLength: [],
            letterLength: []
          }
      },
      methods: {
          getIN: function () {
            this.GLOBAL.lotteryInfo.isNum = this.isNum;
          },
        getIL: function () {
          this.GLOBAL.lotteryInfo.isLetter = this.isLetter;
        },
        getNL: function () {
          this.GLOBAL.lotteryInfo.numLength = this.numLength;
        },
        getLL: function () {
          this.GLOBAL.lotteryInfo.letterLength = this.letterLength;
        }
      }
    }
</script>

<style scoped>
  .show_define_view {
    margin: auto;
  }
  .create_title {
    margin: 40px 0;
    font-weight: 600;
    font-size: 20px;
    color: orangered;
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
