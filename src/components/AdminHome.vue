<template>
  <div class="home_view" >
    <div class="home_item" v-for="lottery in lotteryList">
      <label>{{lottery.title}}</label>
      <button class="apply_button" @click="clickLottery(lottery)">去摇号</button>
      <button class="apply_button" @click="clickAutoGenerate(lottery.id)">自动填充参与人</button>
      <button class="apply_button" @click="clickDelete(lottery.id)">删除</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AdminHome",
    data () {
      return {
        lotteryList: [],
        active: true
      }
    },
    methods: {
      clickLottery: function (lottery) {
        this.$router.push({
          name: 'StartLottery',
          params: {
            lottery: lottery
          }
        })
      },
      clickAutoGenerate: function (id) {
        var that = this;
        this.$ajax.get(this.GLOBAL.host+'/record/autogenerate',{
          params: {
            periodId: id
          }
        }).then(function (res) {
            console.log(res);
            console.log(res.data.data);
          if (res.data.msg === 'success') {
            that.$notify({
              title: '填充成功',
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
      clickDelete: function (id) {
        var that = this;
        this.$ajax.get(this.GLOBAL.host+'/period/deletebyid',{
          params: {
            id: id
          }
        })
          .then(function (res) {
            console.log(res);
            console.log(res.data.data);
            that.$ajax.get(that.GLOBAL.host+'/period/loadall')
              .then(function (res) {
                console.log(res);
                console.log(res.data.data);
                if (res.data.msg === 'success') {
                  that.lotteryList = res.data.data;
                  that.$notify({
                    title: '删除成功',
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
          }).catch(function (err) {
          console.log(err);
        });
      }
    },
    mounted: function () {
      var that = this;
      this.$ajax.get(this.GLOBAL.host+'/period/loadall')
        .then(function (res) {
          console.log(res);
          console.log(res.data.data);
          that.lotteryList = res.data.data;
        }).catch(function (err) {
        console.log(err);
      });
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
    width: 150px;
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
