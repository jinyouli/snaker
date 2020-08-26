
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
    var collider = cc.director.getCollisionManager();
    collider.enabled = true; // collider.enabledDebugDraw = true;
    // collider.enabledDrawBoundingBox = true;
    //开启物理引擎

    var physics = cc.director.getPhysicsManager();
    physics.enabled = true; // physics.gravity.y = 1000;

    var db = cc.PhysicsManager.DrawBits;
    this.nodes = [];
    this.nodes = cc.find('Canvas/box').children; //游戏状态  0-暂停 1-运行 2-游戏结束 

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

    this.produceFoot();
  },
  //生成果实
  produceFoot: function produceFoot() {
    this.nextGoal = Math.floor(7 * Math.random()); //随机生成某种颜色

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
      this.snakeArrY[len] = this.snakeBody.node.y;
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
      } //cc.log("up");

    } else if (this.direction === 1) {
      //移动前，判断游戏是否结束
      this.isGameOver(this.snakeHead.node.x, this.snakeHead.node.y - 48);

      if (this.gameState === 1) {
        this.snakeHead.node.y -= 48;
      } // cc.log("down");

    } else if (this.direction === 2) {
      this.isGameOver(this.snakeHead.node.x - 48, this.snakeHead.node.y);

      if (this.gameState === 1) {
        this.snakeHead.node.x -= 48;
      } //cc.log("left");

    } else if (this.direction === 3) {
      //移动前，判断游戏是否结束
      this.isGameOver(this.snakeHead.node.x + 48, this.snakeHead.node.y);

      if (this.gameState === 1) {
        this.snakeHead.node.x += 48;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3ByaXRlXFxidWlsZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJlY3QwIiwiUHJlZmFiIiwicmVjdDEiLCJyZWN0MiIsInJlY3QzIiwicmVjdDQiLCJyZWN0NSIsInJlY3Q2IiwicmVjdDciLCJwbGF5ZXIiLCJiYXNlcG9pbnQiLCJidXR0b24iLCJMYWJlbCIsInNjb3JlIiwib3ZlciIsIk5vZGUiLCJzbGlkZXJ2IiwiU2xpZGVyIiwiYXVkaW8iLCJBdWRpb0NsaXAiLCJzdWJOb2Rlc0FyciIsInR5cGUiLCJvbkxvYWQiLCJsb2ciLCJjb2xsaWRlciIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJwaHlzaWNzIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJkYiIsIlBoeXNpY3NNYW5hZ2VyIiwiRHJhd0JpdHMiLCJub2RlcyIsImZpbmQiLCJjaGlsZHJlbiIsImdhbWVTdGF0ZSIsInNjb3JlTnVtIiwibGVmdFgiLCJyaWdodFgiLCJzcGVlZCIsImRpcmVjdGlvbiIsInNuYWtlQXJyWCIsInNuYWtlQXJyWSIsInNuYWtlQXJyIiwibmV4dEdvYWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnb2FsWCIsImdvYWxZIiwic25ha2VIZWFkIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJub2RlIiwieCIsInkiLCJHcm91cCIsImJveCIsImFkZENoaWxkIiwiYm94TWFwIiwiaSIsImoiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsInNldEdhbWUiLCJUT1VDSF9TVEFSVCIsImV2ZW50IiwibG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsImZpcnN0WCIsImZpcnN0WSIsIlRPVUNIX0VORCIsInRvdWNoUG9pbnQiLCJlbmRYIiwiZW5kWSIsImFicyIsImdvYWwiLCJidWlsZEJvZHkiLCJvbkJlZ2luQ29udGFjdCIsImNvbnRhY3QiLCJzZWxmQ29sbGlkZXIiLCJvdGhlckNvbGxpZGVyIiwiY29uc29sZSIsInByb2R1Y2VGb290Iiwic2NoZWR1bGUiLCJtb3ZlIiwib3ZlcmxhcEZvb3QiLCJsZW5ndGgiLCJwcmVmYWIiLCJzbmFrZUJvZHkiLCJib3hNYXBYIiwiYm94TWFwWSIsImVhdEZvb3QiLCJsZW4iLCJhZGRTY29yZSIsInN0cmluZyIsImlzR2FtZU92ZXIiLCJtb3ZlQWxsIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJsZWZ0IiwiZCIsInJpZ2h0IiwidyIsInVwIiwicyIsImRvd24iLCJnYW1lT3ZlciIsImFjdGl2ZSIsInVuc2NoZWR1bGUiLCJhdWRpb0VuZ2luZSIsInN0b3BBbGwiLCJwYXVzZSIsInJlcGxheSIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBQ0osRUFBRSxDQUFDSyxNQUREO0FBRVJDLElBQUFBLEtBQUssRUFBQ04sRUFBRSxDQUFDSyxNQUZEO0FBR1JFLElBQUFBLEtBQUssRUFBQ1AsRUFBRSxDQUFDSyxNQUhEO0FBSVJHLElBQUFBLEtBQUssRUFBQ1IsRUFBRSxDQUFDSyxNQUpEO0FBS1JJLElBQUFBLEtBQUssRUFBQ1QsRUFBRSxDQUFDSyxNQUxEO0FBTVJLLElBQUFBLEtBQUssRUFBQ1YsRUFBRSxDQUFDSyxNQU5EO0FBT1JNLElBQUFBLEtBQUssRUFBQ1gsRUFBRSxDQUFDSyxNQVBEO0FBUVJPLElBQUFBLEtBQUssRUFBQ1osRUFBRSxDQUFDSyxNQVJEO0FBU1Q7QUFDQVEsSUFBQUEsTUFBTSxFQUFDYixFQUFFLENBQUNLLE1BVkQ7QUFXVFMsSUFBQUEsU0FBUyxFQUFDZCxFQUFF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Q0FHeEI7O0FBQ0EsYUFBS1gsUUFBTCxDQUFjLEtBQUtDLElBQW5CLEVBQXdCLEtBQUtsRCxLQUE3QjtBQUNIO0FBQ0o7QUFDSixHQXBZSTtBQXFZTDtBQUNBbUYsRUFBQUEsTUF0WUssb0JBc1lHO0FBQ0g7QUFDRC9ILElBQUFBLEVBQUUsQ0FBQzZCLFFBQUgsQ0FBWW1HLFNBQVosQ0FBc0IsUUFBdEI7QUFDSDtBQXpZSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJlY3QwOmNjLlByZWZhYixcclxuICAgICAgICByZWN0MTpjYy5QcmVmYWIsXHJcbiAgICAgICAgcmVjdDI6Y2MuUHJlZmFiLFxyXG4gICAgICAgIHJlY3QzOmNjLlByZWZhYixcclxuICAgICAgICByZWN0NDpjYy5QcmVmYWIsXHJcbiAgICAgICAgcmVjdDU6Y2MuUHJlZmFiLFxyXG4gICAgICAgIHJlY3Q2OmNjLlByZWZhYixcclxuICAgICAgICByZWN0NzpjYy5QcmVmYWIsXHJcbiAgICAgICAvL+aSreaUvumihOWItui1hOa6kFxyXG4gICAgICAgcGxheWVyOmNjLlByZWZhYixcclxuICAgICAgIGJhc2Vwb2ludDpjYy5QcmVmYWIsXHJcbiAgICAgICAvL+aMiemSruiKgueCuVxyXG4gICAgICAgYnV0dG9uOmNjLkxhYmVsLFxyXG4gICAgICAgc2NvcmU6Y2MuTGFiZWwsXHJcbiAgICAgICBvdmVyOmNjLk5vZGUsXHJcbiAgICAgICAvL+mAn+W6puiwg+iKgua7keWKqFxyXG4gICAgICAgc2xpZGVydjpjYy5TbGlkZXIsXHJcbiAgICAgICAvL+mfs+mikVxyXG4gICAgICAgYXVkaW86Y2MuQXVkaW9DbGlwLFxyXG5cclxuICAgICAgIHN1Yk5vZGVzQXJyOntcclxuICAgICAgICAgICAgZGVmYXVsdDpbXSxcclxuICAgICAgICAgICAgdHlwZTpjYy5QcmVmYWIsXHJcbiAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5sb2coXCJvbmxvYWQgc3RhcnRcIik7XHJcblxyXG4gICAgICAgIHZhciBjb2xsaWRlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBjb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb2xsaWRlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb2xsaWRlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy/lvIDlkK/niannkIblvJXmk45cclxuICAgICAgICB2YXIgcGh5c2ljcyA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgcGh5c2ljcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBwaHlzaWNzLmdyYXZpdHkueSA9IDEwMDA7XHJcbiAgICAgICAgdmFyIGRiID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHM7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm5vZGVzID0gY2MuZmluZCgnQ2FudmFzL2JveCcpLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICAvL+a4uOaIj+eKtuaAgSAgMC3mmoLlgZwgMS3ov5DooYwgMi3muLjmiI/nu5PmnZ8gXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAxO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8v6Z+z5pWIXHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW8sIHRydWUpO1xyXG4gICAgICAgIC8v5YiG5pWwXHJcbiAgICAgICAgdGhpcy5zY29yZU51bT0wO1xyXG4gICAgICAgIC8v6L6555WM5YC8XHJcbiAgICAgICAgdGhpcy5sZWZ0WDtcclxuICAgICAgICB0aGlzLnJpZ2h0WDtcclxuICAgICAgICAvL+mAn+W6plxyXG4gICAgICAgIHRoaXMuc3BlZWQ9MC41O1xyXG4gICAgICAgIC8v5pa55ZCRLHVwLTAsZG93bi0xLGxlZnQtMixyaWdodC0zXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgICAgIC8v6LSq5ZCD6JuH5pWw57uELOS6jOS9jeaVsOe7hFxyXG4gICAgICAgIHRoaXMuc25ha2VBcnJYPVtdO1xyXG4gICAgICAgIHRoaXMuc25ha2VBcnJZPVtdO1xyXG4gICAgICAgIHRoaXMuc25ha2VBcnI9W107XHJcbiAgICAgICAgLy/lnLDlm77kuIrpmo/mnLrnlJ/miJDmnpzlrp4oeCx5KeWdkOagh1xyXG4gICAgICAgIHRoaXMubmV4dEdvYWwgPSBNYXRoLmZsb29yKDcqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5nb2FsWCA9IE1hdGguZmxvb3IoMTAqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5nb2FsWSA9IE1hdGguZmxvb3IoMTUqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgLy/orr7nva7otKrlkIPom4flpLTpg6hcclxuICAgICAgICAgdGhpcy5zbmFrZUhlYWQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJlY3Q3KS5nZXRDb21wb25lbnQoJ3JlY3QnKTtcclxuICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS54PTI0MDtcclxuICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS55PTMzNjtcclxuICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS5Hcm91cCA9ICdoZXJvJztcclxuXHJcbiAgICAgICAgIHZhciBib3g9Y2MuZmluZCgnQ2FudmFzL2JveCcpO1xyXG4gICAgICAgICBib3guYWRkQ2hpbGQodGhpcy5zbmFrZUhlYWQubm9kZSk7XHJcbiAgICAgICAgIHRoaXMuc25ha2VBcnJYWzBdPXRoaXMuc25ha2VIZWFkLm5vZGUueDtcclxuICAgICAgICAgdGhpcy5zbmFrZUFycllbMF09dGhpcy5zbmFrZUhlYWQubm9kZS55O1xyXG4gICAgICAgICB0aGlzLnNuYWtlQXJyWzBdID0gdGhpcy5zbmFrZUhlYWQ7XHJcbiAgICAgICAgIC8v5Zyw5Zu+XHJcbiAgICAgICAgIHRoaXMuYm94TWFwPVtdO1xyXG4gICAgICAgICBmb3IobGV0IGk9MDtpPDEwO2krKyl7XHJcbiAgICAgICAgICAgIHRoaXMuYm94TWFwW2ldPVtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPDE1O2orKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJveE1hcFtpXVtqXT0wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAvL+azqOWGjOaMieS4i+ebkeWQrFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgLy90aGlzLm9udG91Y2htb3ZlKCk7XHJcbiAgICAgICB0aGlzLnNldEdhbWUoKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7Ly8g6I635Y+W6IqC54K55Z2Q5qCHXHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RYID0gbG9jYXRpb24ueDtcclxuICAgICAgICAgICAgdGhpcy5maXJzdFkgPSBsb2NhdGlvbi55O1xyXG4gICAgICAgICAgICAvLyDojrflj5bop6bngrnlnKjnqbrpl7ToioLngrnkuIrnmoTlnZDmoIdcclxuICAgICAgICAgICAgLy8gdmFyIHRlbXBQbGF5ZXIgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2NhdGlvbik7XHJcbiAgICAgICAgICAgIC8vIG5vZGUuc2V0UG9zaXRpb24odGVtcFBsYXllcik7XHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGxldCB0b3VjaFBvaW50ID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IGVuZFggPSB0aGlzLmZpcnN0WCAtIHRvdWNoUG9pbnQueDtcclxuICAgICAgICAgICAgbGV0IGVuZFkgPSB0aGlzLmZpcnN0WSAtIHRvdWNoUG9pbnQueTtcclxuICAgICAgICAgICAgLy8gdmFyIHRlbXBQbGF5ZXIgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaFBvaW50KTtcclxuICAgICAgICAgICAgLy8gbm9kZS5zZXRQb3NpdGlvbih0ZW1wUGxheWVyKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhlbmRYKSA+IE1hdGguYWJzKGVuZFkpKXtcclxuICAgICAgICAgICAgICAgIC8v5omL5Yq/5ZCR5bem5Y+zXHJcbiAgICAgICAgICAgICAgICAvL+WIpOaWreWQkeW3pui/mOaYr+WQkeWPsyBcclxuICAgICAgICAgICAgICAgIGlmIChlbmRYICA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5ZCR5bem5Ye95pWwXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24hPTMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lkJHlj7Plh73mlbBcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24hPTIpe1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5omL5Yq/5ZCR5LiK5LiLXHJcbiAgICAgICAgICAgICAgICAvL+WIpOaWreaJi+WKv+WQkeS4iui/mOaYr+WQkeS4i1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuZFkgID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lkJHkuIvlh73mlbBcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ2Rvd24nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WQkeS4iuWHveaVsFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZygndXAnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgfSxcclxuICAgIC8vXHJcbiAgICBzZXRHYW1lKCl7XHJcbiAgICAgICAgY2MubG9nKFwic2V0R2FtZSBzdGFydFwiKTtcclxuICAgICAgICAgLy/kuIvkuKrmnpzlrp7mlrnlnZdcclxuICAgICAgICAgdmFyIGdvYWwgPSB0aGlzLm5leHRHb2FsO1xyXG4gICAgICAgICB0aGlzLmJ1aWxkQm9keShnb2FsKTtcclxuICAgICAgICAgY2MubG9nKFwic2V0R2FtZSBlbmRcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkJlZ2luQ29udGFjdFwiKTtcclxuICAgIH0sXHJcbiAgICBcclxuXHJcbiAgICAvL+iOt+WPluminOiJsuWQjuWunuS+i+WMljbnp43lm77lg48s6L+Y5pyJ5LiA5Liq56eN5L2c5Li6aGVhZFxyXG4gICAgYnVpbGRCb2R5KGdvYWwpe1xyXG4gICAgICAgIGNjLmxvZyhcImdvYWw6XCIrZ29hbCk7XHJcbiAgICAgICAgIHRoaXMucHJvZHVjZUZvb3QoKTtcclxuICAgICAgICAgLy/np7vliqhcclxuICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLm1vdmUsdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgIGNjLmxvZyhcImdvYWwyOlwiK2dvYWwpO1xyXG5cclxuICAgIH0sXHJcbiAgICAvL+ajgOa1i+aenOWunueUn+aIkOS9jee9ruaYr+WQpumHjeWPoOi0quWQg+ibh1xyXG4gICAgb3ZlcmxhcEZvb3QoKXtcclxuICAgICAgICB0aGlzLmdvYWxYID0gTWF0aC5mbG9vcigxMCpNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB0aGlzLmdvYWxZID0gTWF0aC5mbG9vcigxNSpNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICAvL+WIpOaWrei0quWQg+ibh+aJgOaciemDqOS9jeaYr+WQpumHjeWPoFxyXG4gICAgICAgIGZvcihsZXQgaj0wO2o8dGhpcy5zbmFrZUFyclgubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYm94TWFwW3RoaXMuZ29hbFhdW3RoaXMuZ29hbFldPT09MSl7XHJcbiAgICAgICAgICAgICAgICAvL+mHjeaWsOeUn+aIkO+8jOW5tuS4lOmHjeaWsOajgOa1i1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGFwRm9vdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9kdWNlRm9vdCgpO1xyXG4gICAgfSxcclxuICAgIC8v55Sf5oiQ5p6c5a6eXHJcbiAgICBwcm9kdWNlRm9vdCgpe1xyXG4gICAgICAgIHRoaXMubmV4dEdvYWwgPSBNYXRoLmZsb29yKDcqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgLy/pmo/mnLrnlJ/miJDmn5Dnp43popzoibJcclxuICAgICAgICAgaWYodGhpcy5uZXh0R29hbD09PTApe3RoaXMucHJlZmFiPXRoaXMucmVjdDA7fVxyXG4gICAgICAgICBpZih0aGlzLm5leHRHb2FsPT09MSl7dGhpcy5wcmVmYWI9dGhpcy5yZWN0MTt9XHJcbiAgICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT0yKXt0aGlzLnByZWZhYj10aGlzLnJlY3QyO31cclxuICAgICAgICAgaWYodGhpcy5uZXh0R29hbD09PTMpe3RoaXMucHJlZmFiPXRoaXMucmVjdDM7fVxyXG4gICAgICAgICBpZih0aGlzLm5leHRHb2FsPT09NCl7dGhpcy5wcmVmYWI9dGhpcy5yZWN0NDt9XHJcbiAgICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT01KXt0aGlzLnByZWZhYj10aGlzLnJlY3Q1O31cclxuICAgICAgICAgaWYodGhpcy5uZXh0R29hbD09PTYpe3RoaXMucHJlZmFiPXRoaXMucmVjdDY7fVxyXG4gICAgICAgIC8v6LSq5ZCD6JuH6Lqr5L2TXHJcbiAgICAgICAgIHRoaXMuc25ha2VCb2R5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWIpLmdldENvbXBvbmVudCgncmVjdCcpO1xyXG4gICAgICAgICB0aGlzLnNuYWtlQm9keS5ub2RlLkdyb3VwID0gJ3RhcmdldCc7XHJcbiAgICAgICAgIHZhciBib3g9Y2MuZmluZCgnQ2FudmFzL2JveCcpO1xyXG4gICAgICAgICBib3guYWRkQ2hpbGQodGhpcy5zbmFrZUJvZHkubm9kZSk7XHJcbiAgICAgICAgIHRoaXMuc25ha2VCb2R5Lm5vZGUueD10aGlzLmdvYWxYKjQ4OyAgICAgICBcclxuICAgICAgICAgdGhpcy5zbmFrZUJvZHkubm9kZS55PXRoaXMuZ29hbFkqNDg7XHJcbiAgICAgICAgIC8v6K6w5b2V5Zyw5Zu+6L+Z6YeM5bey57uP5pyJ5p6c5a6eXHJcbiAgICAgICAgIHZhciBib3hNYXBYID0gdGhpcy5zbmFrZUJvZHkubm9kZS54LzQ4O1xyXG4gICAgICAgICB2YXIgYm94TWFwWSA9IHRoaXMuc25ha2VCb2R5Lm5vZGUueS80ODtcclxuICAgICAgICAgdGhpcy5ib3hNYXBbYm94TWFwWF1bYm94TWFwWV09MTtcclxuICAgIH0sXHJcbiAgICAvL+WQg+WIsOaenOWunlxyXG4gICAgZWF0Rm9vdCgpe1xyXG4gICAgICAgICB2YXIgYm94TWFwWCA9IHRoaXMuc25ha2VIZWFkLm5vZGUueC80ODtcclxuICAgICAgICAgdmFyIGJveE1hcFkgPSB0aGlzLnNuYWtlSGVhZC5ub2RlLnkvNDg7XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbkvY3nva7mmK/lkKbmnInmnpzlrp5cclxuICAgICAgICBpZih0aGlzLmJveE1hcFtib3hNYXBYXVtib3hNYXBZXT09PTEpe1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcIuS9jee9ruacieaenOWunlwiKTtcclxuICAgICAgICAgICAgLy/liqDlnKjlsL7pg6hcclxuICAgICAgICAgICAgdmFyIGxlbiA9IHRoaXMuc25ha2VBcnJYLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5zbmFrZUFyclhbbGVuXT10aGlzLnNuYWtlQm9keS5ub2RlLng7XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2VBcnJZW2xlbl09dGhpcy5zbmFrZUJvZHkubm9kZS55O1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyW2xlbl09dGhpcy5zbmFrZUJvZHk7XHJcbiAgICAgICAgICAgIC8v5p6c5a6e6KKr5ZCD5LqGIFxyXG4gICAgICAgICAgICB0aGlzLmJveE1hcFtib3hNYXBYXVtib3hNYXBZXT0wO1xyXG4gICAgICAgICAgICAvL+WKoOWIhuaVsFxyXG4gICAgICAgICAgICB0aGlzLmFkZFNjb3JlKCk7XHJcbiAgICAgICAgICAgIC8v6ZqP5py655Sf5oiQ5LiL5LiA5Liq5p6c5a6eXHJcbiAgICAgICAgICAgIHRoaXMub3ZlcmxhcEZvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/liqDliIbmlbBcclxuICAgIGFkZFNjb3JlKCl7XHJcbiAgICAgICAgLy/moLnmja7kuI3lkIzmnpzlrp7lop7liqDliIbmlbBcclxuICAgICAgICBpZih0aGlzLm5leHRHb2FsPT09MCl7dGhpcy5zY29yZU51bSs9NTA7fVxyXG4gICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT0xKXt0aGlzLnNjb3JlTnVtKz0xMDA7fVxyXG4gICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT0yKXt0aGlzLnNjb3JlTnVtKz0yMDA7fVxyXG4gICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT0zKXt0aGlzLnNjb3JlTnVtKz0zMDA7fVxyXG4gICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT00KXt0aGlzLnNjb3JlTnVtKz00MDA7fVxyXG4gICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT01KXt0aGlzLnNjb3JlTnVtKz01MDA7fVxyXG4gICAgICAgIGlmKHRoaXMubmV4dEdvYWw9PT02KXt0aGlzLnNjb3JlTnVtKz02MDA7fVxyXG4gICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nPXRoaXMuc2NvcmVOdW07XHJcbiAgICB9LFxyXG4gICAgLy/np7vliqjmlrnms5VcclxuICAgIG1vdmUgKCl7XHJcbiAgICAgICAgLy/mlrnlkJEsdXAtMCxkb3duLTEsbGVmdC0yLHJpZ2h0LTNcclxuICAgICAgICBpZih0aGlzLmRpcmVjdGlvbj09PTApe1xyXG4gICAgICAgICAgICAvL+enu+WKqOWJje+8jOWIpOaWrea4uOaIj+aYr+WQpue7k+adn1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZU92ZXIodGhpcy5zbmFrZUhlYWQubm9kZS54LHRoaXMuc25ha2VIZWFkLm5vZGUueSs0OCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLnkrPTQ4OyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NjLmxvZyhcInVwXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZGlyZWN0aW9uPT09MSl7XHJcbiAgICAgICAgICAgIC8v56e75Yqo5YmN77yM5Yik5pat5ri45oiP5piv5ZCm57uT5p2fXHJcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lT3Zlcih0aGlzLnNuYWtlSGVhZC5ub2RlLngsdGhpcy5zbmFrZUhlYWQubm9kZS55LTQ4KTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLnktPTQ4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLy8gY2MubG9nKFwiZG93blwiKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmRpcmVjdGlvbj09PTIpe1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZU92ZXIodGhpcy5zbmFrZUhlYWQubm9kZS54LTQ4LHRoaXMuc25ha2VIZWFkLm5vZGUueSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZT09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS54LT00ODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NjLmxvZyhcImxlZnRcIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5kaXJlY3Rpb249PT0zKXtcclxuICAgICAgICAgICAgLy/np7vliqjliY3vvIzliKTmlq3muLjmiI/mmK/lkKbnu5PmnZ9cclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVPdmVyKHRoaXMuc25ha2VIZWFkLm5vZGUueCs0OCx0aGlzLnNuYWtlSGVhZC5ub2RlLnkpO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLngrPTQ4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwicmlnaHRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgIHRoaXMuZWF0Rm9vdCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/np7vliqjnmoTml7blgJnvvIzouqvkvZPkuZ/lkJHlpLTnp7vliqhcclxuICAgIG1vdmVBbGwoKXtcclxuICAgICAgICBmb3IobGV0IGk9dGhpcy5zbmFrZUFyclgubGVuZ3RoLTE7aT4wO2ktLSl7XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2VBcnJYW2ldPXRoaXMuc25ha2VBcnJYW2ktMV07XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2VBcnJZW2ldPXRoaXMuc25ha2VBcnJZW2ktMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5pu05paw6LSq5ZCD6JuH5aS06YOo5L2N572uLOi0quWQg+ibh+maj+WktOmDqOenu+WKqFxyXG4gICAgICAgIHRoaXMuc25ha2VBcnJYWzBdPXRoaXMuc25ha2VIZWFkLm5vZGUueDtcclxuICAgICAgICB0aGlzLnNuYWtlQXJyWVswXT10aGlzLnNuYWtlSGVhZC5ub2RlLnk7XHJcbiAgICAgICAgZm9yKGxldCBqPTE7ajx0aGlzLnNuYWtlQXJyWC5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgdGhpcy5zbmFrZUFycltqXS5ub2RlLng9dGhpcy5zbmFrZUFyclhbal07XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2VBcnJbal0ubm9kZS55PXRoaXMuc25ha2VBcnJZW2pdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NjLmxvZyhcIm1vdmVBbGxcIit0aGlzLnNuYWtlQXJyWC5sZW5ndGgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnorDmkp4gID1cIiArIG90aGVyKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/plK7nm5jnm5HlkKxcclxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcclxuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwia2V5IGNvZGUgaXMgIGEgYW5kIGxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9Myl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTI7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcImtleSBjb2RlIGlzICBkIGFuZCByaWdodFwiKTtcclxuICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uIT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcImtleSBjb2RlIGlzICB3IGFuZCB1cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmRvd246XHJcbiAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCJrZXkgY29kZSBpcyAgcyBhbmQgZG93blwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/liKTmlq3muLjmiI/nu5PmnZ/nmoTmnaHku7ZcclxuICAgIGlzR2FtZU92ZXIoeCx5KXtcclxuICAgICAgICAgLy/liKTmlq3mmK/lkKbotoXlh7rlnLDlm75cclxuICAgICAgICBpZih4PDAgfHwgeD49NDgwIHx8IHk8MCB8fCB5Pj03MjApe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMubm9kZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJub2RlcyA9XCIgKyB0aGlzLm5vZGVzW2ldKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZXNbaV0uR3JvdXAgIT0gJ3RhcmdldCcpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ub2Rlc1tpXS54PT14ICYmIHRoaXMubm9kZXNbaV0ueT09eSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm56Kw5pKe5Yiw6LSq5ZCD6JuH6Lqr5L2TXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnNuYWtlQXJyWC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zbmFrZUFyclhbaV09PXggJiYgdGhpcy5zbmFrZUFycllbaV09PXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5ri45oiP57uT5p2fXHJcbiAgICBnYW1lT3ZlciAoKXtcclxuICAgICAgICAgICAgY2MubG9nKFwi57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAvL+a4uOaIj+eKtuaAgVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIC8v5bCG5aSx6LSl55qE55S76Z2i5pi+56S65Ye65p2lXHJcbiAgICAgICAgICAgIHRoaXMub3Zlci5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgLy/lgZzmraLnp7vliqhcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMubW92ZSk7XHJcbiAgICAgICAgICAgIC8v5YGc5q2i5omA5pyJ6Z+z5LmQXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICAvL+aaguWBnOa4uOaIj1xyXG4gICAgcGF1c2UoKXtcclxuICAgICAgICAvLzLooajnpLrmuLjmiI/nu5PmnZ9cclxuICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZSE9PTIpe1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZT09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGU9MDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLnN0cmluZyA9IFwiUGxheVwiO1xyXG4gICAgICAgICAgICAgICAgLy/lgZzmraLnp7vliqhcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLm1vdmUpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmdhbWVTdGF0ZT09PTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGU9MTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLnN0cmluZyA9IFwiUGF1c2VcIjtcclxuICAgICAgICAgICAgICAgIC8v5YGc5q2i56e75YqoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMubW92ZSx0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+mHjeaWsOW8gOWni+a4uOaIj1xyXG4gICAgcmVwbGF5KCl7XHJcbiAgICAgICAgIC8v6YeN5paw5Yqg6L295ri45oiP5Zy65pmvXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic25ha2VyXCIpO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------
