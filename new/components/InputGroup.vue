<template>
	<div class="text_group">
		<!--组件结构-->
		
		
		<!--组件容器-->
		<div class="input_group" :class="{'is-invalid':error}">
			<!--输入框-->			
			<input :type="type" :name="name" :placeholder="placeholder" :value="value" @input="$emit('input',$event.target.value)" />
			<!--输入框后面的按钮-->
			<button v-if="btnTitle" :disabled="disabled" @click="$emit('btnClick')">{{btnTitle}}</button>
		</div>
		<!--错误提醒-->
		<div v-if="error" class="invalid-feedback">
			{{error}}
		</div>
	</div>
	
</template>

<script>
export default{
	name:"InputGroup",
	props:{
		type:{
			type:String,
			default:"text"
		},
		value : String,
		placeholder:String,
		name:String,
		btnTitle:String,
		disabled:Boolean,
		error:String
	}
};
	
</script>

<style scoped>
.input_group {
  border: 1px solid pink;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: pink;
}
.input_group input {
  height: 100%;
  width: 60%;
  border: none;
  outline: none;
  background: pink;
  color: red;
}
/*设置placeholder*/
::-webkit-input-placeholder{
	color: red;
	background: pink;
}


.input_group button {
  border: none;
  outline: none;
  background: pink;
  color: red;
}
.input_group button[disabled] {
  color: #aaa;
}
.is-invalid {
  border: 1px solid red;
}
.invalid-feedback {
  color: red;
  padding-top: 5px;
}

</style>