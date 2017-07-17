<template>
    <div id="app">
        <div class="header">
            <a href="#" v-on:click='greet'>menu</a>
            <router-link to='/' >首页</router-link>
            <router-link to='/b' >bbb</router-link>
            <router-link to='/c' >ccc</router-link>
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
    components:{
        // my:my
    },
    methods:{
        greet:function () {
            var obj=document.getElementsByClassName('left')[0];
            var left =obj.style.left;
            var width=window.innerWidth;
            left=width*(-0.7)+'px';
            // alert(width);
            console.log(left);
            //left=(left==0)?(-0.7) : 0;
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
    /*text-align: center;*/
    color: #2c3e50;
    /*position: relative;*/
}
.left{
    position: absolute;
    background: green;
    /*left:-70%;*/
    /*left:0;*/
    /*width: 70%;*/
    /*height: 100%;*/
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
    z-index: 10;
}
.body{
    margin-top: 50px;
}
.header>a{
    width:calc(100%/4);
    box-sizing: border-box;
    border: 1px solid green;
    height: 50px;
    line-height: 50px;
    background: #eee;
    /*border:1px solid red;*/
    display:block;
    float: left;
    text-decoration: none;
}
</style>
