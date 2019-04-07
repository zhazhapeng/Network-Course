const express = require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

const router=express.Router();

//es6里的解构
const {ensureAuthenticated}=require("../helpers/auth");



//引入模型
require("../models/Idea");

const Idea=mongoose.model("ideas");

//body-parser middleware
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });




//提交数据后跳转到数据显示界面  要使用每个用户只能看到自己的
router.get("/",ensureAuthenticated,(req,res)=>{
	Idea.find({user:req.user.id})
//	按时间顺序排序
	.sort({date:"desc"})
	.then(ideas =>{
		res.render("ideas/index",{
			ideas:ideas
		});
	})
	
})
//添加的路由  课程部分
router.get("/add",ensureAuthenticated,(req,res)=>{
	res.render("ideas/add");	
})
router.get("/about",ensureAuthenticated,(req,res)=>{
	res.render("ideas/about");	
})


//编辑的路由
router.get("/edit/:id",ensureAuthenticated,(req,res)=>{
	Idea.findOne({
		_id:req.params.id
	})
	.then( idea =>{
		if(idea.user!=req.user.id){
			req.flash("error_msg","非法操作~~！");
			res.redirect("/ideas");
		}else{
			res.render("ideas/edit",{
			idea:idea
			});
		}
		
	})	
})

//提交课程信息的post
router.post("/",urlencodedParser,(req,res)=>{
//	console.log(req.body);
//	添加后端验证
	let errors=[];
	if(!req.body.title){
		errors.push({text:"请输入标题"});
	}
	if(!req.body.details){
		errors.push({text:"请输入内容"});
	}
	
	if(errors.length>0){
		res.render("ideas/add",{
			errors:errors,
			title:req.body.title,
			details:req.body.details,
			
		})
	}else{
		const newUser={
			title:req.body.title,
			details:req.body.details,
			user:req.user.id
		}
		new Idea(newUser)
		.save()
		.then((idea)=>{
			req.flash("success_msg","数据添加成功！");
//			相当于进入到ideas文件夹下的index页面
			res.redirect('./ideas')
		})
	}
	
})

//实现app.put编辑方法
router.put("/:id",ensureAuthenticated,urlencodedParser,(req,res)=>{
	Idea.findOne({
		_id:req.params.id
	})
	.then((idea)=>{
		idea.title=req.body.title;
		idea.details=req.body.details;
		
		idea.save()
		.then((idea)=>{
			req.flash("success_msg","数据编辑成功！");
			res.redirect("/ideas")
		})
		
	})
	
})


//实现删除
router.delete("/:id",ensureAuthenticated,urlencodedParser,(req,res)=>{
	Idea.remove({
		_id:req.params.id
	})
	.then(()=>{
			req.flash("success_msg","数据删除成功！");
			res.redirect("/ideas")
	})
})

module.exports=router;
