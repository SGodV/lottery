<template>
  <div style="margin: 100px 0;">
    <div class="home_view" >
      <label>用户名称：{{userInfo.userName}}</label>
      <label>用户邮箱：{{userInfo.userEmail}}</label>
      <!-- <label>用户手机：{{userInfo.userPhone}}</label> -->
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserInfo",
      data () {
          return {
            userInfo: this.GLOBAL.userInfo
          }
      }
    }
</script>

<style scoped>
  .home_view {
    margin: 100px 0
  }
  .home_view label {
    display: block;
    margin: 10px 0;
    font-size: 20px;
    font-weight: 600;
  }
</style>
