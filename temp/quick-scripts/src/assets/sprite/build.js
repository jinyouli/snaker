"use strict";
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