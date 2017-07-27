app.get('/content', function(req, res) {
    //req.query 可以获取请求参数
    var index = req.query.index;
    var num=req.query.num;
    data=[];
    for(var i=0;i<num;i++){
        data.push("内容"+(parseInt(index)+i+1));
    }
    setTimeout(function(){
        res.send(data);
    },2000);

});
