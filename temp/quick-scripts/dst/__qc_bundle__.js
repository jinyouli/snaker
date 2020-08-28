
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/sprite/build');
require('./assets/sprite/joystick/Joystick');
require('./assets/sprite/joystick/JoystickEnum');
require('./assets/sprite/joystick/JoystickEvent');
require('./assets/sprite/rect');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/sprite/joystick/JoystickEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63405xHk7lPM5DUlhTZsSeE', 'JoystickEvent');
// sprite/joystick/JoystickEvent.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var JoystickEvent = cc.Class({
  properties: {
    _event: null
  },
  ctor: function ctor() {
    this._event = new cc.EventTarget();
  },
  on: function on(eventType, callFunc, target) {
    this._event.on(eventType, callFunc, target);
  },
  off: function off(eventType, callFunc, target) {
    this._event.off(eventType, callFunc, target);
  },

  /**
   *
   * @param eventType JoystickEnum.JoystickEventType
   * @param arg
   */
  emit: function emit(eventType) {
    var _this$_event;

    for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      arg[_key - 1] = arguments[_key];
    }

    (_this$_event = this._event).emit.apply(_this$_event, [eventType].concat(arg));
  }
});
var _instance = null;

JoystickEvent.getInstance = function () {
  !_instance && (_instance = new JoystickEvent());
  return _instance;
};

var _default = JoystickEvent;
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3ByaXRlXFxqb3lzdGlja1xcSm95c3RpY2tFdmVudC5qcyJdLCJuYW1lcyI6WyJKb3lzdGlja0V2ZW50IiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJfZXZlbnQiLCJjdG9yIiwiRXZlbnRUYXJnZXQiLCJvbiIsImV2ZW50VHlwZSIsImNhbGxGdW5jIiwidGFyZ2V0Iiwib2ZmIiwiZW1pdCIsImFyZyIsIl9pbnN0YW5jZSIsImdldEluc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUV6QkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRTtBQURBLEdBRmE7QUFNekJDLEVBQUFBLElBTnlCLGtCQU1sQjtBQUNILFNBQUtELE1BQUwsR0FBYyxJQUFJSCxFQUFFLENBQUNLLFdBQVAsRUFBZDtBQUNILEdBUndCO0FBVXpCQyxFQUFBQSxFQVZ5QixjQVV0QkMsU0FWc0IsRUFVWEMsUUFWVyxFQVVEQyxNQVZDLEVBVU87QUFDNUIsU0FBS04sTUFBTCxDQUFZRyxFQUFaLENBQWVDLFNBQWYsRUFBMEJDLFFBQTFCLEVBQW9DQyxNQUFwQztBQUNILEdBWndCO0FBY3pCQyxFQUFBQSxHQWR5QixlQWNyQkgsU0FkcUIsRUFjVkMsUUFkVSxFQWNBQyxNQWRBLEVBY1E7QUFDN0IsU0FBS04sTUFBTCxDQUFZTyxHQUFaLENBQWdCSCxTQUFoQixFQUEyQkMsUUFBM0IsRUFBcUNDLE1BQXJDO0FBQ0gsR0FoQndCOztBQWtCekI7Ozs7O0FBS0FFLEVBQUFBLElBdkJ5QixnQkF1QnBCSixTQXZCb0IsRUF1QkQ7QUFBQTs7QUFBQSxzQ0FBTEssR0FBSztBQUFMQSxNQUFBQSxHQUFLO0FBQUE7O0FBQ3BCLHlCQUFLVCxNQUFMLEVBQVlRLElBQVosc0JBQWlCSixTQUFqQixTQUErQkssR0FBL0I7QUFDSDtBQXpCd0IsQ0FBVCxDQUFwQjtBQTZCQSxJQUFJQyxTQUFTLEdBQUcsSUFBaEI7O0FBQ0FkLGFBQWEsQ0FBQ2UsV0FBZCxHQUE0QixZQUFZO0FBQ3BDLEdBQUNELFNBQUQsS0FBZUEsU0FBUyxHQUFHLElBQUlkLGFBQUosRUFBM0I7QUFFQSxTQUFPYyxTQUFQO0FBQ0gsQ0FKRDs7ZUFNZWQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBKb3lzdGlja0V2ZW50ID0gY2MuQ2xhc3Moe1xuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfZXZlbnQ6IG51bGxcbiAgICB9LFxuXG4gICAgY3RvcigpIHtcbiAgICAgICAgdGhpcy5fZXZlbnQgPSBuZXcgY2MuRXZlbnRUYXJnZXQoKTtcbiAgICB9LFxuXG4gICAgb24oZXZlbnRUeXBlLCBjYWxsRnVuYywgdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2V2ZW50Lm9uKGV2ZW50VHlwZSwgY2FsbEZ1bmMsIHRhcmdldCk7XG4gICAgfSxcblxuICAgIG9mZihldmVudFR5cGUsIGNhbGxGdW5jLCB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fZXZlbnQub2ZmKGV2ZW50VHlwZSwgY2FsbEZ1bmMsIHRhcmdldCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50VHlwZSBKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGVcbiAgICAgKiBAcGFyYW0gYXJnXG4gICAgICovXG4gICAgZW1pdChldmVudFR5cGUsIC4uLmFyZykge1xuICAgICAgICB0aGlzLl9ldmVudC5lbWl0KGV2ZW50VHlwZSwgLi4uYXJnKVxuICAgIH1cblxufSk7XG5cbmxldCBfaW5zdGFuY2UgPSBudWxsO1xuSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAhX2luc3RhbmNlICYmIChfaW5zdGFuY2UgPSBuZXcgSm95c3RpY2tFdmVudCgpKTtcblxuICAgIHJldHVybiBfaW5zdGFuY2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBKb3lzdGlja0V2ZW50OyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/sprite/rect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20127cQSZ9N0bB8afm8IEjY', 'rect');
// sprite/rect.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // onLoad () {},
  start: function start() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true; //开启碰撞检测

    manager.enabledDebugDraw = true; //显示碰撞检测区域

    this._game = cc.find("/Canvas/box").getComponent("build");
  },
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    cc.log("onBeginContact");
  },
  onCollisionEnter: function onCollisionEnter(other, self) {//cc.log("碰撞x  =" + this.node.x + " x=" + other.node.x);
    // cc.log("碰撞y  =" + this.node.y + " x=" + other.node.y);
    // this._game.gameOver();
    // if(Math.abs(this.node.x - other.node.x)==48 && Math.abs(this.node.y - other.node.y)==48){
    //     this._game.gameOver();
    // }
    // else if(Math.abs(this.node.x - other.node.x)==0 && Math.abs(this.node.y - other.node.y)==48){
    //     this._game.gameOver();
    // }
    // if(this._game.direction===0){
    //     if(this.node.x == other.node.x && this.node.y == other.node.y + 48){
    //         this._game.gameOver();
    //     }
    //     cc.log("up");
    // }else if(this._game.direction===1){
    //     if(this.node.x == other.node.x && this.node.y == other.node.y - 48){
    //         this._game.gameOver();
    //     }
    //     cc.log("down");
    // }else if(this._game.direction===2){
    //     if(this.node.x == other.node.x -48 && this.node.y == other.node.y){
    //         this._game.gameOver();
    //     }
    //     cc.log("left");
    // }else if(this._game.direction===3){
    //     if(this.node.x == other.node.x + 48 && this.node.y == other.node.y){
    //         this._game.gameOver();
    //     }
    //     cc.log("right");
    // }
  },
  update: function update(dt) {//cc.log("方向 =" + this._game.direction);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3ByaXRlXFxyZWN0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJtYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsImVuYWJsZWREZWJ1Z0RyYXciLCJfZ2FtZSIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJvbkJlZ2luQ29udGFjdCIsImNvbnRhY3QiLCJzZWxmQ29sbGlkZXIiLCJvdGhlckNvbGxpZGVyIiwibG9nIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MO0FBRUFDLEVBQUFBLEtBVEssbUJBU0k7QUFDTCxRQUFJQyxPQUFPLEdBQUdMLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxtQkFBWixFQUFkO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0csT0FBUixHQUFrQixJQUFsQixDQUZLLENBRXVCOztBQUM1QkgsSUFBQUEsT0FBTyxDQUFDSSxnQkFBUixHQUEyQixJQUEzQixDQUhLLENBRzhCOztBQUVuQyxTQUFLQyxLQUFMLEdBQWFWLEVBQUUsQ0FBQ1csSUFBSCxDQUFRLGFBQVIsRUFBdUJDLFlBQXZCLENBQW9DLE9BQXBDLENBQWI7QUFDSCxHQWZJO0FBaUJMQyxFQUFBQSxjQWpCSywwQkFpQlVDLE9BakJWLEVBaUJtQkMsWUFqQm5CLEVBaUJpQ0MsYUFqQmpDLEVBaUIrQztBQUNoRGhCLElBQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBTyxnQkFBUDtBQUNILEdBbkJJO0FBcUJMQyxFQUFBQSxnQkFyQkssNEJBcUJZQyxLQXJCWixFQXFCbUJDLElBckJuQixFQXFCeUIsQ0FDekI7QUFDRDtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsR0E3REk7QUErRExDLEVBQUFBLE1BL0RLLGtCQStER0MsRUEvREgsRUErRE8sQ0FDUjtBQUNIO0FBakVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTsgICAgIC8v5byA5ZCv56Kw5pKe5qOA5rWLXHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTsgICAvL+aYvuekuueisOaSnuajgOa1i+WMuuWfn1xyXG5cclxuICAgICAgICB0aGlzLl9nYW1lID0gY2MuZmluZChcIi9DYW52YXMvYm94XCIpLmdldENvbXBvbmVudChcImJ1aWxkXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpe1xyXG4gICAgICAgIGNjLmxvZyhcIm9uQmVnaW5Db250YWN0XCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgIC8vY2MubG9nKFwi56Kw5pKeeCAgPVwiICsgdGhpcy5ub2RlLnggKyBcIiB4PVwiICsgb3RoZXIubm9kZS54KTtcclxuICAgICAgICAvLyBjYy5sb2coXCLnorDmkp55ICA9XCIgKyB0aGlzLm5vZGUueSArIFwiIHg9XCIgKyBvdGhlci5ub2RlLnkpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyB0aGlzLl9nYW1lLmdhbWVPdmVyKCk7XHJcblxyXG4gICAgICAgIC8vIGlmKE1hdGguYWJzKHRoaXMubm9kZS54IC0gb3RoZXIubm9kZS54KT09NDggJiYgTWF0aC5hYnModGhpcy5ub2RlLnkgLSBvdGhlci5ub2RlLnkpPT00OCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX2dhbWUuZ2FtZU92ZXIoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSBpZihNYXRoLmFicyh0aGlzLm5vZGUueCAtIG90aGVyLm5vZGUueCk9PTAgJiYgTWF0aC5hYnModGhpcy5ub2RlLnkgLSBvdGhlci5ub2RlLnkpPT00OCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX2dhbWUuZ2FtZU92ZXIoKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGlmKHRoaXMuX2dhbWUuZGlyZWN0aW9uPT09MCl7XHJcblxyXG4gICAgICAgIC8vICAgICBpZih0aGlzLm5vZGUueCA9PSBvdGhlci5ub2RlLnggJiYgdGhpcy5ub2RlLnkgPT0gb3RoZXIubm9kZS55ICsgNDgpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZ2FtZS5nYW1lT3ZlcigpO1xyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICBjYy5sb2coXCJ1cFwiKTtcclxuICAgICAgICAvLyB9ZWxzZSBpZih0aGlzLl9nYW1lLmRpcmVjdGlvbj09PTEpe1xyXG5cclxuICAgICAgICAvLyAgICAgaWYodGhpcy5ub2RlLnggPT0gb3RoZXIubm9kZS54ICYmIHRoaXMubm9kZS55ID09IG90aGVyLm5vZGUueSAtIDQ4KXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2dhbWUuZ2FtZU92ZXIoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBjYy5sb2coXCJkb3duXCIpO1xyXG4gICAgICAgIC8vIH1lbHNlIGlmKHRoaXMuX2dhbWUuZGlyZWN0aW9uPT09Mil7XHJcblxyXG4gICAgICAgIC8vICAgICBpZih0aGlzLm5vZGUueCA9PSBvdGhlci5ub2RlLnggLTQ4ICYmIHRoaXMubm9kZS55ID09IG90aGVyLm5vZGUueSl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9nYW1lLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgY2MubG9nKFwibGVmdFwiKTtcclxuICAgICAgICAvLyB9ZWxzZSBpZih0aGlzLl9nYW1lLmRpcmVjdGlvbj09PTMpe1xyXG4gICAgICAgIC8vICAgICBpZih0aGlzLm5vZGUueCA9PSBvdGhlci5ub2RlLnggKyA0OCAmJiB0aGlzLm5vZGUueSA9PSBvdGhlci5ub2RlLnkpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZ2FtZS5nYW1lT3ZlcigpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhcInJpZ2h0XCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8vY2MubG9nKFwi5pa55ZCRID1cIiArIHRoaXMuX2dhbWUuZGlyZWN0aW9uKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd149fmkRdtINpsf4RJ6lEpZ', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQSxJQUFJQSxFQUFFLENBQUNDLE1BQVAsRUFBZTtBQUNYO0FBQ0E7QUFDQUQsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLDJCQUFWLEdBQXdDLElBQXhDO0FBQ0giLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHByb2plY3RzIHByaW9yIHRvIHYyLjEuMC5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCDkuYvliY3niYjmnKznmoTlt6XnqIvvvIxcclxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBUb2dnbGXvvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcclxuICovXHJcblxyXG5pZiAoY2MuVG9nZ2xlKSB7XHJcbiAgICAvLyBXaGV0aGVyIHRoZSAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgYXJlIGZpcmVkIHdoZW4gJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScgaXMgY2FsbGVkIGluIHRoZSBjb2RlXHJcbiAgICAvLyDlnKjku6PnoIHkuK3osIPnlKggJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScg5pe25piv5ZCm6Kem5Y+RICd0b2dnbGUnIOS4jiAnY2hlY2tFdmVudHMnIOS6i+S7tlxyXG4gICAgY2MuVG9nZ2xlLl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayA9IHRydWU7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3ByaXRlXFxqb3lzdGlja1xcSm95c3RpY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkb3QiLCJ0eXBlIiwiTm9kZSIsImRpc3BsYXlOYW1lIiwidG9vbHRpcCIsInJpbmciLCJqb3lzdGlja1R5cGUiLCJKb3lzdGlja0VudW0iLCJKb3lzdGlja1R5cGUiLCJGSVhFRCIsImRpcmVjdGlvblR5cGUiLCJEaXJlY3Rpb25UeXBlIiwiQUxMIiwiX3N0aWNrUG9zIiwiX3RvdWNoTG9jYXRpb24iLCJvbkxvYWQiLCJfcmFkaXVzIiwid2lkdGgiLCJfaW5pdFRvdWNoRXZlbnQiLCJGT0xMT1ciLCJub2RlIiwib3BhY2l0eSIsIm9uRW5hYmxlIiwiSm95c3RpY2tFdmVudCIsImdldEluc3RhbmNlIiwib24iLCJKb3lzdGlja0V2ZW50VHlwZSIsIkNIQU5HRV9KT1lTVElDS19UWVBFIiwiX29uQ2hhbmdlSm95c3RpY2tUeXBlIiwib25EaXNhYmxlIiwib2ZmIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJfdG91Y2hTdGFydEV2ZW50IiwiVE9VQ0hfTU9WRSIsIl90b3VjaE1vdmVFdmVudCIsIlRPVUNIX0VORCIsIl90b3VjaEVuZEV2ZW50IiwiVE9VQ0hfQ0FOQ0VMIiwiZXZlbnQiLCJlbWl0IiwidG91Y2hQb3MiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImdldExvY2F0aW9uIiwiZ2V0UG9zaXRpb24iLCJkaXN0YW5jZSIsInN1YiIsIm1hZyIsInNldFBvc2l0aW9uIiwicG9zWCIsIngiLCJwb3NZIiwieSIsInAiLCJ2MiIsIm5vcm1hbGl6ZSIsInNwZWVkVHlwZSIsIlNwZWVkVHlwZSIsIk5PUk1BTCIsIkZBU1QiLCJtb3ZlRGlzdGFuY2UiLCJTVE9QIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0ws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Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm95c3RpY2tFbnVtIGZyb20gJ0pveXN0aWNrRW51bSc7XG5pbXBvcnQgSm95c3RpY2tFdmVudCBmcm9tICdKb3lzdGlja0V2ZW50JztcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZG90OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnRG90JyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfmkYfmnYbmk43nurXngrknLFxuICAgICAgICB9LFxuICAgICAgICByaW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnUmluZycsXG4gICAgICAgICAgICB0b29sdGlwOiAn5pGH5p2G6IOM5pmv6IqC54K5JyxcbiAgICAgICAgfSxcblxuICAgICAgICBqb3lzdGlja1R5cGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRklYRUQsXG4gICAgICAgICAgICB0eXBlOiBKb3lzdGlja0VudW0uSm95c3RpY2tUeXBlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdUb3VjaCBUeXBlJyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfop6bmkbjnsbvlnosnLFxuICAgICAgICB9LFxuXG4gICAgICAgIGRpcmVjdGlvblR5cGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IEpveXN0aWNrRW51bS5EaXJlY3Rpb25UeXBlLkFMTCxcbiAgICAgICAgICAgIHR5cGU6IEpveXN0aWNrRW51bS5EaXJlY3Rpb25UeXBlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdEaXJlY3Rpb24gVHlwZScsXG4gICAgICAgICAgICB0b29sdGlwOiAn5pa55ZCR57G75Z6LJyxcbiAgICAgICAgfSxcblxuICAgICAgICBfc3RpY2tQb3M6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+aRh+adhuaJgOWcqOS9jee9ricsXG4gICAgICAgIH0sXG4gICAgICAgIF90b3VjaExvY2F0aW9uOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfop6bmkbjkvY3nva4nLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IHRoaXMucmluZy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMuX2luaXRUb3VjaEV2ZW50KCk7XG4gICAgICAgIC8vIGhpZGUgam95c3RpY2sgd2hlbiBmb2xsb3dcbiAgICAgICAgaWYgKHRoaXMuam95c3RpY2tUeXBlID09PSBKb3lzdGlja0VudW0uSm95c3RpY2tUeXBlLkZPTExPVykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub24oSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLkNIQU5HRV9KT1lTVElDS19UWVBFLCB0aGlzLl9vbkNoYW5nZUpveXN0aWNrVHlwZSwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLm9mZihKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuQ0hBTkdFX0pPWVNUSUNLX1RZUEUsIHRoaXMuX29uQ2hhbmdlSm95c3RpY2tUeXBlLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX29uQ2hhbmdlSm95c3RpY2tUeXBlKHR5cGUpIHtcbiAgICAgICAgdGhpcy5qb3lzdGlja1R5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IHR5cGUgPT09IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRklYRUQgPyAyNTUgOiAwO1xuICAgIH0sXG5cbiAgICBfaW5pdFRvdWNoRXZlbnQoKSB7XG4gICAgICAgIC8vIHNldCB0aGUgc2l6ZSBvZiBqb3lzdGljayBub2RlIHRvIGNvbnRyb2wgc2NhbGVcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl90b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5fdG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl90b3VjaEVuZEV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fdG91Y2hFbmRFdmVudCwgdGhpcyk7XG4gICAgfSxcblxuICAgIF90b3VjaFN0YXJ0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLmVtaXQoSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBcImpveXN0aWNrIHRvdWNoIHN0YXJ0XCIsIDEwKTtcbiAgICAgICAgY29uc3QgdG91Y2hQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuam95c3RpY2tUeXBlID09PSBKb3lzdGlja0VudW0uSm95c3RpY2tUeXBlLkZJWEVEKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGlja1BvcyA9IHRoaXMucmluZy5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAvLyDop6bmkbjngrnkuI7lnIblnIjkuK3lv4PnmoTot53nprtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdG91Y2hQb3Muc3ViKHRoaXMucmluZy5nZXRQb3NpdGlvbigpKS5tYWcoKTtcblxuICAgICAgICAgICAgLy8g5omL5oyH5Zyo5ZyG5ZyI5YaF6Kem5pG4LOaOp+adhui3n+maj+inpuaRuOeCuVxuICAgICAgICAgICAgdGhpcy5fcmFkaXVzID4gZGlzdGFuY2UgJiYgdGhpcy5kb3Quc2V0UG9zaXRpb24odG91Y2hQb3MpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5qb3lzdGlja1R5cGUgPT09IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRk9MTE9XKSB7XG5cbiAgICAgICAgICAgIC8vIOiusOW9leaRh+adhuS9jee9ru+8jOe7mSB0b3VjaCBtb3ZlIOS9v+eUqFxuICAgICAgICAgICAgdGhpcy5fc3RpY2tQb3MgPSB0b3VjaFBvcztcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIOabtOaUueaRh+adhueahOS9jee9rlxuICAgICAgICAgICAgdGhpcy5yaW5nLnNldFBvc2l0aW9uKHRvdWNoUG9zKTtcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKHRvdWNoUG9zKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfdG91Y2hNb3ZlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgLy8g5aaC5p6cIHRvdWNoIHN0YXJ0IOS9jee9ruWSjCB0b3VjaCBtb3ZlIOebuOWQjO+8jOemgeatouenu+WKqFxuICAgICAgICBpZiAodGhpcy5qb3lzdGlja1R5cGUgPT09IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRk9MTE9XICYmIHRoaXMuX3RvdWNoTG9jYXRpb24gPT09IGV2ZW50LmdldExvY2F0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS7peWchuWciOS4uumUmueCueiOt+WPluinpuaRuOWdkOagh1xuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IHRoaXMucmluZy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0b3VjaFBvcy5tYWcoKTtcblxuICAgICAgICAvLyDnlLHkuo7mkYfmnYbnmoQgcG9zdGlvbiDmmK/ku6XniLboioLngrnkuLrplJrngrnvvIzmiYDku6XlrprkvY3opoHliqDkuIogdG91Y2ggc3RhcnQg5pe255qE5L2N572uXG4gICAgICAgIGNvbnN0IHBvc1ggPSB0aGlzLl9zdGlja1Bvcy54ICsgdG91Y2hQb3MueDtcbiAgICAgICAgY29uc3QgcG9zWSA9IHRoaXMuX3N0aWNrUG9zLnkgKyB0b3VjaFBvcy55O1xuXG4gICAgICAgIC8vIOW9kuS4gOWMllxuICAgICAgICBjb25zdCBwID0gY2MudjIocG9zWCwgcG9zWSkuc3ViKHRoaXMucmluZy5nZXRQb3NpdGlvbigpKS5ub3JtYWxpemUoKTtcblxuICAgICAgICBsZXQgc3BlZWRUeXBlO1xuXG4gICAgICAgIGlmICh0aGlzLl9yYWRpdXMgPiBkaXN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24oY2MudjIocG9zWCwgcG9zWSkpO1xuXG4gICAgICAgICAgICBzcGVlZFR5cGUgPSBKb3lzdGlja0VudW0uU3BlZWRUeXBlLk5PUk1BTDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOaOp+adhuawuOi/nOS/neaMgeWcqOWciOWGhe+8jOW5tuWcqOWciOWGhei3n+maj+inpuaRuOabtOaWsOinkuW6plxuICAgICAgICAgICAgY29uc3QgeCA9IHRoaXMuX3N0aWNrUG9zLnggKyBwLnggKiB0aGlzLl9yYWRpdXM7XG4gICAgICAgICAgICBjb25zdCB5ID0gdGhpcy5fc3RpY2tQb3MueSArIHAueSAqIHRoaXMuX3JhZGl1cztcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKGNjLnYyKHgsIHkpKTtcblxuICAgICAgICAgICAgc3BlZWRUeXBlID0gSm95c3RpY2tFbnVtLlNwZWVkVHlwZS5GQVNUO1xuICAgICAgICB9XG5cbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLmVtaXQoSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX01PVkUsIGV2ZW50LCB7c3BlZWRUeXBlOiBzcGVlZFR5cGUsIG1vdmVEaXN0YW5jZTogcH0pO1xuICAgIH0sXG5cbiAgICBfdG91Y2hFbmRFdmVudChldmVudCkge1xuICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbih0aGlzLnJpbmcuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGlmICh0aGlzLmpveXN0aWNrVHlwZSA9PT0gSm95c3RpY2tFbnVtLkpveXN0aWNrVHlwZS5GT0xMT1cpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5lbWl0KEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZS5UT1VDSF9FTkQsIGV2ZW50LCB7c3BlZWRUeXBlOiBKb3lzdGlja0VudW0uU3BlZWRUeXBlLlNUT1B9KTtcbiAgICB9LFxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/sprite/build.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d94fvvIxZFNogXnBYdjx/r', 'build');
// sprite/build.js

"use strict";

var _JoystickEnum = _interopRequireDefault(require("./joystick/JoystickEnum"));

var _JoystickEvent = _interopRequireDefault(require("./joystick/JoystickEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    rect0: cc.Prefab,
    rect1: cc.Prefab,
    rect2: cc.Prefab,
    rect3: cc.Prefab,
    rect4: cc.Prefab,
    rect5: cc.Prefab,
    rect6: cc.Prefab,
    rect7: cc.Prefab,
    cba: {
      "default": null,
      type: cc.SpriteFrame
    },
    // from joystick
    moveDir: {
      "default": cc.v2(0, 1),
      displayName: 'Move Dir',
      tooltip: '移动方向'
    },
    _speedType: {
      "default": _JoystickEnum["default"].SpeedType.STOP,
      displayName: 'Speed Type',
      type: _JoystickEnum["default"].SpeedType,
      tooltip: '速度级别'
    },
    //播放预制资源
    player: cc.Prefab,
    basepoint: cc.Prefab,
    //按钮节点
    button: cc.Label,
    score: cc.Label,
    over: cc.Node,
    //速度调节滑动
    sliderv: cc.Slider,
    //音频
    audio: cc.AudioClip,
    subNodesArr: {
      "default": [],
      type: cc.Prefab
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.log("onload start");

    _JoystickEvent["default"].getInstance().on(_JoystickEnum["default"].JoystickEventType.TOUCH_START, this.onTouchStart, this);

    _JoystickEvent["default"].getInstance().on(_JoystickEnum["default"].JoystickEventType.TOUCH_MOVE, this.onTouchMove, this);

    _JoystickEvent["default"].getInstance().on(_JoystickEnum["default"].JoystickEventType.TOUCH_END, this.onTouchEnd, this);

    var collider = cc.director.getCollisionManager();
    collider.enabled = true; // collider.enabledDebugDraw = true;
    // collider.enabledDrawBoundingBox = true;
    //开启物理引擎

    var physics = cc.director.getPhysicsManager();
    physics.enabled = true; // physics.gravity.y = 1000;

    var db = cc.PhysicsManager.DrawBits;
    this.nodes = [];
    this.nodes = cc.find('Canvas/box/nodes').children; //游戏状态  0-暂停 1-运行 2-游戏结束 

    this.gameState = 1;
    cc.director.getCollisionManager().enabled = true;
    cc.director.getPhysicsManager().enabled = true; //音效
    //cc.audioEngine.playEffect(this.audio, true);
    //分数

    this.scoreNum = 0; //边界值

    this.leftX;
    this.rightX; //速度

    this.speed = 0.5; //方向,up-0,down-1,left-2,right-3

    this.direction = 0; //贪吃蛇数组,二位数组

    this.snakeArrX = [];
    this.snakeArrY = [];
    this.snakeArr = []; //地图上随机生成果实(x,y)坐标

    this.nextGoal = Math.floor(7 * Math.random());
    this.goalX = Math.floor(10 * Math.random());
    this.goalY = Math.floor(15 * Math.random()); //设置贪吃蛇头部

    this.snakeHead = cc.instantiate(this.rect7).getComponent('rect');
    this.snakeHead.node.x = 240;
    this.snakeHead.node.y = 336;
    this.snakeHead.node.Group = 'hero';
    var box = cc.find('Canvas/box');
    box.addChild(this.snakeHead.node);
    this.snakeArrX[0] = this.snakeHead.node.x;
    this.snakeArrY[0] = this.snakeHead.node.y;
    this.snakeArr[0] = this.snakeHead; //地图

    this.boxMap = [];

    for (var i = 0; i < 10; i++) {
      this.boxMap[i] = [];

      for (var j = 0; j < 15; j++) {
        this.boxMap[i][j] = 0;
      }
    } //注册按下监听


    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this); //this.ontouchmove();

    this.setGame();
    this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
      var location = event.getLocation(); // 获取节点坐标

      this.firstX = location.x;
      this.firstY = location.y; // 获取触点在空间节点上的坐标
      // var tempPlayer = node.parent.convertToNodeSpaceAR(location);
      // node.setPosition(tempPlayer);
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
      var touchPoint = event.getLocation();
      var endX = this.firstX - touchPoint.x;
      var endY = this.firstY - touchPoint.y; // var tempPlayer = node.parent.convertToNodeSpaceAR(touchPoint);
      // node.setPosition(tempPlayer);

      if (Math.abs(endX) > Math.abs(endY)) {
        //手势向左右
        //判断向左还是向右 
        if (endX > 0) {
          //向左函数
          cc.log('left');

          if (this.direction != 3) {
            this.direction = 2;
          }
        } else {
          //向右函数
          cc.log('right');

          if (this.direction != 2) {
            this.direction = 3;
          }
        }
      } else {
        //手势向上下
        //判断手势向上还是向下
        if (endY > 0) {
          //向下函数
          cc.log('down');

          if (this.direction != 0) {
            this.direction = 1;
          }
        } else {
          //向上函数
          cc.log('up');

          if (this.direction != 1) {
            this.direction = 0;
          }
        }
      }
    }, this);
  },
  onTouchStart: function onTouchStart() {},
  onTouchMove: function onTouchMove(event, data) {
    this._speedType = data.speedType;
    this.moveDir = data.moveDistance;
    cc.log("this.moveDir =" + this.moveDir);
  },
  onTouchEnd: function onTouchEnd(event, data) {
    this._speedType = data.speedType;
  },
  //
  setGame: function setGame() {
    cc.log("setGame start"); //下个果实方块

    var goal = this.nextGoal;
    this.buildBody(goal);
    cc.log("setGame end");
  },
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    console.log("onBeginContact");
  },
  //获取颜色后实例化6种图像,还有一个种作为head
  buildBody: function buildBody(goal) {
    cc.log("goal:" + goal);
    this.produceFoot(); //移动

    this.schedule(this.move, this.speed);
    cc.log("goal2:" + goal);
  },
  //检测果实生成位置是否重叠贪吃蛇
  overlapFoot: function overlapFoot() {
    this.goalX = Math.floor(10 * Math.random());
    this.goalY = Math.floor(15 * Math.random()); //判断贪吃蛇所有部位是否重叠

    for (var j = 0; j < this.snakeArrX.length; j++) {
      if (this.boxMap[this.goalX][this.goalY] === 1) {
        //重新生成，并且重新检测
        this.overlapFoot();
        break;
      }
    }

    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].x == this.goalX * 48 && this.nodes[i].y == this.goalY * 48) {
        this.overlapFoot();
        break;
      }
    }

    this.produceFoot();
  },
  //生成果实
  produceFoot: function produceFoot() {
    this.nextGoal = Math.floor(7 * Math.random());
    this.nextGoal = 4; //随机生成某种颜色

    if (this.nextGoal === 0) {
      this.prefab = this.rect0;
    }

    if (this.nextGoal === 1) {
      this.prefab = this.rect1;
    }

    if (this.nextGoal === 2) {
      this.prefab = this.rect2;
    }

    if (this.nextGoal === 3) {
      this.prefab = this.rect3;
    }

    if (this.nextGoal === 4) {
      this.prefab = this.rect4;
    }

    if (this.nextGoal === 5) {
      this.prefab = this.rect5;
    }

    if (this.nextGoal === 6) {
      this.prefab = this.rect6;
    } //贪吃蛇身体


    this.snakeBody = cc.instantiate(this.prefab).getComponent('rect');
    this.snakeBody.node.Group = 'target';
    var box = cc.find('Canvas/box');
    box.addChild(this.snakeBody.node);
    this.snakeBody.node.x = this.goalX * 48;
    this.snakeBody.node.y = this.goalY * 48; //记录地图这里已经有果实

    var boxMapX = this.snakeBody.node.x / 48;
    var boxMapY = this.snakeBody.node.y / 48;
    this.boxMap[boxMapX][boxMapY] = 1;
  },
  //吃到果实
  eatFoot: function eatFoot() {
    var boxMapX = this.snakeHead.node.x / 48;
    var boxMapY = this.snakeHead.node.y / 48; //判断是否位置是否有果实

    if (this.boxMap[boxMapX][boxMapY] === 1) {
      //cc.log("位置有果实");
      //加在尾部
      var len = this.snakeArrX.length;
      this.snakeArrX[len] = this.snakeBody.node.x;
      this.snakeArrY[len] = this.snakeBody.node.y; // let sprite = this.snakeBody.getComponent(cc.Sprite)
      // sprite.spriteFrame = new cc.SpriteFrame(cc.url.raw('assets/img/5.png'));

      this.snakeArr[len] = this.snakeBody; //果实被吃了 

      this.boxMap[boxMapX][boxMapY] = 0; //加分数

      this.addScore(); //随机生成下一个果实

      this.overlapFoot();
    }
  },
  //加分数
  addScore: function addScore() {
    //根据不同果实增加分数
    if (this.nextGoal === 0) {
      this.scoreNum += 50;
    }

    if (this.nextGoal === 1) {
      this.scoreNum += 100;
    }

    if (this.nextGoal === 2) {
      this.scoreNum += 200;
    }

    if (this.nextGoal === 3) {
      this.scoreNum += 300;
    }

    if (this.nextGoal === 4) {
      this.scoreNum += 400;
    }

    if (this.nextGoal === 5) {
      this.scoreNum += 500;
    }

    if (this.nextGoal === 6) {
      this.scoreNum += 600;
    }

    this.score.string = this.scoreNum;
  },
  //移动方法
  move: function move() {
    //方向,up-0,down-1,left-2,right-3
    if (this.direction === 0) {
      //移动前，判断游戏是否结束
      this.isGameOver(this.snakeHead.node.x, this.snakeHead.node.y + 48);

      if (this.gameState === 1) {
        this.snakeHead.node.y += 48;
        this.snakeHead.node.rotation = 0;
      } //cc.log("up");

    } else if (this.direction === 1) {
      //移动前，判断游戏是否结束
      this.isGameOver(this.snakeHead.node.x, this.snakeHead.node.y - 48);

      if (this.gameState === 1) {
        this.snakeHead.node.y -= 48;
        this.snakeHead.node.rotation = 180;
      } // cc.log("down");

    } else if (this.direction === 2) {
      this.isGameOver(this.snakeHead.node.x - 48, this.snakeHead.node.y);

      if (this.gameState === 1) {
        this.snakeHead.node.x -= 48;
        this.snakeHead.node.rotation = 270;
      } //cc.log("left");

    } else if (this.direction === 3) {
      //移动前，判断游戏是否结束
      this.isGameOver(this.snakeHead.node.x + 48, this.snakeHead.node.y);

      if (this.gameState === 1) {
        this.snakeHead.node.x += 48;
        this.snakeHead.node.rotation = 90;
      } //cc.log("right");

    }

    if (this.gameState === 1) {
      this.eatFoot();
      this.moveAll();
    }
  },
  //移动的时候，身体也向头移动
  moveAll: function moveAll() {
    for (var i = this.snakeArrX.length - 1; i > 0; i--) {
      this.snakeArrX[i] = this.snakeArrX[i - 1];
      this.snakeArrY[i] = this.snakeArrY[i - 1];
    } //更新贪吃蛇头部位置,贪吃蛇随头部移动


    this.snakeArrX[0] = this.snakeHead.node.x;
    this.snakeArrY[0] = this.snakeHead.node.y;

    for (var j = 1; j < this.snakeArrX.length; j++) {
      this.snakeArr[j].node.x = this.snakeArrX[j];
      this.snakeArr[j].node.y = this.snakeArrY[j];
    } //cc.log("moveAll"+this.snakeArrX.length);

  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    console.log("碰撞  =" + other);
  },
  //键盘监听
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
      case cc.macro.KEY.left:
        // cc.log("key code is  a and left");
        if (this.direction != 3) {
          this.direction = 2;
        }

        break;

      case cc.macro.KEY.d:
      case cc.macro.KEY.right:
        // cc.log("key code is  d and right");
        if (this.direction != 2) {
          this.direction = 3;
        }

        break;

      case cc.macro.KEY.w:
      case cc.macro.KEY.up:
        // cc.log("key code is  w and up");
        if (this.direction != 1) {
          this.direction = 0;
        }

        break;

      case cc.macro.KEY.s:
      case cc.macro.KEY.down:
        // cc.log("key code is  s and down");
        if (this.direction != 0) {
          this.direction = 1;
        }

        break;
    }
  },
  //判断游戏结束的条件
  isGameOver: function isGameOver(x, y) {
    //判断是否超出地图
    if (x < 0 || x >= 480 || y < 0 || y >= 720) {
      this.gameOver();
      return;
    }

    for (var i = 0; i < this.nodes.length; i++) {
      cc.log("nodes =" + this.nodes[i]);

      if (this.nodes[i].Group != 'target') {
        if (this.nodes[i].x == x && this.nodes[i].y == y) {
          this.gameOver();
          return;
        }
      }
    } //判断是否碰撞到贪吃蛇身体


    for (var _i = 0; _i < this.snakeArrX.length; _i++) {
      if (this.snakeArrX[_i] == x && this.snakeArrY[_i] == y) {
        this.gameOver();
        return;
      }
    }
  },
  //游戏结束
  gameOver: function gameOver() {
    cc.log("结束"); //游戏状态

    this.gameState = 2; //将失败的画面显示出来

    this.over.active = true; //停止移动

    this.unschedule(this.move); //停止所有音乐

    cc.audioEngine.stopAll();
  },
  //暂停游戏
  pause: function pause() {
    //2表示游戏结束
    if (this.gameState !== 2) {
      if (this.gameState === 1) {
        this.gameState = 0;
        this.button.string = "Play"; //停止移动

        this.unschedule(this.move);
      } else if (this.gameState === 0) {
        this.gameState = 1;
        this.button.string = "Pause"; //停止移动

        this.schedule(this.move, this.speed);
      }
    }
  },
  //重新开始游戏
  replay: function replay() {
    //重新加载游戏场景
    cc.director.loadScene("snaker");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3ByaXRlXFxidWlsZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJlY3QwIiwiUHJlZmFiIiwicmVjdDEiLCJyZWN0MiIsInJlY3QzIiwicmVjdDQiLCJyZWN0NSIsInJlY3Q2IiwicmVjdDciLCJjYmEiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJtb3ZlRGlyIiwidjIiLCJkaXNwbGF5TmFtZSIsInRvb2x0aXAiLCJfc3BlZWRUeXBlIiwiSm95c3RpY2tFbnVtIiwiU3BlZWRUeXBlIiwiU1RPUCIsInBsYXllciIsImJhc2Vwb2ludCIsImJ1dHRvbiIsIkxhYmVsIiwic2NvcmUiLCJvdmVyIiwiTm9kZSIsInNsaWRlcnYiLCJTbGlkZXIiLCJhdWRpbyIsIkF1ZGlvQ2xpcCIsInN1Yk5vZGVzQXJyIiwib25Mb2FkIiwibG9nIiwiSm95c3RpY2tFdmVudCIsImdldEluc3RhbmNlIiwib24iLCJKb3lzdGlja0V2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwib25Ub3VjaFN0YXJ0IiwiVE9VQ0hfTU9WRSIsIm9uVG91Y2hNb3ZlIiwiVE9VQ0hfRU5EIiwib25Ub3VjaEVuZCIsImNvbGxpZGVyIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsInBoeXNpY3MiLCJnZXRQaHlzaWNzTWFuYWdlciIsImRiIiwiUGh5c2ljc01hbmFnZXIiLCJEcmF3Qml0cyIsIm5vZGVzIiwiZmluZCIsImNoaWxkcmVuIiwiZ2FtZVN0YXRlIiwic2NvcmVOdW0iLCJsZWZ0WCIsInJpZ2h0WCIsInNwZWVkIiwiZGlyZWN0aW9uIiwic25ha2VBcnJYIiwic25ha2VBcnJZIiwic25ha2VBcnIiLCJuZXh0R29hbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdvYWxYIiwiZ29hbFkiLCJzbmFrZUhlYWQiLCJpbnN0YW50aWF0ZSIsImdldENvbXBvbmVudCIsIm5vZGUiLCJ4IiwieSIsIkdyb3VwIiwiYm94IiwiYWRkQ2hpbGQiLCJib3hNYXAiLCJpIiwiaiIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsInNldEdhbWUiLCJldmVudCIsImxvY2F0aW9uIiwiZ2V0TG9jYXRpb24iLCJmaXJzdFgiLCJmaXJzdFkiLCJ0b3VjaFBvaW50IiwiZW5kWCIsImVuZFkiLCJhYnMiLCJkYXRhIiwic3BlZWRUeXBlIiwibW92ZURpc3RhbmNlIiwiZ29hbCIsImJ1aWxkQm9keSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJjb25zb2xlIiwicHJvZHVjZUZvb3QiLCJzY2hlZHVsZSIsIm1vdmUiLCJvdmVybGFwRm9vdCIsImxlbmd0aCIsInByZWZhYiIsInNuYWtlQm9keSIsImJveE1hcFgiLCJib3hNYXBZIiwiZWF0Rm9vdCIsImxlbiIsImFkZFNjb3JlIiwic3RyaW5nIiwiaXNHYW1lT3ZlciIsInJvdGF0aW9uIiwibW92ZUFsbCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJhIiwibGVmdCIsImQiLCJyaWdodCIsInciLCJ1cCIsInMiLCJkb3duIiwiZ2FtZU92ZXIiLCJhY3RpdmUiLCJ1bnNjaGVkdWxlIiwiYXVkaW9FbmdpbmUiLCJzdG9wQWxsIiwicGF1c2UiLCJyZXBsYXkiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFHQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBQ0osRUFBRSxDQUFDSyxNQUREO0FBRVJDLElBQUFBLEtBQUssRUFBQ04sRUFBRSxDQUFDSyxNQUZEO0FBR1JFLElBQUFBLEtBQUssRUFBQ1AsRUFBRSxDQUFDSyxN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R0FBZSxDQUFmO0FBQ0EsYUFBS2xDLE1BQUwsQ0FBWWtHLE1BQVosR0FBcUIsT0FBckIsQ0FGd0IsQ0FHeEI7O0FBQ0EsYUFBS1gsUUFBTCxDQUFjLEtBQUtDLElBQW5CLEVBQXdCLEtBQUtsRCxLQUE3QjtBQUNIO0FBQ0o7QUFDSixHQXBiSTtBQXFiTDtBQUNBb0YsRUFBQUEsTUF0Ykssb0JBc2JHO0FBQ0g7QUFDRHBKLElBQUFBLEVBQUUsQ0FBQ2lELFFBQUgsQ0FBWW9HLFNBQVosQ0FBc0IsUUFBdEI7QUFDSDtBQXpiSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm95c3RpY2tFbnVtIGZyb20gXCIuL2pveXN0aWNrL0pveXN0aWNrRW51bVwiO1xyXG5pbXBvcnQgSm95c3RpY2tFdmVudCBmcm9tIFwiLi9qb3lzdGljay9Kb3lzdGlja0V2ZW50XCI7XHJcblxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICByZWN0MDpjYy5QcmVmYWIsXHJcbiAgICAgICAgcmVjdDE6Y2MuUHJlZmFiLFxyXG4gICAgICAgIHJlY3QyOmNjLlByZWZhYixcclxuICAgICAgICByZWN0MzpjYy5QcmVmYWIsXHJcbiAgICAgICAgcmVjdDQ6Y2MuUHJlZmFiLFxyXG4gICAgICAgIHJlY3Q1OmNjLlByZWZhYixcclxuICAgICAgICByZWN0NjpjYy5QcmVmYWIsXHJcbiAgICAgICAgcmVjdDc6Y2MuUHJlZmFiLFxyXG5cclxuICAgICAgICBjYmE6e2RlZmF1bHQ6bnVsbCx0eXBlOmNjLlNwcml0ZUZyYW1lfSxcclxuXHJcbiAgICAvLyBmcm9tIGpveXN0aWNrXHJcbiAgICBtb3ZlRGlyOiB7XHJcbiAgICAgICAgZGVmYXVsdDogY2MudjIoMCwgMSksXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICdNb3ZlIERpcicsXHJcbiAgICAgICAgdG9vbHRpcDogJ+enu+WKqOaWueWQkScsXHJcbiAgICB9LFxyXG4gICAgX3NwZWVkVHlwZToge1xyXG4gICAgICAgIGRlZmF1bHQ6IEpveXN0aWNrRW51bS5TcGVlZFR5cGUuU1RPUCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ1NwZWVkIFR5cGUnLFxyXG4gICAgICAgIHR5cGU6IEpveXN0aWNrRW51bS5TcGVlZFR5cGUsXHJcbiAgICAgICAgdG9vbHRpcDogJ+mAn+W6pue6p+WIqydcclxuICAgIH0sXHJcbiAgICAgICAvL+aSreaUvumihOWItui1hOa6kFxyXG4gICAgICAgcGxheWVyOmNjLlByZWZhYixcclxuICAgICAgIGJhc2Vwb2ludDpjYy5QcmVmYWIsXHJcbiAgICAgICAvL+aMiemSruiKgueCuVxyXG4gICAgICAgYnV0dG9uOmNjLkxhYmVsLFxyXG4gICAgICAgc2NvcmU6Y2MuTGFiZWwsXHJcbiAgICAgICBvdmVyOmNjLk5vZGUsXHJcbiAgICAgICAvL+mAn+W6puiwg+iKgua7keWKqFxyXG4gICAgICAgc2xpZGVydjpjYy5TbGlkZXIsXHJcbiAgICAgICAvL+mfs+mikVxyXG4gICAgICAgYXVkaW86Y2MuQXVkaW9DbGlwLFxyXG5cclxuICAgICAgIHN1Yk5vZGVzQXJyOntcclxuICAgICAgICAgICAgZGVmYXVsdDpbXSxcclxuICAgICAgICAgICAgdHlwZTpjYy5QcmVmYWIsXHJcbiAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5sb2coXCJvbmxvYWQgc3RhcnRcIik7XHJcblxyXG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5vbihKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub24oSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5vbihKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgICAgICB2YXIgY29sbGlkZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgY29sbGlkZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gY29sbGlkZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICAgICAgLy8gY29sbGlkZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8v5byA5ZCv54mp55CG5byV5pOOXHJcbiAgICAgICAgdmFyIHBoeXNpY3MgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHBoeXNpY3MuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gcGh5c2ljcy5ncmF2aXR5LnkgPSAxMDAwO1xyXG4gICAgICAgIHZhciBkYiA9IGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5ub2RlcyA9IGNjLmZpbmQoJ0NhbnZhcy9ib3gvbm9kZXMnKS5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgLy/muLjmiI/nirbmgIEgIDAt5pqC5YGcIDEt6L+Q6KGMIDIt5ri45oiP57uT5p2fIFxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gMTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvL+mfs+aViFxyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF1ZGlvLCB0cnVlKTtcclxuICAgICAgICAvL+WIhuaVsFxyXG4gICAgICAgIHRoaXMuc2NvcmVOdW09MDtcclxuICAgICAgICAvL+i+ueeVjOWAvFxyXG4gICAgICAgIHRoaXMubGVmdFg7XHJcbiAgICAgICAgdGhpcy5yaWdodFg7XHJcbiAgICAgICAgLy/pgJ/luqZcclxuICAgICAgICB0aGlzLnNwZWVkPTAuNTtcclxuICAgICAgICAvL+aWueWQkSx1cC0wLGRvd24tMSxsZWZ0LTIscmlnaHQtM1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcclxuICAgICAgICAvL+i0quWQg+ibh+aVsOe7hCzkuozkvY3mlbDnu4RcclxuICAgICAgICB0aGlzLnNuYWtlQXJyWD1bXTtcclxuICAgICAgICB0aGlzLnNuYWtlQXJyWT1bXTtcclxuICAgICAgICB0aGlzLnNuYWtlQXJyPVtdO1xyXG4gICAgICAgIC8v5Zyw5Zu+5LiK6ZqP5py655Sf5oiQ5p6c5a6eKHgseSnlnZDmoIdcclxuICAgICAgICB0aGlzLm5leHRHb2FsID0gTWF0aC5mbG9vcig3Kk1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHRoaXMuZ29hbFggPSBNYXRoLmZsb29yKDEwKk1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHRoaXMuZ29hbFkgPSBNYXRoLmZsb29yKDE1Kk1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIC8v6K6+572u6LSq5ZCD6JuH5aS06YOoXHJcbiAgICAgICAgIHRoaXMuc25ha2VIZWFkID0gY2MuaW5zdGFudGlhdGUodGhpcy5yZWN0NykuZ2V0Q29tcG9uZW50KCdyZWN0Jyk7XHJcbiAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUueD0yNDA7XHJcbiAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUueT0zMzY7XHJcbiAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUuR3JvdXAgPSAnaGVybyc7XHJcblxyXG4gICAgICAgICB2YXIgYm94PWNjLmZpbmQoJ0NhbnZhcy9ib3gnKTtcclxuICAgICAgICAgYm94LmFkZENoaWxkKHRoaXMuc25ha2VIZWFkLm5vZGUpO1xyXG4gICAgICAgICB0aGlzLnNuYWtlQXJyWFswXT10aGlzLnNuYWtlSGVhZC5ub2RlLng7XHJcbiAgICAgICAgIHRoaXMuc25ha2VBcnJZWzBdPXRoaXMuc25ha2VIZWFkLm5vZGUueTtcclxuICAgICAgICAgdGhpcy5zbmFrZUFyclswXSA9IHRoaXMuc25ha2VIZWFkO1xyXG4gICAgICAgICAvL+WcsOWbvlxyXG4gICAgICAgICB0aGlzLmJveE1hcD1bXTtcclxuICAgICAgICAgZm9yKGxldCBpPTA7aTwxMDtpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmJveE1hcFtpXT1bXTtcclxuICAgICAgICAgICAgZm9yKGxldCBqPTA7ajwxNTtqKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3hNYXBbaV1bal09MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgLy/ms6jlhozmjInkuIvnm5HlkKxcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgIC8vdGhpcy5vbnRvdWNobW92ZSgpO1xyXG4gICAgICAgdGhpcy5zZXRHYW1lKCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpOy8vIOiOt+WPluiKgueCueWdkOagh1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0WCA9IGxvY2F0aW9uLng7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RZID0gbG9jYXRpb24ueTtcclxuICAgICAgICAgICAgLy8g6I635Y+W6Kem54K55Zyo56m66Ze06IqC54K55LiK55qE5Z2Q5qCHXHJcbiAgICAgICAgICAgIC8vIHZhciB0ZW1wUGxheWVyID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobG9jYXRpb24pO1xyXG4gICAgICAgICAgICAvLyBub2RlLnNldFBvc2l0aW9uKHRlbXBQbGF5ZXIpO1xyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBsZXQgdG91Y2hQb2ludCA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCBlbmRYID0gdGhpcy5maXJzdFggLSB0b3VjaFBvaW50Lng7XHJcbiAgICAgICAgICAgIGxldCBlbmRZID0gdGhpcy5maXJzdFkgLSB0b3VjaFBvaW50Lnk7XHJcbiAgICAgICAgICAgIC8vIHZhciB0ZW1wUGxheWVyID0gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hQb2ludCk7XHJcbiAgICAgICAgICAgIC8vIG5vZGUuc2V0UG9zaXRpb24odGVtcFBsYXllcik7XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZW5kWCkgPiBNYXRoLmFicyhlbmRZKSl7XHJcbiAgICAgICAgICAgICAgICAvL+aJi+WKv+WQkeW3puWPs1xyXG4gICAgICAgICAgICAgICAgLy/liKTmlq3lkJHlt6bov5jmmK/lkJHlj7MgXHJcbiAgICAgICAgICAgICAgICBpZiAoZW5kWCAgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAvL+WQkeW3puWHveaVsFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZygnbGVmdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uIT0zKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5ZCR5Y+z5Ye95pWwXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKCdyaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uIT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+aJi+WKv+WQkeS4iuS4i1xyXG4gICAgICAgICAgICAgICAgLy/liKTmlq3miYvlir/lkJHkuIrov5jmmK/lkJHkuItcclxuICAgICAgICAgICAgICAgIGlmIChlbmRZICA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5ZCR5LiL5Ye95pWwXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKCdkb3duJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24hPTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lkJHkuIrlh73mlbBcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ3VwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24hPTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0KCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9zcGVlZFR5cGUgPSBkYXRhLnNwZWVkVHlwZTtcclxuICAgICAgICB0aGlzLm1vdmVEaXIgPSBkYXRhLm1vdmVEaXN0YW5jZTtcclxuICAgICAgICBjYy5sb2coXCJ0aGlzLm1vdmVEaXIgPVwiICsgdGhpcy5tb3ZlRGlyKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Ub3VjaEVuZChldmVudCwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3NwZWVkVHlwZSA9IGRhdGEuc3BlZWRUeXBlO1xyXG4gICAgfSxcclxuICAgIC8vXHJcbiAgICBzZXRHYW1lKCl7XHJcbiAgICAgICAgY2MubG9nKFwic2V0R2FtZSBzdGFydFwiKTtcclxuICAgICAgICAgLy/kuIvkuKrmnpzlrp7mlrnlnZdcclxuICAgICAgICAgdmFyIGdvYWwgPSB0aGlzLm5leHRHb2FsO1xyXG4gICAgICAgICB0aGlzLmJ1aWxkQm9keShnb2FsKTtcclxuICAgICAgICAgY2MubG9nKFwic2V0R2FtZSBlbmRcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkJlZ2luQ29udGFjdFwiKTtcclxuICAgIH0sXHJcbiAgICBcclxuXHJcbiAgICAvL+iOt+WPluminOiJsuWQjuWunuS+i+WMljbnp43lm77lg48s6L+Y5pyJ5LiA5Liq56eN5L2c5Li6aGVhZFxyXG4gICAgYnVpbGRCb2R5KGdvYWwpe1xyXG4gICAgICAgIGNjLmxvZyhcImdvYWw6XCIrZ29hbCk7XHJcbiAgICAgICAgIHRoaXMucHJvZHVjZUZvb3QoKTtcclxuICAgICAgICAgLy/np7vliqhcclxuICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLm1vdmUsdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgIGNjLmxvZyhcImdvYWwyOlwiK2dvYWwpO1xyXG5cclxuICAgIH0sXHJcbiAgICAvL+ajgOa1i+aenOWunueUn+aIkOS9jee9ruaYr+WQpumHjeWPoOi0quWQg+ibh1xyXG4gICAgb3ZlcmxhcEZvb3QoKXtcclxuICAgICAgICB0aGlzLmdvYWxYID0gTWF0aC5mbG9vcigxMCpNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB0aGlzLmdvYWxZID0gTWF0aC5mbG9vcigxNSpNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICAvL+WIpOaWrei0quWQg+ibh+aJgOaciemDqOS9jeaYr+WQpumHjeWPoFxyXG4gICAgICAgIGZvcihsZXQgaj0wO2o8dGhpcy5zbmFrZUFyclgubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYm94TWFwW3RoaXMuZ29hbFhdW3RoaXMuZ29hbFldPT09MSl7XHJcbiAgICAgICAgICAgICAgICAvL+mHjeaWsOeUn+aIkO+8jOW5tuS4lOmHjeaWsOajgOa1i1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGFwRm9vdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMubm9kZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGVzW2ldLng9PXRoaXMuZ29hbFggKiA0OCAmJiB0aGlzLm5vZGVzW2ldLnk9PXRoaXMuZ29hbFkgKiA0OCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXBGb290KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2R1Y2VGb290KCk7XHJcbiAgICB9LFxyXG4gICAgLy/nlJ/miJDmnpzlrp5cclxuICAgIHByb2R1Y2VGb290KCl7XHJcbiAgICAgICAgdGhpcy5uZXh0R29hbCA9IE1hdGguZmxvb3IoNypNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB0aGlzLm5leHRHb2FsID0gNDtcclxuICAgICAgICAvL+maj+acuueUn+aIkOafkOenjeminOiJslxyXG4gICAgICAgICBpZih0aGlzLm5leHRHb2FsPT09MCl7dGhpcy5wcmVmYWI9dGhpcy5yZWN0MDt9XHJcbiAgICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT0xKXt0aGlzLnByZWZhYj10aGlzLnJlY3QxO31cclxuICAgICAgICAgaWYodGhpcy5uZXh0R29hbD09PTIpe3RoaXMucHJlZmFiPXRoaXMucmVjdDI7fVxyXG4gICAgICAgICBpZih0aGlzLm5leHRHb2FsPT09Myl7dGhpcy5wcmVmYWI9dGhpcy5yZWN0Mzt9XHJcbiAgICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT00KXt0aGlzLnByZWZhYj10aGlzLnJlY3Q0O31cclxuICAgICAgICAgaWYodGhpcy5uZXh0R29hbD09PTUpe3RoaXMucHJlZmFiPXRoaXMucmVjdDU7fVxyXG4gICAgICAgICBpZih0aGlzLm5leHRHb2FsPT09Nil7dGhpcy5wcmVmYWI9dGhpcy5yZWN0Njt9XHJcbiAgICAgICAgLy/otKrlkIPom4fouqvkvZNcclxuICAgICAgICAgdGhpcy5zbmFrZUJvZHkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYikuZ2V0Q29tcG9uZW50KCdyZWN0Jyk7XHJcbiAgICAgICAgIHRoaXMuc25ha2VCb2R5Lm5vZGUuR3JvdXAgPSAndGFyZ2V0JztcclxuICAgICAgICAgdmFyIGJveD1jYy5maW5kKCdDYW52YXMvYm94Jyk7XHJcbiAgICAgICAgIGJveC5hZGRDaGlsZCh0aGlzLnNuYWtlQm9keS5ub2RlKTtcclxuICAgICAgICAgdGhpcy5zbmFrZUJvZHkubm9kZS54PXRoaXMuZ29hbFgqNDg7ICAgICAgIFxyXG4gICAgICAgICB0aGlzLnNuYWtlQm9keS5ub2RlLnk9dGhpcy5nb2FsWSo0ODtcclxuICAgICAgICAgLy/orrDlvZXlnLDlm77ov5nph4zlt7Lnu4/mnInmnpzlrp5cclxuICAgICAgICAgdmFyIGJveE1hcFggPSB0aGlzLnNuYWtlQm9keS5ub2RlLngvNDg7XHJcbiAgICAgICAgIHZhciBib3hNYXBZID0gdGhpcy5zbmFrZUJvZHkubm9kZS55LzQ4O1xyXG4gICAgICAgICB0aGlzLmJveE1hcFtib3hNYXBYXVtib3hNYXBZXT0xO1xyXG4gICAgfSxcclxuICAgIC8v5ZCD5Yiw5p6c5a6eXHJcbiAgICBlYXRGb290KCl7XHJcbiAgICAgICAgIHZhciBib3hNYXBYID0gdGhpcy5zbmFrZUhlYWQubm9kZS54LzQ4O1xyXG4gICAgICAgICB2YXIgYm94TWFwWSA9IHRoaXMuc25ha2VIZWFkLm5vZGUueS80ODtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuS9jee9ruaYr+WQpuacieaenOWunlxyXG4gICAgICAgIGlmKHRoaXMuYm94TWFwW2JveE1hcFhdW2JveE1hcFldPT09MSl7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwi5L2N572u5pyJ5p6c5a6eXCIpO1xyXG4gICAgICAgICAgICAvL+WKoOWcqOWwvumDqFxyXG4gICAgICAgICAgICB2YXIgbGVuID0gdGhpcy5zbmFrZUFyclgubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyWFtsZW5dPXRoaXMuc25ha2VCb2R5Lm5vZGUueDtcclxuICAgICAgICAgICAgdGhpcy5zbmFrZUFycllbbGVuXT10aGlzLnNuYWtlQm9keS5ub2RlLnk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBsZXQgc3ByaXRlID0gdGhpcy5zbmFrZUJvZHkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICAgICAgLy8gc3ByaXRlLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKGNjLnVybC5yYXcoJ2Fzc2V0cy9pbWcvNS5wbmcnKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2VBcnJbbGVuXT10aGlzLnNuYWtlQm9keTtcclxuICAgICAgICAgICAgLy/mnpzlrp7ooqvlkIPkuoYgXHJcbiAgICAgICAgICAgIHRoaXMuYm94TWFwW2JveE1hcFhdW2JveE1hcFldPTA7XHJcbiAgICAgICAgICAgIC8v5Yqg5YiG5pWwXHJcbiAgICAgICAgICAgIHRoaXMuYWRkU2NvcmUoKTtcclxuICAgICAgICAgICAgLy/pmo/mnLrnlJ/miJDkuIvkuIDkuKrmnpzlrp5cclxuICAgICAgICAgICAgdGhpcy5vdmVybGFwRm9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+WKoOWIhuaVsFxyXG4gICAgYWRkU2NvcmUoKXtcclxuICAgICAgICAvL+agueaNruS4jeWQjOaenOWunuWinuWKoOWIhuaVsFxyXG4gICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT0wKXt0aGlzLnNjb3JlTnVtKz01MDt9XHJcbiAgICAgICAgaWYodGhpcy5uZXh0R29hbD09PTEpe3RoaXMuc2NvcmVOdW0rPTEwMDt9XHJcbiAgICAgICAgaWYodGhpcy5uZXh0R29hbD09PTIpe3RoaXMuc2NvcmVOdW0rPTIwMDt9XHJcbiAgICAgICAgaWYodGhpcy5uZXh0R29hbD09PTMpe3RoaXMuc2NvcmVOdW0rPTMwMDt9XHJcbiAgICAgICAgaWYodGhpcy5uZXh0R29hbD09PTQpe3RoaXMuc2NvcmVOdW0rPTQwMDt9XHJcbiAgICAgICAgaWYodGhpcy5uZXh0R29hbD09PTUpe3RoaXMuc2NvcmVOdW0rPTUwMDt9XHJcbiAgICAgICAgaWYodGhpcy5uZXh0R29hbD09PTYpe3RoaXMuc2NvcmVOdW0rPTYwMDt9XHJcbiAgICAgICAgdGhpcy5zY29yZS5zdHJpbmc9dGhpcy5zY29yZU51bTtcclxuICAgIH0sXHJcbiAgICAvL+enu+WKqOaWueazlVxyXG4gICAgbW92ZSAoKXtcclxuICAgICAgICAvL+aWueWQkSx1cC0wLGRvd24tMSxsZWZ0LTIscmlnaHQtM1xyXG4gICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uPT09MCl7XHJcbiAgICAgICAgICAgIC8v56e75Yqo5YmN77yM5Yik5pat5ri45oiP5piv5ZCm57uT5p2fXHJcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lT3Zlcih0aGlzLnNuYWtlSGVhZC5ub2RlLngsdGhpcy5zbmFrZUhlYWQubm9kZS55KzQ4KTtcclxuICAgICAgICAgICAgaWYodGhpcy5nYW1lU3RhdGU9PT0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUueSs9NDg7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jYy5sb2coXCJ1cFwiKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmRpcmVjdGlvbj09PTEpe1xyXG4gICAgICAgICAgICAvL+enu+WKqOWJje+8jOWIpOaWrea4uOaIj+aYr+WQpue7k+adn1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZU92ZXIodGhpcy5zbmFrZUhlYWQubm9kZS54LHRoaXMuc25ha2VIZWFkLm5vZGUueS00OCk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZT09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS55LT00ODtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUucm90YXRpb24gPSAxODA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAvLyBjYy5sb2coXCJkb3duXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZGlyZWN0aW9uPT09Mil7XHJcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lT3Zlcih0aGlzLnNuYWtlSGVhZC5ub2RlLngtNDgsdGhpcy5zbmFrZUhlYWQubm9kZS55KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLngtPTQ4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS5yb3RhdGlvbiA9IDI3MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NjLmxvZyhcImxlZnRcIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5kaXJlY3Rpb249PT0zKXtcclxuICAgICAgICAgICAgLy/np7vliqjliY3vvIzliKTmlq3muLjmiI/mmK/lkKbnu5PmnZ9cclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVPdmVyKHRoaXMuc25ha2VIZWFkLm5vZGUueCs0OCx0aGlzLnNuYWtlSGVhZC5ub2RlLnkpO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLngrPTQ4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS5yb3RhdGlvbiA9IDkwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwicmlnaHRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgIHRoaXMuZWF0Rm9vdCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/np7vliqjnmoTml7blgJnvvIzouqvkvZPkuZ/lkJHlpLTnp7vliqhcclxuICAgIG1vdmVBbGwoKXtcclxuICAgICAgICBmb3IobGV0IGk9dGhpcy5zbmFrZUFyclgubGVuZ3RoLTE7aT4wO2ktLSl7XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2VBcnJYW2ldPXRoaXMuc25ha2VBcnJYW2ktMV07XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2VBcnJZW2ldPXRoaXMuc25ha2VBcnJZW2ktMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5pu05paw6LSq5ZCD6JuH5aS06YOo5L2N572uLOi0quWQg+ibh+maj+WktOmDqOenu+WKqFxyXG4gICAgICAgIHRoaXMuc25ha2VBcnJYWzBdPXRoaXMuc25ha2VIZWFkLm5vZGUueDtcclxuICAgICAgICB0aGlzLnNuYWtlQXJyWVswXT10aGlzLnNuYWtlSGVhZC5ub2RlLnk7XHJcbiAgICAgICAgZm9yKGxldCBqPTE7ajx0aGlzLnNuYWtlQXJyWC5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgdGhpcy5zbmFrZUFycltqXS5ub2RlLng9dGhpcy5zbmFrZUFyclhbal07XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2VBcnJbal0ubm9kZS55PXRoaXMuc25ha2VBcnJZW2pdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NjLmxvZyhcIm1vdmVBbGxcIit0aGlzLnNuYWtlQXJyWC5sZW5ndGgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnorDmkp4gID1cIiArIG90aGVyKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/plK7nm5jnm5HlkKxcclxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcclxuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwia2V5IGNvZGUgaXMgIGEgYW5kIGxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9Myl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTI7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcImtleSBjb2RlIGlzICBkIGFuZCByaWdodFwiKTtcclxuICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uIT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcImtleSBjb2RlIGlzICB3IGFuZCB1cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmRvd246XHJcbiAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCJrZXkgY29kZSBpcyAgcyBhbmQgZG93blwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/liKTmlq3muLjmiI/nu5PmnZ/nmoTmnaHku7ZcclxuICAgIGlzR2FtZU92ZXIoeCx5KXtcclxuICAgICAgICAgLy/liKTmlq3mmK/lkKbotoXlh7rlnLDlm75cclxuICAgICAgICBpZih4PDAgfHwgeD49NDgwIHx8IHk8MCB8fCB5Pj03MjApe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMubm9kZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJub2RlcyA9XCIgKyB0aGlzLm5vZGVzW2ldKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZXNbaV0uR3JvdXAgIT0gJ3RhcmdldCcpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ub2Rlc1tpXS54PT14ICYmIHRoaXMubm9kZXNbaV0ueT09eSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm56Kw5pKe5Yiw6LSq5ZCD6JuH6Lqr5L2TXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnNuYWtlQXJyWC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zbmFrZUFyclhbaV09PXggJiYgdGhpcy5zbmFrZUFycllbaV09PXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5ri45oiP57uT5p2fXHJcbiAgICBnYW1lT3ZlciAoKXtcclxuICAgICAgICAgICAgY2MubG9nKFwi57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAvL+a4uOaIj+eKtuaAgVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIC8v5bCG5aSx6LSl55qE55S76Z2i5pi+56S65Ye65p2lXHJcbiAgICAgICAgICAgIHRoaXMub3Zlci5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgLy/lgZzmraLnp7vliqhcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMubW92ZSk7XHJcbiAgICAgICAgICAgIC8v5YGc5q2i5omA5pyJ6Z+z5LmQXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICAvL+aaguWBnOa4uOaIj1xyXG4gICAgcGF1c2UoKXtcclxuICAgICAgICAvLzLooajnpLrmuLjmiI/nu5PmnZ9cclxuICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZSE9PTIpe1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZT09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGU9MDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLnN0cmluZyA9IFwiUGxheVwiO1xyXG4gICAgICAgICAgICAgICAgLy/lgZzmraLnp7vliqhcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLm1vdmUpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmdhbWVTdGF0ZT09PTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGU9MTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLnN0cmluZyA9IFwiUGF1c2VcIjtcclxuICAgICAgICAgICAgICAgIC8v5YGc5q2i56e75YqoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMubW92ZSx0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+mHjeaWsOW8gOWni+a4uOaIj1xyXG4gICAgcmVwbGF5KCl7XHJcbiAgICAgICAgIC8v6YeN5paw5Yqg6L295ri45oiP5Zy65pmvXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic25ha2VyXCIpO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/sprite/joystick/JoystickEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31870IQfNZJtpT/cTZzx1QP', 'JoystickEnum');
// sprite/joystick/JoystickEnum.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _default = {
  JoystickType: cc.Enum({
    FIXED: 0,
    FOLLOW: 1
  }),
  DirectionType: cc.Enum({
    FOUR: 4,
    EIGHT: 8,
    ALL: 0
  }),
  SpeedType: cc.Enum({
    STOP: 0,
    NORMAL: 1,
    FAST: 2
  }),
  JoystickEventType: cc.Enum({
    TOUCH_START: "touchStart",
    TOUCH_MOVE: "touchMove",
    TOUCH_END: "touchEnd",
    CHANGE_JOYSTICK_TYPE: "changeJoystickType"
  })
};
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3ByaXRlXFxqb3lzdGlja1xcSm95c3RpY2tFbnVtLmpzIl0sIm5hbWVzIjpbIkpveXN0aWNrVHlwZSIsImNjIiwiRW51bSIsIkZJWEVEIiwiRk9MTE9XIiwiRGlyZWN0aW9uVHlwZSIsIkZPVVIiLCJFSUdIVCIsIkFMTCIsIlNwZWVkVHlwZSIsIlNUT1AiLCJOT1JNQUwiLCJGQVNUIiwiSm95c3RpY2tFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIlRPVUNIX01PVkUiLCJUT1VDSF9FTkQiLCJDSEFOR0VfSk9ZU1RJQ0tfVFlQRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUFlO0FBQ1hBLEVBQUFBLFlBQVksRUFBRUMsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDbEJDLElBQUFBLEtBQUssRUFBRSxDQURXO0FBRWxCQyxJQUFBQSxNQUFNLEVBQUU7QUFGVSxHQUFSLENBREg7QUFNWEMsRUFBQUEsYUFBYSxFQUFFSixFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUNuQkksSUFBQUEsSUFBSSxFQUFFLENBRGE7QUFFbkJDLElBQUFBLEtBQUssRUFBRSxDQUZZO0FBR25CQyxJQUFBQSxHQUFHLEVBQUU7QUFIYyxHQUFSLENBTko7QUFZWEMsRUFBQUEsU0FBUyxFQUFFUixFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUNmUSxJQUFBQSxJQUFJLEVBQUUsQ0FEUztBQUVmQyxJQUFBQSxNQUFNLEVBQUUsQ0FGTztBQUdmQyxJQUFBQSxJQUFJLEVBQUU7QUFIUyxHQUFSLENBWkE7QUFrQlhDLEVBQUFBLGlCQUFpQixFQUFFWixFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUN2QlksSUFBQUEsV0FBVyxFQUFFLFlBRFU7QUFFdkJDLElBQUFBLFVBQVUsRUFBRSxXQUZXO0FBR3ZCQyxJQUFBQSxTQUFTLEVBQUUsVUFIWTtBQUt2QkMsSUFBQUEsb0JBQW9CLEVBQUU7QUFMQyxHQUFSO0FBbEJSIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgSm95c3RpY2tUeXBlOiBjYy5FbnVtKHtcbiAgICAgICAgRklYRUQ6IDAsXG4gICAgICAgIEZPTExPVzogMSxcbiAgICB9KSxcblxuICAgIERpcmVjdGlvblR5cGU6IGNjLkVudW0oe1xuICAgICAgICBGT1VSOiA0LFxuICAgICAgICBFSUdIVDogOCxcbiAgICAgICAgQUxMOiAwLFxuICAgIH0pLFxuXG4gICAgU3BlZWRUeXBlOiBjYy5FbnVtKHtcbiAgICAgICAgU1RPUDogMCxcbiAgICAgICAgTk9STUFMOiAxLFxuICAgICAgICBGQVNUOiAyXG4gICAgfSksXG5cbiAgICBKb3lzdGlja0V2ZW50VHlwZTogY2MuRW51bSh7XG4gICAgICAgIFRPVUNIX1NUQVJUOiBcInRvdWNoU3RhcnRcIixcbiAgICAgICAgVE9VQ0hfTU9WRTogXCJ0b3VjaE1vdmVcIixcbiAgICAgICAgVE9VQ0hfRU5EOiBcInRvdWNoRW5kXCIsXG5cbiAgICAgICAgQ0hBTkdFX0pPWVNUSUNLX1RZUEU6IFwiY2hhbmdlSm95c3RpY2tUeXBlXCJcbiAgICB9KSxcbn07XG4iXX0=
//------QC-SOURCE-SPLIT------
