module.exports = function (app) {

    app.get('/citys' , function (req , res) {
        res.json([
            {
                "src": "../../../assert/images/img1.jpeg",
                "name": "大草原打滚",
                "address": "中国.内蒙古",
                "time": "2015.08.13 10:22:56",
                "desc": "内蒙的大草原其实和想象中的差异比较大..."
            },
            {
                "src": "../../../assert/images/img2.jpeg",
                "name": "人妖表演",
                "address": "泰国.普吉岛",
                "time": "2015.07.05 20:00:00",
                "desc": "走在泰国轻易不要按照外表来判断性别,说不好就是人妖啊..."
            },
            {
                "src": "../../../assert/images/img3.jpeg",
                "name": "玉龙雪山",
                "address": "中国.云南",
                "time": "2013.10.05 12:30:56",
                "desc": "远看玉龙雪山的雪其实不是真的雪,它可能是分化掉的石头..."
            }
        ]);
    });
};