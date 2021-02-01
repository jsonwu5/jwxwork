# 企业微信jwxwork sdk npm版
> 基于官网jssdk文件修改，方便在webpack等环境使用

微信jssdk源码：https://res.wx.qq.com/open/js/jweixin-1.6.0.js

企业微信jwxwork sdk源码(需要引入上面的微信jssdk): https://open.work.weixin.qq.com/wwopen/js/jwxwork-1.0.0.js

企业微信jwxwork sdk源码（不需要引入上面的微信jssdk）：https://res.wx.qq.com/wwopen/js/jsapi/jweixin-1.0.0.js

企业微信jssdk官方文档：https://work.weixin.qq.com/api/doc/90000/90136/90515

## 安装

    npm i wecomjsdk

## 使用

```javascript
    import wx from 'wecomjsdk';

    // 注入微信jssdk权限验证配置
    wx.config({
        beta: true, // 必须这么写，否则wx.invoke调用形式的jsapi会有问题
        debug: process.env.NODE_ENV === 'development' && DEBUG, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: $store.state.corpId, // 必填，企业微信的corpID
        timestamp: '', // 必填，生成签名的时间戳
        nonceStr: '', // 必填，生成签名的随机串
        signature: '', // 必填，签名，见附录1
        jsApiList: ['invoke'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    // 配置成功后在回调里处理企业微信agentConfig
    wx.ready(() => {
        // 注入企业微信jssdk权限验证配置
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
    })
```

