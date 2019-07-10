<template>
    
</template>

<script>
  const host = 'http://localhost:8090';
  const userInfo = [];
  export default
  {
    name: "Global",
    host,
    userInfo,
    // 设置属性方法
    setUserInfo(userInfo){
      this.userInfo = userInfo;
    },
  }
</script>

<style scoped>

</style>
