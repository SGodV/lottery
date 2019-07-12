<template>
  <div id="app">
    <div class="app">
      <div class="page-container">
        <div class="top-nav" data-spm="topnav">
          <div class="top-nav-wrapper">
            <router-link class="active" @click.native="navShow1" :to="'/'">
              <div class="logo"></div>
            </router-link>
            <div class="links" v-if="isAdmin">
              <router-link :class="{active:isShow===1}" @click.native="navShow1" :to="'/AdminHome'">摇号活动</router-link>
              <router-link :class="{active:isShow===2}" @click.native="navShow2" :to="'/CreateLottery/ShowDefine'">创建摇号</router-link>
              <router-link :class="{active:isShow===3}" @click.native="navShow3" :to="{name: 'Home'}">摇号界面</router-link>
              <router-link :class="{active:isShow===4}" @click.native="navShow4" :to="'/'">摇号结果</router-link>
            </div>
            <div class="links" v-else>
              <router-link :class="{active:isShow===1}" @click.native="navShow1" :to="'/'">摇号活动</router-link>
              <router-link :class="{active:isShow===2}" @click.native="navShow2" :to="{name: 'Home'}">摇号历史</router-link>
              <router-link :class="{active:isShow===3}" @click.native="navShow3" :to="{name: 'Home'}">摇中历史</router-link>
              <router-link :class="{active:isShow===4}" @click.native="navShow4" :to="{name: 'Home'}">会员中心</router-link>
            </div>
            <div class="user">
              <div class="login-text" v-if="isLogin">
                <span>欢迎，{{this.GLOBAL.userInfo.userName}}</span>
                <span v-on:click="clickExit">退出</span>
              </div>
              <div class="login-text" v-else v-on:click="changeLoginIf">登录/注册</div>

            </div>
          </div>
        </div>
        <router-view/>
      </div>
    </div>
    <!--<login-append></login-append>-->
    <div id="login" v-if="loginIf"><login @close="receiveClose" @successLogin="receiveLogin"/></div>
  </div>

</template>

<script>
  // import Vue from 'vue'
  import login from './components/Login'
  // let loginAppend=Vue.extend(login);//将导入组件转为类
  // let tt = new loginAppend();//实例化组件类,挂载到 #test
  // tt.$mount("#login");
  // tt.$destroy();
  //   var loginIf = false;
  //   var isLogin = false;
  export default {
    name: 'App',
    components: {
      login
    },
    data () {
      return {
        loginIf: false,
        isLogin: false,
        isAdmin: false,
        isShow: 1
      }
    },
    methods: {
      changeLoginIf: function () {
        this.loginIf = true;
      },
      receiveClose: function (mes) {
        this.loginIf = mes;
      },
      receiveLogin: function (mes) {
        this.isLogin = mes;
        // console.log(this.GLOBAL.userInfo);
        if (this.GLOBAL.userInfo.userPower === 'A') {
          console.log('Admin Login');
          this.isAdmin = true;
          this.$router.push({path: '/AdminHome'})
        }
      },
      clickExit: function () {
        this.isLogin = false;
        this.isAdmin = false;
        this.GLOBAL.userInfo = [];
      },
      navShow1: function () {
        this.isShow = 1;
        // console.log('click1:'+this.isShow);
      },
      navShow2: function () {
        this.isShow = 2;
        // console.log('click2:'+this.isShow);
      },
      navShow3: function () {
        this.isShow = 3;
        // console.log('click3'+this.isShow);
      },
      navShow4: function () {
        this.isShow = 4;
        // console.log('click4:'+this.isShow);
      },
    },
    updated: function () {
      // console.log('更新');
    },
  }

</script>

<style>
  @font-face {
    font-family: 'iconfont';  /* project id 1286096 */
    src: url('//at.alicdn.com/t/font_1286096_urh1skvh3jf.eot');
    src: url('//at.alicdn.com/t/font_1286096_urh1skvh3jf.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1286096_urh1skvh3jf.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1286096_urh1skvh3jf.woff') format('woff'),
    url('//at.alicdn.com/t/font_1286096_urh1skvh3jf.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1286096_urh1skvh3jf.svg#iconfont') format('svg');
  }

  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
    height: 100%;
  }

  .page-container {
    position: relative;
    overflow: hidden;
    color: #4a4a4a;
    padding-bottom: 390px;
    min-height: 100%;
    background-color: #fff;
  }

  .top-nav {
    position: fixed;
    z-index: 9;
    width: 100%;
    max-width: 1440px;
    background-color: #fff;
  }

  .top-nav .top-nav-wrapper {
    margin: 0 auto;
    height: 70px;
    max-width: 1230px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
  }

  .top-nav .logo {
    margin-right: 40px;
    height: 50px;
    width: 50px;
    background: 50%/contain no-repeat url(./assets/logo.gif);
    cursor: pointer;
  }

  .top-nav .links {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: auto;
    height: 100%;
  }

  .top-nav .links > a.active {
    font-weight: bolder;
    color: inherit;
  }

  .top-nav .links > a {
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    color: #4a4a4a;
    font-size: 16px;
    font-weight: 300;
    text-decoration: none;
    white-space: nowrap;
    transition: color .2s;
  }
  .top-nav .user {
    height: 30px;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  .top-nav .user .login-text {
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;
    cursor: pointer;
    white-space: nowrap;
  }
  .top-nav .user .login-text span {
    margin: 0 20px;
  }
  .top-nav .user .avatar {
    height: 100%;
    width: 30px;
    border-radius: 50%;
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  body {
    margin: 0;
  }
</style>
