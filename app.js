//引进express
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const path=require("path");
const session=require('express-session');
const flash=require("connect-flash");
const methodOverride = require('method-override');
const passport=require("passport");

//实例化对象
const app = express();

//load routes
const ideas=require('./routes/ideas');
const users=require('./routes/users');
const db = require('./config/database');
const {ensureAuthenticated}=require("./helpers/auth");

require("./config/passport")(passport);

//连接数据库  生产环境也不能直接连接本地的数据库
//mongoose.connect(db.mongoURL)
mongoose.connect("mongodb://localhost/node-app")
		.then(()=>{
			console.log("MongoDB connect success....");
		})
		.catch(err =>{
			console.log(err);
		})
//引入模型
require("./models/Idea");

const Idea=mongoose.model("ideas");


//body-parser middleware
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//使用静态问件
app.use(express.static(path.join(__dirname,'public')));

//methodOverride  中间件
app.use(methodOverride('_method'));


//handlebars middleware
app.engine('handlebars',exphbs({
	defaultLayout:'main'
	}));
	app.set('view engine','handlebars');

//session & flash 中间件
app.use(session({
	secret:'secret',
	resave:true,
	saveUninitialized:true,
}))
//必须放到session下面
app.use(passport.initialize());
app.use(passport.session());

//使用flash
app.use(flash());


//配置全局变量
app.use((req,res,next)=>{
	res.locals.success_msg=req.flash('success_msg');
	res.locals.error_msg=req.flash('error_msg');
	res.locals.error=req.flash('error');
	res.locals.user=req.user||null;
	next();
})


//配置路由  req是请求的来源，res是接收到请求后做出的回应
//主页
app.get("/",(req,res)=>{
	const title="欢迎来到网课系统！"
	res.render("index",{
		title:title
	});
})
//跳转到关于我们页面
app.get("/about",ensureAuthenticated,(req,res)=>{
	res.render("about");
})

//使用router
app.use("/ideas",ideas);
app.use("/users",users);


//前面的是项目打包时服务器的端口
const port = process.env.PORT||5000;
app.listen(port,'0.0.0.0',()=>{
	console.log(`Server started on ${port}`);
})
