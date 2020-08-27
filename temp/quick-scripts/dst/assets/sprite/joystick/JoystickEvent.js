
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