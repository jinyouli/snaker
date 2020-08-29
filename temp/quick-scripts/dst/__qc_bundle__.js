
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcHJpdGUvam95c3RpY2svSm95c3RpY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkb3QiLCJ0eXBlIiwiTm9kZSIsImRpc3BsYXlOYW1lIiwidG9vbHRpcCIsInJpbmciLCJqb3lzdGlja1R5cGUiLCJKb3lzdGlja0VudW0iLCJKb3lzdGlja1R5cGUiLCJGSVhFRCIsImRpcmVjdGlvblR5cGUiLCJEaXJlY3Rpb25UeXBlIiwiQUxMIiwiX3N0aWNrUG9zIiwiX3RvdWNoTG9jYXRpb24iLCJvbkxvYWQiLCJfcmFkaXVzIiwid2lkdGgiLCJfaW5pdFRvdWNoRXZlbnQiLCJGT0xMT1ciLCJub2RlIiwib3BhY2l0eSIsIm9uRW5hYmxlIiwiSm95c3RpY2tFdmVudCIsImdldEluc3RhbmNlIiwib24iLCJKb3lzdGlja0V2ZW50VHlwZSIsIkNIQU5HRV9KT1lTVElDS19UWVBFIiwiX29uQ2hhbmdlSm95c3RpY2tUeXBlIiwib25EaXNhYmxlIiwib2ZmIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJfdG91Y2hTdGFydEV2ZW50IiwiVE9VQ0hfTU9WRSIsIl90b3VjaE1vdmVFdmVudCIsIlRPVUNIX0VORCIsIl90b3VjaEVuZEV2ZW50IiwiVE9VQ0hfQ0FOQ0VMIiwiZXZlbnQiLCJlbWl0IiwidG91Y2hQb3MiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImdldExvY2F0aW9uIiwiZ2V0UG9zaXRpb24iLCJkaXN0YW5jZSIsInN1YiIsIm1hZyIsInNldFBvc2l0aW9uIiwicG9zWCIsIngiLCJwb3NZIiwieSIsInAiLCJ2MiIsIm5vcm1hbGl6ZSIsInNwZWVkVHlwZSIsIlNwZWVkVHlwZSIsIk5PUk1BTCIsIkZBU1QiLCJtb3ZlRGlzdGFuY2UiLCJTVE9QIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUU7QUFDRCxpQkFBUyxJQURSO0FBRURDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQUZSO0FBR0RDLE1BQUFBLFdBQVcsRUFBRSxLQUhaO0FBSURDLE1BQUFBLE9BQU8sRUFBRTtBQUpSLEtBREc7QUFPUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sSUFGUDtBQUdGQyxNQUFBQSxXQUFXLEVBQUUsTUFIWDtBQUlGQyxNQUFBQSxPQUFPLEVBQUU7QUFKUCxLQVBFO0FBY1JFLElBQUFBLFlBQVksRUFBRTtBQUNWLGlCQUFTQyx5QkFBYUMsWUFBYixDQUEwQkMsS0FEekI7QUFFVlIsTUFBQUEsSUFBSSxFQUFFTSx5QkFBYUMsWUFGVDtBQUdWTCxNQUFBQSxXQUFXLEVBQUUsWUFISDtBQUlWQyxNQUFBQSxPQUFPLEVBQUU7QUFKQyxLQWROO0FBcUJSTSxJQUFBQSxhQUFhLEVBQUU7QUFDWCxpQkFBU0gseUJBQWFJLGFBQWIsQ0FBMkJDLEdBRHpCO0FBRVhYLE1BQUFBLElBQUksRUFBRU0seUJBQWFJLGFBRlI7QUFHWFIsTUFBQUEsV0FBVyxFQUFFLGdCQUhGO0FBSVhDLE1BQUFBLE9BQU8sRUFBRTtBQUpFLEtBckJQO0FBNEJSUyxJQUFBQSxTQUFTLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FBRVBaLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQUZGO0FBR1BFLE1BQUFBLE9BQU8sRUFBRTtBQUhGLEtBNUJIO0FBaUNSVSxJQUFBQSxjQUFjLEVBQUU7QUFDWixpQkFBUyxJQURHO0FBRVpiLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQUZHO0FBR1pFLE1BQUFBLE9BQU8sRUFBRTtBQUhHO0FBakNSLEdBSFA7QUEyQ0xXLEVBQUFBLE1BM0NLLG9CQTJDSTtBQUNMLFNBQUtDLE9BQUwsR0FBZSxLQUFLWCxJQUFMLENBQVVZLEtBQVYsR0FBa0IsQ0FBakM7O0FBQ0EsU0FBS0MsZUFBTCxHQUZLLENBR0w7OztBQUNBLFFBQUksS0FBS1osWUFBTCxLQUFzQkMseUJBQWFDLFlBQWIsQ0FBMEJXLE1BQXBELEVBQTREO0FBQ3hELFdBQUtDLElBQUwsQ0FBVUMsT0FBVixHQUFvQixDQUFwQjtBQUNIO0FBQ0osR0FsREk7QUFvRExDLEVBQUFBLFFBcERLLHNCQW9ETTtBQUNQQyw4QkFBY0MsV0FBZCxHQUE0QkMsRUFBNUIsQ0FBK0JsQix5QkFBYW1CLGlCQUFiLENBQStCQyxvQkFBOUQsRUFBb0YsS0FBS0MscUJBQXpGLEVBQWdILElBQWhIO0FBQ0gsR0F0REk7QUF3RExDLEVBQUFBLFNBeERLLHVCQXdETztBQUNSTiw4QkFBY0MsV0FBZCxHQUE0Qk0sR0FBNUIsQ0FBZ0N2Qix5QkFBYW1CLGlCQUFiLENBQStCQyxvQkFBL0QsRUFBcUYsS0FBS0MscUJBQTFGLEVBQWlILElBQWpIO0FBQ0gsR0ExREk7QUE0RExBLEVBQUFBLHFCQTVESyxpQ0E0RGlCM0IsSUE1RGpCLEVBNER1QjtBQUN4QixTQUFLSyxZQUFMLEdBQW9CTCxJQUFwQjtBQUNBLFNBQUttQixJQUFMLENBQVVDLE9BQVYsR0FBb0JwQixJQUFJLEtBQUtNLHlCQUFhQyxZQUFiLENBQTBCQyxLQUFuQyxHQUEyQyxHQUEzQyxHQUFpRCxDQUFyRTtBQUNILEdBL0RJO0FBaUVMUyxFQUFBQSxlQWpFSyw2QkFpRWE7QUFDZDtBQUNBLFNBQUtFLElBQUwsQ0FBVUssRUFBVixDQUFhN0IsRUFBRSxDQUFDTSxJQUFILENBQVE2QixTQUFSLENBQWtCQyxXQUEvQixFQUE0QyxLQUFLQyxnQkFBakQsRUFBbUUsSUFBbkU7QUFDQSxTQUFLYixJQUFMLENBQVVLLEVBQVYsQ0FBYTdCLEVBQUUsQ0FBQ00sSUFBSCxDQUFRNkIsU0FBUixDQUFrQkcsVUFBL0IsRUFBMkMsS0FBS0MsZUFBaEQsRUFBaUUsSUFBakU7QUFDQSxTQUFLZixJQUFMLENBQVVLLEVBQVYsQ0FBYTdCLEVBQUUsQ0FBQ00sSUFBSCxDQUFRNkIsU0FBUixDQUFrQkssU0FBL0IsRUFBMEMsS0FBS0MsY0FBL0MsRUFBK0QsSUFBL0Q7QUFDQSxTQUFLakIsSUFBTCxDQUFVSyxFQUFWLENBQWE3QixFQUFFLENBQUNNLElBQUgsQ0FBUTZCLFNBQVIsQ0FBa0JPLFlBQS9CLEVBQTZDLEtBQUtELGNBQWxELEVBQWtFLElBQWxFO0FBQ0gsR0F2RUk7QUF5RUxKLEVBQUFBLGdCQXpFSyw0QkF5RVlNLEtBekVaLEVBeUVtQjtBQUNwQmhCLDhCQUFjQyxXQUFkLEdBQTRCZ0IsSUFBNUIsQ0FBaUNqQyx5QkFBYW1CLGlCQUFiLENBQStCTSxXQUFoRSxFQUE2RSxzQkFBN0UsRUFBcUcsRUFBckc7O0FBQ0EsUUFBTVMsUUFBUSxHQUFHLEtBQUtyQixJQUFMLENBQVVzQixvQkFBVixDQUErQkgsS0FBSyxDQUFDSSxXQUFOLEVBQS9CLENBQWpCOztBQUVBLFFBQUksS0FBS3JDLFlBQUwsS0FBc0JDLHlCQUFhQyxZQUFiLENBQTBCQyxLQUFwRCxFQUEyRDtBQUN2RCxXQUFLSSxTQUFMLEdBQWlCLEtBQUtSLElBQUwsQ0FBVXVDLFdBQVYsRUFBakIsQ0FEdUQsQ0FHdkQ7O0FBQ0EsVUFBTUMsUUFBUSxHQUFHSixRQUFRLENBQUNLLEdBQVQsQ0FBYSxLQUFLekMsSUFBTCxDQUFVdUMsV0FBVixFQUFiLEVBQXNDRyxHQUF0QyxFQUFqQixDQUp1RCxDQU12RDs7QUFDQSxXQUFLL0IsT0FBTCxHQUFlNkIsUUFBZixJQUEyQixLQUFLN0MsR0FBTCxDQUFTZ0QsV0FBVCxDQUFxQlAsUUFBckIsQ0FBM0I7QUFFSCxLQVRELE1BU08sSUFBSSxLQUFLbkMsWUFBTCxLQUFzQkMseUJBQWFDLFlBQWIsQ0FBMEJXLE1BQXBELEVBQTREO0FBRS9EO0FBQ0EsV0FBS04sU0FBTCxHQUFpQjRCLFFBQWpCO0FBQ0EsV0FBS3JCLElBQUwsQ0FBVUMsT0FBVixHQUFvQixHQUFwQjtBQUNBLFdBQUtQLGNBQUwsR0FBc0J5QixLQUFLLENBQUNJLFdBQU4sRUFBdEIsQ0FMK0QsQ0FPL0Q7O0FBQ0EsV0FBS3RDLElBQUwsQ0FBVTJDLFdBQVYsQ0FBc0JQLFFBQXRCO0FBQ0EsV0FBS3pDLEdBQUwsQ0FBU2dELFdBQVQsQ0FBcUJQLFFBQXJCO0FBQ0g7QUFDSixHQWpHSTtBQW1HTE4sRUFBQUEsZUFuR0ssMkJBbUdXSSxLQW5HWCxFQW1Ha0I7QUFDbkI7QUFDQSxRQUFJLEtBQUtqQyxZQUFMLEtBQXNCQyx5QkFBYUMsWUFBYixDQUEwQlcsTUFBaEQsSUFBMEQsS0FBS0wsY0FBTCxLQUF3QnlCLEtBQUssQ0FBQ0ksV0FBTixFQUF0RixFQUEyRztBQUN2RyxhQUFPLEtBQVA7QUFDSCxLQUprQixDQU1uQjs7O0FBQ0EsUUFBTUYsUUFBUSxHQUFHLEtBQUtwQyxJQUFMLENBQVVxQyxvQkFBVixDQUErQkgsS0FBSyxDQUFDSSxXQUFOLEVBQS9CLENBQWpCO0FBQ0EsUUFBTUUsUUFBUSxHQUFHSixRQUFRLENBQUNNLEdBQVQsRUFBakIsQ0FSbUIsQ0FVbkI7O0FBQ0EsUUFBTUUsSUFBSSxHQUFHLEtBQUtwQyxTQUFMLENBQWVxQyxDQUFmLEdBQW1CVCxRQUFRLENBQUNTLENBQXpDO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLEtBQUt0QyxTQUFMLENBQWV1QyxDQUFmLEdBQW1CWCxRQUFRLENBQUNXLENBQXpDLENBWm1CLENBY25COztBQUNBLFFBQU1DLENBQUMsR0FBR3pELEVBQUUsQ0FBQzBELEVBQUgsQ0FBTUwsSUFBTixFQUFZRSxJQUFaLEVBQWtCTCxHQUFsQixDQUFzQixLQUFLekMsSUFBTCxDQUFVdUMsV0FBVixFQUF0QixFQUErQ1csU0FBL0MsRUFBVjtBQUVBLFFBQUlDLFNBQUo7O0FBRUEsUUFBSSxLQUFLeEMsT0FBTCxHQUFlNkIsUUFBbkIsRUFBNkI7QUFDekIsV0FBSzdDLEdBQUwsQ0FBU2dELFdBQVQsQ0FBcUJwRCxFQUFFLENBQUMwRCxFQUFILENBQU1MLElBQU4sRUFBWUUsSUFBWixDQUFyQjtBQUVBSyxNQUFBQSxTQUFTLEdBQUdqRCx5QkFBYWtELFNBQWIsQ0FBdUJDLE1BQW5DO0FBQ0gsS0FKRCxNQUlPO0FBQ0g7QUFDQSxVQUFNUixDQUFDLEdBQUcsS0FBS3JDLFNBQUwsQ0FBZXFDLENBQWYsR0FBbUJHLENBQUMsQ0FBQ0gsQ0FBRixHQUFNLEtBQUtsQyxPQUF4QztBQUNBLFVBQU1vQyxDQUFDLEdBQUcsS0FBS3ZDLFNBQUwsQ0FBZXVDLENBQWYsR0FBbUJDLENBQUMsQ0FBQ0QsQ0FBRixHQUFNLEtBQUtwQyxPQUF4QztBQUNBLFdBQUtoQixHQUFMLENBQVNnRCxXQUFULENBQXFCcEQsRUFBRSxDQUFDMEQsRUFBSCxDQUFNSixDQUFOLEVBQVNFLENBQVQsQ0FBckI7QUFFQUksTUFBQUEsU0FBUyxHQUFHakQseUJBQWFrRCxTQUFiLENBQXVCRSxJQUFuQztBQUNIOztBQUVEcEMsOEJBQWNDLFdBQWQsR0FBNEJnQixJQUE1QixDQUFpQ2pDLHlCQUFhbUIsaUJBQWIsQ0FBK0JRLFVBQWhFLEVBQTRFSyxLQUE1RSxFQUFtRjtBQUFDaUIsTUFBQUEsU0FBUyxFQUFFQSxTQUFaO0FBQXVCSSxNQUFBQSxZQUFZLEVBQUVQO0FBQXJDLEtBQW5GO0FBQ0gsR0FwSUk7QUFzSUxoQixFQUFBQSxjQXRJSywwQkFzSVVFLEtBdElWLEVBc0lpQjtBQUNsQixTQUFLdkMsR0FBTCxDQUFTZ0QsV0FBVCxDQUFxQixLQUFLM0MsSUFBTCxDQUFVdUMsV0FBVixFQUFyQjs7QUFDQSxRQUFJLEtBQUt0QyxZQUFMLEtBQXNCQyx5QkFBYUMsWUFBYixDQUEwQlcsTUFBcEQsRUFBNEQ7QUFDeEQsV0FBS0MsSUFBTCxDQUFVQyxPQUFWLEdBQW9CLENBQXBCO0FBQ0g7O0FBRURFLDhCQUFjQyxXQUFkLEdBQTRCZ0IsSUFBNUIsQ0FBaUNqQyx5QkFBYW1CLGlCQUFiLENBQStCVSxTQUFoRSxFQUEyRUcsS0FBM0UsRUFBa0Y7QUFBQ2lCLE1BQUFBLFNBQVMsRUFBRWpELHlCQUFha0QsU0FBYixDQUF1Qkk7QUFBbkMsS0FBbEY7QUFDSDtBQTdJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm95c3RpY2tFbnVtIGZyb20gJ0pveXN0aWNrRW51bSc7XG5pbXBvcnQgSm95c3RpY2tFdmVudCBmcm9tICdKb3lzdGlja0V2ZW50JztcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZG90OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnRG90JyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfmkYfmnYbmk43nurXngrknLFxuICAgICAgICB9LFxuICAgICAgICByaW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnUmluZycsXG4gICAgICAgICAgICB0b29sdGlwOiAn5pGH5p2G6IOM5pmv6IqC54K5JyxcbiAgICAgICAgfSxcblxuICAgICAgICBqb3lzdGlja1R5cGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRklYRUQsXG4gICAgICAgICAgICB0eXBlOiBKb3lzdGlja0VudW0uSm95c3RpY2tUeXBlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdUb3VjaCBUeXBlJyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfop6bmkbjnsbvlnosnLFxuICAgICAgICB9LFxuXG4gICAgICAgIGRpcmVjdGlvblR5cGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IEpveXN0aWNrRW51bS5EaXJlY3Rpb25UeXBlLkFMTCxcbiAgICAgICAgICAgIHR5cGU6IEpveXN0aWNrRW51bS5EaXJlY3Rpb25UeXBlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdEaXJlY3Rpb24gVHlwZScsXG4gICAgICAgICAgICB0b29sdGlwOiAn5pa55ZCR57G75Z6LJyxcbiAgICAgICAgfSxcblxuICAgICAgICBfc3RpY2tQb3M6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogJ+aRh+adhuaJgOWcqOS9jee9ricsXG4gICAgICAgIH0sXG4gICAgICAgIF90b3VjaExvY2F0aW9uOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6ICfop6bmkbjkvY3nva4nLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuX3JhZGl1cyA9IHRoaXMucmluZy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMuX2luaXRUb3VjaEV2ZW50KCk7XG4gICAgICAgIC8vIGhpZGUgam95c3RpY2sgd2hlbiBmb2xsb3dcbiAgICAgICAgaWYgKHRoaXMuam95c3RpY2tUeXBlID09PSBKb3lzdGlja0VudW0uSm95c3RpY2tUeXBlLkZPTExPVykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub24oSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLkNIQU5HRV9KT1lTVElDS19UWVBFLCB0aGlzLl9vbkNoYW5nZUpveXN0aWNrVHlwZSwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLm9mZihKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuQ0hBTkdFX0pPWVNUSUNLX1RZUEUsIHRoaXMuX29uQ2hhbmdlSm95c3RpY2tUeXBlLCB0aGlzKTtcbiAgICB9LFxuXG4gICAgX29uQ2hhbmdlSm95c3RpY2tUeXBlKHR5cGUpIHtcbiAgICAgICAgdGhpcy5qb3lzdGlja1R5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IHR5cGUgPT09IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRklYRUQgPyAyNTUgOiAwO1xuICAgIH0sXG5cbiAgICBfaW5pdFRvdWNoRXZlbnQoKSB7XG4gICAgICAgIC8vIHNldCB0aGUgc2l6ZSBvZiBqb3lzdGljayBub2RlIHRvIGNvbnRyb2wgc2NhbGVcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl90b3VjaFN0YXJ0RXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5fdG91Y2hNb3ZlRXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl90b3VjaEVuZEV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fdG91Y2hFbmRFdmVudCwgdGhpcyk7XG4gICAgfSxcblxuICAgIF90b3VjaFN0YXJ0RXZlbnQoZXZlbnQpIHtcbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLmVtaXQoSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBcImpveXN0aWNrIHRvdWNoIHN0YXJ0XCIsIDEwKTtcbiAgICAgICAgY29uc3QgdG91Y2hQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuam95c3RpY2tUeXBlID09PSBKb3lzdGlja0VudW0uSm95c3RpY2tUeXBlLkZJWEVEKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGlja1BvcyA9IHRoaXMucmluZy5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICAvLyDop6bmkbjngrnkuI7lnIblnIjkuK3lv4PnmoTot53nprtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdG91Y2hQb3Muc3ViKHRoaXMucmluZy5nZXRQb3NpdGlvbigpKS5tYWcoKTtcblxuICAgICAgICAgICAgLy8g5omL5oyH5Zyo5ZyG5ZyI5YaF6Kem5pG4LOaOp+adhui3n+maj+inpuaRuOeCuVxuICAgICAgICAgICAgdGhpcy5fcmFkaXVzID4gZGlzdGFuY2UgJiYgdGhpcy5kb3Quc2V0UG9zaXRpb24odG91Y2hQb3MpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5qb3lzdGlja1R5cGUgPT09IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRk9MTE9XKSB7XG5cbiAgICAgICAgICAgIC8vIOiusOW9leaRh+adhuS9jee9ru+8jOe7mSB0b3VjaCBtb3ZlIOS9v+eUqFxuICAgICAgICAgICAgdGhpcy5fc3RpY2tQb3MgPSB0b3VjaFBvcztcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIOabtOaUueaRh+adhueahOS9jee9rlxuICAgICAgICAgICAgdGhpcy5yaW5nLnNldFBvc2l0aW9uKHRvdWNoUG9zKTtcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKHRvdWNoUG9zKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfdG91Y2hNb3ZlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgLy8g5aaC5p6cIHRvdWNoIHN0YXJ0IOS9jee9ruWSjCB0b3VjaCBtb3ZlIOebuOWQjO+8jOemgeatouenu+WKqFxuICAgICAgICBpZiAodGhpcy5qb3lzdGlja1R5cGUgPT09IEpveXN0aWNrRW51bS5Kb3lzdGlja1R5cGUuRk9MTE9XICYmIHRoaXMuX3RvdWNoTG9jYXRpb24gPT09IGV2ZW50LmdldExvY2F0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS7peWchuWciOS4uumUmueCueiOt+WPluinpuaRuOWdkOagh1xuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IHRoaXMucmluZy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0b3VjaFBvcy5tYWcoKTtcblxuICAgICAgICAvLyDnlLHkuo7mkYfmnYbnmoQgcG9zdGlvbiDmmK/ku6XniLboioLngrnkuLrplJrngrnvvIzmiYDku6XlrprkvY3opoHliqDkuIogdG91Y2ggc3RhcnQg5pe255qE5L2N572uXG4gICAgICAgIGNvbnN0IHBvc1ggPSB0aGlzLl9zdGlja1Bvcy54ICsgdG91Y2hQb3MueDtcbiAgICAgICAgY29uc3QgcG9zWSA9IHRoaXMuX3N0aWNrUG9zLnkgKyB0b3VjaFBvcy55O1xuXG4gICAgICAgIC8vIOW9kuS4gOWMllxuICAgICAgICBjb25zdCBwID0gY2MudjIocG9zWCwgcG9zWSkuc3ViKHRoaXMucmluZy5nZXRQb3NpdGlvbigpKS5ub3JtYWxpemUoKTtcblxuICAgICAgICBsZXQgc3BlZWRUeXBlO1xuXG4gICAgICAgIGlmICh0aGlzLl9yYWRpdXMgPiBkaXN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5kb3Quc2V0UG9zaXRpb24oY2MudjIocG9zWCwgcG9zWSkpO1xuXG4gICAgICAgICAgICBzcGVlZFR5cGUgPSBKb3lzdGlja0VudW0uU3BlZWRUeXBlLk5PUk1BTDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOaOp+adhuawuOi/nOS/neaMgeWcqOWciOWGhe+8jOW5tuWcqOWciOWGhei3n+maj+inpuaRuOabtOaWsOinkuW6plxuICAgICAgICAgICAgY29uc3QgeCA9IHRoaXMuX3N0aWNrUG9zLnggKyBwLnggKiB0aGlzLl9yYWRpdXM7XG4gICAgICAgICAgICBjb25zdCB5ID0gdGhpcy5fc3RpY2tQb3MueSArIHAueSAqIHRoaXMuX3JhZGl1cztcbiAgICAgICAgICAgIHRoaXMuZG90LnNldFBvc2l0aW9uKGNjLnYyKHgsIHkpKTtcblxuICAgICAgICAgICAgc3BlZWRUeXBlID0gSm95c3RpY2tFbnVtLlNwZWVkVHlwZS5GQVNUO1xuICAgICAgICB9XG5cbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLmVtaXQoSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX01PVkUsIGV2ZW50LCB7c3BlZWRUeXBlOiBzcGVlZFR5cGUsIG1vdmVEaXN0YW5jZTogcH0pO1xuICAgIH0sXG5cbiAgICBfdG91Y2hFbmRFdmVudChldmVudCkge1xuICAgICAgICB0aGlzLmRvdC5zZXRQb3NpdGlvbih0aGlzLnJpbmcuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgIGlmICh0aGlzLmpveXN0aWNrVHlwZSA9PT0gSm95c3RpY2tFbnVtLkpveXN0aWNrVHlwZS5GT0xMT1cpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5lbWl0KEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZS5UT1VDSF9FTkQsIGV2ZW50LCB7c3BlZWRUeXBlOiBKb3lzdGlja0VudW0uU3BlZWRUeXBlLlNUT1B9KTtcbiAgICB9LFxuXG59KTtcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcHJpdGUvcmVjdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwibWFuYWdlciIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJlbmFibGVkRGVidWdEcmF3IiwiX2dhbWUiLCJmaW5kIiwiZ2V0Q29tcG9uZW50Iiwib25CZWdpbkNvbnRhY3QiLCJjb250YWN0Iiwic2VsZkNvbGxpZGVyIiwib3RoZXJDb2xsaWRlciIsImxvZyIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUVBQyxFQUFBQSxLQVRLLG1CQVNJO0FBQ0wsUUFBSUMsT0FBTyxHQUFHTCxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsbUJBQVosRUFBZDtBQUNBRixJQUFBQSxPQUFPLENBQUNHLE9BQVIsR0FBa0IsSUFBbEIsQ0FGSyxDQUV1Qjs7QUFDNUJILElBQUFBLE9BQU8sQ0FBQ0ksZ0JBQVIsR0FBMkIsSUFBM0IsQ0FISyxDQUc4Qjs7QUFFbkMsU0FBS0MsS0FBTCxHQUFhVixFQUFFLENBQUNXLElBQUgsQ0FBUSxhQUFSLEVBQXVCQyxZQUF2QixDQUFvQyxPQUFwQyxDQUFiO0FBQ0gsR0FmSTtBQWlCTEMsRUFBQUEsY0FqQkssMEJBaUJVQyxPQWpCVixFQWlCbUJDLFlBakJuQixFQWlCaUNDLGFBakJqQyxFQWlCK0M7QUFDaERoQixJQUFBQSxFQUFFLENBQUNpQixHQUFILENBQU8sZ0JBQVA7QUFDSCxHQW5CSTtBQXFCTEMsRUFBQUEsZ0JBckJLLDRCQXFCWUMsS0FyQlosRUFxQm1CQyxJQXJCbkIsRUFxQnlCLENBQ3pCO0FBQ0Q7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBN0RJO0FBK0RMQyxFQUFBQSxNQS9ESyxrQkErREdDLEVBL0RILEVBK0RPLENBQ1I7QUFDSDtBQWpFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7ICAgICAvL+W8gOWQr+eisOaSnuajgOa1i1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7ICAgLy/mmL7npLrnorDmkp7mo4DmtYvljLrln59cclxuXHJcbiAgICAgICAgdGhpcy5fZ2FtZSA9IGNjLmZpbmQoXCIvQ2FudmFzL2JveFwiKS5nZXRDb21wb25lbnQoXCJidWlsZFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKXtcclxuICAgICAgICBjYy5sb2coXCJvbkJlZ2luQ29udGFjdFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xyXG4gICAgICAgICAvL2NjLmxvZyhcIueisOaSnnggID1cIiArIHRoaXMubm9kZS54ICsgXCIgeD1cIiArIG90aGVyLm5vZGUueCk7XHJcbiAgICAgICAgLy8gY2MubG9nKFwi56Kw5pKeeSAgPVwiICsgdGhpcy5ub2RlLnkgKyBcIiB4PVwiICsgb3RoZXIubm9kZS55KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5fZ2FtZS5nYW1lT3ZlcigpO1xyXG5cclxuICAgICAgICAvLyBpZihNYXRoLmFicyh0aGlzLm5vZGUueCAtIG90aGVyLm5vZGUueCk9PTQ4ICYmIE1hdGguYWJzKHRoaXMubm9kZS55IC0gb3RoZXIubm9kZS55KT09NDgpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9nYW1lLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2UgaWYoTWF0aC5hYnModGhpcy5ub2RlLnggLSBvdGhlci5ub2RlLngpPT0wICYmIE1hdGguYWJzKHRoaXMubm9kZS55IC0gb3RoZXIubm9kZS55KT09NDgpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9nYW1lLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBpZih0aGlzLl9nYW1lLmRpcmVjdGlvbj09PTApe1xyXG5cclxuICAgICAgICAvLyAgICAgaWYodGhpcy5ub2RlLnggPT0gb3RoZXIubm9kZS54ICYmIHRoaXMubm9kZS55ID09IG90aGVyLm5vZGUueSArIDQ4KXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2dhbWUuZ2FtZU92ZXIoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgY2MubG9nKFwidXBcIik7XHJcbiAgICAgICAgLy8gfWVsc2UgaWYodGhpcy5fZ2FtZS5kaXJlY3Rpb249PT0xKXtcclxuXHJcbiAgICAgICAgLy8gICAgIGlmKHRoaXMubm9kZS54ID09IG90aGVyLm5vZGUueCAmJiB0aGlzLm5vZGUueSA9PSBvdGhlci5ub2RlLnkgLSA0OCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9nYW1lLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgY2MubG9nKFwiZG93blwiKTtcclxuICAgICAgICAvLyB9ZWxzZSBpZih0aGlzLl9nYW1lLmRpcmVjdGlvbj09PTIpe1xyXG5cclxuICAgICAgICAvLyAgICAgaWYodGhpcy5ub2RlLnggPT0gb3RoZXIubm9kZS54IC00OCAmJiB0aGlzLm5vZGUueSA9PSBvdGhlci5ub2RlLnkpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZ2FtZS5nYW1lT3ZlcigpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhcImxlZnRcIik7XHJcbiAgICAgICAgLy8gfWVsc2UgaWYodGhpcy5fZ2FtZS5kaXJlY3Rpb249PT0zKXtcclxuICAgICAgICAvLyAgICAgaWYodGhpcy5ub2RlLnggPT0gb3RoZXIubm9kZS54ICsgNDggJiYgdGhpcy5ub2RlLnkgPT0gb3RoZXIubm9kZS55KXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2dhbWUuZ2FtZU92ZXIoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBjYy5sb2coXCJyaWdodFwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvL2NjLmxvZyhcIuaWueWQkSA9XCIgKyB0aGlzLl9nYW1lLmRpcmVjdGlvbik7XHJcbiAgICB9LFxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcHJpdGUvam95c3RpY2svSm95c3RpY2tFdmVudC5qcyJdLCJuYW1lcyI6WyJKb3lzdGlja0V2ZW50IiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJfZXZlbnQiLCJjdG9yIiwiRXZlbnRUYXJnZXQiLCJvbiIsImV2ZW50VHlwZSIsImNhbGxGdW5jIiwidGFyZ2V0Iiwib2ZmIiwiZW1pdCIsImFyZyIsIl9pbnN0YW5jZSIsImdldEluc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUV6QkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRTtBQURBLEdBRmE7QUFNekJDLEVBQUFBLElBTnlCLGtCQU1sQjtBQUNILFNBQUtELE1BQUwsR0FBYyxJQUFJSCxFQUFFLENBQUNLLFdBQVAsRUFBZDtBQUNILEdBUndCO0FBVXpCQyxFQUFBQSxFQVZ5QixjQVV0QkMsU0FWc0IsRUFVWEMsUUFWVyxFQVVEQyxNQVZDLEVBVU87QUFDNUIsU0FBS04sTUFBTCxDQUFZRyxFQUFaLENBQWVDLFNBQWYsRUFBMEJDLFFBQTFCLEVBQW9DQyxNQUFwQztBQUNILEdBWndCO0FBY3pCQyxFQUFBQSxHQWR5QixlQWNyQkgsU0FkcUIsRUFjVkMsUUFkVSxFQWNBQyxNQWRBLEVBY1E7QUFDN0IsU0FBS04sTUFBTCxDQUFZTyxHQUFaLENBQWdCSCxTQUFoQixFQUEyQkMsUUFBM0IsRUFBcUNDLE1BQXJDO0FBQ0gsR0FoQndCOztBQWtCekI7Ozs7O0FBS0FFLEVBQUFBLElBdkJ5QixnQkF1QnBCSixTQXZCb0IsRUF1QkQ7QUFBQTs7QUFBQSxzQ0FBTEssR0FBSztBQUFMQSxNQUFBQSxHQUFLO0FBQUE7O0FBQ3BCLHlCQUFLVCxNQUFMLEVBQVlRLElBQVosc0JBQWlCSixTQUFqQixTQUErQkssR0FBL0I7QUFDSDtBQXpCd0IsQ0FBVCxDQUFwQjtBQTZCQSxJQUFJQyxTQUFTLEdBQUcsSUFBaEI7O0FBQ0FkLGFBQWEsQ0FBQ2UsV0FBZCxHQUE0QixZQUFZO0FBQ3BDLEdBQUNELFNBQUQsS0FBZUEsU0FBUyxHQUFHLElBQUlkLGFBQUosRUFBM0I7QUFFQSxTQUFPYyxTQUFQO0FBQ0gsQ0FKRDs7ZUFNZWQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBKb3lzdGlja0V2ZW50ID0gY2MuQ2xhc3Moe1xuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfZXZlbnQ6IG51bGxcbiAgICB9LFxuXG4gICAgY3RvcigpIHtcbiAgICAgICAgdGhpcy5fZXZlbnQgPSBuZXcgY2MuRXZlbnRUYXJnZXQoKTtcbiAgICB9LFxuXG4gICAgb24oZXZlbnRUeXBlLCBjYWxsRnVuYywgdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2V2ZW50Lm9uKGV2ZW50VHlwZSwgY2FsbEZ1bmMsIHRhcmdldCk7XG4gICAgfSxcblxuICAgIG9mZihldmVudFR5cGUsIGNhbGxGdW5jLCB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fZXZlbnQub2ZmKGV2ZW50VHlwZSwgY2FsbEZ1bmMsIHRhcmdldCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50VHlwZSBKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGVcbiAgICAgKiBAcGFyYW0gYXJnXG4gICAgICovXG4gICAgZW1pdChldmVudFR5cGUsIC4uLmFyZykge1xuICAgICAgICB0aGlzLl9ldmVudC5lbWl0KGV2ZW50VHlwZSwgLi4uYXJnKVxuICAgIH1cblxufSk7XG5cbmxldCBfaW5zdGFuY2UgPSBudWxsO1xuSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAhX2luc3RhbmNlICYmIChfaW5zdGFuY2UgPSBuZXcgSm95c3RpY2tFdmVudCgpKTtcblxuICAgIHJldHVybiBfaW5zdGFuY2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBKb3lzdGlja0V2ZW50OyJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9taWdyYXRpb24vdXNlX3YyLjAueF9jYy5Ub2dnbGVfZXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJUb2dnbGUiLCJfdHJpZ2dlckV2ZW50SW5TY3JpcHRfY2hlY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBWUEsSUFBSUEsRUFBRSxDQUFDQyxNQUFQLEVBQWU7QUFDWDtBQUNBO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQywyQkFBVixHQUF3QyxJQUF4QztBQUNIIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBUaGlzIHNjcmlwdCBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBDb2NvcyBDcmVhdG9yIGFuZCBpcyBvbmx5IGNvbXBhdGlibGUgd2l0aCBwcm9qZWN0cyBwcmlvciB0byB2Mi4xLjAuXHJcbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXHJcbiAqIElmIHlvdSBkb24ndCB1c2UgY2MuVG9nZ2xlIGluIHlvdXIgcHJvamVjdCwgeW91IGNhbiBkZWxldGUgdGhpcyBzY3JpcHQgZGlyZWN0bHkuXHJcbiAqIElmIHlvdXIgcHJvamVjdCBpcyBob3N0ZWQgaW4gVkNTIHN1Y2ggYXMgZ2l0LCBzdWJtaXQgdGhpcyBzY3JpcHQgdG9nZXRoZXIuXHJcbiAqXHJcbiAqIOatpOiEmuacrOeUsSBDb2NvcyBDcmVhdG9yIOiHquWKqOeUn+aIkO+8jOS7heeUqOS6juWFvOWuuSB2Mi4xLjAg5LmL5YmN54mI5pys55qE5bel56iL77yMXHJcbiAqIOS9oOaXoOmcgOWcqOS7u+S9leWFtuWug+mhueebruS4reaJi+WKqOa3u+WKoOatpOiEmuacrOOAglxyXG4gKiDlpoLmnpzkvaDnmoTpobnnm67kuK3msqHnlKjliLAgVG9nZ2xl77yM5Y+v55u05o6l5Yig6Zmk6K+l6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruacieaJmOeuoeS6jiBnaXQg562J54mI5pys5bqT77yM6K+35bCG5q2k6ISa5pys5LiA5bm25LiK5Lyg44CCXHJcbiAqL1xyXG5cclxuaWYgKGNjLlRvZ2dsZSkge1xyXG4gICAgLy8gV2hldGhlciB0aGUgJ3RvZ2dsZScgYW5kICdjaGVja0V2ZW50cycgZXZlbnRzIGFyZSBmaXJlZCB3aGVuICd0b2dnbGUuY2hlY2soKSAvIHRvZ2dsZS51bmNoZWNrKCknIGlzIGNhbGxlZCBpbiB0aGUgY29kZVxyXG4gICAgLy8g5Zyo5Luj56CB5Lit6LCD55SoICd0b2dnbGUuY2hlY2soKSAvIHRvZ2dsZS51bmNoZWNrKCknIOaXtuaYr+WQpuinpuWPkSAndG9nZ2xlJyDkuI4gJ2NoZWNrRXZlbnRzJyDkuovku7ZcclxuICAgIGNjLlRvZ2dsZS5fdHJpZ2dlckV2ZW50SW5TY3JpcHRfY2hlY2sgPSB0cnVlO1xyXG59XHJcbiJdfQ==
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
    distance: 0,
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

    this.distance = 24;
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
    this.snakeHead.node.x = 240 + this.distance;
    this.snakeHead.node.y = 336 + this.distance;
    this.snakeHead.node.Group = 'hero';
    var box = cc.find('Canvas/box');
    box.addChild(this.snakeHead.node);
    this.snakeArrX[0] = this.snakeHead.node.x - this.distance;
    this.snakeArrY[0] = this.snakeHead.node.y - this.distance;
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
    var boxMapX = (this.snakeHead.node.x - this.distance) / 48;
    var boxMapY = (this.snakeHead.node.y - this.distance) / 48; //判断是否位置是否有果实

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
    var headX = this.snakeHead.node.x - this.distance;
    var headY = this.snakeHead.node.y - this.distance;

    if (this.direction === 0) {
      //移动前，判断游戏是否结束
      this.isGameOver(headX, headY + 48);

      if (this.gameState === 1) {
        this.snakeHead.node.y += 48;
        this.snakeHead.node.rotation = 0;
      } //cc.log("up");

    } else if (this.direction === 1) {
      //移动前，判断游戏是否结束
      this.isGameOver(headX, headY - 48);

      if (this.gameState === 1) {
        this.snakeHead.node.y -= 48;
        this.snakeHead.node.rotation = 180;
      } // cc.log("down");

    } else if (this.direction === 2) {
      this.isGameOver(headX - 48, headY);

      if (this.gameState === 1) {
        this.snakeHead.node.x -= 48;
        this.snakeHead.node.rotation = 270;
      } //cc.log("left");

    } else if (this.direction === 3) {
      //移动前，判断游戏是否结束
      this.isGameOver(headX + 48, headY);

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


    this.snakeArrX[0] = this.snakeHead.node.x - this.distance;
    this.snakeArrY[0] = this.snakeHead.node.y - this.distance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcHJpdGUvYnVpbGQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJyZWN0MCIsIlByZWZhYiIsInJlY3QxIiwicmVjdDIiLCJyZWN0MyIsInJlY3Q0IiwicmVjdDUiLCJyZWN0NiIsInJlY3Q3IiwiY2JhIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwiZGlzdGFuY2UiLCJtb3ZlRGlyIiwidjIiLCJkaXNwbGF5TmFtZSIsInRvb2x0aXAiLCJfc3BlZWRUeXBlIiwiSm95c3RpY2tFbnVtIiwiU3BlZWRUeXBlIiwiU1RPUCIsInBsYXllciIsImJhc2Vwb2ludCIsImJ1dHRvbiIsIkxhYmVsIiwic2NvcmUiLCJvdmVyIiwiTm9kZSIsInNsaWRlcnYiLCJTbGlkZXIiLCJhdWRpbyIsIkF1ZGlvQ2xpcCIsInN1Yk5vZGVzQXJyIiwib25Mb2FkIiwibG9nIiwiSm95c3RpY2tFdmVudCIsImdldEluc3RhbmNlIiwib24iLCJKb3lzdGlja0V2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwib25Ub3VjaFN0YXJ0IiwiVE9VQ0hfTU9WRSIsIm9uVG91Y2hNb3ZlIiwiVE9VQ0hfRU5EIiwib25Ub3VjaEVuZCIsImNvbGxpZGVyIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsInBoeXNpY3MiLCJnZXRQaHlzaWNzTWFuYWdlciIsImRiIiwiUGh5c2ljc01hbmFnZXIiLCJEcmF3Qml0cyIsIm5vZGVzIiwiZmluZCIsImNoaWxkcmVuIiwiZ2FtZVN0YXRlIiwic2NvcmVOdW0iLCJsZWZ0WCIsInJpZ2h0WCIsInNwZWVkIiwiZGlyZWN0aW9uIiwic25ha2VBcnJYIiwic25ha2VBcnJZIiwic25ha2VBcnIiLCJuZXh0R29hbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdvYWxYIiwiZ29hbFkiLCJzbmFrZUhlYWQiLCJpbnN0YW50aWF0ZSIsImdldENvbXBvbmVudCIsIm5vZGUiLCJ4IiwieSIsIkdyb3VwIiwiYm94IiwiYWRkQ2hpbGQiLCJib3hNYXAiLCJpIiwiaiIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsInNldEdhbWUiLCJldmVudCIsImxvY2F0aW9uIiwiZ2V0TG9jYXRpb24iLCJmaXJzdFgiLCJmaXJzdFkiLCJ0b3VjaFBvaW50IiwiZW5kWCIsImVuZFkiLCJhYnMiLCJkYXRhIiwic3BlZWRUeXBlIiwibW92ZURpc3RhbmNlIiwiZ29hbCIsImJ1aWxkQm9keSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJjb25zb2xlIiwicHJvZHVjZUZvb3QiLCJzY2hlZHVsZSIsIm1vdmUiLCJvdmVybGFwRm9vdCIsImxlbmd0aCIsInByZWZhYiIsInNuYWtlQm9keSIsImJveE1hcFgiLCJib3hNYXBZIiwiZWF0Rm9vdCIsImxlbiIsImFkZFNjb3JlIiwic3RyaW5nIiwiaGVhZFgiLCJoZWFkWSIsImlzR2FtZU92ZXIiLCJyb3RhdGlvbiIsIm1vdmVBbGwiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImxlZnQiLCJkIiwicmlnaHQiLCJ3IiwidXAiLCJzIiwiZG93biIsImdhbWVPdmVyIiwiYWN0aXZlIiwidW5zY2hlZHVsZSIsImF1ZGlvRW5naW5lIiwic3RvcEFsbCIsInBhdXNlIiwicmVwbGF5IiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBR0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUNKLEVBQUUsQ0FBQ0ssTUFERDtBQUVSQyxJQUFBQSxLQUFLLEVBQUNOLEVBQUUsQ0FBQ0ssTUFGRDtBQUdSRSxJQUFB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QUNBLGFBQUtsQyxNQUFMLENBQVlrRyxNQUFaLEdBQXFCLE1BQXJCLENBRmtCLENBR2xCOztBQUNBLGFBQUtzQixVQUFMLENBQWdCLEtBQUtoQyxJQUFyQjtBQUNILE9BTEQsTUFLTSxJQUFHLEtBQUt0RCxTQUFMLEtBQWlCLENBQXBCLEVBQXNCO0FBQ3hCLGFBQUtBLFNBQUwsR0FBZSxDQUFmO0FBQ0EsYUFBS2xDLE1BQUwsQ0FBWWtHLE1BQVosR0FBcUIsT0FBckIsQ0FGd0IsQ0FHeEI7O0FBQ0EsYUFBS1gsUUFBTCxDQUFjLEtBQUtDLElBQW5CLEVBQXdCLEtBQUtsRCxLQUE3QjtBQUNIO0FBQ0o7QUFDSixHQXpiSTtBQTBiTDtBQUNBc0YsRUFBQUEsTUEzYkssb0JBMmJHO0FBQ0g7QUFDRHZKLElBQUFBLEVBQUUsQ0FBQ2tELFFBQUgsQ0FBWXNHLFNBQVosQ0FBc0IsUUFBdEI7QUFDSDtBQTliSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm95c3RpY2tFbnVtIGZyb20gXCIuL2pveXN0aWNrL0pveXN0aWNrRW51bVwiO1xyXG5pbXBvcnQgSm95c3RpY2tFdmVudCBmcm9tIFwiLi9qb3lzdGljay9Kb3lzdGlja0V2ZW50XCI7XHJcblxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICByZWN0MDpjYy5QcmVmYWIsXHJcbiAgICAgICAgcmVjdDE6Y2MuUHJlZmFiLFxyXG4gICAgICAgIHJlY3QyOmNjLlByZWZhYixcclxuICAgICAgICByZWN0MzpjYy5QcmVmYWIsXHJcbiAgICAgICAgcmVjdDQ6Y2MuUHJlZmFiLFxyXG4gICAgICAgIHJlY3Q1OmNjLlByZWZhYixcclxuICAgICAgICByZWN0NjpjYy5QcmVmYWIsXHJcbiAgICAgICAgcmVjdDc6Y2MuUHJlZmFiLFxyXG5cclxuICAgIGNiYTp7ZGVmYXVsdDpudWxsLHR5cGU6Y2MuU3ByaXRlRnJhbWV9LFxyXG4gICAgZGlzdGFuY2U6IDAsXHJcblxyXG4gICAgLy8gZnJvbSBqb3lzdGlja1xyXG4gICAgbW92ZURpcjoge1xyXG4gICAgICAgIGRlZmF1bHQ6IGNjLnYyKDAsIDEpLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnTW92ZSBEaXInLFxyXG4gICAgICAgIHRvb2x0aXA6ICfnp7vliqjmlrnlkJEnLFxyXG4gICAgfSxcclxuICAgIF9zcGVlZFR5cGU6IHtcclxuICAgICAgICBkZWZhdWx0OiBKb3lzdGlja0VudW0uU3BlZWRUeXBlLlNUT1AsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICdTcGVlZCBUeXBlJyxcclxuICAgICAgICB0eXBlOiBKb3lzdGlja0VudW0uU3BlZWRUeXBlLFxyXG4gICAgICAgIHRvb2x0aXA6ICfpgJ/luqbnuqfliKsnXHJcbiAgICB9LFxyXG4gICAgICAgLy/mkq3mlL7pooTliLbotYTmupBcclxuICAgICAgIHBsYXllcjpjYy5QcmVmYWIsXHJcbiAgICAgICBiYXNlcG9pbnQ6Y2MuUHJlZmFiLFxyXG4gICAgICAgLy/mjInpkq7oioLngrlcclxuICAgICAgIGJ1dHRvbjpjYy5MYWJlbCxcclxuICAgICAgIHNjb3JlOmNjLkxhYmVsLFxyXG4gICAgICAgb3ZlcjpjYy5Ob2RlLFxyXG4gICAgICAgLy/pgJ/luqbosIPoioLmu5HliqhcclxuICAgICAgIHNsaWRlcnY6Y2MuU2xpZGVyLFxyXG4gICAgICAgLy/pn7PpopFcclxuICAgICAgIGF1ZGlvOmNjLkF1ZGlvQ2xpcCxcclxuXHJcbiAgICAgICBzdWJOb2Rlc0Fycjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6W10sXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuUHJlZmFiLFxyXG4gICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MubG9nKFwib25sb2FkIHN0YXJ0XCIpO1xyXG5cclxuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub24oSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLm9uKEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub24oSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IDI0O1xyXG4gICAgICAgIHZhciBjb2xsaWRlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBjb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb2xsaWRlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb2xsaWRlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy/lvIDlkK/niannkIblvJXmk45cclxuICAgICAgICB2YXIgcGh5c2ljcyA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgcGh5c2ljcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBwaHlzaWNzLmdyYXZpdHkueSA9IDEwMDA7XHJcbiAgICAgICAgdmFyIGRiID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHM7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm5vZGVzID0gY2MuZmluZCgnQ2FudmFzL2JveC9ub2RlcycpLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICAvL+a4uOaIj+eKtuaAgSAgMC3mmoLlgZwgMS3ov5DooYwgMi3muLjmiI/nu5PmnZ8gXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAxO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8v6Z+z5pWIXHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW8sIHRydWUpO1xyXG4gICAgICAgIC8v5YiG5pWwXHJcbiAgICAgICAgdGhpcy5zY29yZU51bT0wO1xyXG4gICAgICAgIC8v6L6555WM5YC8XHJcbiAgICAgICAgdGhpcy5sZWZ0WDtcclxuICAgICAgICB0aGlzLnJpZ2h0WDtcclxuICAgICAgICAvL+mAn+W6plxyXG4gICAgICAgIHRoaXMuc3BlZWQ9MC41O1xyXG4gICAgICAgIC8v5pa55ZCRLHVwLTAsZG93bi0xLGxlZnQtMixyaWdodC0zXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgICAgIC8v6LSq5ZCD6JuH5pWw57uELOS6jOS9jeaVsOe7hFxyXG4gICAgICAgIHRoaXMuc25ha2VBcnJYPVtdO1xyXG4gICAgICAgIHRoaXMuc25ha2VBcnJZPVtdO1xyXG4gICAgICAgIHRoaXMuc25ha2VBcnI9W107XHJcbiAgICAgICAgLy/lnLDlm77kuIrpmo/mnLrnlJ/miJDmnpzlrp4oeCx5KeWdkOagh1xyXG4gICAgICAgIHRoaXMubmV4dEdvYWwgPSBNYXRoLmZsb29yKDcqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5nb2FsWCA9IE1hdGguZmxvb3IoMTAqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5nb2FsWSA9IE1hdGguZmxvb3IoMTUqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgLy/orr7nva7otKrlkIPom4flpLTpg6hcclxuICAgICAgICAgdGhpcy5zbmFrZUhlYWQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJlY3Q3KS5nZXRDb21wb25lbnQoJ3JlY3QnKTtcclxuICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS54PTI0MCArIHRoaXMuZGlzdGFuY2U7XHJcbiAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUueT0zMzYgKyB0aGlzLmRpc3RhbmNlO1xyXG4gICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLkdyb3VwID0gJ2hlcm8nO1xyXG5cclxuICAgICAgICAgdmFyIGJveD1jYy5maW5kKCdDYW52YXMvYm94Jyk7XHJcbiAgICAgICAgIGJveC5hZGRDaGlsZCh0aGlzLnNuYWtlSGVhZC5ub2RlKTtcclxuICAgICAgICAgdGhpcy5zbmFrZUFyclhbMF09dGhpcy5zbmFrZUhlYWQubm9kZS54IC0gdGhpcy5kaXN0YW5jZTsgXHJcbiAgICAgICAgIHRoaXMuc25ha2VBcnJZWzBdPXRoaXMuc25ha2VIZWFkLm5vZGUueSAtIHRoaXMuZGlzdGFuY2U7XHJcbiAgICAgICAgIHRoaXMuc25ha2VBcnJbMF0gPSB0aGlzLnNuYWtlSGVhZDtcclxuICAgICAgICAgLy/lnLDlm75cclxuICAgICAgICAgdGhpcy5ib3hNYXA9W107XHJcbiAgICAgICAgIGZvcihsZXQgaT0wO2k8MTA7aSsrKXtcclxuICAgICAgICAgICAgdGhpcy5ib3hNYXBbaV09W107XHJcbiAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8MTU7aisrKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm94TWFwW2ldW2pdPTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgIC8v5rOo5YaM5oyJ5LiL55uR5ZCsXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAvL3RoaXMub250b3VjaG1vdmUoKTtcclxuICAgICAgIHRoaXMuc2V0R2FtZSgpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTsvLyDojrflj5boioLngrnlnZDmoIdcclxuICAgICAgICAgICAgdGhpcy5maXJzdFggPSBsb2NhdGlvbi54O1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0WSA9IGxvY2F0aW9uLnk7XHJcbiAgICAgICAgICAgIC8vIOiOt+WPluinpueCueWcqOepuumXtOiKgueCueS4iueahOWdkOagh1xyXG4gICAgICAgICAgICAvLyB2YXIgdGVtcFBsYXllciA9IG5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGxvY2F0aW9uKTtcclxuICAgICAgICAgICAgLy8gbm9kZS5zZXRQb3NpdGlvbih0ZW1wUGxheWVyKTtcclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgbGV0IHRvdWNoUG9pbnQgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBsZXQgZW5kWCA9IHRoaXMuZmlyc3RYIC0gdG91Y2hQb2ludC54O1xyXG4gICAgICAgICAgICBsZXQgZW5kWSA9IHRoaXMuZmlyc3RZIC0gdG91Y2hQb2ludC55O1xyXG4gICAgICAgICAgICAvLyB2YXIgdGVtcFBsYXllciA9IG5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoUG9pbnQpO1xyXG4gICAgICAgICAgICAvLyBub2RlLnNldFBvc2l0aW9uKHRlbXBQbGF5ZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVuZFgpID4gTWF0aC5hYnMoZW5kWSkpe1xyXG4gICAgICAgICAgICAgICAgLy/miYvlir/lkJHlt6blj7NcclxuICAgICAgICAgICAgICAgIC8v5Yik5pat5ZCR5bem6L+Y5piv5ZCR5Y+zIFxyXG4gICAgICAgICAgICAgICAgaWYgKGVuZFggID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lkJHlt6blh73mlbBcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ2xlZnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9Myl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WQkeWPs+WHveaVsFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZygncmlnaHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/miYvlir/lkJHkuIrkuItcclxuICAgICAgICAgICAgICAgIC8v5Yik5pat5omL5Yq/5ZCR5LiK6L+Y5piv5ZCR5LiLXHJcbiAgICAgICAgICAgICAgICBpZiAoZW5kWSAgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAvL+WQkeS4i+WHveaVsFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZygnZG93bicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uIT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5ZCR5LiK5Ye95pWwXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKCd1cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uIT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hTdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fc3BlZWRUeXBlID0gZGF0YS5zcGVlZFR5cGU7XHJcbiAgICAgICAgdGhpcy5tb3ZlRGlyID0gZGF0YS5tb3ZlRGlzdGFuY2U7XHJcbiAgICAgICAgY2MubG9nKFwidGhpcy5tb3ZlRGlyID1cIiArIHRoaXMubW92ZURpcik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hFbmQoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9zcGVlZFR5cGUgPSBkYXRhLnNwZWVkVHlwZTtcclxuICAgIH0sXHJcbiAgICAvL1xyXG4gICAgc2V0R2FtZSgpe1xyXG4gICAgICAgIGNjLmxvZyhcInNldEdhbWUgc3RhcnRcIik7XHJcbiAgICAgICAgIC8v5LiL5Liq5p6c5a6e5pa55Z2XXHJcbiAgICAgICAgIHZhciBnb2FsID0gdGhpcy5uZXh0R29hbDtcclxuICAgICAgICAgdGhpcy5idWlsZEJvZHkoZ29hbCk7XHJcbiAgICAgICAgIGNjLmxvZyhcInNldEdhbWUgZW5kXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25CZWdpbkNvbnRhY3RcIik7XHJcbiAgICB9LFxyXG4gICAgXHJcblxyXG4gICAgLy/ojrflj5bpopzoibLlkI7lrp7kvovljJY256eN5Zu+5YOPLOi/mOacieS4gOS4quenjeS9nOS4umhlYWRcclxuICAgIGJ1aWxkQm9keShnb2FsKXtcclxuICAgICAgICBjYy5sb2coXCJnb2FsOlwiK2dvYWwpO1xyXG4gICAgICAgICB0aGlzLnByb2R1Y2VGb290KCk7XHJcbiAgICAgICAgIC8v56e75YqoXHJcbiAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5tb3ZlLHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICBjYy5sb2coXCJnb2FsMjpcIitnb2FsKTtcclxuXHJcbiAgICB9LFxyXG4gICAgLy/mo4DmtYvmnpzlrp7nlJ/miJDkvY3nva7mmK/lkKbph43lj6DotKrlkIPom4dcclxuICAgIG92ZXJsYXBGb290KCl7XHJcbiAgICAgICAgdGhpcy5nb2FsWCA9IE1hdGguZmxvb3IoMTAqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5nb2FsWSA9IE1hdGguZmxvb3IoMTUqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgLy/liKTmlq3otKrlkIPom4fmiYDmnInpg6jkvY3mmK/lkKbph43lj6BcclxuICAgICAgICBmb3IobGV0IGo9MDtqPHRoaXMuc25ha2VBcnJYLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLmJveE1hcFt0aGlzLmdvYWxYXVt0aGlzLmdvYWxZXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgLy/ph43mlrDnlJ/miJDvvIzlubbkuJTph43mlrDmo4DmtYtcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxhcEZvb3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLm5vZGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5ub2Rlc1tpXS54PT10aGlzLmdvYWxYICogNDggJiYgdGhpcy5ub2Rlc1tpXS55PT10aGlzLmdvYWxZICogNDgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGFwRm9vdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9kdWNlRm9vdCgpO1xyXG4gICAgfSxcclxuICAgIC8v55Sf5oiQ5p6c5a6eXHJcbiAgICBwcm9kdWNlRm9vdCgpe1xyXG4gICAgICAgIHRoaXMubmV4dEdvYWwgPSBNYXRoLmZsb29yKDcqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5uZXh0R29hbCA9IDQ7XHJcbiAgICAgICAgLy/pmo/mnLrnlJ/miJDmn5Dnp43popzoibJcclxuICAgICAgICAgaWYodGhpcy5uZXh0R29hbD09PTApe3RoaXMucHJlZmFiPXRoaXMucmVjdDA7fVxyXG4gICAgICAgICBpZih0aGlzLm5leHRHb2FsPT09MSl7dGhpcy5wcmVmYWI9dGhpcy5yZWN0MTt9XHJcbiAgICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT0yKXt0aGlzLnByZWZhYj10aGlzLnJlY3QyO31cclxuICAgICAgICAgaWYodGhpcy5uZXh0R29hbD09PTMpe3RoaXMucHJlZmFiPXRoaXMucmVjdDM7fVxyXG4gICAgICAgICBpZih0aGlzLm5leHRHb2FsPT09NCl7dGhpcy5wcmVmYWI9dGhpcy5yZWN0NDt9XHJcbiAgICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT01KXt0aGlzLnByZWZhYj10aGlzLnJlY3Q1O31cclxuICAgICAgICAgaWYodGhpcy5uZXh0R29hbD09PTYpe3RoaXMucHJlZmFiPXRoaXMucmVjdDY7fVxyXG4gICAgICAgIC8v6LSq5ZCD6JuH6Lqr5L2TXHJcbiAgICAgICAgIHRoaXMuc25ha2VCb2R5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWIpLmdldENvbXBvbmVudCgncmVjdCcpO1xyXG4gICAgICAgICB0aGlzLnNuYWtlQm9keS5ub2RlLkdyb3VwID0gJ3RhcmdldCc7XHJcbiAgICAgICAgIHZhciBib3g9Y2MuZmluZCgnQ2FudmFzL2JveCcpO1xyXG4gICAgICAgICBib3guYWRkQ2hpbGQodGhpcy5zbmFrZUJvZHkubm9kZSk7XHJcbiAgICAgICAgIHRoaXMuc25ha2VCb2R5Lm5vZGUueD10aGlzLmdvYWxYKjQ4OyAgICAgICBcclxuICAgICAgICAgdGhpcy5zbmFrZUJvZHkubm9kZS55PXRoaXMuZ29hbFkqNDg7XHJcbiAgICAgICAgIC8v6K6w5b2V5Zyw5Zu+6L+Z6YeM5bey57uP5pyJ5p6c5a6eXHJcbiAgICAgICAgIHZhciBib3hNYXBYID0gdGhpcy5zbmFrZUJvZHkubm9kZS54LzQ4O1xyXG4gICAgICAgICB2YXIgYm94TWFwWSA9IHRoaXMuc25ha2VCb2R5Lm5vZGUueS80ODtcclxuICAgICAgICAgdGhpcy5ib3hNYXBbYm94TWFwWF1bYm94TWFwWV09MTtcclxuICAgIH0sXHJcbiAgICAvL+WQg+WIsOaenOWunlxyXG4gICAgZWF0Rm9vdCgpe1xyXG4gICAgICAgICB2YXIgYm94TWFwWCA9ICh0aGlzLnNuYWtlSGVhZC5ub2RlLnggLSB0aGlzLmRpc3RhbmNlKS80ODtcclxuICAgICAgICAgdmFyIGJveE1hcFkgPSAodGhpcy5zbmFrZUhlYWQubm9kZS55IC0gdGhpcy5kaXN0YW5jZSkvNDg7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbkvY3nva7mmK/lkKbmnInmnpzlrp5cclxuICAgICAgICBpZih0aGlzLmJveE1hcFtib3hNYXBYXVtib3hNYXBZXT09PTEpe1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcIuS9jee9ruacieaenOWunlwiKTtcclxuICAgICAgICAgICAgLy/liqDlnKjlsL7pg6hcclxuICAgICAgICAgICAgdmFyIGxlbiA9IHRoaXMuc25ha2VBcnJYLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5zbmFrZUFyclhbbGVuXT10aGlzLnNuYWtlQm9keS5ub2RlLng7XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2VBcnJZW2xlbl09dGhpcy5zbmFrZUJvZHkubm9kZS55O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gbGV0IHNwcml0ZSA9IHRoaXMuc25ha2VCb2R5LmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgICAgIC8vIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShjYy51cmwucmF3KCdhc3NldHMvaW1nLzUucG5nJykpO1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyW2xlbl09dGhpcy5zbmFrZUJvZHk7XHJcbiAgICAgICAgICAgIC8v5p6c5a6e6KKr5ZCD5LqGIFxyXG4gICAgICAgICAgICB0aGlzLmJveE1hcFtib3hNYXBYXVtib3hNYXBZXT0wO1xyXG4gICAgICAgICAgICAvL+WKoOWIhuaVsFxyXG4gICAgICAgICAgICB0aGlzLmFkZFNjb3JlKCk7XHJcbiAgICAgICAgICAgIC8v6ZqP5py655Sf5oiQ5LiL5LiA5Liq5p6c5a6eXHJcbiAgICAgICAgICAgIHRoaXMub3ZlcmxhcEZvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/liqDliIbmlbBcclxuICAgIGFkZFNjb3JlKCl7XHJcbiAgICAgICAgLy/moLnmja7kuI3lkIzmnpzlrp7lop7liqDliIbmlbBcclxuICAgICAgICBpZih0aGlzLm5leHRHb2FsPT09MCl7dGhpcy5zY29yZU51bSs9NTA7fVxyXG4gICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT0xKXt0aGlzLnNjb3JlTnVtKz0xMDA7fVxyXG4gICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT0yKXt0aGlzLnNjb3JlTnVtKz0yMDA7fVxyXG4gICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT0zKXt0aGlzLnNjb3JlTnVtKz0zMDA7fVxyXG4gICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT00KXt0aGlzLnNjb3JlTnVtKz00MDA7fVxyXG4gICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT01KXt0aGlzLnNjb3JlTnVtKz01MDA7fVxyXG4gICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT02KXt0aGlzLnNjb3JlTnVtKz02MDA7fVxyXG4gICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nPXRoaXMuc2NvcmVOdW07XHJcbiAgICB9LFxyXG4gICAgLy/np7vliqjmlrnms5VcclxuICAgIG1vdmUgKCl7XHJcbiAgICAgICAgLy/mlrnlkJEsdXAtMCxkb3duLTEsbGVmdC0yLHJpZ2h0LTNcclxuICAgICAgICB2YXIgaGVhZFggPSB0aGlzLnNuYWtlSGVhZC5ub2RlLnggLSB0aGlzLmRpc3RhbmNlO1xyXG4gICAgICAgIHZhciBoZWFkWSA9IHRoaXMuc25ha2VIZWFkLm5vZGUueSAtIHRoaXMuZGlzdGFuY2U7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uPT09MCl7XHJcbiAgICAgICAgICAgIC8v56e75Yqo5YmN77yM5Yik5pat5ri45oiP5piv5ZCm57uT5p2fXHJcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lT3ZlcihoZWFkWCxoZWFkWSs0OCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLnkrPTQ4OyBcclxuICAgICAgICAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUucm90YXRpb24gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwidXBcIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5kaXJlY3Rpb249PT0xKXtcclxuICAgICAgICAgICAgLy/np7vliqjliY3vvIzliKTmlq3muLjmiI/mmK/lkKbnu5PmnZ9cclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVPdmVyKGhlYWRYLGhlYWRZLTQ4KTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLnktPTQ4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS5yb3RhdGlvbiA9IDE4MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC8vIGNjLmxvZyhcImRvd25cIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5kaXJlY3Rpb249PT0yKXtcclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVPdmVyKGhlYWRYLTQ4LGhlYWRZKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLngtPTQ4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS5yb3RhdGlvbiA9IDI3MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NjLmxvZyhcImxlZnRcIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5kaXJlY3Rpb249PT0zKXtcclxuICAgICAgICAgICAgLy/np7vliqjliY3vvIzliKTmlq3muLjmiI/mmK/lkKbnu5PmnZ9cclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVPdmVyKGhlYWRYKzQ4LGhlYWRZKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZT09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS54Kz00ODtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUucm90YXRpb24gPSA5MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NjLmxvZyhcInJpZ2h0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZT09PTEpe1xyXG4gICAgICAgICAgICB0aGlzLmVhdEZvb3QoKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v56e75Yqo55qE5pe25YCZ77yM6Lqr5L2T5Lmf5ZCR5aS056e75YqoXHJcbiAgICBtb3ZlQWxsKCl7XHJcbiAgICAgICAgZm9yKGxldCBpPXRoaXMuc25ha2VBcnJYLmxlbmd0aC0xO2k+MDtpLS0pe1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyWFtpXT10aGlzLnNuYWtlQXJyWFtpLTFdO1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyWVtpXT10aGlzLnNuYWtlQXJyWVtpLTFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+abtOaWsOi0quWQg+ibh+WktOmDqOS9jee9rizotKrlkIPom4fpmo/lpLTpg6jnp7vliqhcclxuICAgICAgICB0aGlzLnNuYWtlQXJyWFswXT10aGlzLnNuYWtlSGVhZC5ub2RlLnggLSB0aGlzLmRpc3RhbmNlO1xyXG4gICAgICAgIHRoaXMuc25ha2VBcnJZWzBdPXRoaXMuc25ha2VIZWFkLm5vZGUueSAtIHRoaXMuZGlzdGFuY2U7XHJcbiAgICAgICAgZm9yKGxldCBqPTE7ajx0aGlzLnNuYWtlQXJyWC5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgdGhpcy5zbmFrZUFycltqXS5ub2RlLng9dGhpcy5zbmFrZUFyclhbal07XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2VBcnJbal0ubm9kZS55PXRoaXMuc25ha2VBcnJZW2pdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NjLmxvZyhcIm1vdmVBbGxcIit0aGlzLnNuYWtlQXJyWC5sZW5ndGgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnorDmkp4gID1cIiArIG90aGVyKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/plK7nm5jnm5HlkKxcclxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcclxuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwia2V5IGNvZGUgaXMgIGEgYW5kIGxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9Myl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTI7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcImtleSBjb2RlIGlzICBkIGFuZCByaWdodFwiKTtcclxuICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uIT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcImtleSBjb2RlIGlzICB3IGFuZCB1cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmRvd246XHJcbiAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCJrZXkgY29kZSBpcyAgcyBhbmQgZG93blwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/liKTmlq3muLjmiI/nu5PmnZ/nmoTmnaHku7ZcclxuICAgIGlzR2FtZU92ZXIoeCx5KXtcclxuICAgICAgICAgLy/liKTmlq3mmK/lkKbotoXlh7rlnLDlm75cclxuICAgICAgICBpZih4PDAgfHwgeD49NDgwIHx8IHk8MCB8fCB5Pj03MjApe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMubm9kZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJub2RlcyA9XCIgKyB0aGlzLm5vZGVzW2ldKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZXNbaV0uR3JvdXAgIT0gJ3RhcmdldCcpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ub2Rlc1tpXS54PT14ICYmIHRoaXMubm9kZXNbaV0ueT09eSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm56Kw5pKe5Yiw6LSq5ZCD6JuH6Lqr5L2TXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnNuYWtlQXJyWC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zbmFrZUFyclhbaV09PXggJiYgdGhpcy5zbmFrZUFycllbaV09PXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5ri45oiP57uT5p2fXHJcbiAgICBnYW1lT3ZlciAoKXtcclxuICAgICAgICAgICAgY2MubG9nKFwi57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAvL+a4uOaIj+eKtuaAgVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIC8v5bCG5aSx6LSl55qE55S76Z2i5pi+56S65Ye65p2lXHJcbiAgICAgICAgICAgIHRoaXMub3Zlci5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgLy/lgZzmraLnp7vliqhcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMubW92ZSk7XHJcbiAgICAgICAgICAgIC8v5YGc5q2i5omA5pyJ6Z+z5LmQXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICAvL+aaguWBnOa4uOaIj1xyXG4gICAgcGF1c2UoKXtcclxuICAgICAgICAvLzLooajnpLrmuLjmiI/nu5PmnZ9cclxuICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZSE9PTIpe1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZT09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGU9MDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLnN0cmluZyA9IFwiUGxheVwiO1xyXG4gICAgICAgICAgICAgICAgLy/lgZzmraLnp7vliqhcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLm1vdmUpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmdhbWVTdGF0ZT09PTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGU9MTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLnN0cmluZyA9IFwiUGF1c2VcIjtcclxuICAgICAgICAgICAgICAgIC8v5YGc5q2i56e75YqoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMubW92ZSx0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+mHjeaWsOW8gOWni+a4uOaIj1xyXG4gICAgcmVwbGF5KCl7XHJcbiAgICAgICAgIC8v6YeN5paw5Yqg6L295ri45oiP5Zy65pmvXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic25ha2VyXCIpO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcHJpdGUvam95c3RpY2svSm95c3RpY2tFbnVtLmpzIl0sIm5hbWVzIjpbIkpveXN0aWNrVHlwZSIsImNjIiwiRW51bSIsIkZJWEVEIiwiRk9MTE9XIiwiRGlyZWN0aW9uVHlwZSIsIkZPVVIiLCJFSUdIVCIsIkFMTCIsIlNwZWVkVHlwZSIsIlNUT1AiLCJOT1JNQUwiLCJGQVNUIiwiSm95c3RpY2tFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIlRPVUNIX01PVkUiLCJUT1VDSF9FTkQiLCJDSEFOR0VfSk9ZU1RJQ0tfVFlQRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUFlO0FBQ1hBLEVBQUFBLFlBQVksRUFBRUMsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDbEJDLElBQUFBLEtBQUssRUFBRSxDQURXO0FBRWxCQyxJQUFBQSxNQUFNLEVBQUU7QUFGVSxHQUFSLENBREg7QUFNWEMsRUFBQUEsYUFBYSxFQUFFSixFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUNuQkksSUFBQUEsSUFBSSxFQUFFLENBRGE7QUFFbkJDLElBQUFBLEtBQUssRUFBRSxDQUZZO0FBR25CQyxJQUFBQSxHQUFHLEVBQUU7QUFIYyxHQUFSLENBTko7QUFZWEMsRUFBQUEsU0FBUyxFQUFFUixFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUNmUSxJQUFBQSxJQUFJLEVBQUUsQ0FEUztBQUVmQyxJQUFBQSxNQUFNLEVBQUUsQ0FGTztBQUdmQyxJQUFBQSxJQUFJLEVBQUU7QUFIUyxHQUFSLENBWkE7QUFrQlhDLEVBQUFBLGlCQUFpQixFQUFFWixFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUN2QlksSUFBQUEsV0FBVyxFQUFFLFlBRFU7QUFFdkJDLElBQUFBLFVBQVUsRUFBRSxXQUZXO0FBR3ZCQyxJQUFBQSxTQUFTLEVBQUUsVUFIWTtBQUt2QkMsSUFBQUEsb0JBQW9CLEVBQUU7QUFMQyxHQUFSO0FBbEJSIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgSm95c3RpY2tUeXBlOiBjYy5FbnVtKHtcbiAgICAgICAgRklYRUQ6IDAsXG4gICAgICAgIEZPTExPVzogMSxcbiAgICB9KSxcblxuICAgIERpcmVjdGlvblR5cGU6IGNjLkVudW0oe1xuICAgICAgICBGT1VSOiA0LFxuICAgICAgICBFSUdIVDogOCxcbiAgICAgICAgQUxMOiAwLFxuICAgIH0pLFxuXG4gICAgU3BlZWRUeXBlOiBjYy5FbnVtKHtcbiAgICAgICAgU1RPUDogMCxcbiAgICAgICAgTk9STUFMOiAxLFxuICAgICAgICBGQVNUOiAyXG4gICAgfSksXG5cbiAgICBKb3lzdGlja0V2ZW50VHlwZTogY2MuRW51bSh7XG4gICAgICAgIFRPVUNIX1NUQVJUOiBcInRvdWNoU3RhcnRcIixcbiAgICAgICAgVE9VQ0hfTU9WRTogXCJ0b3VjaE1vdmVcIixcbiAgICAgICAgVE9VQ0hfRU5EOiBcInRvdWNoRW5kXCIsXG5cbiAgICAgICAgQ0hBTkdFX0pPWVNUSUNLX1RZUEU6IFwiY2hhbmdlSm95c3RpY2tUeXBlXCJcbiAgICB9KSxcbn07XG4iXX0=
//------QC-SOURCE-SPLIT------
