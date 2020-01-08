<template>
	<div id="first">
		
		<div class="jumbotron text-center">
		<h1 class="display-3">{{title}}</h1>
		<p class="lead">点击下方开始按钮后，点击打气筒，在规定时间内将气球吹爆即算过关(两次机会)</p>
			<div class="main">
				<div class="qiqiu">
				</div>
				<div class="xian">
				</div>
				<button class="btn_qi" @click="pushqi" :disabled="push">打气</button>
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
	export default{
		name:'first',
		data(){
			return{
				title:"第一关",
				push:true,
				hei:50,
				wid:30,
				count:3,
				btnTitle:"开始",
				tianfu:-1,
				time:5,
				show:false
			}
		},
		methods:{
			daqi(){
				if(this.count>0){
					this.count--;
					this.push=false;
					let time=this.time;
					var timer=setInterval(()=>{
						if(time==0){
							clearInterval(timer);
							this.push=true;
							this.btnTitle="再试一次";
							this.hei=50;
							this.wid=30;
						}else{
							time--;
							this.btnTitle="剩余"+time+"秒";

						}
					},1000);
				}else{
					let t=alert("您的机会已用完，请尝试使用天赋技能或直接跳转");
					this.btnTitle="gg思密达";
					this.show=true;
				}
			},
			pushqi(){
				//气球被扎爆了
				if(this.hei>=163){
					let t=alert("嘭！恭喜过关");
					this.$router.push({path:'/tfirst'});
				}else{
					this.hei+=2;
					this.wid+=1.2;
					let qiqiu = document.getElementsByClassName("qiqiu")[0];
					qiqiu.style.height=this.hei+'px';
					qiqiu.style.width=this.wid+'px';
				}
			},
			//使用了天赋技能
			useT(){
				//判断相应的天赋做出相应的回跳
				if(this.tianfu==0){
					let t=alert("嘭！你使用老吊的冰魄银针直接将气球扎爆，恭喜过关");
					this.$router.push({path:'/tfirst'});
				}else if(this.tianfu==3){
					let t=alert("你成功使用了开哥的挂，直接过关");
					this.$router.push({path:'/tfirst'});
				}else if(this.tianfu==1 || this.tianfu==2){
					let t=alert("你成功使用了神圣祝福，将时间延长");
					this.time=10;
					this.show=false;
					this.count=2;
				}else{
					let t=alert("你的旋转篮球在本关并无卵用~");
				}
			}
		},
		created(){
			this.tianfu = localStorage.getItem("tianfu");
			
		},
		components:{
			
		}
	}
</script>

<style scoped>
	.main{
		width: 100%;
		height: 60%;
	}
	.qiqiu{
		position: absolute;
		left: 139px;
		top: 290px;
		height: 50px;
		width: 30px;
		border-radius: 50%;
		background: #87CEEB;
	}
	.xian{
		position: relative;
		width: 0;
	    height: 0;
	    border-left: 5px solid transparent;
	    border-right: 5px solid transparent;
	    border-bottom: 20px solid red;
		left: 158px;
		top: 162px;
	}
	.btn-lg{
		margin-top: 180px;
		width: 45%;
	}
	.btn-lg2{
		height:48px;
		margin-top: 47px;
		width: 45%;
		margin-bottom: 40px;
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
.login_btn button {
  width: 80%;
  height: 40px;
  position: absolute;
  top: 653px;
  margin: 0 auto;
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