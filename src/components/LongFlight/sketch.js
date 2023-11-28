import React from 'react';
import p5 from 'p5';

const sketch = (p) => {

    /** 背景の山々を描画する*/
    class Background {
        /** 
         * コンストラクタ
         * @param {number} division 画面幅の分割数
         * @param {number} speed 背景の移動速度
         * @param {Array} color_set 色
         * @param {number} height 山々の高さ
         */
        constructor(division, speed, height, color_set){
        /** @param {number} displacement 変位 */
        this.displacement = 0
        /** @param {number} speed 背景の移動速度 */
        this.speed = speed
        /** @param {number} division 画面幅の分割数 */
        this.division = division
        /** @param {Array} color_set 色 */
        this.color_set = color_set
        /** @param {number} height 山々の高さ */
        this.height = height
        /** @param {number} bg 山の高さの配列 */
        this.bg = []
        for(var i=0; i<100; i++){
            this.bg.push(p.noise(i*p.random(0, 0.3))*50)    
        }
        }
        
        /** drawで行う処理*/
        draw(){
        this.drawBackground()
        this.update()
        }
        
        /** メンバ変数を更新する*/
        update(){
        this.displacement -= this.speed
        
        if(this.displacement <= -1000/this.division){
            var x = this.bg[0]
            this.bg.shift()
            this.bg.push(x)
            this.displacement=0
        }
        }
        
        /** 山々を描画する*/
        drawBackground(){
        p.noStroke()
        if(info.level == 1){
            p.fill(this.color_set[0])
        }else if(info.level == 2){
            p.fill(p.lerpColor(this.color_set[0], this.color_set[1], (p.millis() - info.levelup_time) / 1000))
        }else {
            p.fill(p.lerpColor(this.color_set[1], this.color_set[2], (p.millis() - info.levelup_time) / 1000))
        }
        p.beginShape()
            p.vertex(1000, 500)
            p.vertex(0, 500)
            for(var i=0; i<this.division+5; i++){
                p.vertex(i*(1000/this.division)+this.displacement, this.bg[i]+this.height) 
            }
        p.endShape(p.CLOSE)
        }
    }

    /** タイトル表示を行う */
    class Title {
        /** コンストラクタ */
        constructor(){
            /** @param {number} opacity 透明度 */
            this.opacity = 0
            /** @param {boolean} in_transition 遷移中かどうか */
            this.in_transition = false
            // /** @param {Image} image タイトル画面の背景 */
            // this.image = loadImage('title.jpg')
        }

        /** draw()で行う処理 */
        draw(){
            this.update()
            // this.transition()
            if(this.in_transition){
                this.drawTitle2()
            }else {
                this.drawTitle1()
            }
        }

        /** タイトル画面を描画する */
        drawTitle1(){
            p.background(33, 73, 104);
            // image(this.image, 0, 0)
            p.noStroke()
            p.fill(255)
            p.textAlign(p.CENTER);
            p.textSize(50);
            p.text('LONG FLIGHT', 500, 230);
            p.fill(255, this.opacity)
            p.textSize(30)
            p.text("Click to start.", 500, 270)
            this.drawHowTo(375, 330)
        }

        /** クリック後の画面を描画する */
        drawTitle2(){
            p.background(0, this.opacity);
            p.noStroke()
            p.fill(20, 255, 255, this.opacity)
            p.textAlign(p.CENTER);
            p.textSize(50);
            p.text('LONG FLIGHT', 500, 230);
            p.textSize(30)
            p.text("start", 551, 270)
        }

        /** 操作方法を描画する */
        drawHowTo(x, y){
            p.noFill()
            p.stroke(255)
            p.strokeWeight(3)
            p.rectMode(p.CORNER)
            p.rect(x-20, y-10, 300, 100)

            this.drawCursor(x + 230, y + 30)

            p.noStroke()
            p.fill(255)
            p.textSize(20)
            p.textAlign(p.LEFT)
            p.text('・move with the mouse', x, y+30)
            p.text('・click to attack', x, y+60)
        }

        /** カーソルを描画する */
        drawCursor(x, y){
            p.noStroke()
            p.fill(255)
            p.beginShape()
                p.vertex(x, y)
                p.vertex(x, y+30)
                p.vertex(x+10, y+25)
                p.vertex(x+15, y+35)
                p.vertex(x+20, y+32)
                p.vertex(x+15, y+23)
                p.vertex(x+25, y+18)
            p.endShape(p.CLOSE)
        }

        /** メンバ変数を更新する */
        update(){
            if(!this.in_transition){
                if(this.opacity < 255){
                    this.opacity+=3
                }
                if(this.opacity >= 255){
                    this.opacity = 450
                }
            }else {
                this.opacity -= 3
            }
        }

        /** game_stateの更新を行う */
        transition(){
            if(this.in_transition){
                // gameClass.draw();
                // player.location.x = 500
                // player.location.y = 250
                if(this.opacity == 0){
                    game_state = 1
                }
            }
        }

        /** ゲームスタート */
        click(){
            if(!this.in_transition && this.opacity >= 255){
                // gameClass = new Game()
                this.in_transition = true
            }
        }
    }

    //グローバル変数の宣言
    var bg_1, bg_2, bg_3
    var game_state, enemy_list, info
    var titleClass, gameClass, scoreClass
  
    p.setup = () => {
      p.createCanvas(1000, 500);
      p.textFont('Bahnschrift');
      game_state=0;
      titleClass = new Title()
      bg_1 = new Background(50, 0.3, 300, [p.color(97, 147, 165), p.color(69, 104, 120), p.color(12, 45, 79)])
      bg_2 = new Background(40, 0.5, 330, [p.color(86, 130, 146), p.color(39, 76, 97), p.color(4, 29, 56)])
      bg_3 = new Background(30, 1, 350, [p.color(66, 106, 124), p.color(1, 38, 63), p.color(0, 10, 27)])
    };
  
    p.draw = () => {
      p.background(0);
      p.fill(255);
      switch(game_state) {
          case 0:
              titleClass.draw()
              break;
          case 1:
            p.text('test', 500, 250)
              // gameClass.draw();
              break;
          case 2:
              // scoreClass.draw()
              break;
      }
    }

    p.mouseClicked = () => {
        switch(game_state){
            case 0:
                titleClass.click()
                break
            case 1:
                // gameClass.click()
                break
            case 2:
                // scoreClass.click()
                break
        }
    }
  }  
  export default sketch;