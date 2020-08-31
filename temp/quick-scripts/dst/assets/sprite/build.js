
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
    box.addChild(this.snakeBody.node);
    this.isFood = true;
    this.snakeBody.node.x = this.goalX * 48;
    this.snakeBody.node.y = this.goalY * 48; //记录地图这里已经有果实

    var boxMapX = this.snakeBody.node.x / 48;
    var boxMapY = this.snakeBody.node.y / 48;
    this.boxMap[boxMapX][boxMapY] = 1;
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
    this.scoreNum += 10;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3ByaXRlXFxidWlsZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJlY3QwIiwiUHJlZmFiIiwicmVjdDQiLCJyZWN0NSIsInJlY3Q3IiwibW92ZURpciIsInYyIiwiZGlzcGxheU5hbWUiLCJ0b29sdGlwIiwiX3NwZWVkVHlwZSIsIkpveXN0aWNrRW51bSIsIlNwZWVkVHlwZSIsIlNUT1AiLCJ0eXBlIiwicGxheWVyIiwiYmFzZXBvaW50IiwiYnV0dG9uIiwiTm9kZSIsInNjb3JlIiwiTGFiZWwiLCJvdmVyIiwic2xpZGVydiIsIlNsaWRlciIsImF1ZGlvIiwiQXVkaW9DbGlwIiwib25TcHJpdGUiLCJTcHJpdGVGcmFtZSIsIm9mZlNwcml0ZSIsImJvZHlTcHJpdGUiLCJvbkxvYWQiLCJsb2ciLCJpc0Zvb2QiLCJKb3lzdGlja0V2ZW50IiwiZ2V0SW5zdGFuY2UiLCJvbiIsIkpveXN0aWNrRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJvblRvdWNoRW5kIiwiZGlzdGFuY2UiLCJjb2xsaWRlciIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJwaHlzaWNzIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJkYiIsIlBoeXNpY3NNYW5hZ2VyIiwiRHJhd0JpdHMiLCJub2RlcyIsImZpbmQiLCJjaGlsZHJlbiIsImdhbWVTdGF0ZSIsInNjb3JlTnVtIiwibGVmdFgiLCJyaWdodFgiLCJzcGVlZCIsImRpcmVjdGlvbiIsInNuYWtlQXJyWCIsInNuYWtlQXJyWSIsInNuYWtlQXJyIiwibmV4dEdvYWwiLCJnb2FsWCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdvYWxZIiwic25ha2VIZWFkIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJub2RlIiwieCIsInkiLCJHcm91cCIsImJveCIsImFkZENoaWxkIiwiWCIsIlkiLCJib3hNYXAiLCJpIiwiaiIsImxlbmd0aCIsInJvdW5kIiwic3lzdGVtRXZlbnQiLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwic2V0R2FtZSIsImV2ZW50IiwibG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsImZpcnN0WCIsImZpcnN0WSIsInRvdWNoUG9pbnQiLCJlbmRYIiwiZW5kWSIsImFicyIsImRhdGEiLCJzcGVlZFR5cGUiLCJtb3ZlRGlzdGFuY2UiLCJnb2FsIiwiYnVpbGRCb2R5Iiwib25CZWdpbkNvbnRhY3QiLCJjb250YWN0Iiwic2VsZkNvbGxpZGVyIiwib3RoZXJDb2xsaWRlciIsImNvbnNvbGUiLCJwcm9kdWNlRm9vdCIsInNjaGVkdWxlIiwibW92ZSIsIm92ZXJsYXBGb290Iiwic25ha2VCb2R5IiwiYm94TWFwWCIsImJveE1hcFkiLCJlYXRGb290IiwiaGVhZFgiLCJoZWFkWSIsImxlbiIsInNwcml0ZSIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiYWRkU2NvcmUiLCJzdHJpbmciLCJpc0dhbWVPdmVyIiwicm90YXRpb24iLCJtb3ZlQWxsIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJsZWZ0IiwiZCIsInJpZ2h0IiwidyIsInVwIiwicyIsImRvd24iLCJnYW1lT3ZlciIsImFjdGl2ZSIsInVuc2NoZWR1bGUiLCJhdWRpb0VuZ2luZSIsInN0b3BBbGwiLCJwYXVzZSIsInJlcGxheSIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFDSixFQUFFLENBQUNLLE1BREQ7QUFFUkMsSUFBQUEsS0FB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QUFILENBQVkyRyxTQUFaLENBQXNCLFFBQXRCO0FBQ0g7QUF4ZkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpveXN0aWNrRW51bSBmcm9tIFwiLi9qb3lzdGljay9Kb3lzdGlja0VudW1cIjtcclxuaW1wb3J0IEpveXN0aWNrRXZlbnQgZnJvbSBcIi4vam95c3RpY2svSm95c3RpY2tFdmVudFwiO1xyXG5cclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcmVjdDA6Y2MuUHJlZmFiLFxyXG4gICAgICAgIHJlY3Q0OmNjLlByZWZhYixcclxuICAgICAgICByZWN0NTpjYy5QcmVmYWIsXHJcbiAgICAgICAgcmVjdDc6Y2MuUHJlZmFiLFxyXG5cclxuICAgIC8vIGZyb20gam95c3RpY2tcclxuICAgIG1vdmVEaXI6IHtcclxuICAgICAgICBkZWZhdWx0OiBjYy52MigwLCAxKSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ01vdmUgRGlyJyxcclxuICAgICAgICB0b29sdGlwOiAn56e75Yqo5pa55ZCRJyxcclxuICAgIH0sXHJcbiAgICBfc3BlZWRUeXBlOiB7XHJcbiAgICAgICAgZGVmYXVsdDogSm95c3RpY2tFbnVtLlNwZWVkVHlwZS5TVE9QLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnU3BlZWQgVHlwZScsXHJcbiAgICAgICAgdHlwZTogSm95c3RpY2tFbnVtLlNwZWVkVHlwZSxcclxuICAgICAgICB0b29sdGlwOiAn6YCf5bqm57qn5YirJ1xyXG4gICAgfSxcclxuICAgICAgIC8v5pKt5pS+6aKE5Yi26LWE5rqQXHJcbiAgICAgICBwbGF5ZXI6Y2MuUHJlZmFiLFxyXG4gICAgICAgYmFzZXBvaW50OmNjLlByZWZhYixcclxuICAgICAgIC8v5oyJ6ZKu6IqC54K5XHJcbiAgICAgICBidXR0b246Y2MuTm9kZSxcclxuICAgICAgIHNjb3JlOmNjLkxhYmVsLFxyXG4gICAgICAgb3ZlcjpjYy5Ob2RlLFxyXG4gICAgICAgLy/pgJ/luqbosIPoioLmu5HliqhcclxuICAgICAgIHNsaWRlcnY6Y2MuU2xpZGVyLFxyXG4gICAgICAgLy/pn7PpopFcclxuICAgICAgIGF1ZGlvOmNjLkF1ZGlvQ2xpcCxcclxuICAgICAgIG9uU3ByaXRlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb2ZmU3ByaXRlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYm9keVNwcml0ZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgLy8gICAgc3ViTm9kZXNBcnI6e1xyXG4gICAgLy8gICAgICAgICBkZWZhdWx0OltdLFxyXG4gICAgLy8gICAgICAgICB0eXBlOmNjLlByZWZhYixcclxuICAgIC8vICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmxvZyhcIm9ubG9hZCBzdGFydFwiKTtcclxuICAgICAgICB0aGlzLmlzRm9vZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub24oSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLm9uKEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub24oSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IDI0O1xyXG4gICAgICAgIHZhciBjb2xsaWRlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBjb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb2xsaWRlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb2xsaWRlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy/lvIDlkK/niannkIblvJXmk45cclxuICAgICAgICB2YXIgcGh5c2ljcyA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgcGh5c2ljcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBwaHlzaWNzLmdyYXZpdHkueSA9IDEwMDA7XHJcbiAgICAgICAgdmFyIGRiID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHM7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm5vZGVzID0gY2MuZmluZCgnQ2FudmFzL2JveC9ub2RlcycpLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICAvL+a4uOaIj+eKtuaAgSAgMC3mmoLlgZwgMS3ov5DooYwgMi3muLjmiI/nu5PmnZ8gXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAxO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8v6Z+z5pWIXHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW8sIHRydWUpO1xyXG4gICAgICAgIC8v5YiG5pWwXHJcbiAgICAgICAgdGhpcy5zY29yZU51bT0wO1xyXG4gICAgICAgIC8v6L6555WM5YC8XHJcbiAgICAgICAgdGhpcy5sZWZ0WDtcclxuICAgICAgICB0aGlzLnJpZ2h0WDtcclxuICAgICAgICAvL+mAn+W6plxyXG4gICAgICAgIHRoaXMuc3BlZWQ9MC40O1xyXG4gICAgICAgIC8v5pa55ZCRLHVwLTAsZG93bi0xLGxlZnQtMixyaWdodC0zXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgICAgIC8v6LSq5ZCD6JuH5pWw57uELOS6jOS9jeaVsOe7hFxyXG4gICAgICAgIHRoaXMuc25ha2VBcnJYPVtdO1xyXG4gICAgICAgIHRoaXMuc25ha2VBcnJZPVtdO1xyXG4gICAgICAgIHRoaXMuc25ha2VBcnI9W107XHJcbiAgICAgICAgLy/lnLDlm77kuIrpmo/mnLrnlJ/miJDmnpzlrp4oeCx5KeWdkOagh1xyXG4gICAgICAgIC8vdGhpcy5uZXh0R29hbCA9IE1hdGguZmxvb3IoNypNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB0aGlzLm5leHRHb2FsID0gNDtcclxuICAgICAgICB0aGlzLmdvYWxYID0gTWF0aC5mbG9vcigxNSpNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB0aGlzLmdvYWxZID0gTWF0aC5mbG9vcigxMCpNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICAvL+iuvue9rui0quWQg+ibh+WktOmDqFxyXG4gICAgICAgICB0aGlzLnNuYWtlSGVhZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucmVjdDcpLmdldENvbXBvbmVudCgncmVjdCcpO1xyXG4gICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLng9MzM2ICsgdGhpcy5kaXN0YW5jZTtcclxuICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS55PTI0MCArIHRoaXMuZGlzdGFuY2U7XHJcbiAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUuR3JvdXAgPSAnaGVybyc7XHJcblxyXG4gICAgICAgICB2YXIgYm94PWNjLmZpbmQoJ0NhbnZhcy9ib3gnKTtcclxuICAgICAgICAgYm94LmFkZENoaWxkKHRoaXMuc25ha2VIZWFkLm5vZGUpO1xyXG4gICAgICAgICB2YXIgWCA9IHRoaXMuc25ha2VIZWFkLm5vZGUueDtcclxuICAgICAgICAgdmFyIFkgPSB0aGlzLnNuYWtlSGVhZC5ub2RlLnk7XHJcblxyXG4gICAgICAgICB0aGlzLnNuYWtlQXJyWFswXT1YIC0gdGhpcy5kaXN0YW5jZTsgXHJcbiAgICAgICAgIHRoaXMuc25ha2VBcnJZWzBdPVkgLSB0aGlzLmRpc3RhbmNlO1xyXG4gICAgICAgICB0aGlzLnNuYWtlQXJyWzBdID0gdGhpcy5zbmFrZUhlYWQ7XHJcbiAgICAgICAgIC8v5Zyw5Zu+XHJcbiAgICAgICAgIHRoaXMuYm94TWFwPVtdO1xyXG4gICAgICAgICBmb3IobGV0IGk9MDtpPDE1O2krKyl7XHJcbiAgICAgICAgICAgIHRoaXMuYm94TWFwW2ldPVtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPDEwO2orKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJveE1hcFtpXVtqXT0wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMubm9kZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGVzW2ldLkdyb3VwICE9ICd0YXJnZXQnKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm94TWFwW01hdGgucm91bmQodGhpcy5ub2Rlc1tpXS54IC8gNDgpXVtNYXRoLnJvdW5kKHRoaXMubm9kZXNbaV0ueSAvIDQ4KV09MTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5rOo5YaM5oyJ5LiL55uR5ZCsXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAvL3RoaXMub250b3VjaG1vdmUoKTtcclxuICAgICAgIHRoaXMuc2V0R2FtZSgpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTsvLyDojrflj5boioLngrnlnZDmoIdcclxuICAgICAgICAgICAgdGhpcy5maXJzdFggPSBsb2NhdGlvbi54O1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0WSA9IGxvY2F0aW9uLnk7XHJcbiAgICAgICAgICAgIC8vIOiOt+WPluinpueCueWcqOepuumXtOiKgueCueS4iueahOWdkOagh1xyXG4gICAgICAgICAgICAvLyB2YXIgdGVtcFBsYXllciA9IG5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGxvY2F0aW9uKTtcclxuICAgICAgICAgICAgLy8gbm9kZS5zZXRQb3NpdGlvbih0ZW1wUGxheWVyKTtcclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgbGV0IHRvdWNoUG9pbnQgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBsZXQgZW5kWCA9IHRoaXMuZmlyc3RYIC0gdG91Y2hQb2ludC54O1xyXG4gICAgICAgICAgICBsZXQgZW5kWSA9IHRoaXMuZmlyc3RZIC0gdG91Y2hQb2ludC55O1xyXG4gICAgICAgICAgICAvLyB2YXIgdGVtcFBsYXllciA9IG5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoUG9pbnQpO1xyXG4gICAgICAgICAgICAvLyBub2RlLnNldFBvc2l0aW9uKHRlbXBQbGF5ZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVuZFgpID4gTWF0aC5hYnMoZW5kWSkpe1xyXG4gICAgICAgICAgICAgICAgLy/miYvlir/lkJHlt6blj7NcclxuICAgICAgICAgICAgICAgIC8v5Yik5pat5ZCR5bem6L+Y5piv5ZCR5Y+zIFxyXG4gICAgICAgICAgICAgICAgaWYgKGVuZFggID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lkJHlt6blh73mlbBcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ2xlZnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9Myl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WQkeWPs+WHveaVsFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZygncmlnaHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/miYvlir/lkJHkuIrkuItcclxuICAgICAgICAgICAgICAgIC8v5Yik5pat5omL5Yq/5ZCR5LiK6L+Y5piv5ZCR5LiLXHJcbiAgICAgICAgICAgICAgICBpZiAoZW5kWSAgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAvL+WQkeS4i+WHveaVsFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZygnZG93bicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uIT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5ZCR5LiK5Ye95pWwXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKCd1cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uIT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hTdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fc3BlZWRUeXBlID0gZGF0YS5zcGVlZFR5cGU7XHJcbiAgICAgICAgdGhpcy5tb3ZlRGlyID0gZGF0YS5tb3ZlRGlzdGFuY2U7XHJcbiAgICAgICAgY2MubG9nKFwidGhpcy5tb3ZlRGlyID1cIiArIHRoaXMubW92ZURpcik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uVG91Y2hFbmQoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9zcGVlZFR5cGUgPSBkYXRhLnNwZWVkVHlwZTtcclxuICAgIH0sXHJcbiAgICAvL1xyXG4gICAgc2V0R2FtZSgpe1xyXG4gICAgICAgIGNjLmxvZyhcInNldEdhbWUgc3RhcnRcIik7XHJcbiAgICAgICAgIC8v5LiL5Liq5p6c5a6e5pa55Z2XXHJcbiAgICAgICAgIHZhciBnb2FsID0gdGhpcy5uZXh0R29hbDtcclxuICAgICAgICAgdGhpcy5idWlsZEJvZHkoZ29hbCk7XHJcbiAgICAgICAgIGNjLmxvZyhcInNldEdhbWUgZW5kXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25CZWdpbkNvbnRhY3RcIik7XHJcbiAgICB9LFxyXG4gICAgXHJcblxyXG4gICAgLy/ojrflj5bpopzoibLlkI7lrp7kvovljJY256eN5Zu+5YOPLOi/mOacieS4gOS4quenjeS9nOS4umhlYWRcclxuICAgIGJ1aWxkQm9keShnb2FsKXtcclxuICAgICAgICBjYy5sb2coXCJnb2FsOlwiK2dvYWwpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjZUZvb3QoKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIC8v56e75YqoXHJcbiAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5tb3ZlLHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICBjYy5sb2coXCJnb2FsMjpcIitnb2FsKTtcclxuXHJcbiAgICB9LFxyXG4gICAgLy/mo4DmtYvmnpzlrp7nlJ/miJDkvY3nva7mmK/lkKbph43lj6DotKrlkIPom4dcclxuICAgIG92ZXJsYXBGb290KCl7XHJcbiAgICAgICAgdGhpcy5nb2FsWCA9IE1hdGguZmxvb3IoMTUqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5nb2FsWSA9IE1hdGguZmxvb3IoMTAqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgLy/liKTmlq3otKrlkIPom4fmiYDmnInpg6jkvY3mmK/lkKbph43lj6BcclxuICAgICAgICBmb3IobGV0IGo9MDtqPHRoaXMuc25ha2VBcnJYLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLmJveE1hcFt0aGlzLmdvYWxYXVt0aGlzLmdvYWxZXT09PTEpe1xyXG4gICAgICAgICAgICAgICAgLy/ph43mlrDnlJ/miJDvvIzlubbkuJTph43mlrDmo4DmtYtcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxhcEZvb3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLm5vZGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5ub2Rlc1tpXS54PT10aGlzLmdvYWxYICogNDggJiYgdGhpcy5ub2Rlc1tpXS55PT10aGlzLmdvYWxZICogNDgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGFwRm9vdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9kdWNlRm9vdCgpO1xyXG4gICAgfSxcclxuICAgIC8v55Sf5oiQ5p6c5a6eXHJcbiAgICBwcm9kdWNlRm9vdCgpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNGb29kKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy90aGlzLm5leHRHb2FsID0gTWF0aC5mbG9vcig3Kk1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHRoaXMubmV4dEdvYWwgPSA0O1xyXG4gICAgICAgIC8v6ZqP5py655Sf5oiQ5p+Q56eN6aKc6ImyXHJcbiAgICAgICAgLy8gIGlmKHRoaXMubmV4dEdvYWw9PT0wKXt0aGlzLnByZWZhYj10aGlzLnJlY3QwO31cclxuICAgICAgICAvLyAgaWYodGhpcy5uZXh0R29hbD09PTEpe3RoaXMucHJlZmFiPXRoaXMucmVjdDE7fVxyXG4gICAgICAgIC8vICBpZih0aGlzLm5leHRHb2FsPT09Mil7dGhpcy5wcmVmYWI9dGhpcy5yZWN0Mjt9XHJcbiAgICAgICAgLy8gIGlmKHRoaXMubmV4dEdvYWw9PT0zKXt0aGlzLnByZWZhYj10aGlzLnJlY3QzO31cclxuICAgICAgICAvLyAgaWYodGhpcy5uZXh0R29hbD09PTQpe3RoaXMucHJlZmFiPXRoaXMucmVjdDQ7fVxyXG4gICAgICAgIC8vICBpZih0aGlzLm5leHRHb2FsPT09NSl7dGhpcy5wcmVmYWI9dGhpcy5yZWN0NTt9XHJcbiAgICAgICAgLy8gIGlmKHRoaXMubmV4dEdvYWw9PT02KXt0aGlzLnByZWZhYj10aGlzLnJlY3Q2O31cclxuICAgICAgICAvL+i0quWQg+ibh+i6q+S9k1xyXG4gICAgICAgICB0aGlzLnNuYWtlQm9keSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucmVjdDQpLmdldENvbXBvbmVudCgncmVjdCcpO1xyXG4gICAgICAgICB0aGlzLnNuYWtlQm9keS5ub2RlLkdyb3VwID0gJ3RhcmdldCc7XHJcbiAgICAgICAgIHZhciBib3g9Y2MuZmluZCgnQ2FudmFzL2JveCcpO1xyXG4gICAgICAgICBib3guYWRkQ2hpbGQodGhpcy5zbmFrZUJvZHkubm9kZSk7XHJcbiAgICAgICAgIHRoaXMuaXNGb29kID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgIHRoaXMuc25ha2VCb2R5Lm5vZGUueD10aGlzLmdvYWxYKjQ4OyAgICAgICBcclxuICAgICAgICAgdGhpcy5zbmFrZUJvZHkubm9kZS55PXRoaXMuZ29hbFkqNDg7XHJcbiAgICAgICAgIC8v6K6w5b2V5Zyw5Zu+6L+Z6YeM5bey57uP5pyJ5p6c5a6eXHJcbiAgICAgICAgIHZhciBib3hNYXBYID0gdGhpcy5zbmFrZUJvZHkubm9kZS54LzQ4O1xyXG4gICAgICAgICB2YXIgYm94TWFwWSA9IHRoaXMuc25ha2VCb2R5Lm5vZGUueS80ODtcclxuICAgICAgICAgdGhpcy5ib3hNYXBbYm94TWFwWF1bYm94TWFwWV09MTtcclxuICAgIH0sXHJcbiAgICAvL+WQg+WIsOaenOWunlxyXG4gICAgZWF0Rm9vdCgpe1xyXG4gICAgICAgIHZhciBoZWFkWCA9IHRoaXMuc25ha2VIZWFkLm5vZGUueDtcclxuICAgICAgICB2YXIgaGVhZFkgPSB0aGlzLnNuYWtlSGVhZC5ub2RlLnk7XHJcbiAgICAgICAgY2MubG9nKFwiaGVhZFggPVwiICsgaGVhZFggKyBcIiAgIGhlYWRZID1cIiArIGhlYWRZKTtcclxuXHJcbiAgICAgICAgIHZhciBYID0gKGhlYWRYIC0gdGhpcy5kaXN0YW5jZSkvNDg7XHJcbiAgICAgICAgIHZhciBZID0gKGhlYWRZIC0gdGhpcy5kaXN0YW5jZSkvNDg7XHJcbiAgICAgICAgIHZhciBib3hNYXBYID0gTWF0aC5yb3VuZChYKTtcclxuICAgICAgICAgdmFyIGJveE1hcFkgPSBNYXRoLnJvdW5kKFkpO1xyXG5cclxuICAgICAgICAgY2MubG9nKFwiYm94TWFwWCA9XCIgKyBib3hNYXBYKTtcclxuICAgICAgICAgY2MubG9nKFwiYm94TWFwWSA9XCIgKyBib3hNYXBZKTtcclxuICAgICAgICAvL+WIpOaWreaYr+WQpuS9jee9ruaYr+WQpuacieaenOWunlxyXG4gICAgICAgIGlmKHRoaXMuYm94TWFwW2JveE1hcFhdW2JveE1hcFldPT09MSl7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKFwi5L2N572u5pyJ5p6c5a6eXCIpO1xyXG4gICAgICAgICAgICAvL+WKoOWcqOWwvumDqFxyXG4gICAgICAgICAgICB2YXIgbGVuID0gdGhpcy5zbmFrZUFyclgubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyWFtsZW5dPXRoaXMuc25ha2VCb2R5Lm5vZGUueDtcclxuICAgICAgICAgICAgdGhpcy5zbmFrZUFycllbbGVuXT10aGlzLnNuYWtlQm9keS5ub2RlLnk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBsZXQgc3ByaXRlID0gdGhpcy5zbmFrZUJvZHkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICAgICAgLy8gc3ByaXRlLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKGNjLnVybC5yYXcoJ2Fzc2V0cy9pbWcvNS5wbmcnKSk7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLnNuYWtlQm9keS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmJvZHlTcHJpdGU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyW2xlbl09dGhpcy5zbmFrZUJvZHk7XHJcbiAgICAgICAgICAgIC8v5p6c5a6e6KKr5ZCD5LqGIFxyXG4gICAgICAgICAgICB0aGlzLmJveE1hcFtib3hNYXBYXVtib3hNYXBZXT0wO1xyXG4gICAgICAgICAgICAvL+WKoOWIhuaVsFxyXG4gICAgICAgICAgICB0aGlzLmFkZFNjb3JlKCk7XHJcbiAgICAgICAgICAgIC8v6ZqP5py655Sf5oiQ5LiL5LiA5Liq5p6c5a6eXHJcbiAgICAgICAgICAgIHRoaXMub3ZlcmxhcEZvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/liqDliIbmlbBcclxuICAgIGFkZFNjb3JlKCl7XHJcbiAgICAgICAgLy/moLnmja7kuI3lkIzmnpzlrp7lop7liqDliIbmlbBcclxuICAgICAgICAvLyBpZih0aGlzLm5leHRHb2FsPT09MCl7dGhpcy5zY29yZU51bSs9NTA7fVxyXG4gICAgICAgIC8vIGlmKHRoaXMubmV4dEdvYWw9PT0xKXt0aGlzLnNjb3JlTnVtKz0xMDA7fVxyXG4gICAgICAgIC8vIGlmKHRoaXMubmV4dEdvYWw9PT0yKXt0aGlzLnNjb3JlTnVtKz0yMDA7fVxyXG4gICAgICAgIC8vIGlmKHRoaXMubmV4dEdvYWw9PT0zKXt0aGlzLnNjb3JlTnVtKz0zMDA7fVxyXG4gICAgICAgIC8vIGlmKHRoaXMubmV4dEdvYWw9PT00KXt0aGlzLnNjb3JlTnVtKz00MDA7fVxyXG4gICAgICAgIC8vIGlmKHRoaXMubmV4dEdvYWw9PT01KXt0aGlzLnNjb3JlTnVtKz01MDA7fVxyXG4gICAgICAgIC8vIGlmKHRoaXMubmV4dEdvYWw9PT02KXt0aGlzLnNjb3JlTnVtKz02MDA7fVxyXG4gICAgICAgIHRoaXMuc2NvcmVOdW0rPTEwO1xyXG4gICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nPXRoaXMuc2NvcmVOdW07XHJcbiAgICAgICAgdGhpcy5pc0Zvb2QgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICAvL+enu+WKqOaWueazlVxyXG4gICAgbW92ZSAoKXtcclxuICAgICAgICAvL+aWueWQkSx1cC0wLGRvd24tMSxsZWZ0LTIscmlnaHQtM1xyXG5cclxuICAgICAgICB2YXIgWCA9IHRoaXMuc25ha2VIZWFkLm5vZGUueDtcclxuICAgICAgICB2YXIgWSA9IHRoaXMuc25ha2VIZWFkLm5vZGUueTtcclxuICAgICAgICB2YXIgaGVhZFggPSBNYXRoLnJvdW5kKFggLSB0aGlzLmRpc3RhbmNlKTtcclxuICAgICAgICB2YXIgaGVhZFkgPSBNYXRoLnJvdW5kKFkgLSB0aGlzLmRpc3RhbmNlKTtcclxuICAgICAgICAvL2NjLmxvZyhcImhlYWRYID1cIiArIGhlYWRYICsgXCIgIGhlYWRZID1cIiArIGhlYWRZKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5kaXJlY3Rpb249PT0wKXtcclxuICAgICAgICAgICAgLy/np7vliqjliY3vvIzliKTmlq3muLjmiI/mmK/lkKbnu5PmnZ9cclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVPdmVyKGhlYWRYLGhlYWRZKzQ4KTtcclxuICAgICAgICAgICAgaWYodGhpcy5nYW1lU3RhdGU9PT0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUueSs9NDg7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MubG9nKFwidXBcIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5kaXJlY3Rpb249PT0xKXtcclxuICAgICAgICAgICAgLy/np7vliqjliY3vvIzliKTmlq3muLjmiI/mmK/lkKbnu5PmnZ9cclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVPdmVyKGhlYWRYLGhlYWRZLTQ4KTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLnktPTQ4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS5yb3RhdGlvbiA9IDE4MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5sb2coXCJkb3duXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZGlyZWN0aW9uPT09Mil7XHJcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lT3ZlcihoZWFkWC00OCxoZWFkWSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZT09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS54LT00ODtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUucm90YXRpb24gPSAyNzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MubG9nKFwibGVmdFwiKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmRpcmVjdGlvbj09PTMpe1xyXG4gICAgICAgICAgICAvL+enu+WKqOWJje+8jOWIpOaWrea4uOaIj+aYr+WQpue7k+adn1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZU92ZXIoaGVhZFgrNDgsaGVhZFkpO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLngrPTQ4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS5yb3RhdGlvbiA9IDkwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmxvZyhcInJpZ2h0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZT09PTEpe1xyXG4gICAgICAgICAgICB0aGlzLmVhdEZvb3QoKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v56e75Yqo55qE5pe25YCZ77yM6Lqr5L2T5Lmf5ZCR5aS056e75YqoXHJcbiAgICBtb3ZlQWxsKCl7XHJcbiAgICAgICAgdmFyIFggPSB0aGlzLnNuYWtlSGVhZC5ub2RlLng7XHJcbiAgICAgICAgdmFyIFkgPSB0aGlzLnNuYWtlSGVhZC5ub2RlLnk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT10aGlzLnNuYWtlQXJyWC5sZW5ndGgtMTtpPjA7aS0tKXtcclxuICAgICAgICAgICAgdGhpcy5zbmFrZUFyclhbaV09dGhpcy5zbmFrZUFyclhbaS0xXTtcclxuICAgICAgICAgICAgdGhpcy5zbmFrZUFycllbaV09dGhpcy5zbmFrZUFycllbaS0xXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mm7TmlrDotKrlkIPom4flpLTpg6jkvY3nva4s6LSq5ZCD6JuH6ZqP5aS06YOo56e75YqoXHJcblxyXG4gICAgICAgIHZhciBoZWFkWCA9IE1hdGgucm91bmQoWCAtIHRoaXMuZGlzdGFuY2UpO1xyXG4gICAgICAgIHZhciBoZWFkWSA9IE1hdGgucm91bmQoWSAtIHRoaXMuZGlzdGFuY2UpO1xyXG4gICAgICAgIHRoaXMuc25ha2VBcnJYWzBdPWhlYWRYO1xyXG4gICAgICAgIHRoaXMuc25ha2VBcnJZWzBdPWhlYWRZO1xyXG5cclxuICAgICAgICBmb3IobGV0IGo9MTtqPHRoaXMuc25ha2VBcnJYLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyW2pdLm5vZGUueD10aGlzLnNuYWtlQXJyWFtqXTtcclxuICAgICAgICAgICAgdGhpcy5zbmFrZUFycltqXS5ub2RlLnk9dGhpcy5zbmFrZUFycllbal07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnorDmkp4gID1cIiArIG90aGVyKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/plK7nm5jnm5HlkKxcclxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcclxuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwia2V5IGNvZGUgaXMgIGEgYW5kIGxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9Myl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTI7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcImtleSBjb2RlIGlzICBkIGFuZCByaWdodFwiKTtcclxuICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uIT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb249MztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcImtleSBjb2RlIGlzICB3IGFuZCB1cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmRvd246XHJcbiAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCJrZXkgY29kZSBpcyAgcyBhbmQgZG93blwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/liKTmlq3muLjmiI/nu5PmnZ/nmoTmnaHku7ZcclxuICAgIGlzR2FtZU92ZXIoeCx5KXtcclxuICAgICAgICAgLy/liKTmlq3mmK/lkKbotoXlh7rlnLDlm75cclxuXHJcbiAgICAgICAgaWYoeTwwIHx8IHk+PTQ4MCB8fCB4PDAgfHwgeD49NzIwKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLm5vZGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5ub2Rlc1tpXS5Hcm91cCAhPSAndGFyZ2V0Jyl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm5vZGVzW2ldLng9PXggJiYgdGhpcy5ub2Rlc1tpXS55PT15KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbnorDmkp7liLDotKrlkIPom4fouqvkvZNcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuc25ha2VBcnJYLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJ0aGlzLnNuYWtlQXJyWFtpXSAgPVwiICsgdGhpcy5zbmFrZUFyclhbaV0gKyBcIiB4PVwiICsgeCk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcInRoaXMuc25ha2VBcnJZW2ldICA9XCIgKyB0aGlzLnNuYWtlQXJyWVtpXSArIFwiIHk9XCIgKyB5KTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuc25ha2VBcnJYW2ldPT14ICYmIHRoaXMuc25ha2VBcnJZW2ldPT15KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+a4uOaIj+e7k+adn1xyXG4gICAgZ2FtZU92ZXIgKCl7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIue7k+adn1wiKTtcclxuICAgICAgICAgICAgLy/muLjmiI/nirbmgIFcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAyO1xyXG4gICAgICAgICAgICAvL+WwhuWksei0peeahOeUu+mdouaYvuekuuWHuuadpVxyXG4gICAgICAgICAgICB0aGlzLm92ZXIuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIC8v5YGc5q2i56e75YqoXHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLm1vdmUpO1xyXG4gICAgICAgICAgICAvL+WBnOatouaJgOaciemfs+S5kFxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgLy/mmoLlgZzmuLjmiI9cclxuICAgIHBhdXNlKCl7XHJcbiAgICAgICAgLy8y6KGo56S65ri45oiP57uT5p2fXHJcbiAgICAgICAgaWYodGhpcy5nYW1lU3RhdGUhPT0yKXtcclxuICAgICAgICAgICAgaWYodGhpcy5nYW1lU3RhdGU9PT0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlPTA7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuYnV0dG9uLnN0cmluZyA9IFwiUGxheVwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLmJ1dHRvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5vblNwcml0ZTsgXHJcbiAgICAgICAgICAgICAgICAvL+WBnOatouenu+WKqFxyXG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMubW92ZSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuZ2FtZVN0YXRlPT09MCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZT0xO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmJ1dHRvbi5zdHJpbmcgPSBcIlBhdXNlXCI7XHJcbiAgICAgICAgICAgICAgICAvL+WBnOatouenu+WKqFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLm1vdmUsdGhpcy5zcGVlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMuYnV0dG9uLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLm9mZlNwcml0ZTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/ph43mlrDlvIDlp4vmuLjmiI9cclxuICAgIHJlcGxheSgpe1xyXG4gICAgICAgICAvL+mHjeaWsOWKoOi9vea4uOaIj+WcuuaZr1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNuYWtlclwiKTtcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuIl19