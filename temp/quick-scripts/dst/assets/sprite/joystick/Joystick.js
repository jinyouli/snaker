
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/sprite/joystick/Joystick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0423aB7i/pDPKZcd537thtu', 'Joystick');
// sprite/joystick/Joystick.js

"use strict";

var _JoystickEnum = _interopRequireDefault(require("JoystickEnum"));

var _JoystickEvent = _interopRequireDefault(require("JoystickEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    dot: {
      "default": null,
      type: cc.Node,
      displayName: 'Dot',
      tooltip: '摇杆操纵点'
    },
    ring: {
      "default": null,
      type: cc.Node,
      displayName: 'Ring',
      tooltip: '摇杆背景节点'
    },
    joystickType: {
      "default": _JoystickEnum["default"].JoystickType.FIXED,
      type: _JoystickEnum["default"].JoystickType,
      displayName: 'Touch Type',
      tooltip: '触摸类型'
    },
    directionType: {
      "default": _JoystickEnum["default"].DirectionType.ALL,
      type: _JoystickEnum["default"].DirectionType,
      displayName: 'Direction Type',
      tooltip: '方向类型'
    },
    _stickPos: {
      "default": null,
      type: cc.Node,
      tooltip: '摇杆所在位置'
    },
    _touchLocation: {
      "default": null,
      type: cc.Node,
      tooltip: '触摸位置'
    }
  },
  onLoad: function onLoad() {
    this._radius = this.ring.width / 2;

    this._initTouchEvent(); // hide joystick when follow


    if (this.joystickType === _JoystickEnum["default"].JoystickType.FOLLOW) {
      this.node.opacity = 0;
    }
  },
  onEnable: function onEnable() {
    _JoystickEvent["default"].getInstance().on(_JoystickEnum["default"].JoystickEventType.CHANGE_JOYSTICK_TYPE, this._onChangeJoystickType, this);
  },
  onDisable: function onDisable() {
    _JoystickEvent["default"].getInstance().off(_JoystickEnum["default"].JoystickEventType.CHANGE_JOYSTICK_TYPE, this._onChangeJoystickType, this);
  },
  _onChangeJoystickType: function _onChangeJoystickType(type) {
    this.joystickType = type;
    this.node.opacity = type === _JoystickEnum["default"].JoystickType.FIXED ? 255 : 0;
  },
  _initTouchEvent: function _initTouchEvent() {
    // set the size of joystick node to control scale
    this.node.on(cc.Node.EventType.TOUCH_START, this._touchStartEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMoveEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this._touchEndEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEndEvent, this);
  },
  _touchStartEvent: function _touchStartEvent(event) {
    _JoystickEvent["default"].getInstance().emit(_JoystickEnum["default"].JoystickEventType.TOUCH_START, "joystick touch start", 10);

    var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());

    if (this.joystickType === _JoystickEnum["default"].JoystickType.FIXED) {
      this._stickPos = this.ring.getPosition(); // 触摸点与圆圈中心的距离

      var distance = touchPos.sub(this.ring.getPosition()).mag(); // 手指在圆圈内触摸,控杆跟随触摸点

      this._radius > distance && this.dot.setPosition(touchPos);
    } else if (this.joystickType === _JoystickEnum["default"].JoystickType.FOLLOW) {
      // 记录摇杆位置，给 touch move 使用
      this._stickPos = touchPos;
      this.node.opacity = 255;
      this._touchLocation = event.getLocation(); // 更改摇杆的位置

      this.ring.setPosition(touchPos);
      this.dot.setPosition(touchPos);
    }
  },
  _touchMoveEvent: function _touchMoveEvent(event) {
    // 如果 touch start 位置和 touch move 相同，禁止移动
    if (this.joystickType === _JoystickEnum["default"].JoystickType.FOLLOW && this._touchLocation === event.getLocation()) {
      return false;
    } // 以圆圈为锚点获取触摸坐标


    var touchPos = this.ring.convertToNodeSpaceAR(event.getLocation());
    var distance = touchPos.mag(); // 由于摇杆的 postion 是以父节点为锚点，所以定位要加上 touch start 时的位置

    var posX = this._stickPos.x + touchPos.x;
    var posY = this._stickPos.y + touchPos.y; // 归一化

    var p = cc.v2(posX, posY).sub(this.ring.getPosition()).normalize();
    var speedType;

    if (this._radius > distance) {
      this.dot.setPosition(cc.v2(posX, posY));
      speedType = _JoystickEnum["default"].SpeedType.NORMAL;
    } else {
      // 控杆永远保持在圈内，并在圈内跟随触摸更新角度
      var x = this._stickPos.x + p.x * this._radius;
      var y = this._stickPos.y + p.y * this._radius;
      this.dot.setPosition(cc.v2(x, y));
      speedType = _JoystickEnum["default"].SpeedType.FAST;
    }

    _JoystickEvent["default"].getInstance().emit(_JoystickEnum["default"].JoystickEventType.TOUCH_MOVE, event, {
      speedType: speedType,
      moveDistance: p
    });
  },
  _touchEndEvent: function _touchEndEvent(event) {
    this.dot.setPosition(this.ring.getPosition());

    if (this.joystickType === _JoystickEnum["default"].JoystickType.FOLLOW) {
      this.node.opacity = 0;
    }

    _JoystickEvent["default"].getInstance().emit(_JoystickEnum["default"].JoystickEventType.TOUCH_END, event, {
      speedType: _JoystickEnum["default"].SpeedType.STOP
    });
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcHJpdGUvam95c3RpY2svSm95c3RpY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkb3QiLCJ0eXBlIiwiTm9kZSIsImRpc3BsYXlOYW1lIiwidG9vbHRpcCIsInJpbmciLCJqb3lzdGlja1R5cGUiLCJKb3lzdGlja0VudW0iLCJKb3lzdGlja1R5cGUiLCJGSVhFRCIsImRpcmVjdGlvblR5cGUiLCJEaXJlY3Rpb25UeXBlIiwiQUxMIiwiX3N0aWNrUG9zIiwiX3RvdWNoTG9jYXRpb24iLCJvbkxvYWQiLCJfcmFkaXVzIiwid2lkdGgiLCJfaW5pdFRvdWNoRXZlbnQiLCJGT0xMT1ciLCJub2RlIiwib3BhY2l0eSIsIm9uRW5hYmxlIiwiSm95c3RpY2tFdmVudCIsImdldEluc3RhbmNlIiwib24iLCJKb3lzdGlja0V2ZW50VHlwZSIsIkNIQU5HRV9KT1lTVElDS19UWVBFIiwiX29uQ2hhbmdlSm95c3RpY2tUeXBlIiwib25EaXNhYmxlIiwib2ZmIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJfdG91Y2hTdGFydEV2ZW50IiwiVE9VQ0hfTU9WRSIsIl90b3VjaE1vdmVFdmVudCIsIlRPVUNIX0VORCIsIl90b3VjaEVuZEV2ZW50IiwiVE9VQ0hfQ0FOQ0VMIiwiZXZlbnQiLCJlbWl0IiwidG91Y2hQb3MiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImdldExvY2F0aW9uIiwiZ2V0UG9zaXRpb24iLCJkaXN0YW5jZSIsInN1YiIsIm1hZyIsInNldFBvc2l0aW9uIiwicG9zWCIsIngiLCJwb3NZIiwieSIsInAiLCJ2MiIsIm5vcm1hbGl6ZSIsInNwZWVkVHlwZSIsIlNwZWVkVHlwZSIsIk5PUk1BTCIsIkZBU1QiLCJtb3ZlRGlzdGFuY2UiLCJTVE9QIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm95c3RpY2tFbnVtIGZyb20gJ0pveXN0aWNrRW51bSc7XG5pbXBvcnQgSm95c3RpY2tFdmVudCBmcm9tICdKb3lzdGlja0V2ZW50JztcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZG90OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnRG90JyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfmkYfmnYbmk43nurXngrknLFxuICAgICAgICB9LFxuICAgICAgICByaW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnUmluZycsXG4gICAgICAgICAgICB0b29sdGlwOiAn5pGH5p2G6IOM5pmv6IqC54K5JyxcbiAgICAgICAgfSxcblxuICAgICAgICBqb3lzdGlja1R5cGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRklYRUQsXG4gICAgICAgICAgICB0eXBlOiBKb3lzdGlja0VudW0uSm95c3RpY2tUeXBlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdUb3VjaCBUeXBlJyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfop6bmkbjnsbvlnosnLFxuICAgICAgICB9LFxuXG4gICAgICAgIGRpcmVjdGlvblR5cGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IEpveXN0aWNrRW51bS5EaXJlY3Rpb25UeXBlLkFMTCxcbiAgICAgICAgICAgIHR5cGU6IEpveXN0aWNrRW51bS5EaXJlY3Rpb25UeXBlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdEaXJlY3Rpb24gVHlwZScsXG4gICAgICAgICAgICB0b29sdGlwOiAn5pa55ZCR57G75Z6LJyxcbiAgICAgICAgfSxcblxuICAgICAgICBfc3RpY2tQb3M6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+aRh+adhuaJgOWcqOS9jee9ricsXG4gICAgICAgIH0sXG4gICAgICAgIF90b3VjaExvY2F0aW9uOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfop6bmkbjkvY3nva4nLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IHRoaXMucmluZy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMuX2luaXRUb3VjaEV2ZW50KCk7XG4gICAgICAgIC8vIGhpZGUgam95c3RpY2sgd2hlbiBmb2xsb3dcbiAgICAgICAgaWYgKHRoaXMuam95c3RpY2tUeXBlID09PSBKb3lzdGlja0VudW0uSm95c3RpY2tUeXBlLkZPTExPVykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub24oSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLkNIQU5HRV9KT1lTVElDS19UWVBFLCB0aGlzLl9vbkNoYW5nZUpveXN0aWNrVHlwZSwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLm9mZihKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuQ0hBTkdFX0pPWVNUSUNLX1RZUEUsIHRoaXMuX29uQ2hhbmdlSm95c3RpY2tUeXBlLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX29uQ2hhbmdlSm95c3RpY2tUeXBlKHR5cGUpIHtcbiAgICAgICAgdGhpcy5qb3lzdGlja1R5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IHR5cGUgPT09IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRklYRUQgPyAyNTUgOiAwO1xuICAgIH0sXG5cbiAgICBfaW5pdFRvdWNoRXZlbnQoKSB7XG4gICAgICAgIC8vIHNldCB0aGUgc2l6ZSBvZiBqb3lzdGljayBub2RlIHRvIGNvbnRyb2wgc2NhbGVcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl90b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5fdG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl90b3VjaEVuZEV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fdG91Y2hFbmRFdmVudCwgdGhpcyk7XG4gICAgfSxcblxuICAgIF90b3VjaFN0YXJ0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLmVtaXQoSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBcImpveXN0aWNrIHRvdWNoIHN0YXJ0XCIsIDEwKTtcbiAgICAgICAgY29uc3QgdG91Y2hQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuam95c3RpY2tUeXBlID09PSBKb3lzdGlja0VudW0uSm95c3RpY2tUeXBlLkZJWEVEKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGlja1BvcyA9IHRoaXMucmluZy5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAvLyDop6bmkbjngrnkuI7lnIblnIjkuK3lv4PnmoTot53nprtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdG91Y2hQb3Muc3ViKHRoaXMucmluZy5nZXRQb3NpdGlvbigpKS5tYWcoKTtcblxuICAgICAgICAgICAgLy8g5omL5oyH5Zyo5ZyG5ZyI5YaF6Kem5pG4LOaOp+adhui3n+maj+inpuaRuOeCuVxuICAgICAgICAgICAgdGhpcy5fcmFkaXVzID4gZGlzdGFuY2UgJiYgdGhpcy5kb3Quc2V0UG9zaXRpb24odG91Y2hQb3MpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5qb3lzdGlja1R5cGUgPT09IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRk9MTE9XKSB7XG5cbiAgICAgICAgICAgIC8vIOiusOW9leaRh+adhuS9jee9ru+8jOe7mSB0b3VjaCBtb3ZlIOS9v+eUqFxuICAgICAgICAgICAgdGhpcy5fc3RpY2tQb3MgPSB0b3VjaFBvcztcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIOabtOaUueaRh+adhueahOS9jee9rlxuICAgICAgICAgICAgdGhpcy5yaW5nLnNldFBvc2l0aW9uKHRvdWNoUG9zKTtcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKHRvdWNoUG9zKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfdG91Y2hNb3ZlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgLy8g5aaC5p6cIHRvdWNoIHN0YXJ0IOS9jee9ruWSjCB0b3VjaCBtb3ZlIOebuOWQjO+8jOemgeatouenu+WKqFxuICAgICAgICBpZiAodGhpcy5qb3lzdGlja1R5cGUgPT09IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRk9MTE9XICYmIHRoaXMuX3RvdWNoTG9jYXRpb24gPT09IGV2ZW50LmdldExvY2F0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS7peWchuWciOS4uumUmueCueiOt+WPluinpuaRuOWdkOagh1xuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IHRoaXMucmluZy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0b3VjaFBvcy5tYWcoKTtcblxuICAgICAgICAvLyDnlLHkuo7mkYfmnYbnmoQgcG9zdGlvbiDmmK/ku6XniLboioLngrnkuLrplJrngrnvvIzmiYDku6XlrprkvY3opoHliqDkuIogdG91Y2ggc3RhcnQg5pe255qE5L2N572uXG4gICAgICAgIGNvbnN0IHBvc1ggPSB0aGlzLl9zdGlja1Bvcy54ICsgdG91Y2hQb3MueDtcbiAgICAgICAgY29uc3QgcG9zWSA9IHRoaXMuX3N0aWNrUG9zLnkgKyB0b3VjaFBvcy55O1xuXG4gICAgICAgIC8vIOW9kuS4gOWMllxuICAgICAgICBjb25zdCBwID0gY2MudjIocG9zWCwgcG9zWSkuc3ViKHRoaXMucmluZy5nZXRQb3NpdGlvbigpKS5ub3JtYWxpemUoKTtcblxuICAgICAgICBsZXQgc3BlZWRUeXBlO1xuXG4gICAgICAgIGlmICh0aGlzLl9yYWRpdXMgPiBkaXN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24oY2MudjIocG9zWCwgcG9zWSkpO1xuXG4gICAgICAgICAgICBzcGVlZFR5cGUgPSBKb3lzdGlja0VudW0uU3BlZWRUeXBlLk5PUk1BTDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOaOp+adhuawuOi/nOS/neaMgeWcqOWciOWGhe+8jOW5tuWcqOWciOWGhei3n+maj+inpuaRuOabtOaWsOinkuW6plxuICAgICAgICAgICAgY29uc3QgeCA9IHRoaXMuX3N0aWNrUG9zLnggKyBwLnggKiB0aGlzLl9yYWRpdXM7XG4gICAgICAgICAgICBjb25zdCB5ID0gdGhpcy5fc3RpY2tQb3MueSArIHAueSAqIHRoaXMuX3JhZGl1cztcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKGNjLnYyKHgsIHkpKTtcblxuICAgICAgICAgICAgc3BlZWRUeXBlID0gSm95c3RpY2tFbnVtLlNwZWVkVHlwZS5GQVNUO1xuICAgICAgICB9XG5cbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLmVtaXQoSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX01PVkUsIGV2ZW50LCB7c3BlZWRUeXBlOiBzcGVlZFR5cGUsIG1vdmVEaXN0YW5jZTogcH0pO1xuICAgIH0sXG5cbiAgICBfdG91Y2hFbmRFdmVudChldmVudCkge1xuICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbih0aGlzLnJpbmcuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGlmICh0aGlzLmpveXN0aWNrVHlwZSA9PT0gSm95c3RpY2tFbnVtLkpveXN0aWNrVHlwZS5GT0xMT1cpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5lbWl0KEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZS5UT1VDSF9FTkQsIGV2ZW50LCB7c3BlZWRUeXBlOiBKb3lzdGlja0VudW0uU3BlZWRUeXBlLlNUT1B9KTtcbiAgICB9LFxuXG59KTtcbiJdfQ==