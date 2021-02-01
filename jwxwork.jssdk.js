// 企业微信jssdk官方文件，只作了代码格式化处理，方便对照修改
// https://res.wx.qq.com/wwopen/js/jsapi/jweixin-1.0.0.js
!(function (e, t) {
  'function' != typeof define || (!define.amd && !define.cmd) || window.requirejs
    ? t(e, !0)
    : define('js/jsapi/jweixin-1.0.0', [], function () {
        return t(e);
      });
})(this, function (e, t) {
  if (!e.jWeixin) {
    var n,
      i = {
        config: 'preVerifyJSAPI',
        onMenuShareTimeline: 'menu:share:timeline',
        onMenuShareAppMessage: 'menu:share:appmessage',
        onMenuShareWechat: 'menu:share:wechat',
        onMenuShareQQ: 'menu:share:qq',
        onMenuShareWeibo: 'menu:share:weiboApp',
        onMenuShareQZone: 'menu:share:QZone',
        previewImage: 'imagePreview',
        previewFile: 'previewFile',
        getLocation: 'geoLocation',
        openProductSpecificView: 'openProductViewWithPid',
        addCard: 'batchAddCard',
        openCard: 'batchViewCard',
        chooseWXPay: 'getBrandWCPayRequest',
        openEnterpriseRedPacket: 'getRecevieBizHongBaoRequest',
        startSearchBeacons: 'startMonitoringBeacons',
        stopSearchBeacons: 'stopMonitoringBeacons',
        onSearchBeacons: 'onBeaconsInRange',
        consumeAndShareCard: 'consumedShareCard',
        openAddress: 'editAddress',
        getUserOpenID: 'getUserOpenID',
        getBrandWCPayRequest: 'getBrandWCPayRequest',
        notifyNativeEvent: 'notifyNativeEvent',
      },
      o = (function () {
        var e = {};
        for (var t in i) e[i[t]] = t;
        return e;
      })(),
      a = e.document,
      r = a.title,
      c = navigator.userAgent.toLowerCase(),
      s = navigator.platform.toLowerCase(),
      d = !(!s.match('mac') && !s.match('win')),
      u = -1 != c.indexOf('wxdebugger'),
      f = -1 != c.indexOf('wxwork'),
      p = -1 != c.indexOf('android'),
      l = -1 != c.indexOf('iphone') || -1 != c.indexOf('ipad'),
      g = (n = c.match(/wxwork\/(\d+\.\d+\.\d+)/) || c.match(/wxwork\/(\d+\.\d+)/)) ? n[1] : '',
      m = {
        initStartTime: x(),
        initEndTime: 0,
        preVerifyStartTime: 0,
        preVerifyEndTime: 0,
      },
      v = {
        version: '1.0.0',
        appId: '',
        initTime: 0,
        preVerifyTime: 0,
        networkType: '',
        isPreVerifyOk: 1,
        systemType: l ? 1 : p ? 2 : -1,
        clientVersion: g,
        url: encodeURIComponent(location.href),
      },
      h = {},
      S = {},
      y = { _completes: [] },
      I = { state: 0, data: {} };
    M(function () {
      m.initEndTime = x();
    });
    var w = {
      config: function (e) {
        (h = e), L('config', e);
        var t = !1 !== h.check;
        M(function () {
          if (t)
            C(
              i.config,
              { verifyJsApiList: W(h.jsApiList) },
              (function () {
                (y._complete = function (e) {
                  (m.preVerifyEndTime = x()), (I.state = 1), (I.data = e);
                }),
                  (y.success = function (e) {
                    v.isPreVerifyOk = 0;
                  }),
                  (y.fail = function (e) {
                    y._fail ? y._fail(e) : (I.state = -1);
                  });
                var e = y._completes;
                return (
                  e.push(function () {
                    !(function (e) {
                      if (!u && !h.debug) {
                        var t = new Image();
                        if (
                          ((v.appId = h.appId),
                          (v.initTime = m.initEndTime - m.initStartTime),
                          (v.preVerifyTime = m.preVerifyEndTime - m.preVerifyStartTime),
                          d)
                        ) {
                          var n =
                            'https://open.work.weixin.qq.com/wwopen/report/sdk?v=' +
                            v.version +
                            '&o=' +
                            v.isPreVerifyOk +
                            '&cv=' +
                            v.clientVersion +
                            '&appid=' +
                            v.appId +
                            '&nt=pc&it=' +
                            v.initTime +
                            '&pt=' +
                            v.preVerifyTime +
                            '&url=' +
                            v.url;
                          t.src = n;
                        } else
                          w.getNetworkType({
                            isInnerInvoke: !0,
                            success: function (e) {
                              v.networkType = e.networkType;
                              var n =
                                'https://open.work.weixin.qq.com/wwopen/report/sdk?v=' +
                                v.version +
                                '&o=' +
                                v.isPreVerifyOk +
                                '&cv=' +
                                v.clientVersion +
                                '&appid=' +
                                v.appId +
                                '&nt=' +
                                v.networkType +
                                '&it=' +
                                v.initTime +
                                '&pt=' +
                                v.preVerifyTime +
                                '&url=' +
                                v.url;
                              t.src = n;
                            },
                          });
                      }
                    })();
                  }),
                  (y.complete = function (t) {
                    for (var n = 0, i = e.length; n < i; ++n) e[n]();
                    y._completes = [];
                  }),
                  y
                );
              })(),
            ),
              (m.preVerifyStartTime = x());
          else {
            I.state = 1;
            for (var e = y._completes, n = 0, o = e.length; n < o; ++n) e[n]();
            y._completes = [];
          }
        }),
          h.beta && D();
      },
      agentConfig: function (t) {
        M(function () {
          if (((t = t || {}), e.WeixinJSBridge)) {
            D();
            var n = {
              corpid: t.corpid + '',
              agentid: t.agentid + '',
              timestamp: t.timestamp + '',
              nonceStr: t.nonceStr + '',
              signature: t.signature + '',
              jsApiList: W(t.jsApiList),
            };
            WeixinJSBridge.invoke('agentConfig', _(n), function (i) {
              (S = n),
                (e.WeixinSandBox && !e.WWOpenData) || s.match('win')
                  ? WeixinJSBridge.invoke('wwapp.initWwOpenData', _({}), function () {
                      T('agentConfig', i, t);
                    })
                  : T('agentConfig', i, t);
            });
          } else L('agentConfig', t);
        });
      },
      ready: function (e) {
        0 != I.state ? e() : (y._completes.push(e), !f && h.debug && e());
      },
      error: function (e) {
        -1 == I.state ? e(I.data) : (y._fail = e);
      },
      checkJsApi: function (e) {
        C(
          'checkJsApi',
          { jsApiList: W(e.jsApiList) },
          ((e._complete = function (e) {
            if (p) {
              var t = e.checkResult;
              t && (e.checkResult = JSON.parse(t));
            }
            e = (function (e) {
              var t = e.checkResult;
              for (var n in t) {
                var i = o[n];
                i && ((t[i] = t[n]), delete t[n]);
              }
              return e;
            })(e);
          }),
          e),
        );
      },
      onMenuShareTimeline: function (e) {
        B(
          i.onMenuShareTimeline,
          {
            complete: function () {
              C(
                'shareTimeline',
                {
                  title: e.title || r,
                  desc: e.title || r,
                  img_url: e.imgUrl || '',
                  link: e.link || location.href,
                  type: e.type || 'link',
                  data_url: e.dataUrl || '',
                },
                e,
              );
            },
          },
          e,
        );
      },
      onMenuShareAppMessage: function (e) {
        B(
          i.onMenuShareAppMessage,
          {
            complete: function () {
              C(
                'sendAppMessage',
                {
                  title: e.title || r,
                  desc: e.desc || '',
                  link: e.link || location.href,
                  img_url: e.imgUrl || '',
                  type: e.type || 'link',
                  data_url: e.dataUrl || '',
                },
                e,
              );
            },
          },
          e,
        );
      },
      onMenuShareWechat: function (e) {
        B(
          i.onMenuShareWechat,
          {
            complete: function () {
              C(
                'shareWechat',
                {
                  title: e.title || r,
                  desc: e.desc || '',
                  link: e.link || location.href,
                  img_url: e.imgUrl || '',
                  type: e.type || 'link',
                  data_url: e.dataUrl || '',
                },
                e,
              );
            },
          },
          e,
        );
      },
      onMenuShareQQ: function (e) {
        B(
          i.onMenuShareQQ,
          {
            complete: function () {
              C(
                'shareQQ',
                {
                  title: e.title || r,
                  desc: e.desc || '',
                  img_url: e.imgUrl || '',
                  link: e.link || location.href,
                },
                e,
              );
            },
          },
          e,
        );
      },
      onMenuShareWeibo: function (e) {
        B(
          i.onMenuShareWeibo,
          {
            complete: function () {
              C(
                'shareWeiboApp',
                {
                  title: e.title || r,
                  desc: e.desc || '',
                  img_url: e.imgUrl || '',
                  link: e.link || location.href,
                },
                e,
              );
            },
          },
          e,
        );
      },
      onMenuShareQZone: function (e) {
        B(
          i.onMenuShareQZone,
          {
            complete: function () {
              C(
                'shareQZone',
                {
                  title: e.title || r,
                  desc: e.desc || '',
                  img_url: e.imgUrl || '',
                  link: e.link || location.href,
                },
                e,
              );
            },
          },
          e,
        );
      },
      startRecord: function (e) {
        C('startRecord', {}, e);
      },
      stopRecord: function (e) {
        C('stopRecord', {}, e);
      },
      onVoiceRecordEnd: function (e) {
        B('onVoiceRecordEnd', e);
      },
      playVoice: function (e) {
        C('playVoice', { localId: e.localId }, e);
      },
      pauseVoice: function (e) {
        C('pauseVoice', { localId: e.localId }, e);
      },
      stopVoice: function (e) {
        C('stopVoice', { localId: e.localId }, e);
      },
      onVoicePlayEnd: function (e) {
        B('onVoicePlayEnd', e);
      },
      uploadVoice: function (e) {
        C(
          'uploadVoice',
          {
            localId: e.localId,
            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1,
          },
          e,
        );
      },
      downloadVoice: function (e) {
        C(
          'downloadVoice',
          {
            serverId: e.serverId,
            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1,
          },
          e,
        );
      },
      translateVoice: function (e) {
        C(
          'translateVoice',
          {
            localId: e.localId,
            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1,
          },
          e,
        );
      },
      chooseImage: function (e) {
        C(
          'chooseImage',
          {
            scene: '1|2',
            count: e.count || 9,
            sizeType: e.sizeType || ['original', 'compressed'],
            sourceType: e.sourceType || ['album', 'camera'],
            defaultCameraMode: e.defaultCameraMode || 'normal',
            isSaveToAlbum: 0 == e.isSaveToAlbum ? 0 : 1,
          },
          ((e._complete = function (e) {
            if (p) {
              var t = e.localIds;
              t && (e.localIds = JSON.parse(t));
            }
          }),
          e),
        );
      },
      previewImage: function (e) {
        C(i.previewImage, { current: e.current, urls: e.urls }, e);
      },
      uploadImage: function (e) {
        C(
          'uploadImage',
          {
            localId: e.localId,
            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1,
          },
          e,
        );
      },
      downloadImage: function (e) {
        C(
          'downloadImage',
          {
            serverId: e.serverId,
            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1,
          },
          e,
        );
      },
      getLocalImgData: function (e) {
        C('getLocalImgData', { localId: e.localId, success: e.success }, e);
      },
      previewFile: function (e) {
        C('previewFile', { url: e.url, name: e.name, size: e.size }, e);
      },
      getNetworkType: function (e) {
        C(
          'getNetworkType',
          {},
          ((e._complete = function (e) {
            e = (function (e) {
              var t = e.errMsg;
              e.errMsg = 'getNetworkType:ok';
              var n = e.subtype;
              if ((delete e.subtype, n)) e.networkType = n;
              else {
                var i = t.indexOf(':'),
                  o = t.substring(i + 1);
                switch (o) {
                  case 'wifi':
                  case 'edge':
                  case 'wwan':
                    e.networkType = o;
                    break;
                  default:
                    e.errMsg = 'getNetworkType:fail';
                }
              }
              return e;
            })(e);
          }),
          e),
        );
      },
      openLocation: function (e) {
        C(
          'openLocation',
          {
            latitude: e.latitude,
            longitude: e.longitude,
            name: e.name || '',
            address: e.address || '',
            scale: e.scale || 28,
            infoUrl: e.infoUrl || '',
          },
          e,
        );
      },
      getLocation: function (e) {
        (e = e || {}),
          C(
            i.getLocation,
            { type: e.type || 'wgs84' },
            ((e._complete = function (e) {
              delete e.type;
            }),
            e),
          );
      },
      hideOptionMenu: function (e) {
        C('hideOptionMenu', {}, e);
      },
      showOptionMenu: function (e) {
        C('showOptionMenu', {}, e);
      },
      closeWindow: function (e) {
        C('closeWindow', {}, (e = e || {}));
      },
      hideMenuItems: function (e) {
        C('hideMenuItems', { menuList: e.menuList }, e);
      },
      showMenuItems: function (e) {
        C('showMenuItems', { menuList: e.menuList }, e);
      },
      hideAllNonBaseMenuItem: function (e) {
        C('hideAllNonBaseMenuItem', {}, e);
      },
      showAllNonBaseMenuItem: function (e) {
        C('showAllNonBaseMenuItem', {}, e);
      },
      scanQRCode: function (e) {
        C(
          'scanQRCode',
          {
            needResult: (e = e || {}).needResult || 0,
            scanType: e.scanType || ['qrCode', 'barCode'],
          },
          ((e._complete = function (e) {
            if (l) {
              var t = e.resultStr;
              if (t) {
                var n = JSON.parse(t);
                e.resultStr = n && n.scan_code && n.scan_code.scan_result;
              }
            }
          }),
          e),
        );
      },
      openAddress: function (e) {
        C(
          i.openAddress,
          {},
          ((e._complete = function (e) {
            e = (function (e) {
              return (
                (e.postalCode = e.addressPostalCode),
                delete e.addressPostalCode,
                (e.provinceName = e.proviceFirstStageName),
                delete e.proviceFirstStageName,
                (e.cityName = e.addressCitySecondStageName),
                delete e.addressCitySecondStageName,
                (e.countryName = e.addressCountiesThirdStageName),
                delete e.addressCountiesThirdStageName,
                (e.detailInfo = e.addressDetailInfo),
                delete e.addressDetailInfo,
                e
              );
            })(e);
          }),
          e),
        );
      },
      openProductSpecificView: function (e) {
        C(i.openProductSpecificView, { pid: e.productId, view_type: e.viewType || 0, ext_info: e.extInfo }, e);
      },
      addCard: function (e) {
        for (var t = e.cardList, n = [], o = 0, a = t.length; o < a; ++o) {
          var r = t[o],
            c = { card_id: r.cardId, card_ext: r.cardExt };
          n.push(c);
        }
        C(
          i.addCard,
          { card_list: n },
          ((e._complete = function (e) {
            var t = e.card_list;
            if (t) {
              for (var n = 0, i = (t = JSON.parse(t)).length; n < i; ++n) {
                var o = t[n];
                (o.cardId = o.card_id),
                  (o.cardExt = o.card_ext),
                  (o.isSuccess = !!o.is_succ),
                  delete o.card_id,
                  delete o.card_ext,
                  delete o.is_succ;
              }
              (e.cardList = t), delete e.card_list;
            }
          }),
          e),
        );
      },
      chooseCard: function (e) {
        C(
          'chooseCard',
          {
            app_id: h.appId,
            location_id: e.shopId || '',
            sign_type: e.signType || 'SHA1',
            card_id: e.cardId || '',
            card_type: e.cardType || '',
            card_sign: e.cardSign,
            time_stamp: e.timestamp + '',
            nonce_str: e.nonceStr,
          },
          ((e._complete = function (e) {
            (e.cardList = e.choose_card_info), delete e.choose_card_info;
          }),
          e),
        );
      },
      openCard: function (e) {
        for (var t = e.cardList, n = [], o = 0, a = t.length; o < a; ++o) {
          var r = t[o],
            c = { card_id: r.cardId, code: r.code };
          n.push(c);
        }
        C(i.openCard, { card_list: n }, e);
      },
      consumeAndShareCard: function (e) {
        C(i.consumeAndShareCard, { consumedCardId: e.cardId, consumedCode: e.code }, e);
      },
      chooseWXPay: function (e) {
        C(i.chooseWXPay, k(e), e);
      },
      openEnterpriseRedPacket: function (e) {
        C(i.openEnterpriseRedPacket, k(e), e);
      },
      startSearchBeacons: function (e) {
        C(i.startSearchBeacons, { ticket: e.ticket }, e);
      },
      stopSearchBeacons: function (e) {
        C(i.stopSearchBeacons, {}, e);
      },
      onSearchBeacons: function (e) {
        B(i.onSearchBeacons, e);
      },
      openEnterpriseChat: function (e) {
        C(
          'openEnterpriseChat',
          {
            useridlist: e.userIds,
            chatname: e.groupName,
            userIds: e.userIds,
            groupName: e.groupName,
            openIds: e.openIds,
            chatId: e.chatId,
            externalUserIds: e.externalUserIds,
          },
          e,
        );
      },
      getUserOpenID: function (e) {
        C('fetchWXOpenIdRequest', {}, e);
      },
      getBrandWCPayRequest: function (e) {
        C(
          'getBrandWCPayRequest',
          {
            appId: e.appId,
            partnerId: e.partnerId,
            openId: e.openId,
            timeStamp: e.timeStamp,
            nonceStr: e.nonceStr,
            package: e.package,
            signType: e.signType,
            paySign: e.paySign,
          },
          e,
        );
      },
      onHistoryBack: function (e) {
        B('onHistoryBack', {
          complete: function () {
            if ('function' == typeof e)
              try {
                var t = e();
                if (!1 === t || 0 === t) return !1;
              } catch (e) {}
            return C('historyBack'), !1;
          },
        });
      },
      notifyNativeEvent: function (e) {
        C('notifyNativeEvent', { event: e.event, resultCode: e.resultCode, data: e.data }, e);
      },
      openBluetoothAdapter: function (e) {
        C('openBluetoothAdapter', {}, e);
      },
      closeBluetoothAdapter: function (e) {
        C('closeBluetoothAdapter', {}, e);
      },
      getBluetoothAdapterState: function (e) {
        C('getBluetoothAdapterState', {}, e);
      },
      onBluetoothAdapterStateChange: function (e) {
        B('onBluetoothAdapterStateChange', {
          complete: function (t) {
            'function' == typeof e && e(t);
          },
        });
      },
      startBluetoothDevicesDiscovery: function (e) {
        C(
          'startBluetoothDevicesDiscovery',
          {
            services: e.services || [],
            allowDuplicatesKey: e.allowDuplicatesKey || !1,
            interval: e.interval || 0,
          },
          e,
        );
      },
      stopBluetoothDevicesDiscovery: function (e) {
        C('stopBluetoothDevicesDiscovery', {}, e);
      },
      getBluetoothDevices: function (e) {
        C(
          'getBluetoothDevices',
          {},
          {
            success: function (t) {
              if (t && t.devices)
                for (var n = 0; n < t.devices.length; n++)
                  (t.devices[n].advertisData = E(t.devices[n].advertisData)),
                    (t.devices[n].serviceData = E(t.devices[n].serviceData));
              'function' == typeof e.success && e.success(t);
            },
            fail: e.fail,
            complete: e.complete,
          },
        );
      },
      onBluetoothDeviceFound: function (e) {
        B('onBluetoothDeviceFound', {
          complete: function (t) {
            if (t && t.devices)
              for (var n = 0; n < t.devices.length; n++) t.devices[n].advertisData = E(t.devices[n].advertisData);
            'function' == typeof e && e(t ? t.devices : t);
          },
        });
      },
      getConnectedBluetoothDevices: function (e) {
        C('getConnectedBluetoothDevices', { services: e.services }, e);
      },
      createBLEConnection: function (e) {
        C('createBLEConnection', { deviceId: e.deviceId }, e);
      },
      closeBLEConnection: function (e) {
        C('closeBLEConnection', { deviceId: e.deviceId }, e);
      },
      onBLEConnectionStateChange: function (e) {
        B('onBLEConnectionStateChange', {
          complete: function (t) {
            'function' == typeof e && e(t);
          },
        });
      },
      getBLEDeviceServices: function (e) {
        C('getBLEDeviceServices', { deviceId: e.deviceId }, e);
      },
      readBLECharacteristicValue: function (e) {
        C(
          'readBLECharacteristicValue',
          {
            deviceId: e.deviceId,
            serviceId: e.serviceId,
            characteristicId: e.characteristicId,
          },
          e,
        );
      },
      getBLEDeviceCharacteristics: function (e) {
        C('getBLEDeviceCharacteristics', { deviceId: e.deviceId, serviceId: e.serviceId }, e);
      },
      writeBLECharacteristicValue: function (t) {
        'object' == typeof t &&
          t.value &&
          (t.value = (function (t) {
            if (void 0 === t) return t;
            for (var n = '', i = new Uint8Array(t), o = i.byteLength, a = 0; a < o; a++) n += String.fromCharCode(i[a]);
            return e.btoa(n);
          })(t.value)),
          C(
            'writeBLECharacteristicValue',
            {
              deviceId: t.deviceId,
              serviceId: t.serviceId,
              characteristicId: t.characteristicId,
              value: t.value,
            },
            t,
          );
      },
      notifyBLECharacteristicValueChange: function (e) {
        C(
          'notifyBLECharacteristicValueChange',
          {
            deviceId: e.deviceId,
            serviceId: e.serviceId,
            characteristicId: e.characteristicId,
            state: e.state,
          },
          e,
        );
      },
      onBLECharacteristicValueChange: function (e) {
        B('onBLECharacteristicValueChange', {
          complete: function (t) {
            t && t.value && (t.value = E(t.value)), 'function' == typeof e && e(t);
          },
        });
      },
      startBeaconDiscovery: function (e) {
        C('startBeaconDiscovery', { uuids: e.uuids }, e);
      },
      stopBeaconDiscovery: function (e) {
        C('stopBeaconDiscovery', {}, e);
      },
      getBeacons: function (e) {
        C('getBeacons', {}, e);
      },
      onBeaconUpdate: function (e) {
        B('onBeaconUpdate', {
          complete: function (t) {
            'function' == typeof e && e(t);
          },
        });
      },
      onBeaconServiceChange: function (e) {
        B('onBeaconServiceChange', {
          complete: function (t) {
            'function' == typeof e && e(t);
          },
        });
      },
      startWifi: function (e) {
        C('startWifi', {}, e);
      },
      stopWifi: function (e) {
        C('stopWifi', {}, e);
      },
      connectWifi: function (e) {
        var t = { SSID: e.SSID, BSSID: e.BSSID };
        e.hasOwnProperty('password') && (t.password = e.password), C('connectWifi', t, e);
      },
      getWifiList: function (e) {
        C('getWifiList', {}, e);
      },
      onGetWifiList: function (e) {
        B('onGetWifiList', {
          complete: function (t) {
            'function' == typeof e && e(t);
          },
        });
      },
      onWifiConnected: function (e) {
        B('onWifiConnected', {
          complete: function (t) {
            'function' == typeof e && e(t);
          },
        });
      },
      getConnectedWifi: function (e) {
        C('getConnectedWifi', {}, e);
      },
      setClipboardData: function (e) {
        C('setClipboardData', { data: e.data }, e);
      },
      getClipboardData: function (e) {
        C('getClipboardData', {}, e);
      },
      onNetworkStatusChange: function (e) {
        B('onNetworkStatusChange', {
          complete: function (t) {
            'function' == typeof e && e(t);
          },
        });
      },
      onLocationChange: function (e) {
        B('auto:location:report', {
          complete: function (t) {
            'function' == typeof e && e(t);
          },
        });
      },
      onUserCaptureScreen: function (e) {
        B('onUserCaptureScreen', {
          complete: function (t) {
            'function' == typeof e && e(t);
          },
        });
      },
      onKeyboardChange: function (e) {
        B('onKeyboardChange', {
          complete: function (t) {
            'function' == typeof e && e(t);
          },
        });
      },
    };
    return t && (e.wx = e.jWeixin = w), w;
  }
  function C(t, n, i) {
    e.WeixinJSBridge
      ? WeixinJSBridge.invoke(t, _(n), function (e) {
          T(t, e, i);
        })
      : L(t, i);
  }
  function B(t, n, i) {
    e.WeixinJSBridge
      ? WeixinJSBridge.on(t, function (e) {
          i && i.trigger && i.trigger(e), T(t, e, n);
        })
      : L(t, i || n);
  }
  function _(e) {
    e = e || {};
    var t = {};
    return (
      h.appId ? (t = h) : S.corpid && ((t = S).appId = S.corpid),
      (e.appId = t.appId),
      (e.verifyAppId = t.appId),
      (e.verifySignType = 'sha1'),
      (e.verifyTimestamp = t.timestamp + ''),
      (e.verifyNonceStr = t.nonceStr),
      (e.verifySignature = t.signature),
      e
    );
  }
  function k(e) {
    return {
      timeStamp: e.timestamp + '',
      nonceStr: e.nonceStr,
      package: e.package,
      paySign: e.paySign,
      signType: e.signType || 'SHA1',
    };
  }
  function T(e, t, n) {
    'openEnterpriseChat' == e && (t.errCode = t.err_code), delete t.err_code, delete t.err_desc, delete t.err_detail;
    var i = t.errMsg;
    i ||
      ((i = t.err_msg),
      delete t.err_msg,
      (i = (function (e, t) {
        var n = e,
          i = o[n];
        i && (n = i);
        var a = 'ok';
        if (t) {
          var r = t.indexOf(':');
          'confirm' == (a = t.substring(r + 1)) && (a = 'ok'),
            'failed' == a && (a = 'fail'),
            -1 != a.indexOf('failed_') && (a = a.substring(7)),
            -1 != a.indexOf('fail_') && (a = a.substring(5)),
            ('access denied' != (a = (a = a.replace(/_/g, ' ')).toLowerCase()) && 'no permission to execute' != a) ||
              (a = 'permission denied'),
            'config' == n && 'function not exist' == a && (a = 'ok'),
            '' == a && (a = 'fail');
        }
        return (t = n + ':' + a);
      })(e, i)),
      (t.errMsg = i)),
      (n = n || {})._complete && (n._complete(t), delete n._complete),
      (i = t.errMsg || ''),
      h.debug && !n.isInnerInvoke && alert(JSON.stringify(t));
    var a = i.indexOf(':');
    switch (i.substring(a + 1)) {
      case 'ok':
        n.success && n.success(t);
        break;
      case 'cancel':
        n.cancel && n.cancel(t);
        break;
      default:
        n.fail && n.fail(t);
    }
    n.complete && n.complete(t);
  }
  function W(e) {
    if (e) {
      for (var t = 0, n = e.length; t < n; ++t) {
        var o = e[t],
          a = i[o];
        a && (e[t] = a);
      }
      return e;
    }
  }
  function L(e, t) {
    if (!(!h.debug || (t && t.isInnerInvoke))) {
      var n = o[e];
      n && (e = n), t && t._complete && delete t._complete, console.log('"' + e + '",', t || '');
    }
  }
  function x() {
    return new Date().getTime();
  }
  function M(t) {
    f && (e.WeixinJSBridge ? t() : a.addEventListener && a.addEventListener('WeixinJSBridgeReady', t, !1));
  }
  function D() {
    w.invoke ||
      ((w.invoke = function (t, n, i) {
        e.WeixinJSBridge && WeixinJSBridge.invoke(t, _(n), i);
      }),
      (w.on = function (t, n) {
        e.WeixinJSBridge && WeixinJSBridge.on(t, n);
      }));
  }
  function E(t) {
    if (void 0 === t) return t;
    for (var n = e.atob(t), i = n.length, o = new Uint8Array(i), a = 0; a < i; a++) o[a] = n.charCodeAt(a);
    return o.buffer;
  }
}),
  (function (e) {
    var t = e.encodeURIComponent;
    try {
      e.wwperf = {
        config: function (t) {
          var i = e.performance,
            o = e.document,
            a = i.timing,
            r = !1;
          try {
            if (!e.navigator.userAgent.toLowerCase().match('wxwork')) return;
            e.WeixinJSBridge ? c() : o.addEventListener('WeixinJSBridgeReady', c, !1),
              'complete' === o.readyState ? c() : e.addEventListener('load', c, !1);
          } catch (e) {
            return n(e, t);
          }
          function c() {
            try {
              e.WeixinJSBridge && 'complete' === o.readyState && e.setTimeout(s, 0);
            } catch (e) {
              return n(e, t);
            }
          }
          function s() {
            try {
              if (r) return;
              r = !0;
              var o = -1;
              i.navigation && null != i.navigation.redirectCount && (o = i.navigation.redirectCount);
              var c = -1;
              if ('function' == typeof i.getEntries) {
                var s = i.getEntries();
                c = 0;
                for (var d = s.length - 1; d >= 0; d--) 'resource' == s[d].entryType && (c += 1);
              }
              e.WeixinJSBridge.invoke(
                'innerSaveWebPerformance',
                {
                  perf_data: JSON.stringify({
                    env: t,
                    url: e.location.href,
                    redirect_count: o,
                    resource_count: c,
                    dns_time: Math.max(0, a.domainLookupEnd - a.domainLookupStart),
                    connect_time: Math.max(0, a.connectEnd - a.connectStart),
                    request_time: Math.max(0, a.responseEnd - a.requestStart),
                    loading_time: Math.max(0, a.domLoading - a.navigationStart),
                    interactive_time: Math.max(0, a.domInteractive - a.navigationStart),
                    complete_time: Math.max(0, a.domComplete - a.navigationStart),
                    log_time: Math.floor(+new Date() / 1e3),
                  }),
                },
                function () {},
              );
            } catch (e) {
              return n(e, t);
            }
          }
        },
      };
    } catch (e) {
      return n(e);
    }
    function n(n, i) {
      try {
        var o = new e.Image(),
          a = JSON.stringify({ msg: n.message, stack: n.stack, env: i });
        o.src =
          '//badjs2.qq.com/badjs?id=1385&uin=1008&from=' +
          t(e.location.href) +
          '&msg[0]=' +
          t(a) +
          '&target[0]=wwperf.js&level[0]=4&count=1&_t=' +
          +new Date();
      } catch (n) {}
    }
  })(this);
