<template>
  <div class="home_view"  :style="{backgroundImage: 'url(' + (lottery.pic) + ')'}">
    <!--<img :src="avatar?avatar:require('../assets/logo.png')"/>-->
    <div class="item_view">
      <div class="home_item">
        <label>摇号名：{{lottery.title}}</label>
      </div>
      <div class="home_item">
        <button class="apply_button" @click="clickLottery()">开始摇号</button>
      </div>
      <div class="home_item">
        <label>中签用户邮箱</label>
        <label>摇号码</label>
      </div>
      <div class="home_item" v-for="(lottery,key) in lotteryList">
        <label>{{plusXing(lottery, 4, 6, '*')}}</label>
        <label>{{plusXing(key, 1, 1, '*')}}</label>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "StartLottery",
    data () {
      return {
        lottery: [],
        lotteryList: []
      }
    },
    methods: {
      clickLottery: function () {
        var that = this;
        this.$ajax.get(this.GLOBAL.host+'/period/lottery',{
          params: {
            periodId: this.lottery.id
          }
        }).then(function (res) {
          console.log(res);
          console.log(res.data.data);
          if (res.data.msg === 'success') {
            that.lotteryList = res.data.data;
            that.$notify({
              title: '摇号完成',
              message: res.data.msg,
              type: 'success'
            });
          } else {
            that.$notify.error({
              title: '错误',
              message: res.data.msg
            });
          }
        }).catch(function (err) {
          console.log(err);
        });
      },
      plusXing: function (str, frontLen, endLen, cha) {
        var len = str.length - frontLen - endLen;
        var xing = '';
        for (var i = 0; i < len; i++) {
          xing += cha;
        }
        return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
      }
  },
    mounted: function () {
      var that = this;
      this.lottery = this.$route.params.lottery;
      console.log("挂载" + this.lottery.id);
      this.$ajax.get(this.GLOBAL.host+'/period/downloadpic',{
        params: {
          id: this.lottery.id
        }
      })
        .then(function (res) {
          console.log(res);
          console.log(res.data.data);
          if (res.data.msg === 'success') {
            that.lottery.pic = res.data.data;
            that.$notify({
              title: '背景加载成功',
              message: res.data.msg,
              type: 'success'
            });
          } else {
            that.$notify.error({
              title: '错误',
              message: res.data.msg
            });
          }
        }).catch(function (err) {
        console.log(err);
      });
    }
  }
</script>

<style scoped>
  .home_view {
    margin: 100px 0;
    background: no-repeat center top #000;
    background-size: cover;
    /*background-*/
    height: 1080px;
  }
  .item_view {
    background:rgba(255,255,255,0.3);
    height: inherit;
  }
  .home_view label {
    font-size: 30px;
    font-weight: bold;
    padding: 0 30px;
  }
  .home_item {
    margin: 20px 0;
  }
  .home_item label {
    font-size: 30px;
    font-weight: bold;
    padding: 0 30px;
  }
  button {
    width: 30%;
    height: 48px;
    font-size: 16px;
    border-radius: 24px;
    background-color: rgb(255, 65, 15);
    color: rgb(255, 255, 255);
    cursor: pointer;
    padding: 0px;
    /*border-width: initial;*/
    border-style: none;
    border-color: initial;
    border-image: initial;
  }
</style>
