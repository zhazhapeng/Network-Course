<template>
	<div class="tishi">
	<div class="jumbotron text-center">
		<h2 class="display-3">{{title}}</h2>
		<p class="lead">恭喜你通过第二关，本关你所获得的提示是：<span style="color: skyblue;">最后尾部的数字是'2333'现在你的秘钥已经成功更新，快去试试吧！</span></p>
		<button @click="$router.push('./thired')" class="btn btn-dark btn-lg">前往下一关</button>
	</div>
		<p style="color: red;">更新后的秘钥：ZDW*N**2333</p>
		<div class="input">
			<InputGroup type="String" v-model="mima" placeholder="试试运气"></InputGroup>
			<p style="color: red;">{{errors}}</p>
		</div>
			<div class="login_btn1">
				<button :disabled="dis" :class="" @click="verify">验证密码</button>
			</div>
			<br />
			<!--俩按钮-->
		<div class="login_btn">
	    	
				<button  @click="$router.push('./ggt')">得，我还是直接吃狗粮去吧</button>
				
			</div>
			
	</div>
</template>

<script>
	import InputGroup from '../components/InputGroup'
	export default{
		name:'tishi',
		data(){
			return{
				title:"本关提示",
				errors:'',
				dis:false,
				mima:""
				
			}
		},
		methods:{
			verify(){
				if(this.mima=="猪蛋我是你爸爸2333"){
					this.errors="小伙子你开挂了吧？"
				}else{
					this.errors="验证没通过呀~"
					this.dis=true
				}
			}
		},
		components:{
			"InputGroup":InputGroup
		}
	}
</script>

<style scoped>
	.login_btn1 button {
	position: absolute;
	left: 10%;
  width: 80%;
  height: 40px;
  margin-top: 25px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}

.login_btn1 button[disabled] {
  background-color: #8bda81;
}
	
</style>