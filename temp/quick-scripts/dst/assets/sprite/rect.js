
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
    console.log("onBeginContact");
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    //console.log("碰撞2  =" + this.node.x + " x=" + other.node.x);
    if (Math.abs(this.node.x - other.node.x) == 48 && Math.abs(this.node.y - other.node.y) == 0) {
      this._game.gameOver();
    } else if (Math.abs(this.node.x - other.node.x) == 0 && Math.abs(this.node.y - other.node.y) == 48) {
      this._game.gameOver();
    }
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcHJpdGUvcmVjdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwibWFuYWdlciIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJlbmFibGVkRGVidWdEcmF3IiwiX2dhbWUiLCJmaW5kIiwiZ2V0Q29tcG9uZW50Iiwib25CZWdpbkNvbnRhY3QiLCJjb250YWN0Iiwic2VsZkNvbGxpZGVyIiwib3RoZXJDb2xsaWRlciIsImNvbnNvbGUiLCJsb2ciLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwiTWF0aCIsImFicyIsIm5vZGUiLCJ4IiwieSIsImdhbWVPdmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MO0FBRUFDLEVBQUFBLEtBVEssbUJBU0k7QUFDTCxRQUFJQyxPQUFPLEdBQUdMLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxtQkFBWixFQUFkO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0csT0FBUixHQUFrQixJQUFsQixDQUZLLENBRXVCOztBQUM1QkgsSUFBQUEsT0FBTyxDQUFDSSxnQkFBUixHQUEyQixJQUEzQixDQUhLLENBRzhCOztBQUVuQyxTQUFLQyxLQUFMLEdBQWFWLEVBQUUsQ0FBQ1csSUFBSCxDQUFRLGFBQVIsRUFBdUJDLFlBQXZCLENBQW9DLE9BQXBDLENBQWI7QUFDSCxHQWZJO0FBaUJMQyxFQUFBQSxjQWpCSywwQkFpQlVDLE9BakJWLEVBaUJtQkMsWUFqQm5CLEVBaUJpQ0MsYUFqQmpDLEVBaUIrQztBQUNoREMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDSCxHQW5CSTtBQXFCTEMsRUFBQUEsZ0JBckJLLDRCQXFCWUMsS0FyQlosRUFxQm1CQyxJQXJCbkIsRUFxQnlCO0FBQzFCO0FBRUEsUUFBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS0MsSUFBTCxDQUFVQyxDQUFWLEdBQWNMLEtBQUssQ0FBQ0ksSUFBTixDQUFXQyxDQUFsQyxLQUFzQyxFQUF0QyxJQUE0Q0gsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS0MsSUFBTCxDQUFVRSxDQUFWLEdBQWNOLEtBQUssQ0FBQ0ksSUFBTixDQUFXRSxDQUFsQyxLQUFzQyxDQUFyRixFQUF1RjtBQUNuRixXQUFLaEIsS0FBTCxDQUFXaUIsUUFBWDtBQUNILEtBRkQsTUFHSyxJQUFHTCxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLQyxJQUFMLENBQVVDLENBQVYsR0FBY0wsS0FBSyxDQUFDSSxJQUFOLENBQVdDLENBQWxDLEtBQXNDLENBQXRDLElBQTJDSCxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLQyxJQUFMLENBQVVFLENBQVYsR0FBY04sS0FBSyxDQUFDSSxJQUFOLENBQVdFLENBQWxDLEtBQXNDLEVBQXBGLEVBQXVGO0FBQ3hGLFdBQUtoQixLQUFMLENBQVdpQixRQUFYO0FBQ0g7QUFDSixHQTlCSSxDQWdDTDs7QUFoQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlOyAgICAgLy/lvIDlkK/norDmkp7mo4DmtYtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlOyAgIC8v5pi+56S656Kw5pKe5qOA5rWL5Yy65Z+fXHJcblxyXG4gICAgICAgIHRoaXMuX2dhbWUgPSBjYy5maW5kKFwiL0NhbnZhcy9ib3hcIikuZ2V0Q29tcG9uZW50KFwiYnVpbGRcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkJlZ2luQ29udGFjdFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCLnorDmkp4yICA9XCIgKyB0aGlzLm5vZGUueCArIFwiIHg9XCIgKyBvdGhlci5ub2RlLngpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKE1hdGguYWJzKHRoaXMubm9kZS54IC0gb3RoZXIubm9kZS54KT09NDggJiYgTWF0aC5hYnModGhpcy5ub2RlLnkgLSBvdGhlci5ub2RlLnkpPT0wKXtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKE1hdGguYWJzKHRoaXMubm9kZS54IC0gb3RoZXIubm9kZS54KT09MCAmJiBNYXRoLmFicyh0aGlzLm5vZGUueSAtIG90aGVyLm5vZGUueSk9PTQ4KXtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=