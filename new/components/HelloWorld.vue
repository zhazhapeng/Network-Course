<template>
  <div class="hello">
  		<div class="logo">
				<img src="../assets/z1.jpg"/>
			</div>
  	<br />
  	
  	<div class="login_des">
			<p>
				提醒广大单身狗速速撤离，注意：
				<span>这    不是演习！！！</span>
			</p>
		</div>
	    <div class="login_btn">
	    	<a href="http://www.lihaopeng.top/qixi/">
				<button  @click="user">游客通道</button>
				</a>
			</div>
			<br />
			<div class="login_btn1">
				<button @click="zhudan">逗逼专属通道</button>
			</div>
			<div class="dilogo">
				
					<div class="top">
					
						<span class="zi">后退，秀儿要开始表演了</span>
						
					</div>
				<img src="../assets/my.jpg"/>
			</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  mounted(){
  	
  },
  methods:{
  	user(){
  		console.log('user');
  	},
  	zhudan(){
  		this.$router.push({path:'/login'});
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
  width: 100%;
  height: 100vh;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  background: url(../assets/h6.jpeg);
}
.login_des {
	margin-top: 20px;
  color: #aaa;
  line-height: 22px;
}
.login_des span {
	font-size: larger;
  color: red;
}

.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}	
	.dilogo{
		margin-top: 35px;
		text-align: center;
	}
	.dilogo img {
  width: 320px;
}	
.login_btn button {
  width: 80%;
  height: 40px;
  margin-top: 20px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login_btn1 button {
  width: 80%;
  height: 40px;
  margin-top: 20px;
  background-color: pink;
  border-radius: 4px;
  color: red;
  font-size: 14px;
  border: none;
  outline: none;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}


/*字体运动特效*/
.zi{
color: red;
font-size: large;
font-weight: 600;
position:relative;
animation:myfirst 5s linear 2s infinite alternate;
/* Firefox: */
-moz-animation:myfirst 5s linear 2s infinite alternate;
/* Safari and Chrome: */
-webkit-animation:myfirst 5s linear 2s infinite alternate;
/* Opera: */
-o-animation:myfirst 5s linear 2s infinite alternate;
}

@keyframes myfirst
{
0%   {color:red; left:-58px; top:28px;}
25%  {color:yellow; left:58px; top:28px;}
50%  {color:pink; left:58px; top:177px;}
75%  {color:skyblue; left:-58px; top:177px;}
100% {color:red; left:-58px; top:28px;}
}

@-moz-keyframes myfirst /* Firefox */
{
0%   {color:red; left:-58px; top:28px;}
25%  {color:yellow; left:58px; top:28px;}
50%  {color:pink; left:58px; top:177px;}
75%  {color:skyblue; left:-58px; top:177px;}
100% {color:red; left:-58px; top:28px;}
}

@-webkit-keyframes myfirst /* Safari and Chrome */
{
0%   {color:red; left:-58px; top:28px;}
25%  {color:yellow; left:58px; top:28px;}
50%  {color:pink; left:58px; top:177px;}
75%  {color:skyblue; left:-58px; top:177px;}
100% {color:red; left:-58px; top:28px;}
}

@-o-keyframes myfirst /* Opera */
{
0%   {color:red; left:-58px; top:28px;}
25%  {color:yellow; left:58px; top:28px;}
50%  {color:pink; left:58px; top:177px;}
75%  {color:skyblue; left:-58px; top:177px;}
100% {color:red; left:-58px; top:28px;}
}
</style>
