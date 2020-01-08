<template>
	<div class="user">
	<div class="jumbotron text-center">
		<h1 class="display-3">{{title}}</h1>
		<p class="lead">恭喜你成功解锁隐(sha)藏(diao)务，假如你赶在猪蛋之前拿到秘钥，可成功抢夺他的宝藏(超级豪华哦~)</p>
		<button @click="$router.push('./show')" class="btn btn-dark btn-lg">开启秘密任务</button>
		</div>
		<div class="swiper">
			<img src="../assets/d1.jpg"/>
		</div>
		</div>
</template>

<script>
	
	export default{
		name:'card',
		data(){
			return{
				title:"隐藏任务",
				
			}
		},
		components:{
			
		}
	}
</script>

<style scoped>
	
	
</style>