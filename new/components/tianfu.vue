<template>
	<div class="tianfu jumbotron text-center">
		<div class="container">
			<span v-for="(item,index) in con.title" :key="index" :class="con.style[index]"  @click="changeImg(index)">{{item}}</span>
		</div>
		<div class="tu_group">
			<p class="intro">{{this.con.intro[show]}}</p>
			<img  :src="con.imgs[show]" />
		</div>
		<button class="login_btn" @click="next">确认</button>
	</div>
</template>

<script>
	import xu1 from'../assets/first/xu1.jpg'
	import dog1 from'../assets/first/m1.jpg'
	import yang from'../assets/first/yang.jpg'
	import lu1 from'../assets/first/lu1.jpg'
	import cai from'../assets/first/cai.jpg'
	import xu2 from'../assets/first/hx1.jpg'
	import tian1 from'../assets/first/tian1.jpg'
	export default{
		data(){
			return{
				show:6,
				phone:"",
				con:{
					intro:["今天，我就把我珍藏多年的小宝贝拿出来给各位瞧瞧！","唔......嗷呜~","水逆驱散~~~","我卢本伟，没！有！开！挂！","好嗨呦~感觉人生已经.....","我谁啊？我吊什么身份呐，我能要你这些东西吗？昂！？","朋友，我看你天资聪颖，骨骼惊奇特赐你一项天赋"],
					imgs:[xu1,dog1,yang,lu1,cai,xu2,tian1],
					style:["border border-primary","border border-secondary","border border-success","border border-danger","border border-warning","border border-warning"],
					title:["任已虚的冰魄银针","小白酱的神圣庇佑","杨超越的水逆驱散","五五开的朋友的挂","蔡徐坤的旋转篮球","我这种天才少年根本不需要"]
				}
			}
		},
		methods:{
			changeImg(str){
				this.show=str;
			},
			next(){
				if(this.show==6){
					alert("请您先选择天赋");
				}else{
					var t=confirm("确定选用当前技能作为您的天赋技能吗？");
					if(t){
						//更新数据库中的天赋
						this.$axios.post("/api/api/phone/update",{
						phone:this.phone,
						tianfu:this.show
					})
					.then(res=>{
						//更新localstorage中的天赋
						localStorage.setItem("tianfu",this.show)
						if(this.show==5){
							this.$router.push('./ggx');
							
						}else{
							this.$router.push('./first');
							
						}
					})
					}
				}
			}
		},
		created(){
			this.phone=localStorage.getItem('phone');
			
		}
	}
	
	
</script>


<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.tianfu{
		width: 100%;
		height: 100%;
	}
	.container{
		position: relative;
		top: 60%;
		width: 100%;
		height: 30%;
	}
	.container span{
		float: left;
		display: block;
		width: 20%;
		height: 20%;
		margin: 20px;
		padding: 10px;
		font-size: small;
	}
	.tu_group img{
		height:228px;
		width: 250px;
	}
	.intro{
		position: absolute;
		color: red;
		font-size: small;
		font-weight: 800;
		top: 78%;
		left: 23%;
		width: 49%;
	}
	.login_btn{
		width: 40%;
		  height: 40px;
		  margin-top: 67px;
		  margin-bottom: 20px;
		  background-color: #48ca38;
		  border-radius: 4px;
		  color: white;
		  font-size: 14px;
		  border: none;
		  outline: none;
	}
</style>