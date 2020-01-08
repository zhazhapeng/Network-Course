<template>
	<div id="first">
		
		<div class="jumbotron text-center">
		<h3 class="display-3">{{title}}</h3>
		<p class="lead">说实话，写到这个页面的时候还是有挺多话想跟你说的，可能有时候我太忙了，没有那么好的照顾你和你的感受，可能我有的时候不咋浪漫，有时候有点傻吊.....反正这么长时间也都走过来了，我挺感谢也挺珍惜你对我的陪伴，emmmm....强行煽情最为致命，这应该给你配个bgm的哈哈哈</p>
		<!--直接跳转-->
				<button @click="$router.push('./dans')" class="login_btn">下一页</button>
			
			
	
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'second',
		data(){
			return{
				title:"To蛋儿",
				psw:"",
				
			}
		},
		methods:{
			
			
		},
		created(){
			
		},
		components:{
			
		}
	}
</script>

<style scoped>
	.main{
		position: relative;
		width: 92%;
	}
	.zimg{
	    height: 200px;
	    width: 300px;
	    margin-top: 0px;
   		left: 0px;
	    position: relative;
	}
.login_btn {
  width: 80%;
  height: 40px;
  position: relative;
  margin-top: 60px;
  left:8px;
  background-color: #48ca38;
  border-radius: 5px;
  color: white;
  font-size: 14px;
}

</style>