<template>
	<div class="tianfu jumbotron text-center">
		<h3 class="display-3">{{title}}</h3>
		<p class="lead">请从下面六个标签中选择五个标签，完成对你爸爸的评价(哈哈哈)</p>
		<div class="container">
			 <input type="checkbox" name="q[]" id="q1" @click="add(0)">
		      <label for="q1">机智</label>
		      <input type="checkbox" name="q[]" id="q2" @click="add(1)">
		      <label for="q2">帅气</label>
		      <input type="checkbox" name="q[]" id="q3" @click="add(2)">
		      <label for="q3">又勇敢</label>
		      <input type="checkbox" name="q[]" id="q4" @click="add(3)">
		      <label for="q4">黑长直</label>
		      <input type="checkbox" name="q[]" id="q5" @click="add(4)">
		      <label for="q5">聪明</label>
		      <input type="checkbox" name="q[]" id="q6" @click="add(5)">
		      <label for="q6">臭沙雕</label>
		      <hr>
			
			<!--<span v-for="(item,index) in con.title" :key="index" :class="con.style[index]"  @click="changeImg(index)">{{item}}</span>-->
		</div>
		<div class="tu_group">
			<p class="intro">{{this.con.intro[show]}}</p>
			<img  :src="con.imgs[show]" />
		</div>
		<button class="login_btn" @click="confirm">确认</button>
		
	</div>
</template>

<script>
	import xu1 from'../assets/second/t1.jpg'
	import dog1 from'../assets/second/t2.jpg'
	import yang from'../assets/second/t3.jpg'
	import lu1 from'../assets/second/t4.jpg'
	import cai from'../assets/second/t5.jpg'
	import xu2 from'../assets/second/t6.jpg'
	import tian1 from'../assets/second/t8.jpg'
	import confirm from'../assets/second/t7.jpg'
	export default{
		data(){
			return{
				title:"应付一下",
				show:6,
				phone:"",
				con:{
					intro:["对！！！","我他妈的就知道你是沉迷于我的美色！！！","很对！！！very good!","你能不能不要老是说实话？！昂~","啊~我太有感觉了，马上就成了！","你爹就知道你会选这个！","我希望我睁开眼以后是我想要的结果，昂~","我觉得不行，你想想我吊能是那么简单的人吗？昂？！"],
					imgs:[xu2,xu1,dog1,yang,cai,tian1,lu1,confirm],
					style:["border border-primary","border border-secondary","border border-success","border border-danger","border border-warning","border border-warning"],
					title:["机智","聪明","又勇敢","中二","臭沙雕","逗逼"]
				}
			}
		},
		methods:{
			changeImg(str){
				this.show=str;
				
			},
			add(num){
				this.show=num;
			},
			confirm(){
				this.show=7;
				alert("算了，你爸爸还是放你一条生路吧");
				this.$router.push({path:'/dant'})
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
	.display-3{
		margin-top: 20px;
		font-size: 3rem;
	}
	.tianfu{
		width: 100%;
		height: 100%;
	}
	#container {
	margin: 30px 0px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
  }
  #container input,
  #container label {
    order: 2;
  }
  input[type=checkbox]:checked,
  input[type=checkbox]:checked + label {
    order: 0 !important;
  }
  hr {
    display:none;
    order: 1;
    width:100%;
  }
  input[type=checkbox]:checked ~ hr {
    display:block;
  }
  input[type=checkbox] {
    display: none;
  }
  label {
    min-width: 120px;
    border: 1px solid #CCC;
    padding: 2px 8px;
    text-align: center;
    margin: 0 5px 5px 0;
    background: #FFF;
    color: #333;
    border-radius: 3px;
    box-sizing: border-box;
  }
  label:hover {
    border-color: #ADADAD;
    background: #EBEBEB;
    cursor: pointer;
  }
  input[type=checkbox]:checked + label {
    order: 0;
    background-color: #428BCA;
    border-color: #357EBD;
    color: #FFF;
  }
  input[type=checkbox]:checked + label:hover {
    background-color: #327681;
    border-color: #285E8E;
  }
  label:before {
    display: inline;
    content: "+ ";
    font-size: 100%;
  }
  input[type=checkbox]:checked + label:before {
    display: inline;
    content: "- ";
    font-size: 100%;
  }
  input[type=checkbox]:checked + label {
    -webkit-transition: background-color 1s;
    -moz-transition: background-color 1s;
    -ms-transition: background-color 1s;
    -o-transition: background-color 1s;
    transition: background-color 1s;
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