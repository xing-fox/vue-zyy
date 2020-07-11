function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'https://__bridge_loaded__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}

function setupWKWebViewJavascriptBridge(callback) {
  if (window.WKWebViewJavascriptBridge) {
    return callback(WKWebViewJavascriptBridge);
  }
  if (window.WKWVJBCallbacks) {
    return window.WKWVJBCallbacks.push(callback);
  }
  window.WKWVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'https://__bridge_loaded__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}

(function () {
  var userid = 0;
  var username = "";
  var authcode = "";
  var versioncode = 0;
  var versionname = "";
  var channel = "";
  var isfanti = 0;
  var webversion = "";
  var islogin = 0;
  var xingzuoid;
  var shengxiaoid;

  function fortune() {
    try {
      setupWebViewJavascriptBridge(function (bridge) {
        bridge.registerHandler('jsfunction', function (data, responseCallback) {
          var obj = eval('(' + data + ')');
          if (obj.type == 1) {
            payovertip(obj.content, obj.money);
          } else if (obj.type == 2) {
            userid = obj.userid;
            username = obj.username;
            authcode = obj.authcode;
            versioncode = obj.versioncode;
            versionname = obj.versionname;
            channel = obj.channel;
            isfanti = obj.isfanti;
            webversion = obj.webversion;
            islogin = obj.islogin;
            xingzuoid = obj.xingzuoid;
            shengxiaoid = obj.shengxiaoid;
          } else if (obj.type == 3) {
            buyOver(obj.buyresult);
          }

        })
      })
    } catch (e) {}
    try {
      setupWKWebViewJavascriptBridge(function (bridge) {
        bridge.registerHandler('jsfunction', function (data, responseCallback) {
          var obj = eval('(' + data + ')');
          if (obj.type == 1) {
            payovertip(obj.content, obj.money);
          } else if (obj.type == 2) {
            userid = obj.userid;
            username = obj.username;
            authcode = obj.authcode;
            versioncode = obj.versioncode;
            versionname = obj.versionname;
            channel = obj.channel;
            isfanti = obj.isfanti;
            webversion = obj.webversion;
            islogin = obj.islogin;
            xingzuoid = obj.xingzuoid;
            shengxiaoid = obj.shengxiaoid;
          } else if (obj.type == 3) {
            buyOver(obj.buyresult);
          }

        })
      })
    } catch (e) {}
    document.onreadystatechange = function () {
      try {
        WebViewJavascriptBridge.callHandler('initinfos', {}, function (response) {
          var obj = eval('(' + response + ')');
          userid = obj.userid;
          username = obj.username;
          authcode = obj.authcode;
          versioncode = obj.versioncode;
          versionname = obj.versionname;
          channel = obj.channel;
          isfanti = obj.isfanti;
          webversion = obj.webversion;
          islogin = obj.islogin;
          xingzuoid = obj.xingzuoid;
          shengxiaoid = obj.shengxiaoid;
        })
      } catch (e) {}
    }
  }
  fortune.prototype = {
    getuserid: function () {
      return userid;
    },
    getusername: function () {
      return username;
    },
    getauthcode: function () {
      return authcode;
    },
    getversioncode: function () {
      return versioncode;
    },
    getversionname: function () {
      return versionname;
    },
    getchannel: function () {
      return channel;
    },
    getisfanti: function () {
      return isfanti;
    },
    getWebVersion: function () {
      return webversion;
    },
    islogin: function () {
      return islogin;
    },
    readxingzuo: function () {
      return xingzuoid;
    },
    readshengxiao: function () {
      return shengxiaoid;
    },
    login: function (logintype, email, username, pwd) {
      WebViewJavascriptBridge.callHandler('login', {
        'login_type': logintype,
        'email': email,
        'username': username,
        'pwd': pwd
      }, function (response) {})
    },
    goBack: function (sleeptime) {
      WebViewJavascriptBridge.callHandler('goback', {}, function (response) {})
    },
    closepage: function (sleeptime) {
      WebViewJavascriptBridge.callHandler('closepage', {}, function (response) {})
    },
    purchase: function (purchaseid, paytype) {
      WebViewJavascriptBridge.callHandler('purchase', {
        'purchaseid': purchaseid,
        'paytype': paytype
      }, function (response) {})
    },
    openactivity: function (classname, extraname01, extrainfo01, extraname02, extrainfo02, isneedlogin, iscloseself) {
      if (!extrainfo02 && !isneedlogin && !iscloseself) {
        WebViewJavascriptBridge.callHandler('openactivity', {
          'className': classname,
          'isNeedLogin': extraname01,
          'isCloseSelf': extrainfo01,
          'args': extraname02
        }, function (response) {})
      } else {
        WebViewJavascriptBridge.callHandler('opencontroller', {
          'classname': classname,
          'pageurl': extrainfo01,
          'extrainfo': extrainfo02,
          'isneedlogin': isneedlogin,
          'iscloseself': iscloseself
        }, function (response) {})
      }

    },
    checklogin: function () {
      if (islogin != 1) {
        WebViewJavascriptBridge.callHandler('tologin', {}, function (response) {})
      }
      return islogin;
    },
    tologin: function () {
      WebViewJavascriptBridge.callHandler('tologin', {}, function (response) {})
    },
    buyaction: function (buy_id, buyitem_id) {

      WebViewJavascriptBridge.callHandler('buyaction', {
        'buy_id': buy_id,
        'buyitem_id': buyitem_id
      }, function (response) {})
    },
    beginload: function () {
      WebViewJavascriptBridge.callHandler('beginload', {}, function (response) {})
    },
    updatemoney: function (money) {
      WebViewJavascriptBridge.callHandler('updatemoney', {
        'money': money
      }, function (response) {})
    },
    updatepoints: function (points) {
      WebViewJavascriptBridge.callHandler('updatepoints', {
        'points': points
      }, function (response) {})
    },
    itemclick: function (type, xingzuoid) {
      WebViewJavascriptBridge.callHandler('itemclick', {
        'type': type,
        'xingzuoid': xingzuoid
      }, function (response) {})
    },
    saveshengxiao: function (sxid) {
      WebViewJavascriptBridge.callHandler('saveshengxiao', {
        'sxid': sxid
      }, function (response) {})
    },
    updateisbuy: function (buyid) {
      WebViewJavascriptBridge.callHandler('updateisbuy', {
        'buyid': buyid
      }, function (response) {
        var obj = eval('(' + response + ')');
        buyOver(obj.isbuy);
      })
    },
    gotohaoping: function () {
      WebViewJavascriptBridge.callHandler('gotohaoping', {}, function (response) {})
    },
    nothaoping: function () {
      WebViewJavascriptBridge.callHandler('nothaoping', {}, function (response) {})
    },
    refreshmoney: function () {
      WebViewJavascriptBridge.callHandler('refreshmoney', {}, function (response) {
        var obj = eval('(' + response + ')');
        refreshmoney(obj.money);
      })
    },
    gotomarket: function () {
      WebViewJavascriptBridge.callHandler('gotomarket', {}, function (response) {})
    },
    initinfos: function () {
      WebViewJavascriptBridge.callHandler('initinfos', {}, function (response) {
        var obj = eval('(' + response + ')');
        userid = obj.userid;
        username = obj.username;
        authcode = obj.authcode;
        versioncode = obj.versioncode;
        versionname = obj.versionname;
        channel = obj.channel;
        isfanti = obj.isfanti;
        webversion = obj.webversion;
        islogin = obj.islogin;
        xingzuoid = obj.xingzuoid;
        shengxiaoid = obj.shengxiaoid;
      })
    }
  };
  window.fortune = new fortune();
})(window)
