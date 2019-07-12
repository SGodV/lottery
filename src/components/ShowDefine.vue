<template>
    <div class="show_define_view">
      <div class="form-block">
        <label for="account">摇号活动标题</label>
        <input id="account" type="text" @change="getTitle" placeholder="请输入活动标题" v-model="lotteryTitle" class="">
      </div>
      <div class="form-block">
        <label for="portrait">背景图片上传</label>
        <input id="portrait" type="file"  @change="changeImage($event)" accept="image/png,image/gif,image/jpeg" ref="new_company_image">
        <img :src="avatar?avatar:require('../assets/logo.png')" alt="" style="width: 930px;height: auto;" name="avatar">
      </div>
    </div>
</template>

<script>
    export default {
        name: "ShowDefine",
      data () {
          return {
            lotteryTitle: [],
            avatar: '',
            file: '',
            imgSrc: '../assets/logo.png'
          }
      },
      props: ["uploadType", "imgUrl", "imgWidth", "imgHeight"],
      created(){
        this.avatar = this.imgUrl
      },
      methods: {
        changeImage: function (e) {
          let file = e.target.files[0];
          if(file) {
            this.file = file;
            this.GLOBAL.lotteryInfo.pic = this.file;
            console.log(this.file);
            let reader = new FileReader();
            let that = this;
            reader.readAsDataURL(file);
            reader.onload= function(e){
              // 这里的this 指向reader
              that.avatar = this.result
            }
          }
        },
        getTitle: function () {
          this.GLOBAL.lotteryInfo.lotteryTitle = this.lotteryTitle;
        }
      }
    }
</script>

<style scoped>
  .show_define_view {
    margin: auto;
  }
  .form-block {
    margin: 20px 0;
  }
  .form-block label {
    display: block;
    margin: 10px 30px;
    text-align: left;
    font-size: 20px;
    color: rgb(153, 153, 153);
  }
  .form-block input {
    padding: 8px 18px;
    margin: 0 30px;
  }
  input {
    width: 100%;
    height: 30px;
    background-color: rgb(247, 247, 247);
    /*border-width: inherit;*/
    border-style: none;
    border-color: initial;
    -o-border-image: initial;
    border-image: initial;
    border-radius: 2px;
  }
</style>
