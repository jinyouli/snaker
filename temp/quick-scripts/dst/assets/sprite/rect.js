
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