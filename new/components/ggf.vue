<template>
	<div id="first">
		
		<div class="jumbotron text-center">
		<h3 class="display-3">{{title}}</h3>
		<p class="lead">感谢你的参与，收好你的专属通关密文：{{psw}},复制或截图此凭证到下方评论区，会有意外惊喜哦</p>
			<div class="main">
				<img class="zimg" src="../assets/second/ggf.jpg"/>
			</div>
			
		<!--直接跳转-->
				<button @click="goto" class="login_btn">开开心心去吃狗粮</button>
			
			
	
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'second',
		data(){
			return{
				title:"当场抓获",
				psw:"fagasgsafsa",
				
			}
		},
		methods:{
			goto(){
				window.location.href = 'http://www.lihaopeng.top/qixi/';
			}
			
		},
		created(){
			
			this.$axios.post('/api/api/phone/find',{
				phone:localStorage.getItem('phone')
			})
			.then((res)=>{
				this.psw=res.data._id+'IIL';			
			})
			
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