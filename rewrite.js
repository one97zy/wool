# 获取阅读所需数据：配置好此重写规则，进入app阅读文章视频，每个文章视频只抓取首次奖励即可换下一个文章视频（单个文章视频的非首次的奖励可通过脚本循环跑时获得），如果频繁提示达上限，请从最后一次阅读开始算起，间隔一天再去抓数据
http-request ^https?://ios\.baertt\.com/v5/article/complete script-path=https://raw.githubusercontent.com/ztxtop/x/main/zqread.js , requires-body=1, tag=中青阅读数据

# 获取阅读时长数据：只会抓取超过1分钟阅读时长的数据
http-request ^https?://ios\.baertt\.com/v5/user/app_stay\.json script-path=https://raw.githubusercontent.com/ztxtop/x/main/zqread.js, requires-body=1, tag=中青阅读时长数据

# 获取签到所需数据：我的->任务中心
http-request ^https?://\w+\.youth\.cn/(TaskCenter|WebApi/NewTaskIos)/(sign|getSign)(\?.+)?$ script-path=https://raw.githubusercontent.com/ztxtop/x/main/zqread.js, tag=中青签到、宝箱数据
# 获取阅读所需数据：配置好此重写规则，进入app待阅读的文章视频页面，获取完阅读数据后返回，进入下一个阅读页面
http-request ^https?://(ios\.baertt|kandian\.wkandian)\.com/v5/article/(info/get|info|detail)\.json script-path=https://raw.githubusercontent.com/ztxtop/x/main/zqread.js, tag=获取阅读数据
//聚看点
https:\/\/www\.xiaodouzhuan\.cn\/jkd\/newMobileMenu\/infoMe\.action url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/jukan.js
//多看点（姐姐版）
https://dkd-api.dysdk.com/video/red_countdown url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDVIDEO/dkdvideo_cookie.js

//视频
https://dkd-api.dysdk.com/android_video/getaward url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDVIDEO/dkdvideo_cookie.js

//提现
https://dkd-api.dysdk.com/money/withdraw_do? url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDVIDEO/dkdvideo_cookie.js

//转盘
https://dkd-api.dysdk.com/lotto/index? url script-request-body https://raw.githubusercontent.com/CenBoMin/GithubSync/main/DKDVIDEO/dkdvideo_cookie.js
//腾讯自选股

https://wzq.tenpay.com/activity/page/welwareCenter/ url script-request-header https://raw.githubusercontent.com/CenBoMin/GithubSync/main/TXSTOCK/txs_cookie.js


https://wzq.tenpay.com/resources/vtools url script-request-header https://raw.githubusercontent.com/CenBoMin/GithubSync/main/TXSTOCK/txs_cookie.js


https://wzq.tenpay.com/cgi-bin/activity_usercenter.fcgi? url script-request-header https://raw.githubusercontent.com/CenBoMin/GithubSync/main/TXSTOCK/txs_cookie.js

https://zqact.tenpay.com/cgi-bin/open_stockinfo.fcgi? url script-request-header https://raw.githubusercontent.com/CenBoMin/GithubSync/main/TXSTOCK/txs_cookie.js

https://zqact.tenpay.com/cgi-bin/shop.fcgi? url script-request-header https://raw.githubusercontent.com/CenBoMin/GithubSync/main/TXSTOCK/txs_cookie.js
//特仑苏获取ck
https:\/\/xw\.mengniu\.cn\/grass\/Api\/TelunsuHandler\.ashx\?method\=GetMyPrize url script-request-header https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/tls.js
//聚看点
https:\/\/www\.xiaodouzhuan\.cn\/jkd\/newMobileMenu\/infoMe\.action url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/jukan.js
//书旗小说
#阅读 签到  分享 奖励 收取奖励  抽奖次数 抽奖 极速版视频 极速版签到视频 极速版阅读 极速版签到 极速版分享 极速版书城
https:\/\/ocean\.shuqireader\.com\/* url script-request-body https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js
#收益 任务 极速版任务
https:\/\/render\.shuqireader\.com\/* url script-request-body https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js
#时长
https:\/\/jcollection\.shuqireader\.com\/* url script-request-body https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/shuqi.js
//西梅
https://app.hubonews.com/.+/articles/list url script-request-body https://raw.githubusercontent.com/age174/-/main/ximei.js
//郎果英语
http://api.langooo.com/task/daily/taskList url script-request-body https://raw.githubusercontent.com/age174/-/main/lgyy.js
//惊喜财富岛
^https\:\/\/wq\.jd\.com\/cubeactive\/farm\/dotask url script-request-header https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_tokens.js
^https\:\/\/m\.jingxi\.com\/dreamfactory\/generator\/CollectCurrentElectricity url script-request-header https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_tokens.js
^https\:\/\/m\.jingxi\.com\/jxcfd\/consume\/CashOut url script-request-header https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_tokens.js
#电视家获取header
http://.+/api/v2/device/info url script-request-body https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/dsj.js
#电视家获取url
http://api.gaoqingdianshi.com/api/* url script-request-header https://cdn.jsdelivr.net/gh/ziye888/JavaScript@main/Task/dsj.js
