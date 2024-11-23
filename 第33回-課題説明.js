// キャンバスの設定
let canvas = document.querySelector('canvas'); // →キャンバス(canvas) 作ってくれ
canvas.width = 400, canvas.height = 300; // →大きさの設定 (width は 幅 / height は 高さ)
let context = canvas.getContext('2d'); // →2D(平面)で書いて

//背景(水色)
context.fillStyle = 'skyblue'; // →色を水色にして
context.fillRect(0, 0, 300, 200); // →四角形の大きさ指定
context.fill(); // →を塗りつぶして (7行目の色が参照される)

// 地面(茶色)
context.fillStyle = 'brown'; // →色を茶色にして
context.fillRect(0, 150, 300, 50); // →四角形の大きさ指定
context.fill(); // →塗りつぶして (12行目の色が参照される)

// 家の壁(白色) 背景/地面 とほぼ同じため省略
context.fillStyle = 'white';
context.fillRect(50, 100, 100, 50);
context.fill();

// 家の屋根 (赤色)
context.fillStyle = 'red'; // →色を赤にして 
context.beginPath(); // →輪郭線書いて
context.moveTo(100, 50); //  → x が100, y が50 のところに点を打って
context.lineTo(50, 100); //  → 24行目の位置から x が 50 , yが 100 のところに線を引いて
context.lineTo(150, 100); // → 25行目の位置から x　が150, yが 100 のところに線を引いて
context.closePath(); // → おわり
context.fill(); // → 塗りつぶして (22行目の色が参照される)

// 月？(黄色) 
context.fillStyle = 'yellow'; // → わかる？？ 
context.beginPath(); // → 輪郭線書いて
context.arc(250, 50, 20, 0, Math.PI*2); // 円を書いて (250,50 →中心点の x/y座標, 20 →半径, 0 →スタート地点, Math.PI*2 →ゴール地点 ※プリント『度数法と弧度法(ラジアン)』参照)
context.closePath(); // →おわり
context.fill(); // →わかる？？

// 校章
context.fillStyle = '#5a0e5f'; // → 色を #5a0e5f に (『16進数カラーコード』を使用)
context.beginPath(); // → わかる？？
context.moveTo(242.5, 150); // → x が242.5, y が150 のところに点を打って
context.lineTo(230, 150 - 12.5*Math.sqrt(3)); // → 40行目の位置から x が 230 , y が 150 - 12.5√3 のところに線を引いて
context.lineTo(255, 150 - 12.5*Math.sqrt(3)); // → 41行目の位置から x が 255 , y が 150 - 12.5√3 のところに線を引いて
context.closePath(); // → わかる？
context.fill(); // → わかる？？

// 47-52行目 ＆ 54-59行目 の意味はすべて理解できる？？
context.beginPath(); 
context.moveTo(267.5, 150); 
context.lineTo(255, 150 - 12.5*Math.sqrt(3));
context.lineTo(280, 150 - 12.5*Math.sqrt(3));
context.closePath();
context.fill();

context.beginPath();
context.moveTo(255, 150 - 12.5*Math.sqrt(3));
context.lineTo(242.5, 150 - (12.5*Math.sqrt(3))*2);
context.lineTo(267.5, 150 - (12.5*Math.sqrt(3))*2);
context.closePath();
context.fill();