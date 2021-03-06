"use strict";
cc._RF.push(module, '771d9tmDfZB9b/EtuKXDtNa', 'clientEvent');
// common/script/basic/messenger/clientEvent.js

"use strict";

window.clientEvent = {
    eventType: {
        openUI: "openUI",
        closeUI: "closeUI",
        gameStart: "gameStart",
        gameOver: "gameOver",
        roundOver: "roundOver",
        roundStart: "roundStart",
        playerDead: "playerDead",
        time: "time",
        score: "score",
        updateCoin: "updateCoin",
        loadBullet: "loadBullet",

        initResponse: "initResponse",
        errorResponse: "errorResponse",
        joinRoomResponse: "joinRoomResponse",
        joinRoomNotify: "joinRoomNotify",
        leaveRoomResponse: "leaveRoomResponse",
        leaveRoomNotify: "leaveRoomNotify",
        joinOverResponse: "joinOverResponse",
        createRoomResponse: "createRoomResponse",
        getRoomListResponse: "getRoomListResponse",
        getRoomDetailResponse: "getRoomDetailResponse",
        getRoomListExResponse: "getRoomListExResponse",
        kickPlayerResponse: "kickPlayerResponse",
        kickPlayerNotify: "kickPlayerNotify",
        playerAccountGet: "playerAccountGet"
    },
    eventListener: null
};

clientEvent.init = function () {
    clientEvent.eventListener = eventListener.create();
};

clientEvent.on = function (eventName, handler, target) {
    if (typeof eventName !== "string") {
        return;
    }
    clientEvent.eventListener.on(eventName, handler, target);
};

clientEvent.off = function (eventName, handler, target) {
    if (typeof eventName !== "string") {
        return;
    }
    clientEvent.eventListener.off(eventName, handler, target);
};

clientEvent.clear = function (target) {
    clientEvent.eventListener.clear(target);
};

clientEvent.dispatch = function (eventName, data) {
    if (typeof eventName !== "string") {
        return;
    }
    clientEvent.eventListener.dispatch(eventName, data);
};

cc._RF.pop();