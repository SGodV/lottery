<template>
  <div class="modal-wrapper">
    <div class="modal active opened">
      <div class="modal-inner">
        <span class="icon-close-btn iconfont white left" v-on:click="closeLogin"></span>
        <div class="popup-login">
          <div id="passport-form" class="need-validata">
            <div class="passport-form-movie">
              <div class="backcolor"></div>
              <div class="loginicon">
                <i></i>
                <div class="logintitle">摇号系统</div>
              </div>
            </div>
            <div class="passport-form-content">
              <div class="popup-login-wrapper">
                <div id="login-container">
                  <div class="login-tab"><span>账户登录</span></div>
                  <div class="account-login">
                    <div class="form-block">
                      <label for="account">账号</label>
                      <input id="account" type="text" placeholder="请输入邮箱或手机" v-model="loginName" class="">
                    </div>
                    <div class="form-block">
                      <label for="password">密码</label>
                      <input id="password" type="password" placeholder="请输入密码" v-model="password">
                    </div>
                    <div class="form-block form-action">
                      <button id="account-login-submit" v-on:click="clickLogin">登录</button>
                    </div>
                    <div class="form-block form-extra">
                      <a class="right" href="/findPwd">忘记密码？</a>
                      <a href="#popupRegister">注册</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data () {
      return {
        loginName: '',
        password: ''
      }
    },
    methods: {
      closeLogin: function () {
        this.$emit("close", false)
      },
      clickLogin: function () {
        var that = this;
        // console.log(1+this.GLOBAL.host);
        this.$ajax.get(this.GLOBAL.host+'/user/login',
          {
            params: {
              loginName: this.loginName,
              password: this.password
            }
          }).then(function (res) {
          console.log(res);
          console.log(res.data.data);
          // console.log(that.GLOBAL);
          // console.log(that.GLOBAL.userInfo);
          // console.log(2+that.GLOBAL.host);
          that.GLOBAL.userInfo = res.data.data;
          that.$emit("successLogin", true);
          that.closeLogin();
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  }
</script>

<style scoped>
  .modal-wrapper .modal.opened {
    opacity: 1;
  }
   .modal-wrapper .modal.active {
     display: block;
     overflow: auto;
   }
   .modal-wrapper .modal {
     position: fixed;
     top: 0;
     right: 0;
     bottom: 0;
     left: 0;
     z-index: 101;
     background-color: rgba(0, 0, 0, 0.7);
     display: none;
     text-align: center;
     white-space: nowrap;
     opacity: 0;
     transition: opacity 0.12s ease-in 0s;
   }

  .modal-wrapper .modal.active::before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0;
  }

  .modal-wrapper .modal .modal-inner {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: auto;
    top: 0;
    text-align: left;
    white-space: normal;
    word-break: break-all;
    list-style: none;
    margin: 30px auto;
  }
  .modal-wrapper .modal .modal-inner .icon-close-btn.left {
    right: auto;
    left: 10px;
  }
   .modal-wrapper .modal .modal-inner .icon-close-btn.white {
     color: rgb(255, 255, 255);
   }
   .modal-wrapper .modal .modal-inner .icon-close-btn {
     cursor: pointer;
     position: absolute;
     top: 8px;
     right: 10px;
     z-index: 102;
     font-size: 32px;
   }
  .iconfont {
    font-family: iconfont;
    text-align: center;
    user-select: none;
  }

  .popup-login {
    background-color: rgb(255, 255, 255);
    position: relative;
    border-radius: 4px;
  }

  #passport-form.need-validata {
    height: 400px;
  }
   #passport-form {
     width: 600px;
     height: 420px;
     overflow: hidden;
   }
  #passport-form .passport-form-movie {
    float: left;
    position: relative;
    width: 240px;
    height: 100%;
    overflow: hidden;
    border-radius: 4px 0px 0px 4px;
  }
   .popup-login .passport-form-movie {
     overflow: hidden;
     border-radius: 4px 0px 0px 4px;
   }
  #passport-form .passport-form-movie .backcolor {
    position: absolute;
    top: 0;
    left: 0;
    width: 240px;
    height: 100%;
    background-color: cornflowerblue;
  }
  #passport-form .passport-form-movie .loginicon {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  #passport-form .passport-form-movie .logintitle {
    position: absolute;
    float: left;
    height: 100%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: orangered;
  }
  #passport-form .passport-form-movie i {

    transform: translate(-50%, -50%);
    display: block;
    width: 85px;
    height: 105px;
    background: url(../assets/logo.gif) 50% center / contain no-repeat;
  }

  #passport-form .passport-form-content {
    float: right;
    width: 280px;
    height: 100%;
    padding: 0px 40px;
  }
   .popup-login .passport-form-content {
     position: relative;
     border-radius: 0px 4px 4px 0px;
   }
  .popup-login .popup-login-wrapper, .popup-login .popup-register-wrapper {
    height: 100%;
  }
  #login-container {
    position: relative;
    width: 280px;
    height: 100%;
    padding-top: 48px;
  }
  #login-container {
    position: relative;
    width: 280px;
    height: 100%;
    padding-top: 48px;
  }
  #login-container .login-tab {
    margin-bottom: 35px;
  }

   #login-container .login-tab span {
     font-size: 18px;
     cursor: pointer;
     font-weight: 700;
     color: rgb(255, 65, 15);
   }

  #passport-form .passport-form-content .form-block {
    margin: 20px 0px;
  }
  #passport-form .passport-form-content label {
    display: block;
    margin-bottom: 10px;
    font-size: 12px;
    color: rgb(153, 153, 153);
  }
  input, #passport-form .passport-form-content select {
    width: 100%;
    height: 30px;
    background-color: rgb(247, 247, 247);
    /*border-width: initial;*/
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 2px;
  }
   #passport-form .passport-form-content input {
     padding: 0px 8px;
   }

  #passport-form .passport-form-content .form-action {
    padding-top: 10px;
  }

  #passport-form .passport-form-content .form-action button {
    width: 100%;
    height: 48px;
    font-size: 16px;
    border-radius: 24px;
  }
   #passport-form .passport-form-content button:disabled {
     background-color: rgb(242, 242, 242);
     color: rgb(204, 204, 204);
     cursor: not-allowed;
   }
   #passport-form .passport-form-content button {
     width: 100%;
     height: 30px;
     background-color: rgb(255, 65, 15);
     font-size: 12px;
     color: rgb(255, 255, 255);
     cursor: pointer;
     padding: 0px;
     /*border-width: initial;*/
     border-style: none;
     border-color: initial;
     border-image: initial;
     border-radius: 4px;
   }

  #passport-form .passport-form-content .form-extra {
    margin-top: 16px;
    font-size: 12px;
  }
   #passport-form .passport-form-content .form-block {
     margin: 20px 0px;
   }
  #passport-form .passport-form-content .form-extra .right {
    float: right;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
</style>
