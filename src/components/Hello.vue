<template>
    <div>
        <h1>今日热闻</h1>
        <ul class="aa">
            <li v-for='i in stories'>
                <!-- <a :href="''+i.id"> {{i.title}} </a> -->
                <router-link :to="{path:'/content',query:{href:'https://zhihu-daily.leanapp.cn/api/v1/contents/'+i.id}}">{{i.title}}</router-link>
                <!-- <router-view></router-view> -->
                <img :src="'//images.weserv.nl/?url='+i.images[0].replace('https://','')" alt="#">
            </li>
        </ul>
        <!-- <router-link to='/a/d'>ddd</router-link> -->
        <!-- <router-view></router-view> -->
        <!-- <my :s='data'></my> -->
    </div>
</template>

<script>
var xhr=new XMLHttpRequest();
xhr.open("get","http://mlh1421.cn/1.php",false);
xhr.send(null);
var data=xhr.responseText;
data=JSON.parse(data);
console.log(data);
var stories=data.STORIES.stories;
var date=data.STORIES.date;
export default {
    name: 'hello',
    // props:['s'],
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            stories:stories
        }
    }
}
</script>

<style scoped>
.aa{
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
