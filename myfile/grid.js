window.onload = function(){
  // 基本型
  // document.getElementById("cards").innerHTML = "New text!";
  // 定義 htnl 的內容
  var str="";
  for(var i=0;i<3;i+=1){
    str+=
      '<div class="col-4">'+
        '<div class="card">'+
          '<div id="sketch'+i+'"></div>'+ // sketch 將會塞入這裡 
          '<div class="card-body">'+
            '<p>'+i+'</p>'+
          '</div>'+
        '</div>'+
      '</div>';
  }  
  // 將資料放入 id 為 cards 的 tag 裡面
  document.getElementById("cards").innerHTML = str;
  
  //sketch
  var brushSketch = function(p5j){
    // inital of p5j(processing) structure
    // add all function with p5j header
      let x = 1;
      let y = 1;
      let easing = 0.1;
    p5j.setup = function(){
      p5j.createCanvas(350, 300);


    }
    // update of sketch
    p5j.draw = function(){
      p5j.background(50);

      let targetX = p5j.mouseX;
      let dx = targetX-x;
      x += dx*easing;

        
      let targetY = p5j.mouseY;
      let dy = targetY-y;
      y += dy*easing;

      p5j.stroke(255);
      p5j.strokeWeight(1);
      p5j.fill(255, p5j.frameCount%40);
  
      p5j.ellipse(x+15, y, 30, 20);
      p5j.ellipse(x-15, y, 30, 20);
      p5j.ellipse(x, y+15, 20, 30);
      p5j.ellipse(x, y-15, 20, 30);

    }
  }

  new p5(brushSketch, 'sketch0');
  new p5(brushSketch, 'sketch1');
  new p5(brushSketch, 'sketch2');

}