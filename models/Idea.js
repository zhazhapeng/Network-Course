//引入mongoose
const mongoose=require("mongoose");
//使用Schema
const Schema=mongoose.Schema;
//具体要存储的数据
const IdeaSchema = new Schema({
	title:{
		type:String,
		required:true
	},
	details:{
		type:String,
		required:true
	},
	user:{
		type:String,
		required:true
	},
	date:{
		type:Date,
		default:Date.now
	}
})


//外部真正调用时需要使用的
mongoose.model('ideas',IdeaSchema);
