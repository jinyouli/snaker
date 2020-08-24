
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
  onCollisionEnter: function onCollisionEnter(other, self) {
    // cc.log("碰撞x  =" + this.node.x + " x=" + other.node.x);
    // cc.log("碰撞y  =" + this.node.y + " x=" + other.node.y);
    // cc.log("方向 =" + this._game.direction);
    // this._game.gameOver();
    // if(Math.abs(this.node.x - other.node.x)==48 && Math.abs(this.node.y - other.node.y)==48){
    //     this._game.gameOver();
    // }
    // else if(Math.abs(this.node.x - other.node.x)==0 && Math.abs(this.node.y - other.node.y)==48){
    //     this._game.gameOver();
    // }
    if (this._game.direction === 0) {
      if (this.node.x == other.node.x && this.node.y == other.node.y + 48) {
        this._game.gameOver();
      } //cc.log("up");

    } else if (this._game.direction === 1) {
      if (this.node.x == other.node.x && this.node.y == other.node.y - 48) {
        this._game.gameOver();
      } // cc.log("down");

    } else if (this._game.direction === 2) {
      if (this.node.x == other.node.x - 48 && this.node.y == other.node.y) {
        this._game.gameOver();
      } //cc.log("left");

    } else if (this._game.direction === 3) {
      if (this.node.x == other.node.x + 48 && this.node.y == other.node.y) {
        this._game.gameOver();
      } //cc.log("right");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3ByaXRlXFxyZWN0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJtYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsImVuYWJsZWREZWJ1Z0RyYXciLCJfZ2FtZSIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJvbkJlZ2luQ29udGFjdCIsImNvbnRhY3QiLCJzZWxmQ29sbGlkZXIiLCJvdGhlckNvbGxpZGVyIiwibG9nIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImRpcmVjdGlvbiIsIm5vZGUiLCJ4IiwieSIsImdhbWVPdmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MO0FBRUFDLEVBQUFBLEtBVEssbUJBU0k7QUFDTCxRQUFJQyxPQUFPLEdBQUdMLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxtQkFBWixFQUFkO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0csT0FBUixHQUFrQixJQUFsQixDQUZLLENBRXVCOztBQUM1QkgsSUFBQUEsT0FBTyxDQUFDSSxnQkFBUixHQUEyQixJQUEzQixDQUhLLENBRzhCOztBQUVuQyxTQUFLQyxLQUFMLEdBQWFWLEVBQUUsQ0FBQ1csSUFBSCxDQUFRLGFBQVIsRUFBdUJDLFlBQXZCLENBQW9DLE9BQXBDLENBQWI7QUFDSCxHQWZJO0FBaUJMQyxFQUFBQSxjQWpCSywwQkFpQlVDLE9BakJWLEVBaUJtQkMsWUFqQm5CLEVBaUJpQ0MsYUFqQmpDLEVBaUIrQztBQUNoRGhCLElBQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBTyxnQkFBUDtBQUNILEdBbkJJO0FBcUJMQyxFQUFBQSxnQkFyQkssNEJBcUJZQyxLQXJCWixFQXFCbUJDLElBckJuQixFQXFCeUI7QUFDMUI7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxRQUFHLEtBQUtWLEtBQUwsQ0FBV1csU0FBWCxLQUF1QixDQUExQixFQUE0QjtBQUV4QixVQUFHLEtBQUtDLElBQUwsQ0FBVUMsQ0FBVixJQUFlSixLQUFLLENBQUNHLElBQU4sQ0FBV0MsQ0FBMUIsSUFBK0IsS0FBS0QsSUFBTCxDQUFVRSxDQUFWLElBQWVMLEtBQUssQ0FBQ0csSUFBTixDQUFXRSxDQUFYLEdBQWUsRUFBaEUsRUFBbUU7QUFDL0QsYUFBS2QsS0FBTCxDQUFXZSxRQUFYO0FBQ0gsT0FKdUIsQ0FNeEI7O0FBQ0gsS0FQRCxNQU9NLElBQUcsS0FBS2YsS0FBTCxDQUFXVyxTQUFYLEtBQXVCLENBQTFCLEVBQTRCO0FBRTlCLFVBQUcsS0FBS0MsSUFBTCxDQUFVQyxDQUFWLElBQWVKLEtBQUssQ0FBQ0csSUFBTixDQUFXQyxDQUExQixJQUErQixLQUFLRCxJQUFMLENBQVVFLENBQVYsSUFBZUwsS0FBSyxDQUFDRyxJQUFOLENBQVdFLENBQVgsR0FBZSxFQUFoRSxFQUFtRTtBQUMvRCxhQUFLZCxLQUFMLENBQVdlLFFBQVg7QUFDSCxPQUo2QixDQUsvQjs7QUFDRixLQU5LLE1BTUEsSUFBRyxLQUFLZixLQUFMLENBQVdXLFNBQVgsS0FBdUIsQ0FBMUIsRUFBNEI7QUFFOUIsVUFBRyxLQUFLQyxJQUFMLENBQVVDLENBQVYsSUFBZUosS0FBSyxDQUFDRyxJQUFOLENBQVdDLENBQVgsR0FBYyxFQUE3QixJQUFtQyxLQUFLRCxJQUFMLENBQVVFLENBQVYsSUFBZUwsS0FBSyxDQUFDRyxJQUFOLENBQVdFLENBQWhFLEVBQWtFO0FBQzlELGFBQUtkLEtBQUwsQ0FBV2UsUUFBWDtBQUNILE9BSjZCLENBSzlCOztBQUNILEtBTkssTUFNQSxJQUFHLEtBQUtmLEtBQUwsQ0FBV1csU0FBWCxLQUF1QixDQUExQixFQUE0QjtBQUM5QixVQUFHLEtBQUtDLElBQUwsQ0FBVUMsQ0FBVixJQUFlSixLQUFLLENBQUNHLElBQU4sQ0FBV0MsQ0FBWCxHQUFlLEVBQTlCLElBQW9DLEtBQUtELElBQUwsQ0FBVUUsQ0FBVixJQUFlTCxLQUFLLENBQUNHLElBQU4sQ0FBV0UsQ0FBakUsRUFBbUU7QUFDL0QsYUFBS2QsS0FBTCxDQUFXZSxRQUFYO0FBQ0gsT0FINkIsQ0FJOUI7O0FBQ0g7QUFDSixHQTdESSxDQStETDs7QUEvREssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlOyAgICAgLy/lvIDlkK/norDmkp7mo4DmtYtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlOyAgIC8v5pi+56S656Kw5pKe5qOA5rWL5Yy65Z+fXHJcblxyXG4gICAgICAgIHRoaXMuX2dhbWUgPSBjYy5maW5kKFwiL0NhbnZhcy9ib3hcIikuZ2V0Q29tcG9uZW50KFwiYnVpbGRcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcil7XHJcbiAgICAgICAgY2MubG9nKFwib25CZWdpbkNvbnRhY3RcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICAvLyBjYy5sb2coXCLnorDmkp54ICA9XCIgKyB0aGlzLm5vZGUueCArIFwiIHg9XCIgKyBvdGhlci5ub2RlLngpO1xyXG4gICAgICAgIC8vIGNjLmxvZyhcIueisOaSnnkgID1cIiArIHRoaXMubm9kZS55ICsgXCIgeD1cIiArIG90aGVyLm5vZGUueSk7XHJcblxyXG4gICAgICAgIC8vIGNjLmxvZyhcIuaWueWQkSA9XCIgKyB0aGlzLl9nYW1lLmRpcmVjdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5fZ2FtZS5nYW1lT3ZlcigpO1xyXG5cclxuICAgICAgICAvLyBpZihNYXRoLmFicyh0aGlzLm5vZGUueCAtIG90aGVyLm5vZGUueCk9PTQ4ICYmIE1hdGguYWJzKHRoaXMubm9kZS55IC0gb3RoZXIubm9kZS55KT09NDgpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9nYW1lLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2UgaWYoTWF0aC5hYnModGhpcy5ub2RlLnggLSBvdGhlci5ub2RlLngpPT0wICYmIE1hdGguYWJzKHRoaXMubm9kZS55IC0gb3RoZXIubm9kZS55KT09NDgpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9nYW1lLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBpZih0aGlzLl9nYW1lLmRpcmVjdGlvbj09PTApe1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlLnggPT0gb3RoZXIubm9kZS54ICYmIHRoaXMubm9kZS55ID09IG90aGVyLm5vZGUueSArIDQ4KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWUuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9jYy5sb2coXCJ1cFwiKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLl9nYW1lLmRpcmVjdGlvbj09PTEpe1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlLnggPT0gb3RoZXIubm9kZS54ICYmIHRoaXMubm9kZS55ID09IG90aGVyLm5vZGUueSAtIDQ4KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWUuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC8vIGNjLmxvZyhcImRvd25cIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5fZ2FtZS5kaXJlY3Rpb249PT0yKXtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS54ID09IG90aGVyLm5vZGUueCAtNDggJiYgdGhpcy5ub2RlLnkgPT0gb3RoZXIubm9kZS55KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWUuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NjLmxvZyhcImxlZnRcIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5fZ2FtZS5kaXJlY3Rpb249PT0zKXtcclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlLnggPT0gb3RoZXIubm9kZS54ICsgNDggJiYgdGhpcy5ub2RlLnkgPT0gb3RoZXIubm9kZS55KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWUuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NjLmxvZyhcInJpZ2h0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=