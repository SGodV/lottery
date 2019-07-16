<template>
  <div class="home_view" >
    <div class="home_item" v-for="lottery in lotteryList" :key="lottery.id">
      <label>{{lottery.title}}</label>
      <button class="apply_button" @click="apply(lottery.id)">申请</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data () {
      return {
        lotteryList: [],
        isLogin: this.$route.params.isLogin
      }
    },
    methods: {
      apply: function (id) {
        this.$ajax.get(this.GLOBAL.host+'/record/apply',{
          params: {
            userId: this.GLOBAL.userInfo.id,
            periodId:id
          }
        })
          .then(function (res) {
            console.log(res);
            console.log(res.data.data);
            if (res.data.msg === 'success') {
              that.$notify({
                title: '申请成功',
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
    },
    mounted: function () {
           // console.log("挂载了："+this.$route.params.isLogin);
      var that = this;
      this.$ajax.get(this.GLOBAL.host+'/period/loadall')
        .then(function (res) {
        console.log(res);
        console.log(res.data.data);
          if (res.data.msg === 'success') {
            that.lotteryList = res.data.data;
            that.$notify({
              title: '获取成功',
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
    updated: function () {
      // console.log("更新了："+this.$route.params.isLogin);
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
