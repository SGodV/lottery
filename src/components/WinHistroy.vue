<template>
  <div style="margin: 100px 0;">
    <div class="home_view" >
      <div class="home_left" >
        <label>摇号名</label>
        <div class="home_item" v-for="lottery in lotteryList">
          <label>{{lottery}}</label>
        </div>

      </div>
      <div class="home_right" >
        <label>摇号码</label>
        <div class="home_item" v-for="(lottery, key) in lotteryList">
          <label>{{key}}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "WinHistroy",
      data () {
        return {
          lotteryList: [],

        }
      },
      mounted: function () {
        console.log('挂载');
        var that = this;
        this.$ajax.get(this.GLOBAL.host+'/result/getwinlist',{
          params: {
            userId: this.GLOBAL.userInfo.id
          }
        })
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
        console.log('更新');
      }
    }
</script>

<style scoped>
  .home_view {
    margin: 100px 0
  }
  .home_left{
    margin: 20px 0;
    float: left;
    width: 1000px;
  }
  .home_left label {
    font-size: 30px;
    font-weight: bold;
    padding: 0 30px;
  }
  .home_right{
    margin: 20px 0;
    float: left;
    width: 440px;
  }
  .home_right label {
    font-size: 30px;
    font-weight: bold;
    padding: 0 30px;
  }
  .home_item {
    margin: 20px 0;
  }
  .home_item label {
    font-size: 20px;
    font-weight: bold;
    padding: 0 30px;
  }
</style>
