const LocalStrategy=require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt=require("bcrypt");

//加载model
const User =mongoose.model("users");

module.exports=((passport)=>{
	passport.use(new LocalStrategy(
		{usernameField:"email"},
		(email,password,done)=>{
//	        查询数据库是否存在该用户
	User.findOne({email:email})
		.then((user)=>{
	//		查询结果没有这个邮箱
			if(!user){
				return done(null,false,{message:"没有这个用户！"});
			}
			
	//		有这个邮箱密码验证（数据库中密码经过加密）
			bcrypt.compare(password,user.password,(err,isMatch)=>{
				if(err) throw err;

				if(isMatch){
					return done(null,user);
				}else{
					return done(null,false,{message:"密码错误！"});
				}
			});
		  })
		}		
	));
	
//	序列化和反序列化
	passport.serializeUser(function(user,done){
		done(null,user.id);
	});
	
	passport.deserializeUser(function(id,done){
		User.findById(id,function(err,user){
			done(err,user);
		});
	});
})
