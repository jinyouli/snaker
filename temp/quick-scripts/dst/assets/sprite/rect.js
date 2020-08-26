
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