
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