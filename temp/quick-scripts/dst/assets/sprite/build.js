
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
    rect4: cc.Prefab,
    rect5: cc.Prefab,
    rect7: cc.Prefab,
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
    button: cc.Node,
    score: cc.Label,
    over: cc.Node,
    //速度调节滑动
    sliderv: cc.Slider,
    //音频
    audio: cc.AudioClip,
    onSprite: {
      "default": null,
      type: cc.SpriteFrame
    },
    offSprite: {
      "default": null,
      type: cc.SpriteFrame
    },
    bodySprite: {
      "default": null,
      type: cc.SpriteFrame
    } //    subNodesArr:{
    //         default:[],
    //         type:cc.Prefab,
    //    }

  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.log("onload start");
    this.isFood = false;

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

    this.speed = 0.4; //方向,up-0,down-1,left-2,right-3

    this.direction = 0; //贪吃蛇数组,二位数组

    this.snakeArrX = [];
    this.snakeArrY = [];
    this.snakeArr = []; //地图上随机生成果实(x,y)坐标
    //this.nextGoal = Math.floor(7*Math.random());

    this.nextGoal = 4;
    this.goalX = Math.floor(15 * Math.random());
    this.goalY = Math.floor(10 * Math.random()); //设置贪吃蛇头部

    this.snakeHead = cc.instantiate(this.rect7).getComponent('rect');
    this.snakeHead.node.x = 336 + this.distance;
    this.snakeHead.node.y = 240 + this.distance;
    this.snakeHead.node.Group = 'hero';
    var box = cc.find('Canvas/box');
    box.addChild(this.snakeHead.node);
    var X = this.snakeHead.node.x;
    var Y = this.snakeHead.node.y;
    this.snakeArrX[0] = X - this.distance;
    this.snakeArrY[0] = Y - this.distance;
    this.snakeArr[0] = this.snakeHead; //地图

    this.boxMap = [];

    for (var i = 0; i < 15; i++) {
      this.boxMap[i] = [];

      for (var j = 0; j < 10; j++) {
        this.boxMap[i][j] = 0;
      }
    }

    for (var _i = 0; _i < this.nodes.length; _i++) {
      if (this.nodes[_i].Group != 'target') {
        this.boxMap[Math.round(this.nodes[_i].x / 48)][Math.round(this.nodes[_i].y / 48)] = 1;
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
    this.goalX = Math.floor(15 * Math.random());
    this.goalY = Math.floor(10 * Math.random()); //判断贪吃蛇所有部位是否重叠

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
    if (this.isFood) {
      return;
    } //this.nextGoal = Math.floor(7*Math.random());


    this.nextGoal = 4; //随机生成某种颜色
    //  if(this.nextGoal===0){this.prefab=this.rect0;}
    //  if(this.nextGoal===1){this.prefab=this.rect1;}
    //  if(this.nextGoal===2){this.prefab=this.rect2;}
    //  if(this.nextGoal===3){this.prefab=this.rect3;}
    //  if(this.nextGoal===4){this.prefab=this.rect4;}
    //  if(this.nextGoal===5){this.prefab=this.rect5;}
    //  if(this.nextGoal===6){this.prefab=this.rect6;}
    //贪吃蛇身体

    this.snakeBody = cc.instantiate(this.rect4).getComponent('rect');
    this.snakeBody.node.Group = 'target';
    var box = cc.find('Canvas/box');
    this.snakeBody.node.x = this.goalX * 48;
    this.snakeBody.node.y = this.goalY * 48; //记录地图这里已经有果实

    var boxMapX = this.snakeBody.node.x / 48;
    var boxMapY = this.snakeBody.node.y / 48;

    if (this.boxMap[boxMapX][boxMapY] != 1) {
      this.boxMap[boxMapX][boxMapY] = 1;
      box.addChild(this.snakeBody.node);
      this.isFood = true;
    }
  },
  //吃到果实
  eatFoot: function eatFoot() {
    var headX = this.snakeHead.node.x;
    var headY = this.snakeHead.node.y;
    cc.log("headX =" + headX + "   headY =" + headY);
    var X = (headX - this.distance) / 48;
    var Y = (headY - this.distance) / 48;
    var boxMapX = Math.round(X);
    var boxMapY = Math.round(Y);
    cc.log("boxMapX =" + boxMapX);
    cc.log("boxMapY =" + boxMapY); //判断是否位置是否有果实

    if (this.boxMap[boxMapX][boxMapY] === 1) {
      //cc.log("位置有果实");
      //加在尾部
      var len = this.snakeArrX.length;
      this.snakeArrX[len] = this.snakeBody.node.x;
      this.snakeArrY[len] = this.snakeBody.node.y; // let sprite = this.snakeBody.getComponent(cc.Sprite)
      // sprite.spriteFrame = new cc.SpriteFrame(cc.url.raw('assets/img/5.png'));

      var sprite = this.snakeBody.getComponent(cc.Sprite);
      sprite.spriteFrame = this.bodySprite;
      this.snakeArr[len] = this.snakeBody; //果实被吃了 

      this.boxMap[boxMapX][boxMapY] = 0; //加分数

      this.addScore(); //随机生成下一个果实

      this.overlapFoot();
    }
  },
  //加分数
  addScore: function addScore() {
    //根据不同果实增加分数
    // if(this.nextGoal===0){this.scoreNum+=50;}
    // if(this.nextGoal===1){this.scoreNum+=100;}
    // if(this.nextGoal===2){this.scoreNum+=200;}
    // if(this.nextGoal===3){this.scoreNum+=300;}
    // if(this.nextGoal===4){this.scoreNum+=400;}
    // if(this.nextGoal===5){this.scoreNum+=500;}
    // if(this.nextGoal===6){this.scoreNum+=600;}
    this.scoreNum += 1;
    this.score.string = this.scoreNum;
    this.isFood = false;
  },
  //移动方法
  move: function move() {
    //方向,up-0,down-1,left-2,right-3
    var X = this.snakeHead.node.x;
    var Y = this.snakeHead.node.y;
    var headX = Math.round(X - this.distance);
    var headY = Math.round(Y - this.distance); //cc.log("headX =" + headX + "  headY =" + headY);

    if (this.direction === 0) {
      //移动前，判断游戏是否结束
      this.isGameOver(headX, headY + 48);

      if (this.gameState === 1) {
        this.snakeHead.node.y += 48;
        this.snakeHead.node.rotation = 0;
      }

      cc.log("up");
    } else if (this.direction === 1) {
      //移动前，判断游戏是否结束
      this.isGameOver(headX, headY - 48);

      if (this.gameState === 1) {
        this.snakeHead.node.y -= 48;
        this.snakeHead.node.rotation = 180;
      }

      cc.log("down");
    } else if (this.direction === 2) {
      this.isGameOver(headX - 48, headY);

      if (this.gameState === 1) {
        this.snakeHead.node.x -= 48;
        this.snakeHead.node.rotation = 270;
      }

      cc.log("left");
    } else if (this.direction === 3) {
      //移动前，判断游戏是否结束
      this.isGameOver(headX + 48, headY);

      if (this.gameState === 1) {
        this.snakeHead.node.x += 48;
        this.snakeHead.node.rotation = 90;
      }

      cc.log("right");
    }

    if (this.gameState === 1) {
      this.eatFoot();
      this.moveAll();
    }
  },
  //移动的时候，身体也向头移动
  moveAll: function moveAll() {
    var X = this.snakeHead.node.x;
    var Y = this.snakeHead.node.y;

    for (var i = this.snakeArrX.length - 1; i > 0; i--) {
      this.snakeArrX[i] = this.snakeArrX[i - 1];
      this.snakeArrY[i] = this.snakeArrY[i - 1];
    } //更新贪吃蛇头部位置,贪吃蛇随头部移动


    var headX = Math.round(X - this.distance);
    var headY = Math.round(Y - this.distance);
    this.snakeArrX[0] = headX;
    this.snakeArrY[0] = headY;

    for (var j = 1; j < this.snakeArrX.length; j++) {
      this.snakeArr[j].node.x = this.snakeArrX[j];
      this.snakeArr[j].node.y = this.snakeArrY[j];
    }
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
    if (y < 0 || y >= 480 || x < 0 || x >= 720) {
      this.gameOver();
      return;
    }

    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].Group != 'target') {
        if (this.nodes[i].x == x && this.nodes[i].y == y) {
          this.gameOver();
          return;
        }
      }
    } //判断是否碰撞到贪吃蛇身体


    for (var _i2 = 0; _i2 < this.snakeArrX.length; _i2++) {
      cc.log("this.snakeArrX[i]  =" + this.snakeArrX[_i2] + " x=" + x);
      cc.log("this.snakeArrY[i]  =" + this.snakeArrY[_i2] + " y=" + y);

      if (this.snakeArrX[_i2] == x && this.snakeArrY[_i2] == y) {
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
        this.gameState = 0; //this.button.string = "Play";

        var sprite = this.button.getComponent(cc.Sprite);
        sprite.spriteFrame = this.onSprite; //停止移动

        this.unschedule(this.move);
      } else if (this.gameState === 0) {
        this.gameState = 1; //this.button.string = "Pause";
        //停止移动

        this.schedule(this.move, this.speed);

        var _sprite = this.button.getComponent(cc.Sprite);

        _sprite.spriteFrame = this.offSprite;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3ByaXRlXFxidWlsZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJlY3QwIiwiUHJlZmFiIiwicmVjdDQiLCJyZWN0NSIsInJlY3Q3IiwibW92ZURpciIsInYyIiwiZGlzcGxheU5hbWUiLCJ0b29sdGlwIiwiX3NwZWVkVHlwZSIsIkpveXN0aWNrRW51bSIsIlNwZWVkVHlwZSIsIlNUT1AiLCJ0eXBlIiwicGxheWVyIiwiYmFzZXBvaW50IiwiYnV0dG9uIiwiTm9kZSIsInNjb3JlIiwiTGFiZWwiLCJvdmVyIiwic2xpZGVydiIsIlNsaWRlciIsImF1ZGlvIiwiQXVkaW9DbGlwIiwib25TcHJpdGUiLCJTcHJpdGVGcmFtZSIsIm9mZlNwcml0ZSIsImJvZHlTcHJpdGUiLCJvbkxvYWQiLCJsb2ciLCJpc0Zvb2QiLCJKb3lzdGlja0V2ZW50IiwiZ2V0SW5zdGFuY2UiLCJvbiIsIkpveXN0aWNrRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJvblRvdWNoRW5kIiwiZGlzdGFuY2UiLCJjb2xsaWRlciIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJwaHlzaWNzIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJkYiIsIlBoeXNpY3NNYW5hZ2VyIiwiRHJhd0JpdHMiLCJub2RlcyIsImZpbmQiLCJjaGlsZHJlbiIsImdhbWVTdGF0ZSIsInNjb3JlTnVtIiwibGVmdFgiLCJyaWdodFgiLCJzcGVlZCIsImRpcmVjdGlvbiIsInNuYWtlQXJyWCIsInNuYWtlQXJyWSIsInNuYWtlQXJyIiwibmV4dEdvYWwiLCJnb2FsWCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdvYWxZIiwic25ha2VIZWFkIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJub2RlIiwieCIsInkiLCJHcm91cCIsImJveCIsImFkZENoaWxkIiwiWCIsIlkiLCJib3hNYXAiLCJpIiwiaiIsImxlbmd0aCIsInJvdW5kIiwic3lzdGVtRXZlbnQiLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwic2V0R2FtZSIsImV2ZW50IiwibG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsImZpcnN0WCIsImZpcnN0WSIsInRvdWNoUG9pbnQiLCJlbmRYIiwiZW5kWSIsImFicyIsImRhdGEiLCJzcGVlZFR5cGUiLCJtb3ZlRGlzdGFuY2UiLCJnb2FsIiwiYnVpbGRCb2R5Iiwib25CZWdpbkNvbnRhY3QiLCJjb250YWN0Iiwic2VsZkNvbGxpZGVyIiwib3RoZXJDb2xsaWRlciIsImNvbnNvbGUiLCJwcm9kdWNlRm9vdCIsInNjaGVkdWxlIiwibW92ZSIsIm92ZXJsYXBGb290Iiwic25ha2VCb2R5IiwiYm94TWFwWCIsImJveE1hcFkiLCJlYXRGb290IiwiaGVhZFgiLCJoZWFkWSIsImxlbiIsInNwcml0ZSIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiYWRkU2NvcmUiLCJzdHJpbmciLCJpc0dhbWVPdmVyIiwicm90YXRpb24iLCJtb3ZlQWxsIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJsZWZ0IiwiZCIsInJpZ2h0IiwidyIsInVwIiwicyIsImRvd24iLCJnYW1lT3ZlciIsImFjdGl2ZSIsInVuc2NoZWR1bGUiLCJhdWRpb0VuZ2luZSIsInN0b3BBbGwiLCJwYXVzZSIsInJlcGxheSIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFDSixFQUFFLENBQUNLLE1BREQ7QUFFUkMsSUFBQUEsS0FB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QUNKLEdBdmZJO0FBd2ZMO0FBQ0EySCxFQUFBQSxNQXpmSyxvQkF5Zkc7QUFDSDtBQUNEMUosSUFBQUEsRUFBRSxDQUFDZ0QsUUFBSCxDQUFZMkcsU0FBWixDQUFzQixRQUF0QjtBQUNIO0FBNWZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb3lzdGlja0VudW0gZnJvbSBcIi4vam95c3RpY2svSm95c3RpY2tFbnVtXCI7XHJcbmltcG9ydCBKb3lzdGlja0V2ZW50IGZyb20gXCIuL2pveXN0aWNrL0pveXN0aWNrRXZlbnRcIjtcclxuXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJlY3QwOmNjLlByZWZhYixcclxuICAgICAgICByZWN0NDpjYy5QcmVmYWIsXHJcbiAgICAgICAgcmVjdDU6Y2MuUHJlZmFiLFxyXG4gICAgICAgIHJlY3Q3OmNjLlByZWZhYixcclxuXHJcbiAgICAvLyBmcm9tIGpveXN0aWNrXHJcbiAgICBtb3ZlRGlyOiB7XHJcbiAgICAgICAgZGVmYXVsdDogY2MudjIoMCwgMSksXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICdNb3ZlIERpcicsXHJcbiAgICAgICAgdG9vbHRpcDogJ+enu+WKqOaWueWQkScsXHJcbiAgICB9LFxyXG4gICAgX3NwZWVkVHlwZToge1xyXG4gICAgICAgIGRlZmF1bHQ6IEpveXN0aWNrRW51bS5TcGVlZFR5cGUuU1RPUCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ1NwZWVkIFR5cGUnLFxyXG4gICAgICAgIHR5cGU6IEpveXN0aWNrRW51bS5TcGVlZFR5cGUsXHJcbiAgICAgICAgdG9vbHRpcDogJ+mAn+W6pue6p+WIqydcclxuICAgIH0sXHJcbiAgICAgICAvL+aSreaUvumihOWItui1hOa6kFxyXG4gICAgICAgcGxheWVyOmNjLlByZWZhYixcclxuICAgICAgIGJhc2Vwb2ludDpjYy5QcmVmYWIsXHJcbiAgICAgICAvL+aMiemSruiKgueCuVxyXG4gICAgICAgYnV0dG9uOmNjLk5vZGUsXHJcbiAgICAgICBzY29yZTpjYy5MYWJlbCxcclxuICAgICAgIG92ZXI6Y2MuTm9kZSxcclxuICAgICAgIC8v6YCf5bqm6LCD6IqC5ruR5YqoXHJcbiAgICAgICBzbGlkZXJ2OmNjLlNsaWRlcixcclxuICAgICAgIC8v6Z+z6aKRXHJcbiAgICAgICBhdWRpbzpjYy5BdWRpb0NsaXAsXHJcbiAgICAgICBvblNwcml0ZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9mZlNwcml0ZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJvZHlTcHJpdGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWVcclxuICAgICAgICB9LFxyXG5cclxuICAgIC8vICAgIHN1Yk5vZGVzQXJyOntcclxuICAgIC8vICAgICAgICAgZGVmYXVsdDpbXSxcclxuICAgIC8vICAgICAgICAgdHlwZTpjYy5QcmVmYWIsXHJcbiAgICAvLyAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5sb2coXCJvbmxvYWQgc3RhcnRcIik7XHJcbiAgICAgICAgdGhpcy5pc0Zvb2QgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLm9uKEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIEpveXN0aWNrRXZlbnQuZ2V0SW5zdGFuY2UoKS5vbihKb3lzdGlja0VudW0uSm95c3RpY2tFdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLm9uKEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSAyNDtcclxuICAgICAgICB2YXIgY29sbGlkZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgY29sbGlkZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gY29sbGlkZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICAgICAgLy8gY29sbGlkZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8v5byA5ZCv54mp55CG5byV5pOOXHJcbiAgICAgICAgdmFyIHBoeXNpY3MgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHBoeXNpY3MuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gcGh5c2ljcy5ncmF2aXR5LnkgPSAxMDAwO1xyXG4gICAgICAgIHZhciBkYiA9IGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5ub2RlcyA9IGNjLmZpbmQoJ0NhbnZhcy9ib3gvbm9kZXMnKS5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgLy/muLjmiI/nirbmgIEgIDAt5pqC5YGcIDEt6L+Q6KGMIDIt5ri45oiP57uT5p2fIFxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gMTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvL+mfs+aViFxyXG4gICAgICAgIC8vY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmF1ZGlvLCB0cnVlKTtcclxuICAgICAgICAvL+WIhuaVsFxyXG4gICAgICAgIHRoaXMuc2NvcmVOdW09MDtcclxuICAgICAgICAvL+i+ueeVjOWAvFxyXG4gICAgICAgIHRoaXMubGVmdFg7XHJcbiAgICAgICAgdGhpcy5yaWdodFg7XHJcbiAgICAgICAgLy/pgJ/luqZcclxuICAgICAgICB0aGlzLnNwZWVkPTAuNDtcclxuICAgICAgICAvL+aWueWQkSx1cC0wLGRvd24tMSxsZWZ0LTIscmlnaHQtM1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcclxuICAgICAgICAvL+i0quWQg+ibh+aVsOe7hCzkuozkvY3mlbDnu4RcclxuICAgICAgICB0aGlzLnNuYWtlQXJyWD1bXTtcclxuICAgICAgICB0aGlzLnNuYWtlQXJyWT1bXTtcclxuICAgICAgICB0aGlzLnNuYWtlQXJyPVtdO1xyXG4gICAgICAgIC8v5Zyw5Zu+5LiK6ZqP5py655Sf5oiQ5p6c5a6eKHgseSnlnZDmoIdcclxuICAgICAgICAvL3RoaXMubmV4dEdvYWwgPSBNYXRoLmZsb29yKDcqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5uZXh0R29hbCA9IDQ7XHJcbiAgICAgICAgdGhpcy5nb2FsWCA9IE1hdGguZmxvb3IoMTUqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5nb2FsWSA9IE1hdGguZmxvb3IoMTAqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgLy/orr7nva7otKrlkIPom4flpLTpg6hcclxuICAgICAgICAgdGhpcy5zbmFrZUhlYWQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJlY3Q3KS5nZXRDb21wb25lbnQoJ3JlY3QnKTtcclxuICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS54PTMzNiArIHRoaXMuZGlzdGFuY2U7XHJcbiAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUueT0yNDAgKyB0aGlzLmRpc3RhbmNlO1xyXG4gICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLkdyb3VwID0gJ2hlcm8nO1xyXG5cclxuICAgICAgICAgdmFyIGJveD1jYy5maW5kKCdDYW52YXMvYm94Jyk7XHJcbiAgICAgICAgIGJveC5hZGRDaGlsZCh0aGlzLnNuYWtlSGVhZC5ub2RlKTtcclxuICAgICAgICAgdmFyIFggPSB0aGlzLnNuYWtlSGVhZC5ub2RlLng7XHJcbiAgICAgICAgIHZhciBZID0gdGhpcy5zbmFrZUhlYWQubm9kZS55O1xyXG5cclxuICAgICAgICAgdGhpcy5zbmFrZUFyclhbMF09WCAtIHRoaXMuZGlzdGFuY2U7IFxyXG4gICAgICAgICB0aGlzLnNuYWtlQXJyWVswXT1ZIC0gdGhpcy5kaXN0YW5jZTtcclxuICAgICAgICAgdGhpcy5zbmFrZUFyclswXSA9IHRoaXMuc25ha2VIZWFkO1xyXG4gICAgICAgICAvL+WcsOWbvlxyXG4gICAgICAgICB0aGlzLmJveE1hcD1bXTtcclxuICAgICAgICAgZm9yKGxldCBpPTA7aTwxNTtpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmJveE1hcFtpXT1bXTtcclxuICAgICAgICAgICAgZm9yKGxldCBqPTA7ajwxMDtqKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3hNYXBbaV1bal09MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLm5vZGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5ub2Rlc1tpXS5Hcm91cCAhPSAndGFyZ2V0Jyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJveE1hcFtNYXRoLnJvdW5kKHRoaXMubm9kZXNbaV0ueCAvIDQ4KV1bTWF0aC5yb3VuZCh0aGlzLm5vZGVzW2ldLnkgLyA0OCldPTE7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+azqOWGjOaMieS4i+ebkeWQrFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgLy90aGlzLm9udG91Y2htb3ZlKCk7XHJcbiAgICAgICB0aGlzLnNldEdhbWUoKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7Ly8g6I635Y+W6IqC54K55Z2Q5qCHXHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RYID0gbG9jYXRpb24ueDtcclxuICAgICAgICAgICAgdGhpcy5maXJzdFkgPSBsb2NhdGlvbi55O1xyXG4gICAgICAgICAgICAvLyDojrflj5bop6bngrnlnKjnqbrpl7ToioLngrnkuIrnmoTlnZDmoIdcclxuICAgICAgICAgICAgLy8gdmFyIHRlbXBQbGF5ZXIgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2NhdGlvbik7XHJcbiAgICAgICAgICAgIC8vIG5vZGUuc2V0UG9zaXRpb24odGVtcFBsYXllcik7XHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGxldCB0b3VjaFBvaW50ID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IGVuZFggPSB0aGlzLmZpcnN0WCAtIHRvdWNoUG9pbnQueDtcclxuICAgICAgICAgICAgbGV0IGVuZFkgPSB0aGlzLmZpcnN0WSAtIHRvdWNoUG9pbnQueTtcclxuICAgICAgICAgICAgLy8gdmFyIHRlbXBQbGF5ZXIgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaFBvaW50KTtcclxuICAgICAgICAgICAgLy8gbm9kZS5zZXRQb3NpdGlvbih0ZW1wUGxheWVyKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhlbmRYKSA+IE1hdGguYWJzKGVuZFkpKXtcclxuICAgICAgICAgICAgICAgIC8v5omL5Yq/5ZCR5bem5Y+zXHJcbiAgICAgICAgICAgICAgICAvL+WIpOaWreWQkeW3pui/mOaYr+WQkeWPsyBcclxuICAgICAgICAgICAgICAgIGlmIChlbmRYICA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5ZCR5bem5Ye95pWwXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24hPTMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lkJHlj7Plh73mlbBcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24hPTIpe1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5omL5Yq/5ZCR5LiK5LiLXHJcbiAgICAgICAgICAgICAgICAvL+WIpOaWreaJi+WKv+WQkeS4iui/mOaYr+WQkeS4i1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuZFkgID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lkJHkuIvlh73mlbBcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ2Rvd24nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WQkeS4iuWHveaVsFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZygndXAnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvblRvdWNoU3RhcnQoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvblRvdWNoTW92ZShldmVudCwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3NwZWVkVHlwZSA9IGRhdGEuc3BlZWRUeXBlO1xyXG4gICAgICAgIHRoaXMubW92ZURpciA9IGRhdGEubW92ZURpc3RhbmNlO1xyXG4gICAgICAgIGNjLmxvZyhcInRoaXMubW92ZURpciA9XCIgKyB0aGlzLm1vdmVEaXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fc3BlZWRUeXBlID0gZGF0YS5zcGVlZFR5cGU7XHJcbiAgICB9LFxyXG4gICAgLy9cclxuICAgIHNldEdhbWUoKXtcclxuICAgICAgICBjYy5sb2coXCJzZXRHYW1lIHN0YXJ0XCIpO1xyXG4gICAgICAgICAvL+S4i+S4quaenOWunuaWueWdl1xyXG4gICAgICAgICB2YXIgZ29hbCA9IHRoaXMubmV4dEdvYWw7XHJcbiAgICAgICAgIHRoaXMuYnVpbGRCb2R5KGdvYWwpO1xyXG4gICAgICAgICBjYy5sb2coXCJzZXRHYW1lIGVuZFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQmVnaW5Db250YWN0XCIpO1xyXG4gICAgfSxcclxuICAgIFxyXG5cclxuICAgIC8v6I635Y+W6aKc6Imy5ZCO5a6e5L6L5YyWNuenjeWbvuWDjyzov5jmnInkuIDkuKrnp43kvZzkuLpoZWFkXHJcbiAgICBidWlsZEJvZHkoZ29hbCl7XHJcbiAgICAgICAgY2MubG9nKFwiZ29hbDpcIitnb2FsKTtcclxuICAgICAgICB0aGlzLnByb2R1Y2VGb290KCk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAvL+enu+WKqFxyXG4gICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMubW92ZSx0aGlzLnNwZWVkKTtcclxuICAgICAgICAgY2MubG9nKFwiZ29hbDI6XCIrZ29hbCk7XHJcblxyXG4gICAgfSxcclxuICAgIC8v5qOA5rWL5p6c5a6e55Sf5oiQ5L2N572u5piv5ZCm6YeN5Y+g6LSq5ZCD6JuHXHJcbiAgICBvdmVybGFwRm9vdCgpe1xyXG4gICAgICAgIHRoaXMuZ29hbFggPSBNYXRoLmZsb29yKDE1Kk1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHRoaXMuZ29hbFkgPSBNYXRoLmZsb29yKDEwKk1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIC8v5Yik5pat6LSq5ZCD6JuH5omA5pyJ6YOo5L2N5piv5ZCm6YeN5Y+gXHJcbiAgICAgICAgZm9yKGxldCBqPTA7ajx0aGlzLnNuYWtlQXJyWC5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5ib3hNYXBbdGhpcy5nb2FsWF1bdGhpcy5nb2FsWV09PT0xKXtcclxuICAgICAgICAgICAgICAgIC8v6YeN5paw55Sf5oiQ77yM5bm25LiU6YeN5paw5qOA5rWLXHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXBGb290KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5ub2Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZXNbaV0ueD09dGhpcy5nb2FsWCAqIDQ4ICYmIHRoaXMubm9kZXNbaV0ueT09dGhpcy5nb2FsWSAqIDQ4KXtcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxhcEZvb3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvZHVjZUZvb3QoKTtcclxuICAgIH0sXHJcbiAgICAvL+eUn+aIkOaenOWunlxyXG4gICAgcHJvZHVjZUZvb3QoKXtcclxuICAgICAgICBpZih0aGlzLmlzRm9vZCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdGhpcy5uZXh0R29hbCA9IE1hdGguZmxvb3IoNypNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB0aGlzLm5leHRHb2FsID0gNDtcclxuICAgICAgICAvL+maj+acuueUn+aIkOafkOenjeminOiJslxyXG4gICAgICAgIC8vICBpZih0aGlzLm5leHRHb2FsPT09MCl7dGhpcy5wcmVmYWI9dGhpcy5yZWN0MDt9XHJcbiAgICAgICAgLy8gIGlmKHRoaXMubmV4dEdvYWw9PT0xKXt0aGlzLnByZWZhYj10aGlzLnJlY3QxO31cclxuICAgICAgICAvLyAgaWYodGhpcy5uZXh0R29hbD09PTIpe3RoaXMucHJlZmFiPXRoaXMucmVjdDI7fVxyXG4gICAgICAgIC8vICBpZih0aGlzLm5leHRHb2FsPT09Myl7dGhpcy5wcmVmYWI9dGhpcy5yZWN0Mzt9XHJcbiAgICAgICAgLy8gIGlmKHRoaXMubmV4dEdvYWw9PT00KXt0aGlzLnByZWZhYj10aGlzLnJlY3Q0O31cclxuICAgICAgICAvLyAgaWYodGhpcy5uZXh0R29hbD09PTUpe3RoaXMucHJlZmFiPXRoaXMucmVjdDU7fVxyXG4gICAgICAgIC8vICBpZih0aGlzLm5leHRHb2FsPT09Nil7dGhpcy5wcmVmYWI9dGhpcy5yZWN0Njt9XHJcbiAgICAgICAgLy/otKrlkIPom4fouqvkvZNcclxuICAgICAgICAgdGhpcy5zbmFrZUJvZHkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJlY3Q0KS5nZXRDb21wb25lbnQoJ3JlY3QnKTtcclxuICAgICAgICAgdGhpcy5zbmFrZUJvZHkubm9kZS5Hcm91cCA9ICd0YXJnZXQnO1xyXG4gICAgICAgICB2YXIgYm94PWNjLmZpbmQoJ0NhbnZhcy9ib3gnKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIHRoaXMuc25ha2VCb2R5Lm5vZGUueD10aGlzLmdvYWxYKjQ4OyAgICAgICBcclxuICAgICAgICAgdGhpcy5zbmFrZUJvZHkubm9kZS55PXRoaXMuZ29hbFkqNDg7XHJcbiAgICAgICAgIC8v6K6w5b2V5Zyw5Zu+6L+Z6YeM5bey57uP5pyJ5p6c5a6eXHJcbiAgICAgICAgIHZhciBib3hNYXBYID0gdGhpcy5zbmFrZUJvZHkubm9kZS54LzQ4O1xyXG4gICAgICAgICB2YXIgYm94TWFwWSA9IHRoaXMuc25ha2VCb2R5Lm5vZGUueS80ODtcclxuXHJcbiAgICAgICAgIGlmKHRoaXMuYm94TWFwW2JveE1hcFhdW2JveE1hcFldICE9IDEpe1xyXG4gICAgICAgICAgICB0aGlzLmJveE1hcFtib3hNYXBYXVtib3hNYXBZXT0xO1xyXG4gICAgICAgICAgICBib3guYWRkQ2hpbGQodGhpcy5zbmFrZUJvZHkubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGb29kID0gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgIH0sXHJcbiAgICAvL+WQg+WIsOaenOWunlxyXG4gICAgZWF0Rm9vdCgpe1xyXG4gICAgICAgIHZhciBoZWFkWCA9IHRoaXMuc25ha2VIZWFkLm5vZGUueDtcclxuICAgICAgICB2YXIgaGVhZFkgPSB0aGlzLnNuYWtlSGVhZC5ub2RlLnk7XHJcbiAgICAgICAgY2MubG9nKFwiaGVhZFggPVwiICsgaGVhZFggKyBcIiAgIGhlYWRZID1cIiArIGhlYWRZKTtcclxuXHJcbiAgICAgICAgIHZhciBYID0gKGhlYWRYIC0gdGhpcy5kaXN0YW5jZSkvNDg7XHJcbiAgICAgICAgIHZhciBZID0gKGhlYWRZIC0gdGhpcy5kaXN0YW5jZSkvNDg7XHJcbiAgICAgICAgIHZhciBib3hNYXBYID0gTWF0aC5yb3VuZChYKTtcclxuICAgICAgICAgdmFyIGJveE1hcFkgPSBNYXRoLnJvdW5kKFkpO1xyXG5cclxuICAgICAgICAgY2MubG9nKFwiYm94TWFwWCA9XCIgKyBib3hNYXBYKTtcclxuICAgICAgICAgY2MubG9nKFwiYm94TWFwWSA9XCIgKyBib3hNYXBZKTtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuS9jee9ruaYr+WQpuacieaenOWunlxyXG4gICAgICAgIGlmKHRoaXMuYm94TWFwW2JveE1hcFhdW2JveE1hcFldPT09MSl7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwi5L2N572u5pyJ5p6c5a6eXCIpO1xyXG4gICAgICAgICAgICAvL+WKoOWcqOWwvumDqFxyXG4gICAgICAgICAgICB2YXIgbGVuID0gdGhpcy5zbmFrZUFyclgubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyWFtsZW5dPXRoaXMuc25ha2VCb2R5Lm5vZGUueDtcclxuICAgICAgICAgICAgdGhpcy5zbmFrZUFycllbbGVuXT10aGlzLnNuYWtlQm9keS5ub2RlLnk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBsZXQgc3ByaXRlID0gdGhpcy5zbmFrZUJvZHkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICAgICAgLy8gc3ByaXRlLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKGNjLnVybC5yYXcoJ2Fzc2V0cy9pbWcvNS5wbmcnKSk7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLnNuYWtlQm9keS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmJvZHlTcHJpdGU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyW2xlbl09dGhpcy5zbmFrZUJvZHk7XHJcbiAgICAgICAgICAgIC8v5p6c5a6e6KKr5ZCD5LqGIFxyXG4gICAgICAgICAgICB0aGlzLmJveE1hcFtib3hNYXBYXVtib3hNYXBZXT0wO1xyXG4gICAgICAgICAgICAvL+WKoOWIhuaVsFxyXG4gICAgICAgICAgICB0aGlzLmFkZFNjb3JlKCk7XHJcbiAgICAgICAgICAgIC8v6ZqP5py655Sf5oiQ5LiL5LiA5Liq5p6c5a6eXHJcbiAgICAgICAgICAgIHRoaXMub3ZlcmxhcEZvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/liqDliIbmlbBcclxuICAgIGFkZFNjb3JlKCl7XHJcbiAgICAgICAgLy/moLnmja7kuI3lkIzmnpzlrp7lop7liqDliIbmlbBcclxuICAgICAgICAvLyBpZih0aGlzLm5leHRHb2FsPT09MCl7dGhpcy5zY29yZU51bSs9NTA7fVxyXG4gICAgICAgIC8vIGlmKHRoaXMubmV4dEdvYWw9PT0xKXt0aGlzLnNjb3JlTnVtKz0xMDA7fVxyXG4gICAgICAgIC8vIGlmKHRoaXMubmV4dEdvYWw9PT0yKXt0aGlzLnNjb3JlTnVtKz0yMDA7fVxyXG4gICAgICAgIC8vIGlmKHRoaXMubmV4dEdvYWw9PT0zKXt0aGlzLnNjb3JlTnVtKz0zMDA7fVxyXG4gICAgICAgIC8vIGlmKHRoaXMubmV4dEdvYWw9PT00KXt0aGlzLnNjb3JlTnVtKz00MDA7fVxyXG4gICAgICAgIC8vIGlmKHRoaXMubmV4dEdvYWw9PT01KXt0aGlzLnNjb3JlTnVtKz01MDA7fVxyXG4gICAgICAgIC8vIGlmKHRoaXMubmV4dEdvYWw9PT02KXt0aGlzLnNjb3JlTnVtKz02MDA7fVxyXG4gICAgICAgIHRoaXMuc2NvcmVOdW0rPTE7XHJcbiAgICAgICAgdGhpcy5zY29yZS5zdHJpbmc9dGhpcy5zY29yZU51bTtcclxuICAgICAgICB0aGlzLmlzRm9vZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIC8v56e75Yqo5pa55rOVXHJcbiAgICBtb3ZlICgpe1xyXG4gICAgICAgIC8v5pa55ZCRLHVwLTAsZG93bi0xLGxlZnQtMixyaWdodC0zXHJcblxyXG4gICAgICAgIHZhciBYID0gdGhpcy5zbmFrZUhlYWQubm9kZS54O1xyXG4gICAgICAgIHZhciBZID0gdGhpcy5zbmFrZUhlYWQubm9kZS55O1xyXG4gICAgICAgIHZhciBoZWFkWCA9IE1hdGgucm91bmQoWCAtIHRoaXMuZGlzdGFuY2UpO1xyXG4gICAgICAgIHZhciBoZWFkWSA9IE1hdGgucm91bmQoWSAtIHRoaXMuZGlzdGFuY2UpO1xyXG4gICAgICAgIC8vY2MubG9nKFwiaGVhZFggPVwiICsgaGVhZFggKyBcIiAgaGVhZFkgPVwiICsgaGVhZFkpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmRpcmVjdGlvbj09PTApe1xyXG4gICAgICAgICAgICAvL+enu+WKqOWJje+8jOWIpOaWrea4uOaIj+aYr+WQpue7k+adn1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZU92ZXIoaGVhZFgsaGVhZFkrNDgpO1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZT09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS55Kz00ODsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLnJvdGF0aW9uID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5sb2coXCJ1cFwiKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmRpcmVjdGlvbj09PTEpe1xyXG4gICAgICAgICAgICAvL+enu+WKqOWJje+8jOWIpOaWrea4uOaIj+aYr+WQpue7k+adn1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZU92ZXIoaGVhZFgsaGVhZFktNDgpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5nYW1lU3RhdGU9PT0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUueS09NDg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLnJvdGF0aW9uID0gMTgwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmxvZyhcImRvd25cIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5kaXJlY3Rpb249PT0yKXtcclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVPdmVyKGhlYWRYLTQ4LGhlYWRZKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLngtPTQ4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS5yb3RhdGlvbiA9IDI3MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5sb2coXCJsZWZ0XCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZGlyZWN0aW9uPT09Myl7XHJcbiAgICAgICAgICAgIC8v56e75Yqo5YmN77yM5Yik5pat5ri45oiP5piv5ZCm57uT5p2fXHJcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lT3ZlcihoZWFkWCs0OCxoZWFkWSk7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5nYW1lU3RhdGU9PT0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUueCs9NDg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLnJvdGF0aW9uID0gOTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MubG9nKFwicmlnaHRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgIHRoaXMuZWF0Rm9vdCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/np7vliqjnmoTml7blgJnvvIzouqvkvZPkuZ/lkJHlpLTnp7vliqhcclxuICAgIG1vdmVBbGwoKXtcclxuICAgICAgICB2YXIgWCA9IHRoaXMuc25ha2VIZWFkLm5vZGUueDtcclxuICAgICAgICB2YXIgWSA9IHRoaXMuc25ha2VIZWFkLm5vZGUueTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPXRoaXMuc25ha2VBcnJYLmxlbmd0aC0xO2k+MDtpLS0pe1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyWFtpXT10aGlzLnNuYWtlQXJyWFtpLTFdO1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyWVtpXT10aGlzLnNuYWtlQXJyWVtpLTFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+abtOaWsOi0quWQg+ibh+WktOmDqOS9jee9rizotKrlkIPom4fpmo/lpLTpg6jnp7vliqhcclxuXHJcbiAgICAgICAgdmFyIGhlYWRYID0gTWF0aC5yb3VuZChYIC0gdGhpcy5kaXN0YW5jZSk7XHJcbiAgICAgICAgdmFyIGhlYWRZID0gTWF0aC5yb3VuZChZIC0gdGhpcy5kaXN0YW5jZSk7XHJcbiAgICAgICAgdGhpcy5zbmFrZUFyclhbMF09aGVhZFg7XHJcbiAgICAgICAgdGhpcy5zbmFrZUFycllbMF09aGVhZFk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaj0xO2o8dGhpcy5zbmFrZUFyclgubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2VBcnJbal0ubm9kZS54PXRoaXMuc25ha2VBcnJYW2pdO1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyW2pdLm5vZGUueT10aGlzLnNuYWtlQXJyWVtqXTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIueisOaSniAgPVwiICsgb3RoZXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+mUruebmOebkeWQrFxyXG4gICAgb25LZXlEb3duIChldmVudCkge1xyXG4gICAgICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCJrZXkgY29kZSBpcyAgYSBhbmQgbGVmdFwiKTtcclxuICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uIT0zKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MjtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwia2V5IGNvZGUgaXMgIGQgYW5kIHJpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24hPTIpe1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0zO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwia2V5IGNvZGUgaXMgIHcgYW5kIHVwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uIT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZG93bjpcclxuICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcImtleSBjb2RlIGlzICBzIGFuZCBkb3duXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uIT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+WIpOaWrea4uOaIj+e7k+adn+eahOadoeS7tlxyXG4gICAgaXNHYW1lT3Zlcih4LHkpe1xyXG4gICAgICAgICAvL+WIpOaWreaYr+WQpui2heWHuuWcsOWbvlxyXG5cclxuICAgICAgICBpZih5PDAgfHwgeT49NDgwIHx8IHg8MCB8fCB4Pj03MjApe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMubm9kZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGVzW2ldLkdyb3VwICE9ICd0YXJnZXQnKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubm9kZXNbaV0ueD09eCAmJiB0aGlzLm5vZGVzW2ldLnk9PXkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WIpOaWreaYr+WQpueisOaSnuWIsOi0quWQg+ibh+i6q+S9k1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5zbmFrZUFyclgubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcInRoaXMuc25ha2VBcnJYW2ldICA9XCIgKyB0aGlzLnNuYWtlQXJyWFtpXSArIFwiIHg9XCIgKyB4KTtcclxuICAgICAgICAgICAgY2MubG9nKFwidGhpcy5zbmFrZUFycllbaV0gID1cIiArIHRoaXMuc25ha2VBcnJZW2ldICsgXCIgeT1cIiArIHkpO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5zbmFrZUFyclhbaV09PXggJiYgdGhpcy5zbmFrZUFycllbaV09PXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5ri45oiP57uT5p2fXHJcbiAgICBnYW1lT3ZlciAoKXtcclxuICAgICAgICAgICAgY2MubG9nKFwi57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAvL+a4uOaIj+eKtuaAgVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIC8v5bCG5aSx6LSl55qE55S76Z2i5pi+56S65Ye65p2lXHJcbiAgICAgICAgICAgIHRoaXMub3Zlci5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgLy/lgZzmraLnp7vliqhcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMubW92ZSk7XHJcbiAgICAgICAgICAgIC8v5YGc5q2i5omA5pyJ6Z+z5LmQXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICAvL+aaguWBnOa4uOaIj1xyXG4gICAgcGF1c2UoKXtcclxuICAgICAgICAvLzLooajnpLrmuLjmiI/nu5PmnZ9cclxuICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZSE9PTIpe1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZT09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGU9MDtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5idXR0b24uc3RyaW5nID0gXCJQbGF5XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMuYnV0dG9uLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLm9uU3ByaXRlOyBcclxuICAgICAgICAgICAgICAgIC8v5YGc5q2i56e75YqoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5tb3ZlKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5nYW1lU3RhdGU9PT0wKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlPTE7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuYnV0dG9uLnN0cmluZyA9IFwiUGF1c2VcIjtcclxuICAgICAgICAgICAgICAgIC8v5YGc5q2i56e75YqoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMubW92ZSx0aGlzLnNwZWVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5idXR0b24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMub2ZmU3ByaXRlOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+mHjeaWsOW8gOWni+a4uOaIj1xyXG4gICAgcmVwbGF5KCl7XHJcbiAgICAgICAgIC8v6YeN5paw5Yqg6L295ri45oiP5Zy65pmvXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic25ha2VyXCIpO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG4iXX0=