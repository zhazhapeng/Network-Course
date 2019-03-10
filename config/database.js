if(process.env.NODE_ENV=="production"){
module.exports=
//	xxxxx代表数据库的地址
	{mongoURL:"xxxxxxx"}
}else{
	//	xxxxx代表数据库的地址
	module.exports={mongoURL:"mongodb://localhost/node-app"}
}
