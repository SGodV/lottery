<template>
    <div class="create_view">
      <div class="create_title">
        新建摇号活动
      </div>
      <div class="context_view">
        <div class="left_view">
          <router-link class="tab_bar" :class="{active:isShow===1}" @click.native="tabShow1" :to="'/CreateLottery/ShowDefine'">展示定义</router-link>
          <router-link class="tab_bar" :class="{active:isShow===2}" @click.native="tabShow2" :to="'/CreateLottery/RuleDefine'">规则定义</router-link>
          <router-link class="tab_bar" :class="{active:isShow===3}" @click.native="tabShow3" :to="'/CreateLottery/UserDefine'">用户定义</router-link>
        </div>
        <div class="right_view">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </div>
        <button class="create_lottery" v-on:click="createLottery">新增摇号活动</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CreateLottery",
      data () {
          return {
            isShow: 1,
            pic: []
          }
      },
      methods: {
        tabShow1: function () {
          this.isShow = 1;
          // console.log(1)
        },
        tabShow2: function () {
          this.isShow = 2;
        },
        tabShow3: function () {
          this.isShow = 3;
        },
        createLottery: function () {

         let file = this.GLOBAL.lotteryInfo.pic;
          // console.log(file);
          if(file) {
            let reader = new FileReader();
            var that = this;
            reader.readAsDataURL(file);
            reader.onload= function(e){
              // 这里的this 指向reader
              that.pic = this.result;
              let postData = that.$qs.stringify({
                title: that.GLOBAL.lotteryInfo.lotteryTitle,
                numIf: that.GLOBAL.lotteryInfo.isNum,
                numLength: that.GLOBAL.lotteryInfo.numLength,
                letterIf: that.GLOBAL.lotteryInfo.isLetter,
                letterLength: that.GLOBAL.lotteryInfo.letterLength,
                joinNum: that.GLOBAL.lotteryInfo.peopleNum,
                winNum: that.GLOBAL.lotteryInfo.lotteryNum,
                pic: this.result
              });
              console.log(postData);
              that.$ajax({
                method: 'post',
                url: that.GLOBAL.host+'/period/createlottery',
                data: postData
              }).then(function (res) {
                console.log(res);
                console.log(res.data.data);
                if (res.data.msg === 'success') {
                  that.GLOBAL.lotteryInfo = [];
                  that.$parent.navShow1();
                  that.$notify({
                    title: '填充成功',
                    message: res.data.msg,
                    type: 'success'
                  });
                  that.$router.push({path: '/AdminHome'});
                } else {
                  that.GLOBAL.lotteryInfo = [];
                  that.$parent.navShow1();
                  that.$notify.error({
                    title: '错误',
                    message: res.data.msg
                  });
                  that.$router.push({path: '/AdminHome'});
                }
              }).catch(function (err) {
                console.log(err);
              });
            }
            }
          }
      }
    }
</script>

<style scoped>
  .create_view {
    margin: 100px 0
  }
  .create_title {
    margin: 40px 0;
    font-weight: 600;
    font-size: 30px;
    color: orangered;
  }
  .context_view {
    height: 1000px;
  }
  .left_view {
    float: left;
    width: 440px;
  }
  .tab_bar {
    display: block;
    margin: 30px auto;
    cursor: pointer;
    font-size: 20px;
    text-decoration: none;
  }
  .active {
    font-weight: 600;
  }
  .right_view {
    float: right;
    width: 1000px;
  }
  .create_lottery {
    margin: 100px 0;
    width: 50%;
    height: 48px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 24px;
    background-color: rgb(255, 65, 15);
    color: rgb(255, 255, 255);
    cursor: pointer;
    padding: 0px;
    /* border-width: initial; */
    border-style: none;
    border-color: initial;
    -o-border-image: initial;
    border-image: initial;
  }
  .form-action button[data-v-ef68022e] {
    width: 100%;
    height: 48px;
    font-size: 16px;
    border-radius: 24px;
  }
</style>
