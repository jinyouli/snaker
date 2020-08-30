
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
    } //    subNodesArr:{
    //         default:[],
    //         type:cc.Prefab,
    //    }

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
    //this.nextGoal = Math.floor(7*Math.random());
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


    this.snakeArrX[0] = X - this.distance;
    this.snakeArrY[0] = Y - this.distance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcHJpdGUvYnVpbGQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJyZWN0MCIsIlByZWZhYiIsInJlY3Q0IiwicmVjdDUiLCJyZWN0NyIsIm1vdmVEaXIiLCJ2MiIsImRpc3BsYXlOYW1lIiwidG9vbHRpcCIsIl9zcGVlZFR5cGUiLCJKb3lzdGlja0VudW0iLCJTcGVlZFR5cGUiLCJTVE9QIiwidHlwZSIsInBsYXllciIsImJhc2Vwb2ludCIsImJ1dHRvbiIsIk5vZGUiLCJzY29yZSIsIkxhYmVsIiwib3ZlciIsInNsaWRlcnYiLCJTbGlkZXIiLCJhdWRpbyIsIkF1ZGlvQ2xpcCIsIm9uU3ByaXRlIiwiU3ByaXRlRnJhbWUiLCJvZmZTcHJpdGUiLCJvbkxvYWQiLCJsb2ciLCJKb3lzdGlja0V2ZW50IiwiZ2V0SW5zdGFuY2UiLCJvbiIsIkpveXN0aWNrRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJvblRvdWNoRW5kIiwiZGlzdGFuY2UiLCJjb2xsaWRlciIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJwaHlzaWNzIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJkYiIsIlBoeXNpY3NNYW5hZ2VyIiwiRHJhd0JpdHMiLCJub2RlcyIsImZpbmQiLCJjaGlsZHJlbiIsImdhbWVTdGF0ZSIsInNjb3JlTnVtIiwibGVmdFgiLCJyaWdodFgiLCJzcGVlZCIsImRpcmVjdGlvbiIsInNuYWtlQXJyWCIsInNuYWtlQXJyWSIsInNuYWtlQXJyIiwibmV4dEdvYWwiLCJnb2FsWCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdvYWxZIiwic25ha2VIZWFkIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJub2RlIiwieCIsInkiLCJHcm91cCIsImJveCIsImFkZENoaWxkIiwiWCIsIlkiLCJib3hNYXAiLCJpIiwiaiIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsInNldEdhbWUiLCJldmVudCIsImxvY2F0aW9uIiwiZ2V0TG9jYXRpb24iLCJmaXJzdFgiLCJmaXJzdFkiLCJ0b3VjaFBvaW50IiwiZW5kWCIsImVuZFkiLCJhYnMiLCJkYXRhIiwic3BlZWRUeXBlIiwibW92ZURpc3RhbmNlIiwiZ29hbCIsImJ1aWxkQm9keSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJjb25zb2xlIiwicHJvZHVjZUZvb3QiLCJzY2hlZHVsZSIsIm1vdmUiLCJvdmVybGFwRm9vdCIsImxlbmd0aCIsInNuYWtlQm9keSIsImJveE1hcFgiLCJib3hNYXBZIiwiZWF0Rm9vdCIsImhlYWRYIiwiaGVhZFkiLCJyb3VuZCIsImxlbiIsImFkZFNjb3JlIiwic3RyaW5nIiwiaXNHYW1lT3ZlciIsInJvdGF0aW9uIiwibW92ZUFsbCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJhIiwibGVmdCIsImQiLCJyaWdodCIsInciLCJ1cCIsInMiLCJkb3duIiwiZ2FtZU92ZXIiLCJhY3RpdmUiLCJ1bnNjaGVkdWxlIiwiYXVkaW9FbmdpbmUiLCJzdG9wQWxsIiwicGF1c2UiLCJzcHJpdGUiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsInJlcGxheSIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFDSixFQUFFLENBQUNLLE1BREQ7QUFFUkMsSUFBQUEsS0FBSyxFQUFDTixFQUFFLENBQUNLLE1BRkQ7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S0MsVUFBTCxDQUFnQixLQUFLaEMsSUFBckIsRUFQRyxDQVFIOztBQUNBakgsSUFBQUEsRUFBRSxDQUFDa0osV0FBSCxDQUFlQyxPQUFmO0FBRVAsR0E5Ykk7QUErYkw7QUFDQUMsRUFBQUEsS0FoY0ssbUJBZ2NFO0FBQ0g7QUFDQSxRQUFHLEtBQUszRixTQUFMLEtBQWlCLENBQXBCLEVBQXNCO0FBQ2xCLFVBQUcsS0FBS0EsU0FBTCxLQUFpQixDQUFwQixFQUFzQjtBQUNsQixhQUFLQSxTQUFMLEdBQWUsQ0FBZixDQURrQixDQUVsQjs7QUFFQSxZQUFJNEYsTUFBTSxHQUFHLEtBQUtqSSxNQUFMLENBQVlzRCxZQUFaLENBQXlCMUUsRUFBRSxDQUFDc0osTUFBNUIsQ0FBYjtBQUNBRCxRQUFBQSxNQUFNLENBQUNFLFdBQVAsR0FBcUIsS0FBSzFILFFBQTFCLENBTGtCLENBTWxCOztBQUNBLGFBQUtvSCxVQUFMLENBQWdCLEtBQUtoQyxJQUFyQjtBQUNILE9BUkQsTUFRTSxJQUFHLEtBQUt4RCxTQUFMLEtBQWlCLENBQXBCLEVBQXNCO0FBQ3hCLGFBQUtBLFNBQUwsR0FBZSxDQUFmLENBRHdCLENBRXhCO0FBQ0E7O0FBQ0EsYUFBS3VELFFBQUwsQ0FBYyxLQUFLQyxJQUFuQixFQUF3QixLQUFLcEQsS0FBN0I7O0FBRUEsWUFBSXdGLE9BQU0sR0FBRyxLQUFLakksTUFBTCxDQUFZc0QsWUFBWixDQUF5QjFFLEVBQUUsQ0FBQ3NKLE1BQTVCLENBQWI7O0FBQ0FELFFBQUFBLE9BQU0sQ0FBQ0UsV0FBUCxHQUFxQixLQUFLeEgsU0FBMUI7QUFDSDtBQUNKO0FBQ0osR0FyZEk7QUFzZEw7QUFDQXlILEVBQUFBLE1BdmRLLG9CQXVkRztBQUNIO0FBQ0R4SixJQUFBQSxFQUFFLENBQUM4QyxRQUFILENBQVkyRyxTQUFaLENBQXNCLFFBQXRCO0FBQ0g7QUExZEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpveXN0aWNrRW51bSBmcm9tIFwiLi9qb3lzdGljay9Kb3lzdGlja0VudW1cIjtcclxuaW1wb3J0IEpveXN0aWNrRXZlbnQgZnJvbSBcIi4vam95c3RpY2svSm95c3RpY2tFdmVudFwiO1xyXG5cclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcmVjdDA6Y2MuUHJlZmFiLFxyXG4gICAgICAgIHJlY3Q0OmNjLlByZWZhYixcclxuICAgICAgICByZWN0NTpjYy5QcmVmYWIsXHJcbiAgICAgICAgcmVjdDc6Y2MuUHJlZmFiLFxyXG5cclxuICAgIC8vIGZyb20gam95c3RpY2tcclxuICAgIG1vdmVEaXI6IHtcclxuICAgICAgICBkZWZhdWx0OiBjYy52MigwLCAxKSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ01vdmUgRGlyJyxcclxuICAgICAgICB0b29sdGlwOiAn56e75Yqo5pa55ZCRJyxcclxuICAgIH0sXHJcbiAgICBfc3BlZWRUeXBlOiB7XHJcbiAgICAgICAgZGVmYXVsdDogSm95c3RpY2tFbnVtLlNwZWVkVHlwZS5TVE9QLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnU3BlZWQgVHlwZScsXHJcbiAgICAgICAgdHlwZTogSm95c3RpY2tFbnVtLlNwZWVkVHlwZSxcclxuICAgICAgICB0b29sdGlwOiAn6YCf5bqm57qn5YirJ1xyXG4gICAgfSxcclxuICAgICAgIC8v5pKt5pS+6aKE5Yi26LWE5rqQXHJcbiAgICAgICBwbGF5ZXI6Y2MuUHJlZmFiLFxyXG4gICAgICAgYmFzZXBvaW50OmNjLlByZWZhYixcclxuICAgICAgIC8v5oyJ6ZKu6IqC54K5XHJcbiAgICAgICBidXR0b246Y2MuTm9kZSxcclxuICAgICAgIHNjb3JlOmNjLkxhYmVsLFxyXG4gICAgICAgb3ZlcjpjYy5Ob2RlLFxyXG4gICAgICAgLy/pgJ/luqbosIPoioLmu5HliqhcclxuICAgICAgIHNsaWRlcnY6Y2MuU2xpZGVyLFxyXG4gICAgICAgLy/pn7PpopFcclxuICAgICAgIGF1ZGlvOmNjLkF1ZGlvQ2xpcCxcclxuICAgICAgIG9uU3ByaXRlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb2ZmU3ByaXRlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAvLyAgICBzdWJOb2Rlc0Fycjp7XHJcbiAgICAvLyAgICAgICAgIGRlZmF1bHQ6W10sXHJcbiAgICAvLyAgICAgICAgIHR5cGU6Y2MuUHJlZmFiLFxyXG4gICAgLy8gICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MubG9nKFwib25sb2FkIHN0YXJ0XCIpO1xyXG5cclxuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub24oSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgSm95c3RpY2tFdmVudC5nZXRJbnN0YW5jZSgpLm9uKEpveXN0aWNrRW51bS5Kb3lzdGlja0V2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBKb3lzdGlja0V2ZW50LmdldEluc3RhbmNlKCkub24oSm95c3RpY2tFbnVtLkpveXN0aWNrRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IDI0O1xyXG4gICAgICAgIHZhciBjb2xsaWRlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBjb2xsaWRlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb2xsaWRlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb2xsaWRlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy/lvIDlkK/niannkIblvJXmk45cclxuICAgICAgICB2YXIgcGh5c2ljcyA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgcGh5c2ljcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBwaHlzaWNzLmdyYXZpdHkueSA9IDEwMDA7XHJcbiAgICAgICAgdmFyIGRiID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHM7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm5vZGVzID0gY2MuZmluZCgnQ2FudmFzL2JveC9ub2RlcycpLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICAvL+a4uOaIj+eKtuaAgSAgMC3mmoLlgZwgMS3ov5DooYwgMi3muLjmiI/nu5PmnZ8gXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAxO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8v6Z+z5pWIXHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW8sIHRydWUpO1xyXG4gICAgICAgIC8v5YiG5pWwXHJcbiAgICAgICAgdGhpcy5zY29yZU51bT0wO1xyXG4gICAgICAgIC8v6L6555WM5YC8XHJcbiAgICAgICAgdGhpcy5sZWZ0WDtcclxuICAgICAgICB0aGlzLnJpZ2h0WDtcclxuICAgICAgICAvL+mAn+W6plxyXG4gICAgICAgIHRoaXMuc3BlZWQ9MC40O1xyXG4gICAgICAgIC8v5pa55ZCRLHVwLTAsZG93bi0xLGxlZnQtMixyaWdodC0zXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgICAgIC8v6LSq5ZCD6JuH5pWw57uELOS6jOS9jeaVsOe7hFxyXG4gICAgICAgIHRoaXMuc25ha2VBcnJYPVtdO1xyXG4gICAgICAgIHRoaXMuc25ha2VBcnJZPVtdO1xyXG4gICAgICAgIHRoaXMuc25ha2VBcnI9W107XHJcbiAgICAgICAgLy/lnLDlm77kuIrpmo/mnLrnlJ/miJDmnpzlrp4oeCx5KeWdkOagh1xyXG4gICAgICAgIC8vdGhpcy5uZXh0R29hbCA9IE1hdGguZmxvb3IoNypNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB0aGlzLm5leHRHb2FsID0gNDtcclxuICAgICAgICB0aGlzLmdvYWxYID0gTWF0aC5mbG9vcigxNSpNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB0aGlzLmdvYWxZID0gTWF0aC5mbG9vcigxMCpNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICAvL+iuvue9rui0quWQg+ibh+WktOmDqFxyXG4gICAgICAgICB0aGlzLnNuYWtlSGVhZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucmVjdDcpLmdldENvbXBvbmVudCgncmVjdCcpO1xyXG4gICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLng9MzM2ICsgdGhpcy5kaXN0YW5jZTtcclxuICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS55PTI0MCArIHRoaXMuZGlzdGFuY2U7XHJcbiAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUuR3JvdXAgPSAnaGVybyc7XHJcblxyXG4gICAgICAgICB2YXIgYm94PWNjLmZpbmQoJ0NhbnZhcy9ib3gnKTtcclxuICAgICAgICAgYm94LmFkZENoaWxkKHRoaXMuc25ha2VIZWFkLm5vZGUpO1xyXG4gICAgICAgICB2YXIgWCA9IHRoaXMuc25ha2VIZWFkLm5vZGUueDtcclxuICAgICAgICAgdmFyIFkgPSB0aGlzLnNuYWtlSGVhZC5ub2RlLnk7XHJcblxyXG4gICAgICAgICB0aGlzLnNuYWtlQXJyWFswXT1YIC0gdGhpcy5kaXN0YW5jZTsgXHJcbiAgICAgICAgIHRoaXMuc25ha2VBcnJZWzBdPVkgLSB0aGlzLmRpc3RhbmNlO1xyXG4gICAgICAgICB0aGlzLnNuYWtlQXJyWzBdID0gdGhpcy5zbmFrZUhlYWQ7XHJcbiAgICAgICAgIC8v5Zyw5Zu+XHJcbiAgICAgICAgIHRoaXMuYm94TWFwPVtdO1xyXG4gICAgICAgICBmb3IobGV0IGk9MDtpPDE1O2krKyl7XHJcbiAgICAgICAgICAgIHRoaXMuYm94TWFwW2ldPVtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPDEwO2orKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJveE1hcFtpXVtqXT0wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAvL+azqOWGjOaMieS4i+ebkeWQrFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgLy90aGlzLm9udG91Y2htb3ZlKCk7XHJcbiAgICAgICB0aGlzLnNldEdhbWUoKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7Ly8g6I635Y+W6IqC54K55Z2Q5qCHXHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RYID0gbG9jYXRpb24ueDtcclxuICAgICAgICAgICAgdGhpcy5maXJzdFkgPSBsb2NhdGlvbi55O1xyXG4gICAgICAgICAgICAvLyDojrflj5bop6bngrnlnKjnqbrpl7ToioLngrnkuIrnmoTlnZDmoIdcclxuICAgICAgICAgICAgLy8gdmFyIHRlbXBQbGF5ZXIgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2NhdGlvbik7XHJcbiAgICAgICAgICAgIC8vIG5vZGUuc2V0UG9zaXRpb24odGVtcFBsYXllcik7XHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGxldCB0b3VjaFBvaW50ID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IGVuZFggPSB0aGlzLmZpcnN0WCAtIHRvdWNoUG9pbnQueDtcclxuICAgICAgICAgICAgbGV0IGVuZFkgPSB0aGlzLmZpcnN0WSAtIHRvdWNoUG9pbnQueTtcclxuICAgICAgICAgICAgLy8gdmFyIHRlbXBQbGF5ZXIgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaFBvaW50KTtcclxuICAgICAgICAgICAgLy8gbm9kZS5zZXRQb3NpdGlvbih0ZW1wUGxheWVyKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhlbmRYKSA+IE1hdGguYWJzKGVuZFkpKXtcclxuICAgICAgICAgICAgICAgIC8v5omL5Yq/5ZCR5bem5Y+zXHJcbiAgICAgICAgICAgICAgICAvL+WIpOaWreWQkeW3pui/mOaYr+WQkeWPsyBcclxuICAgICAgICAgICAgICAgIGlmIChlbmRYICA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5ZCR5bem5Ye95pWwXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24hPTMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lkJHlj7Plh73mlbBcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24hPTIpe1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5omL5Yq/5ZCR5LiK5LiLXHJcbiAgICAgICAgICAgICAgICAvL+WIpOaWreaJi+WKv+WQkeS4iui/mOaYr+WQkeS4i1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuZFkgID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lkJHkuIvlh73mlbBcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ2Rvd24nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WQkeS4iuWHveaVsFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZygndXAnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvblRvdWNoU3RhcnQoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvblRvdWNoTW92ZShldmVudCwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3NwZWVkVHlwZSA9IGRhdGEuc3BlZWRUeXBlO1xyXG4gICAgICAgIHRoaXMubW92ZURpciA9IGRhdGEubW92ZURpc3RhbmNlO1xyXG4gICAgICAgIGNjLmxvZyhcInRoaXMubW92ZURpciA9XCIgKyB0aGlzLm1vdmVEaXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fc3BlZWRUeXBlID0gZGF0YS5zcGVlZFR5cGU7XHJcbiAgICB9LFxyXG4gICAgLy9cclxuICAgIHNldEdhbWUoKXtcclxuICAgICAgICBjYy5sb2coXCJzZXRHYW1lIHN0YXJ0XCIpO1xyXG4gICAgICAgICAvL+S4i+S4quaenOWunuaWueWdl1xyXG4gICAgICAgICB2YXIgZ29hbCA9IHRoaXMubmV4dEdvYWw7XHJcbiAgICAgICAgIHRoaXMuYnVpbGRCb2R5KGdvYWwpO1xyXG4gICAgICAgICBjYy5sb2coXCJzZXRHYW1lIGVuZFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQmVnaW5Db250YWN0XCIpO1xyXG4gICAgfSxcclxuICAgIFxyXG5cclxuICAgIC8v6I635Y+W6aKc6Imy5ZCO5a6e5L6L5YyWNuenjeWbvuWDjyzov5jmnInkuIDkuKrnp43kvZzkuLpoZWFkXHJcbiAgICBidWlsZEJvZHkoZ29hbCl7XHJcbiAgICAgICAgY2MubG9nKFwiZ29hbDpcIitnb2FsKTtcclxuICAgICAgICAgdGhpcy5wcm9kdWNlRm9vdCgpO1xyXG4gICAgICAgICAvL+enu+WKqFxyXG4gICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMubW92ZSx0aGlzLnNwZWVkKTtcclxuICAgICAgICAgY2MubG9nKFwiZ29hbDI6XCIrZ29hbCk7XHJcblxyXG4gICAgfSxcclxuICAgIC8v5qOA5rWL5p6c5a6e55Sf5oiQ5L2N572u5piv5ZCm6YeN5Y+g6LSq5ZCD6JuHXHJcbiAgICBvdmVybGFwRm9vdCgpe1xyXG4gICAgICAgIHRoaXMuZ29hbFggPSBNYXRoLmZsb29yKDE1Kk1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHRoaXMuZ29hbFkgPSBNYXRoLmZsb29yKDEwKk1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIC8v5Yik5pat6LSq5ZCD6JuH5omA5pyJ6YOo5L2N5piv5ZCm6YeN5Y+gXHJcbiAgICAgICAgZm9yKGxldCBqPTA7ajx0aGlzLnNuYWtlQXJyWC5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5ib3hNYXBbdGhpcy5nb2FsWF1bdGhpcy5nb2FsWV09PT0xKXtcclxuICAgICAgICAgICAgICAgIC8v6YeN5paw55Sf5oiQ77yM5bm25LiU6YeN5paw5qOA5rWLXHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXBGb290KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5ub2Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZXNbaV0ueD09dGhpcy5nb2FsWCAqIDQ4ICYmIHRoaXMubm9kZXNbaV0ueT09dGhpcy5nb2FsWSAqIDQ4KXtcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxhcEZvb3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvZHVjZUZvb3QoKTtcclxuICAgIH0sXHJcbiAgICAvL+eUn+aIkOaenOWunlxyXG4gICAgcHJvZHVjZUZvb3QoKXtcclxuICAgICAgICAvL3RoaXMubmV4dEdvYWwgPSBNYXRoLmZsb29yKDcqTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5uZXh0R29hbCA9IDQ7XHJcbiAgICAgICAgLy/pmo/mnLrnlJ/miJDmn5Dnp43popzoibJcclxuICAgICAgICAvLyAgaWYodGhpcy5uZXh0R29hbD09PTApe3RoaXMucHJlZmFiPXRoaXMucmVjdDA7fVxyXG4gICAgICAgIC8vICBpZih0aGlzLm5leHRHb2FsPT09MSl7dGhpcy5wcmVmYWI9dGhpcy5yZWN0MTt9XHJcbiAgICAgICAgLy8gIGlmKHRoaXMubmV4dEdvYWw9PT0yKXt0aGlzLnByZWZhYj10aGlzLnJlY3QyO31cclxuICAgICAgICAvLyAgaWYodGhpcy5uZXh0R29hbD09PTMpe3RoaXMucHJlZmFiPXRoaXMucmVjdDM7fVxyXG4gICAgICAgIC8vICBpZih0aGlzLm5leHRHb2FsPT09NCl7dGhpcy5wcmVmYWI9dGhpcy5yZWN0NDt9XHJcbiAgICAgICAgLy8gIGlmKHRoaXMubmV4dEdvYWw9PT01KXt0aGlzLnByZWZhYj10aGlzLnJlY3Q1O31cclxuICAgICAgICAvLyAgaWYodGhpcy5uZXh0R29hbD09PTYpe3RoaXMucHJlZmFiPXRoaXMucmVjdDY7fVxyXG4gICAgICAgIC8v6LSq5ZCD6JuH6Lqr5L2TXHJcbiAgICAgICAgIHRoaXMuc25ha2VCb2R5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5yZWN0NCkuZ2V0Q29tcG9uZW50KCdyZWN0Jyk7XHJcbiAgICAgICAgIHRoaXMuc25ha2VCb2R5Lm5vZGUuR3JvdXAgPSAndGFyZ2V0JztcclxuICAgICAgICAgdmFyIGJveD1jYy5maW5kKCdDYW52YXMvYm94Jyk7XHJcbiAgICAgICAgIGJveC5hZGRDaGlsZCh0aGlzLnNuYWtlQm9keS5ub2RlKTtcclxuICAgICAgICAgdGhpcy5zbmFrZUJvZHkubm9kZS54PXRoaXMuZ29hbFgqNDg7ICAgICAgIFxyXG4gICAgICAgICB0aGlzLnNuYWtlQm9keS5ub2RlLnk9dGhpcy5nb2FsWSo0ODtcclxuICAgICAgICAgLy/orrDlvZXlnLDlm77ov5nph4zlt7Lnu4/mnInmnpzlrp5cclxuICAgICAgICAgdmFyIGJveE1hcFggPSB0aGlzLnNuYWtlQm9keS5ub2RlLngvNDg7XHJcbiAgICAgICAgIHZhciBib3hNYXBZID0gdGhpcy5zbmFrZUJvZHkubm9kZS55LzQ4O1xyXG4gICAgICAgICB0aGlzLmJveE1hcFtib3hNYXBYXVtib3hNYXBZXT0xO1xyXG4gICAgfSxcclxuICAgIC8v5ZCD5Yiw5p6c5a6eXHJcbiAgICBlYXRGb290KCl7XHJcbiAgICAgICAgdmFyIGhlYWRYID0gdGhpcy5zbmFrZUhlYWQubm9kZS54O1xyXG4gICAgICAgIHZhciBoZWFkWSA9IHRoaXMuc25ha2VIZWFkLm5vZGUueTtcclxuICAgICAgICBjYy5sb2coXCJoZWFkWCA9XCIgKyBoZWFkWCArIFwiICAgaGVhZFkgPVwiICsgaGVhZFkpO1xyXG5cclxuICAgICAgICAgdmFyIFggPSAoaGVhZFggLSB0aGlzLmRpc3RhbmNlKS80ODtcclxuICAgICAgICAgdmFyIFkgPSAoaGVhZFkgLSB0aGlzLmRpc3RhbmNlKS80ODtcclxuICAgICAgICAgdmFyIGJveE1hcFggPSBNYXRoLnJvdW5kKFgpO1xyXG4gICAgICAgICB2YXIgYm94TWFwWSA9IE1hdGgucm91bmQoWSk7XHJcblxyXG4gICAgICAgICBjYy5sb2coXCJib3hNYXBYID1cIiArIGJveE1hcFgpO1xyXG4gICAgICAgICBjYy5sb2coXCJib3hNYXBZID1cIiArIGJveE1hcFkpO1xyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm5L2N572u5piv5ZCm5pyJ5p6c5a6eXHJcbiAgICAgICAgaWYodGhpcy5ib3hNYXBbYm94TWFwWF1bYm94TWFwWV09PT0xKXtcclxuICAgICAgICAgICAgLy9jYy5sb2coXCLkvY3nva7mnInmnpzlrp5cIik7XHJcbiAgICAgICAgICAgIC8v5Yqg5Zyo5bC+6YOoXHJcbiAgICAgICAgICAgIHZhciBsZW4gPSB0aGlzLnNuYWtlQXJyWC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2VBcnJYW2xlbl09dGhpcy5zbmFrZUJvZHkubm9kZS54O1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyWVtsZW5dPXRoaXMuc25ha2VCb2R5Lm5vZGUueTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGxldCBzcHJpdGUgPSB0aGlzLnNuYWtlQm9keS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgICAgICAvLyBzcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoY2MudXJsLnJhdygnYXNzZXRzL2ltZy81LnBuZycpKTtcclxuICAgICAgICAgICAgdGhpcy5zbmFrZUFycltsZW5dPXRoaXMuc25ha2VCb2R5O1xyXG4gICAgICAgICAgICAvL+aenOWunuiiq+WQg+S6hiBcclxuICAgICAgICAgICAgdGhpcy5ib3hNYXBbYm94TWFwWF1bYm94TWFwWV09MDtcclxuICAgICAgICAgICAgLy/liqDliIbmlbBcclxuICAgICAgICAgICAgdGhpcy5hZGRTY29yZSgpO1xyXG4gICAgICAgICAgICAvL+maj+acuueUn+aIkOS4i+S4gOS4quaenOWunlxyXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXBGb290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5Yqg5YiG5pWwXHJcbiAgICBhZGRTY29yZSgpe1xyXG4gICAgICAgIC8v5qC55o2u5LiN5ZCM5p6c5a6e5aKe5Yqg5YiG5pWwXHJcbiAgICAgICAgLy8gaWYodGhpcy5uZXh0R29hbD09PTApe3RoaXMuc2NvcmVOdW0rPTUwO31cclxuICAgICAgICAvLyBpZih0aGlzLm5leHRHb2FsPT09MSl7dGhpcy5zY29yZU51bSs9MTAwO31cclxuICAgICAgICAvLyBpZih0aGlzLm5leHRHb2FsPT09Mil7dGhpcy5zY29yZU51bSs9MjAwO31cclxuICAgICAgICAvLyBpZih0aGlzLm5leHRHb2FsPT09Myl7dGhpcy5zY29yZU51bSs9MzAwO31cclxuICAgICAgICAvLyBpZih0aGlzLm5leHRHb2FsPT09NCl7dGhpcy5zY29yZU51bSs9NDAwO31cclxuICAgICAgICAvLyBpZih0aGlzLm5leHRHb2FsPT09NSl7dGhpcy5zY29yZU51bSs9NTAwO31cclxuICAgICAgICAvLyBpZih0aGlzLm5leHRHb2FsPT09Nil7dGhpcy5zY29yZU51bSs9NjAwO31cclxuICAgICAgICB0aGlzLnNjb3JlTnVtKz0xMDtcclxuICAgICAgICB0aGlzLnNjb3JlLnN0cmluZz10aGlzLnNjb3JlTnVtO1xyXG4gICAgfSxcclxuICAgIC8v56e75Yqo5pa55rOVXHJcbiAgICBtb3ZlICgpe1xyXG4gICAgICAgIC8v5pa55ZCRLHVwLTAsZG93bi0xLGxlZnQtMixyaWdodC0zXHJcblxyXG4gICAgICAgIHZhciBYID0gdGhpcy5zbmFrZUhlYWQubm9kZS54O1xyXG4gICAgICAgIHZhciBZID0gdGhpcy5zbmFrZUhlYWQubm9kZS55O1xyXG4gICAgICAgIHZhciBoZWFkWCA9IE1hdGgucm91bmQoWCAtIHRoaXMuZGlzdGFuY2UpO1xyXG4gICAgICAgIHZhciBoZWFkWSA9IE1hdGgucm91bmQoWSAtIHRoaXMuZGlzdGFuY2UpO1xyXG4gICAgICAgIC8vY2MubG9nKFwiaGVhZFggPVwiICsgaGVhZFggKyBcIiAgaGVhZFkgPVwiICsgaGVhZFkpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmRpcmVjdGlvbj09PTApe1xyXG4gICAgICAgICAgICAvL+enu+WKqOWJje+8jOWIpOaWrea4uOaIj+aYr+WQpue7k+adn1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZU92ZXIoaGVhZFgsaGVhZFkrNDgpO1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZT09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS55Kz00ODsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLnJvdGF0aW9uID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5sb2coXCJ1cFwiKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmRpcmVjdGlvbj09PTEpe1xyXG4gICAgICAgICAgICAvL+enu+WKqOWJje+8jOWIpOaWrea4uOaIj+aYr+WQpue7k+adn1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZU92ZXIoaGVhZFgsaGVhZFktNDgpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5nYW1lU3RhdGU9PT0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUueS09NDg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLnJvdGF0aW9uID0gMTgwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmxvZyhcImRvd25cIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5kaXJlY3Rpb249PT0yKXtcclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVPdmVyKGhlYWRYLTQ4LGhlYWRZKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLngtPTQ4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZUhlYWQubm9kZS5yb3RhdGlvbiA9IDI3MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5sb2coXCJsZWZ0XCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZGlyZWN0aW9uPT09Myl7XHJcbiAgICAgICAgICAgIC8v56e75Yqo5YmN77yM5Yik5pat5ri45oiP5piv5ZCm57uT5p2fXHJcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lT3ZlcihoZWFkWCs0OCxoZWFkWSk7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5nYW1lU3RhdGU9PT0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc25ha2VIZWFkLm5vZGUueCs9NDg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlSGVhZC5ub2RlLnJvdGF0aW9uID0gOTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MubG9nKFwicmlnaHRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZ2FtZVN0YXRlPT09MSl7XHJcbiAgICAgICAgICAgIHRoaXMuZWF0Rm9vdCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/np7vliqjnmoTml7blgJnvvIzouqvkvZPkuZ/lkJHlpLTnp7vliqhcclxuICAgIG1vdmVBbGwoKXtcclxuICAgICAgICB2YXIgWCA9IHRoaXMuc25ha2VIZWFkLm5vZGUueDtcclxuICAgICAgICB2YXIgWSA9IHRoaXMuc25ha2VIZWFkLm5vZGUueTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPXRoaXMuc25ha2VBcnJYLmxlbmd0aC0xO2k+MDtpLS0pe1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyWFtpXT10aGlzLnNuYWtlQXJyWFtpLTFdO1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlQXJyWVtpXT10aGlzLnNuYWtlQXJyWVtpLTFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+abtOaWsOi0quWQg+ibh+WktOmDqOS9jee9rizotKrlkIPom4fpmo/lpLTpg6jnp7vliqhcclxuICAgICAgICB0aGlzLnNuYWtlQXJyWFswXT1YIC0gdGhpcy5kaXN0YW5jZTtcclxuICAgICAgICB0aGlzLnNuYWtlQXJyWVswXT1ZIC0gdGhpcy5kaXN0YW5jZTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBqPTE7ajx0aGlzLnNuYWtlQXJyWC5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgdGhpcy5zbmFrZUFycltqXS5ub2RlLng9dGhpcy5zbmFrZUFyclhbal07XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2VBcnJbal0ubm9kZS55PXRoaXMuc25ha2VBcnJZW2pdO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi56Kw5pKeICA9XCIgKyBvdGhlcik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v6ZSu55uY55uR5ZCsXHJcbiAgICBvbktleURvd24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcImtleSBjb2RlIGlzICBhIGFuZCBsZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24hPTMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0yO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCJrZXkgY29kZSBpcyAgZCBhbmQgcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiE9Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uPTM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XHJcbiAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCJrZXkgY29kZSBpcyAgdyBhbmQgdXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24hPTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwia2V5IGNvZGUgaXMgIHMgYW5kIGRvd25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24hPTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbj0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5Yik5pat5ri45oiP57uT5p2f55qE5p2h5Lu2XHJcbiAgICBpc0dhbWVPdmVyKHgseSl7XHJcbiAgICAgICAgIC8v5Yik5pat5piv5ZCm6LaF5Ye65Zyw5Zu+XHJcblxyXG4gICAgICAgIGlmKHk8MCB8fCB5Pj00ODAgfHwgeDwwIHx8IHg+PTcyMCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5ub2Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZXNbaV0uR3JvdXAgIT0gJ3RhcmdldCcpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ub2Rlc1tpXS54PT14ICYmIHRoaXMubm9kZXNbaV0ueT09eSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5Yik5pat5piv5ZCm56Kw5pKe5Yiw6LSq5ZCD6JuH6Lqr5L2TXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLnNuYWtlQXJyWC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5zbmFrZUFyclhbaV09PXggJiYgdGhpcy5zbmFrZUFycllbaV09PXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5ri45oiP57uT5p2fXHJcbiAgICBnYW1lT3ZlciAoKXtcclxuICAgICAgICAgICAgY2MubG9nKFwi57uT5p2fXCIpO1xyXG4gICAgICAgICAgICAvL+a4uOaIj+eKtuaAgVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIC8v5bCG5aSx6LSl55qE55S76Z2i5pi+56S65Ye65p2lXHJcbiAgICAgICAgICAgIHRoaXMub3Zlci5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgLy/lgZzmraLnp7vliqhcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMubW92ZSk7XHJcbiAgICAgICAgICAgIC8v5YGc5q2i5omA5pyJ6Z+z5LmQXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICAvL+aaguWBnOa4uOaIj1xyXG4gICAgcGF1c2UoKXtcclxuICAgICAgICAvLzLooajnpLrmuLjmiI/nu5PmnZ9cclxuICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZSE9PTIpe1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVTdGF0ZT09PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGU9MDtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5idXR0b24uc3RyaW5nID0gXCJQbGF5XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMuYnV0dG9uLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLm9uU3ByaXRlOyBcclxuICAgICAgICAgICAgICAgIC8v5YGc5q2i56e75YqoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5tb3ZlKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5nYW1lU3RhdGU9PT0wKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlPTE7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuYnV0dG9uLnN0cmluZyA9IFwiUGF1c2VcIjtcclxuICAgICAgICAgICAgICAgIC8v5YGc5q2i56e75YqoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMubW92ZSx0aGlzLnNwZWVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5idXR0b24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMub2ZmU3ByaXRlOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+mHjeaWsOW8gOWni+a4uOaIj1xyXG4gICAgcmVwbGF5KCl7XHJcbiAgICAgICAgIC8v6YeN5paw5Yqg6L295ri45oiP5Zy65pmvXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic25ha2VyXCIpO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG4iXX0=