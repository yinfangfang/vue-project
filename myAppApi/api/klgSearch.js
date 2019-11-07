module.exports = {
    getData(){
        let data = {
            content:[
                {
                    "title":"热门搜索",
                    "list":[
                        {"hotSearch":"鹅绒服"},
                        {"hotSearch":"大衣"},
                        {"hotSearch":"洗发水"},
                        {"hotSearch":"蚕丝被"},
                        {"hotSearch":"牛尔"},
                        {"hotSearch":"雅诗兰黛"},
                        {"hotSearch":"眼霜"},
                        {"hotSearch":"面膜"},
                    ]
                },
                {
                    "title":"热门分类",
                    "list":[
                        {"hotSearch":"面膜"},
                        {"hotSearch":"女性保养"},
                        {"hotSearch":"牛奶/酸奶"},
                        {"hotSearch":"新鲜果蔬"},
                        {"hotSearch":"炒锅/煎锅"},
                        {"hotSearch":"清洁用品"},
                        {"hotSearch":"羽绒/羊绒"},
                        {"hotSearch":"生鲜水产"},
                    ]
                }
            ]
        }
        return data
    }
}