(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/common/lobby/playerIcon.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7c5b0PM5GxL454wtQ2uJEdQ', 'playerIcon', __filename);
// common/lobby/playerIcon.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        playerSprite: {
            default: null,
            type: cc.Sprite
        }
    },
    setData: function setData(userInfo) {
        this.userInfo = userInfo;
        this.playerId = userInfo.id ? userInfo.id : userInfo.userId;
        this.playerSprite.node.active = true;
        Game.GameManager.userInfoReq(this.playerId);
    },

    init: function init() {
        this.userInfo = null;
        this.playerSprite.node.active = false;
        clientEvent.on(clientEvent.eventType.playerAccountGet, this.userInfoSet, this);
    },

    userInfoSet: function userInfoSet(recvMsg) {
        if (recvMsg.account == this.playerId) {
            if (recvMsg.headIcon && recvMsg.headIcon !== "-") {
                cc.loader.load({ url: recvMsg.headIcon, type: 'png' }, function (err, texture) {
                    var spriteFrame = new cc.SpriteFrame(texture, cc.Rect(0, 0, texture.width, texture.height));
                    this.playerSprite.spriteFrame = spriteFrame;
                }.bind(this));
            }
        }
    },

    start: function start() {
        this.init();
    },
    onDestroy: function onDestroy() {
        clientEvent.off(clientEvent.eventType.playerAccountGet, this.userInfoSet, this);
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=playerIcon.js.map
        