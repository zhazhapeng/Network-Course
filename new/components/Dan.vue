<template>
	<div id="first">
		
		<div class="jumbotron text-center">
		<h3 class="display-3">{{title}}</h3>
		<p class="lead">这个页面只有你个傻吊臭猪蛋子才能进来，所以.......我是你爸爸！</p>
			<div class="main">
				<img class="zimg" src="../assets/second/t1.jpg"/>
			</div>
			
		<!--直接跳转-->
				<button @click="$router.push('./danf')" class="login_btn">下一页</button>
			
			
	
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'second',
		data(){
			return{
				title:"猪蛋蛋",
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