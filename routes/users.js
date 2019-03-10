const express = require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const bcrypt = require('bcrypt');
const passport = require("passport");

const router=express.Router();

//加载models
require("../models/User");
const User=mongoose.model("users");


//body-parser middleware
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

//users login & register
router.get("/login",(req,res)=>{
	res.render("users/login");	
})

router.post("/login",urlencodedParser,(req,res,next)=>{
		
	passport.authenticate('local',{
		successRedirect:'/ideas',
		failureRedirect:'/users/login',
		failureFlash:true
	})(req,res,next)
	
})





router.get("/register",(req,res)=>{
	res.render("users/register");	
})

//点击注册后进入的路由
router.post("/register",urlencodedParser,(req,res)=>{
//	console.log(req.body);
//	res.send("register");
//	后台验证密码是否一致
	let errors=[];
	
	if(req.body.password != req.body.password2){
		errors.push({
			text:"两次密码输入不一致！"
		})
	}
	
	if(req.body.password.length<6){
		errors.push({
			text:"密码长度不得小于6位！"
		})
	}
	
	if(errors.length>0){
		res.render('users/register',{
			errors:errors,
			name:req.body.name,
			email:req.body.email,
			password:req.body.password,
			password2:req.body.password2
		})
	}else{
		
			//判断邮箱是否已经被注册
			User.findOne({email:req.body.email})
			 .then((user)=>{
			 	if(user){
			 		req.flash("error_msg","邮箱已经存在，请更换邮箱注册");
			 		res.redirect('/users/register');
			 	}else{
			 		const newUser= new User({
						name:req.body.name,
						email:req.body.email,
						password:req.body.password
					})
			 		
			 		bcrypt.genSalt(10, (err, salt)=> {
					    bcrypt.hash(newUser.password, salt, function(err, hash) {
					        if(err) throw err;
					        newUser.password=hash;
					        
					        newUser.save()
							.then((user)=>{
								req.flash("success_msg","注册成功！");
								res.redirect('/users/login')
							}).catch((err)=>{
								req.flash("success_msg","账号注册失败！");
								res.redirect('/users/register')
							});
					        
					    });
					});	 				 		
			  }
		 })
	}
})

router.get("/logout",(req,res)=>{
	req.logout();
	req.flash("success_msg","退出成功！");
	res.redirect("/users/login");
	
})


module.exports=router;

