
/*router.get('/getNews', function(req, res) {
	var getnews = req.query.callback; // 通过 req.query获取请求参数
    var news = [
        "第11日前瞻：中国冲击4金 博尔特再战200米羽球",
        "正直播柴飚/洪炜出战 男双力争会师决赛",
        "女排将死磕巴西！郎平安排男陪练模仿对方核心",
        "没有中国选手和巨星的110米栏 我们还看吗？",
        "中英上演奥运金牌大战",
        "博彩赔率挺中国夺回第二纽约时报：中国因对手服禁药而丢失的奖牌最多",
        "最“出柜”奥运？同性之爱闪耀里约",
        "下跪拜谢与洪荒之力一样 都是真情流露"
    ];
	var arr=[],num=[-1],b;
	for(var i=0;i<3;i++){
        b=Math.floor(Math.random()*(news.length));
	    for(var j=0;j<num.length;j++){
	        if(b===num[j]) {i--;}
	        else {
	            arr.push(news[b]);
	            num.push(b); break;
	        }
        };
    };
	res.send(getnews+"("+JSON.stringify(arr)+")");

});*/

//CORS跨域获取数据
router.get("/getNews",function(reg,res){
    var getnews=reg.query.callback;
    var news = [
        "第11日前瞻：中国冲击4金 博尔特再战200米羽球",
        "正直播柴飚/洪炜出战 男双力争会师决赛",
        "女排将死磕巴西！郎平安排男陪练模仿对方核心",
        "没有中国选手和巨星的110米栏 我们还看吗？",
        "中英上演奥运金牌大战",
        "博彩赔率挺中国夺回第二纽约时报：中国因对手服禁药而丢失的奖牌最多",
        "最“出柜”奥运？同性之爱闪耀里约",
        "下跪拜谢与洪荒之力一样 都是真情流露"
    ];
    var arr=[],num=[-1],b;
    for(var i=0;i<3;i++){
        b=Math.floor(Math.random()*(news.length));
        for(var j=0;j<num.length;j++){
            if(b===num[j]) {i--;}
            else {
                arr.push(news[b]);
                num.push(b); break;
            }
        };
    };
    res.header("Access-Control-Allow-Origin","http://a.jrg.com:8080");   //表示接受http://a.jrg.com:8080的请求
    res.send(arr);
});



