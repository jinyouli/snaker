"use strict";
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