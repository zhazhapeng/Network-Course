<template>
	<div class="show">
	<div class="jumbotron text-center">
		<h1 class="display-3">{{title}}</h1>
		<p class="lead">本任务总共分为四关，每一关完成后我都会给出相应的提示，无论在哪一关，成功匹配秘钥“***********”则可直接开启宝藏~每一关只有一次匹配秘钥的机会</p>
		<button @click="$router.push('./tianfu')" class="btn btn-dark btn-lg">开启第一关</button>
	</div>
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
		name:'card',
		data(){
			return{
				title:"玩法说明",
				errors:'',
				dis:false,
				mima:""
				
			}
		},
		methods:{
			verify(){
				if(this.mima=="姜帆我是你爸爸2333"){
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
	.input{
		margin-top: 10px;
	}
	
.login_btn button {
  width: 80%;
  height: 40px;
  margin-top: 70px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
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