//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        try {
            this.verified = wx.getStorageSync('verified')
        }
        catch (e) {
            console.log(e)
        }
        /*qcloud.setLoginUrl(config.service.loginUrl)
        var that = this
        new Promise(function (resolve, reject) {
            wx.login({
                success: function (res) {
                    resolve(res)
                }
            })
        }).then(function (res) {
            return new Promise(function (resolve, reject) {
                wx.request({
                    url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx542ddffc5268f0be&secret=0bf54d6cec5a5055896ed03226190b44&js_code=' + res.code + '&grant_type=authorization_code',
                    success: function (result) {
                        resolve(result.data)
                    }
                })
            })
        }).then(function (data) {
            that.openid = data.openid
            return new Promise(function (resolve, reject) {
                try {
                    wx.request({
                        url: config.service.checkVerifiedUrl + data.openid,
                        success: function (res) {
                            if(res.data.data.length != 0) {
                                that.verified = true
                            }
                        }
                    })
                }
                catch (err) {
                    console.log(err)
                    wx.showToast({
                        icon: "none",
                        title: '出错！'
                    })
                }
            })
        })
    },*/
    },
    verified: false,
    openid: '',
    userInfo: {},
    projects: [
    { 
        manager:false,
        In:false,
        img: "../../images/YiLuPingAn.jpg",
        title: "“益路平安”东风爱心大行动",
        content: "  为进一步推进东风社会责任“润”计划的实施，履行文化责任，积极构建文明、有序、可持续发展的中国汽车社会，东风汽车公司于6月5日正式启动“和畅东风”汽车公民文化活动，并联合中国道路交通安全协会、中国汽车文化促进会发布《中国汽车公民文明公约》。\n  为更广泛的传播《公约》精神，将理念宣导转化为爱心行动，最终触发爱心传播《公约》，东风公益基金会联合公司部分二级单位、140余家东风旗下品牌4S店，开展为期1个月的百万文明之诺——“益路平安”东风爱心大行动。鼓励爱心人士通过传播《公约》、传递文明，为因交通事故致残的儿童（首批筛选10名）赢取爱心救助基金。\n  爱心人士可以通过活动官网（www.dfm1000000.com）、东风公益基金会官方微博、微信参与《公约》转发、点赞，互动答题等形式参与爱心大行动；在4S店，客户还可参加“一份承诺 一元爱心”到店签名支持《公约》等活动。每一次转发、每一个签名，每一份承诺，都将转化为“东风公益基金会”捐出的1元爱心, 最终汇聚成100万元救助金。",
        date: '',
        location: '',
        emial: '',
        weixin: '',
        weibo: '',
        website: "http://www.dfm1000000.com",
        phone: "",
        goal: "传播《中国汽车公民文明公约》，构建文明、有序、可持续发展的中国汽车社会。",
        profile: "  2012年，经国家民政部审批，东风汽车公司筹建成立“东风公益基金会”。“东风公益基金会”为非公募基金会，原始注资金额人民币5000万元，主要为公司“润”计划主要公益项目的实施提供执行平台和资金支持。\n  东风公益基金会以“东风化雨 润泽四方”为理念，推进社会公益责任的实施，积极开展援藏、对口帮扶、“母亲健康快车”捐赠等扶贫、助困项目；投资千万，打造集“衣、食、助、行、学”五位一体的特色助学项目——“东风润苗行动”,关爱贫困地区儿童成长；同时，积极支援灾区建设，雅安地震发生后，东风公益基金会第一时间协同各理事单位捐赠价值850余万元款物，为灾区送去温暖。\n  经过两年的探索与实践，东风公益基金会的特色项目不断丰富，先后开启了“东风润苗行动”、“东风梦想车”中国青年环保汽车创意设计大赛、“和畅东风”汽车公民文化活动等多个极具社会价值的履责项目，并获得了各界信赖。"
      },
      {
        img: "../../images/OneEgg.jpg",
        title: "一颗鸡蛋工程",
        content: "  了中华民族下一代身心健康的成长，中华儿慈会在全国开展《一颗鸡蛋工程》，即：集合各地企业家、爱心人士的捐赠，资助需要帮助的贫困孩子每人每天吃上一颗鸡蛋；并在贫困山区冠名捐建《一颗鸡蛋工程》绿色鸡蛋散养基地（养殖场），既扶持当地农民就近创业，缓解当前“城市病”的困局，又免费为孩子们提供长期稳定的营养补充来源。\n  1、开展“一元钱、一颗鸡蛋、一份爱心、资助一个贫困儿童；手拉手、一对一”的爱心传递、结对资助活动：社会各界都可以通过《一颗鸡蛋工程》官网http://www.yikejidan.org或中华儿慈会官网http://www.ccafc.org.cn资助你想对口资助的某个学校的中小学生（捐赠信息指向：一颗鸡蛋工程)。\   2、参与“爱满中华《一颗鸡蛋工程》365计划”，倡导每个家庭每天一元钱，每年捐赠365元资助一个贫困孩子一学年每天吃上一颗鸡蛋。\n  3、参与组织《一颗鸡蛋工程》百城慈善募捐义演大型公益推广活动。各爱心企业通过参与《一颗鸡蛋工程》百城慈善募捐音乐会的形式，为企业美誉度的提升和企业品牌的传播推广搭建平台，也为中西部贫困孩子早日吃上一颗鸡蛋募集更多的善款。\n  4、参与开展《一颗鸡蛋工程》公益营销、慈善义卖大型公益推广项目。企业可以利用网络平台或在各大超市、社区开展各种形式的公益营销、慈善义卖；也可通过自己的营销渠道开展各种“营销附捐”活动，为贫困孩子募集更多的善款，资助他们早日吃上一颗鸡蛋。",
        date: '',
        location: '',
        emial: '',
        weixin: '',
        weibo: '',
        website: "http://www.yikejidan.org/ ",
        phone: "010-64867373",
        goal: "每天一颗蛋 强壮中国娃 让中华下一代身心健康的幸福成长",
        profile: "  中华少年儿童慈善救助基金会2010年1月12日在京成立。 中华少年儿童慈善救助基金会是我国具有民间色彩的全国性公募基金会。基金会由魏久明和曾经共同从事过青少年工作的李启民、袁正光等人共同创办，并得到了上海企业家袁祥先生的支持,他捐赠了2000万原始基金。\n  基金会的宗旨为，募集社会资金，开辟民间 救助通道，对社会上无人监管抚养的孤儿、爱心满世界流浪儿童、辍学学生、问题少年和其他有特殊困难的少年儿童等进行救助。"
      }
    ],
    places: [],
    teams: [
      {
        manager: false,
        In: false,
        img: "../../images/XiMeng.jpg",
        title: "厦门大学西望支教队",
        wechat: "厦门大学西部梦想",
        phone: "18959214525",
        content: "西望队，立身于西部梦想社团，2011年成立。该队伍以“I teach，we learn”为宗旨，“创意启航，共同成长”为方向，并原创队歌《铭记》，以其独特的教学理念、新颖的活动形式、积极的参与态度、无限的创意脑洞，成为社团的中流砥柱，是社团创新进步的领路人。年轻的活力，是西望队敢于探索、勇于挑战的基石，也是队伍始终真诚地为孩子付出的不竭动力。西望队也着力于关注并积极解决孩子心理问题，通过经年累月地努力，让孩子能健康快乐地成长。\n  同时，西望队积极与外界公益组织交流合作，拥有完善的培养体系，以优秀的教学质量与精彩多元的兴趣活动在国内获得广泛关注，先后有西部新闻网、甘肃共青团、福建省教育厅等十八家主流媒体报道优秀事迹，赢得多方好评。"
      },
      {
        img: "",
        title: "厦门大学竹蜻蜓支教队",
        wechat: "厦大竹蜻蜓",
        phone: "18959214525",
        content: "厦门大学竹蜻蜓支教队始建于2009年，缘起于厦门大学的一名学姐。三年来利用每年暑假期间赴西藏当雄县进行支教活动。将活动取名为“放飞竹蜻蜓”，是希望在该队伍的努力下，那里的孩子们能获得一个像竹蜻蜓一样高高飞翔的梦想!"
      }
    ],
    sources: []
})