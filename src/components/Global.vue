<template>
    
</template>

<script>
  const host = 'http://geefrp.sproutgod.xyz:8090';
  const userInfo = [];
  const lotteryInfo = [];
  export default
  {
    name: "Global",
    host,
    userInfo,
    lotteryInfo,
    // 设置属性方法
    setUserInfo(userInfo){
      this.userInfo = userInfo;
    },
  }
</script>

<style scoped>

</style>
