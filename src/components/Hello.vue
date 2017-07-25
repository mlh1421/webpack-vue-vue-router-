<template>
  <div>
    <h1>今日热闻</h1>
    <ul class="aa">
      <li v-for='i in stories'>
        <router-link :to="{path:'/content',query:{href:'https://zhihu-daily.leanapp.cn/api/v1/contents/'+i.id}}">{{i.title}}</router-link>
        <img :src="'https://images.weserv.nl/?url='+i.images[0].replace('https://','')" alt="#">
      </li>
    </ul>
    <div class="more">
      <ul v-if="show">
      </ul>
      <button @click="greet">更多</button>
    </div>
  </div>
</template>

<script>
  import VueResource from 'vue-resource';
  import Vue from 'vue'
  Vue.use(VueResource);
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        stories:{},
        show:false
      }
    },
    created:function () {
      this.$http.get('http://mlh1421.cn/1.php').then(function (response) {
        this.data=response.body;
        this.stories=response.body.STORIES.stories;
        console.log(this.data);
      })
    },
    methods:{
      greet:function () {
      }
    }
  }
</script>

<style scoped>
  h1{
    padding:5px;
    padding-left:10px;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    /*display: inline-block;*/
    /*line-height: 200px;*/
    border: 1px solid #eee;
    box-shadow: 0 3px 5px #eee;
    margin: 10px 10px;
  }

  li a {
    color: #555;
    width: 60%;
    vertical-align: middle;
    display: inline-block;
    box-sizing: border-box;
    padding: 0 10px;
    text-decoration: none;
  }
  li img{
    width: 35%;
    display: inline-block;
    vertical-align: middle;
  }
</style>
