require("express")().get("*",function (req,res) {
	res.sendFile(__dirname + req.path);
}).listen(8888,function () {
	console.log("-------------服务已启动-------------");
})
