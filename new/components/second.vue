<template>
	<div id="first">
		
		<div class="jumbotron text-center">
		<h1 class="display-3">{{title}}</h1>
		<p class="lead">点击下方开始按钮后，认真观看图片回答问题</p>
			<div class="main">
				<swiper v-show="push" :speed="speed"></swiper>
				
				<!--问题回答区域-->
				<div class="question" v-show="xstp">
					<p>{{question}}</p>
					<input type="radio" name="ques" value="4" v-model="que" />{{wen}}个
					<input type="radio" name="ques" value="5" v-model="que"/>{{wen+1}}个
					<input type="radio" name="ques" value="6" v-model="que"/>{{wen+2}}个
					<input type="radio" name="ques" value="7" v-model="que"/>{{wen+3}}个
					<br />
					<button class="sub" :disabled="disabled" @click="sub">确认提交</button>
				</div>
				
			</div>
			<button @click="daqi" class="btn btn-dark btn-lg">{{btnTitle}}</button>
			<br />
			<button @click="useT" class="btn btn-dark btn-lg2">使用天赋技能</button>
		</div>
		
		
		<!--直接跳转-->
			<div class="login_btn" v-show="show">
	    	<button  @click="$router.push('./ggt')">得，我还是直接吃狗粮去吧</button>
			</div>
			
	
	
	</div>
</template>

<script>
	import Swiper from './Swiper'
	export default{
		name:'second',
		data(){
			return{
				title:"第二关",
				question:"请问刚刚图一中的男子一共脱掉了几个内裤?",
				push:false,
				show:false,
				xstp:false,
				count:2,
				wen:4,
				btnTitle:"开始",
				tianfu:-1,
				time:5,
				speed:8000,
				que:0,
				disabled:false
				
			}
		},
		methods:{
			daqi(){
				//点击了开始观看
				
//				question:"请问刚刚图一中的男子一共脱掉了几个内裤?",
				if(this.count==2){
					this.count--;
					this.push=true;
					var timer=setTimeout(()=> {
						this.push=false;
						this.xstp=true;
						this.btnTitle="再看一次";
					},28000);
				}else if(this.count==1){
						this.count--;
						this.push=true;
					var timer=setTimeout(()=> {
						this.push=false;
						this.disabled=false;
						this.xstp=true;
						this.question="请问刚刚的图三电脑中的图片一共显示几道菜？";
						this.wen=12;
						this.btnTitle="再看一次";
					},28000);
				}else{
					let t=alert("您的机会已用完，请尝试使用天赋技能或直接跳转");
					this.btnTitle="gg思密达";
					this.show=true;
				}
			},
			//判断结果
			sub(){
//				console.log(this.que);
				if(this.que==5){
					alert("少年好眼力！恭喜过关~");
					this.$router.push({path:'/tsecond'});
				}else{
					this.question="回答错误 ，请重新观看";
					this.disabled=true;
				}
			},
			//使用了天赋技能
			useT(){
				//判断相应的天赋做出相应的回跳
				if(this.tianfu==4){
					let t=alert("你使用了蔡徐坤的球技，将其转爆，直接过关！");
					this.$router.push({path:'/tsecond'});
				}else if(this.tianfu==3){
					let t=alert("系统检测到你多次开挂，直接将你封杀");
					this.$router.push({path:'/ggf'});
				}else if(this.tianfu==1 || this.tianfu==2){
					let t=alert("你成功使用了神圣祝福，增加了一次观看机会");
					this.count=1;
				}else{
					let t=alert("你的天赋在本关并无卵用~");
				}
			}
		},
		created(){
			this.tianfu = localStorage.getItem("tianfu");
			
		},
		components:{
			'swiper':Swiper
		}
	}
</script>

<style scoped>
	.main{
		position: absolute;
		width: 92%;
		height: 30%;
		top: 243px;
		left: 26px;
	}
	.question{
		margin-top: 30px;
		color: red;
	}
	
	.btn-lg{
		margin-top: 200px;
		width: 45%;
	}
	.btn-lg2{
		height:48px;
		margin-top: 47px;
		width: 45%;
		margin-bottom: 68px;
	}
	.btn_qi {
  	width: 15%;
    height: 40px;
    background: #8bda81;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    border: none;
    outline: none;
    position: absolute;
    left: 8px;
    top:426px;
}
.sub{
     margin: 0 auto;
    height: 40px;
    margin-top: 20px;
    background-color: #48ca38;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    border: none;
    outline: none;
    width: 100px;
}
.sub[disabled]{
  background-color: #8bda81;
}

.login_btn button {
  width: 80%;
  height: 40px;
  position: absolute;
  top: 653px;
  left:38px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.btn_qi [disabled] {
  background-color: #8bda81;
}
</style>