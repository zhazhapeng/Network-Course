<template>
	<div id="first">
		
		<div class="jumbotron text-center">
		<h3 class="display-3">{{title}}</h3>
		<p class="lead">本来这些页面之前都给你个傻吊写好了的，不过你这个傻吊既然已经拿到爸爸给你的超级大礼包了，我只能瞎几把写了,去拿你的快递吧抽傻吊</p>
			<div class="main">
				<img class="zimg" src="../assets/second/k1.png"/>
				<img class="zimg" src="../assets/second/k2.png"/>
			</div>
			
		<!--直接跳转-->
				<button @click="goto" class="login_btn">爸爸给你写过的页面</button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'second',
		data(){
			return{
				title:"蛋蛋猪",
				psw:"",
				
			}
		},
		methods:{
			goto(){
				window.location.href = 'http://www.lihaopeng.top/qixi/';
			}
			
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
	    height: 100px;
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