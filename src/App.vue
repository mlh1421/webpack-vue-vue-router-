<template>
  <div id="app">
    <div class="header">
      <router-link to='/' >首页</router-link>
      <router-link to='/b' >by 江左梅郎</router-link>
    </div>
    <div class="left">
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
    <!-- <my :s='stories'></my> -->
  </div>
</template>

<script>
  export default {
    name: 'app',
    data:function () {
      return {
        date:'20170717'
      }
    },
    created:function () {

    },
    components:{
    },
    methods:{
      greet:function () {
      }
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    position: relative;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .left{
    position: absolute;
    background: green;
  }
  h1{
    background: #eee;
    color:#555;

  }
  .header{
    position: fixed;
    text-align: center;
    top:0;
    width: 100%;
    background:#009dd7;
    z-index: 10;
  }
  .body{
    margin-top: 50px;
  }
  .header>a{
    width:50%;
    box-sizing: border-box;
    height: 50px;
    line-height: 50px;
    color:#fff;
    display:block;
    float: left;
    text-decoration: none;
  }
</style>
