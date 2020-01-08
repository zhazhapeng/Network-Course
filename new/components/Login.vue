<template>
	<div class="login">
		<div class="login_btnf">
			<button  @click="$router.go(-1)">返回上一级</button>
		</div>
		<div class="logo">
			<img src="../assets/h1.jpg"/>
		</div>
		<!--手机号-->
		<InputGroup type="number" v-model="phone" placeholder="输入猪蛋专属手机号" 
			:btnTitle="btnTitle" :disabled="disabled" 
			 @btnClick='getverifyCode' ></InputGroup>
			<p style="color: red;" >{{errors.phone}}</p>
		<!--验证码-->
		<InputGroup type="number" v-model="verifyCode" placeholder="验证码" :error="errors.code"/>
		
		<!--新用户登录自动注册-->
		<div class="login_des">
			<p>
				快点去把我捡了好几个月垃圾换的
				<span>神秘大礼包</span>
				给找出来吧~~~
			</p>
		</div>
		<!--登录按钮-->
		<div class="login_btn">
			<button :disabled="isClick" @click="handleLogin">登录</button>
		</div>
	</div>
</template>

<script>
import InputGroup from '../components/InputGroup'
	
	
export default{
	name:'login',
	data(){
		return{
			phone:'',
			verifyCode:"",
			vCode:"",
			errors:{},
			disabled:false,
			btnTitle:"获取验证码"}
},
computed: {
		isClick() {
			if(!this.phone || !this.verifyCode) return true;
			else return false;
		}
	},
	methods: {
		handleLogin() {
			//取消错误提醒
			this.errors = {};
			if(this.verifyCode != this.vCode) {
				this.errors = {
					phone: "验证码错误"
				};
			} else {
				if(this.phone == '18832285867') {
					localStorage.setItem("ele_login", true);
					this.$router.push("/dan");
				} else {
					localStorage.setItem("phone", this.phone);
					this.$router.push("/user");

				}

			}
		},
		
		getverifyCode() {//手机号验证
		if(this.validatePhone()) {
			// 登录倒计时
			this.validateBtn();
			//登录验证
			//手机号存储至数据库
			this.$axios.post("/api/api/phone/register", {
//			this.$axios.post("http://www.lihaopeng.top:5001/api/phone/register", {
					phone:this.phone
				})
				.then(res => {
						console.log(res);
						if(res.data.err) {
//							alert(res.data.err);
							this.errors = {
								phone: res.data.err
							};
						} else {
							//发送网络请求 
							this.$axios.post("/api/api/phone/now_sms", {
									phone:this.phone
								})
								.then(res => {
									this.vCode = res.data.code;
								})
								
							}
						})
				}
		},
		validateBtn() {
				let time = 60;
				let timer = setInterval(() => {
							if(time == 0) {
								clearInterval(timer);
								this.btnTitle ="获取验证码";
					this.disabled=false;
				}else{
					this.btnTitle=time+"秒后重试";
					time--;
					this.disabled=true;
					
				}
			},1000)
		},
		validatePhone(){
			if(!this.phone){
				this.errors={
					phone:"请填写手机号"
				};
				return false;
			}
			else if(!/^1[345678]\d{9}$/.test(this.phone)){
				this.errors={
					phone:"请填写正确的手机号码"
				};
				return false;
			}
			else if(!/^18832285867$/.test(this.phone)){
				this.errors={
					phone:"手动滑稽~"
				};
				var r=confirm("检测到这不是猪蛋的专属手机号哦,是否仍要接收验证码？");
				if(r){
					return true;
				}else{
					return false;
				}
			}
			else{
				this.errors={};
				return true;
			}
			
		}
	},
	components:{
		InputGroup
	}
	
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}

.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}
.text_group,
.login_des,
.login_btn {
  margin-top: 20px;
}
.login_des {
  color: #aaa;
  line-height: 22px;
}
.login_des span {
  color: orangered;
}
.login_btn button {
  width: 100%;
  height: 40px;
  background: url(../assets/sh1.jpg);
  background-color: yellowgreen;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login_btnf button {
  	width: 34%;
    height: 40px;
    background: #8bda81;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    border: none;
    outline: none;
    position: absolute;
    top: 10px;
    left: 10px;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}
</style>