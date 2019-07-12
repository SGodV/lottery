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
      </div>
    </div>
</template>

<script>
    export default {
        name: "CreateLottery",
      data () {
          return {
            isShow: 1
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
</style>
