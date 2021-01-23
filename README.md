# 企业微信官方 jwxwork sdk

说明: 仅将官方 jwxwork sdk 发布到 npm，支持 CommonJS，便于 browserify, webpack 等直接使用

官方jssdk源码：https://res.wx.qq.com/open/js/jweixin-1.6.0.js

官方jwxwork sdk源码: https://open.work.weixin.qq.com/wwopen/js/jwxwork-1.0.0.js

官方文档：https://work.weixin.qq.com/api/doc/90000/90136/90515

##安装:

    npm i wecomjsdk

##使用:

首页在index.html中引入微信jssdk

```<script src="//res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>```
    
然后在使用的地方引入


```javascript
    import 'wecomjsdk';
    
    wx.agentConfig({
        corpid: '', // 必填，企业微信的corpid，必须与当前登录的企业一致
        agentid: '', // 必填，企业微信的应用id （e.g. 1000247）
        timestamp: '', // 必填，生成签名的时间戳
        nonceStr: '', // 必填，生成签名的随机串
        signature: '',// 必填，签名，见附录-JS-SDK使用权限签名算法
        jsApiList: ['selectExternalContact'], //必填
        success: function(res) {
            // 回调
        },
        fail: function(res) {
            if(res.errMsg.indexOf('function not exist') > -1){
                alert('版本过低请升级')
            }
        }
    });
```

