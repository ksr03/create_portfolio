import React from 'react';
import p5 from 'p5';

const sketch = (p) => {

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
    var game_state
    var titleClass, gameClass, scoreClass
  
    p.setup = () => {
      p.createCanvas(1000, 500);
      p.textFont('Bahnschrift');
      game_state=0;
      titleClass = new Title()
      // bg_1 = new p.background(50, 0.3, 300, [color(97, 147, 165), color(69, 104, 120), color(12, 45, 79)])
      // bg_2 = new p.background(40, 0.5, 330, [color(86, 130, 146), color(39, 76, 97), color(4, 29, 56)])
      // bg_3 = new p.background(30, 1, 350, [color(66, 106, 124), color(1, 38, 63), color(0, 10, 27)])
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